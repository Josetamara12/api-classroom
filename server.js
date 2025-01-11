// backend/server.js

const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const dotenv = require('dotenv');


const app = express();
app.use(cors()); // Para permitir solicitudes desde el frontend
app.use(express.json());

const oauth2Client = new google.auth.OAuth2(
    '74235807309-7f2g0tl9p2itqqrqsvr1edmk9n4g6v1m.apps.googleusercontent.com', 
    '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', 
    'http://localhost:3000/auth/callback' 
  );
  

const classroom = google.classroom({ version: 'v1', auth: oauth2Client });

// Endpoint para autenticación con Google
app.get('/auth/google', (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 
    [
        'https://www.googleapis.com/auth/classroom.courses',
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/classroom.rosters',
        'https://www.googleapis.com/auth/classroom.rosters.readonly',
        'https://www.googleapis.com/auth/classroom.profile.emails',
        
    ],
  });
  console.log(url); 
  res.redirect(url);
});

// Callback de Google OAuth
app.get('/auth/callback', async (req, res) => {
  const { tokens } = await oauth2Client.getToken(req.query.code);
  oauth2Client.setCredentials(tokens);

  // Guardar tokens en la sesión 
  req.session.tokens = tokens;
  res.redirect('/dashboard');
});

// Endpoint para obtener las clases
app.get('/courses', async (req, res) => {
  if (!req.session.tokens) return res.status(403).send('No autorizado');
  oauth2Client.setCredentials(req.session.tokens);

  try {
    const response = await classroom.courses.list();
    res.json(response.data.courses);
  } catch (error) {
    res.status(500).send('Error al obtener las clases');
  }
});

// Endpoint para crear una clase
app.post('/courses', async (req, res) => {
  if (!req.session.tokens) return res.status(403).send('No autorizado');
  oauth2Client.setCredentials(req.session.tokens);

  const { name, section, description } = req.body;

  try {
    const course = await classroom.courses.create({
      requestBody: { name, section, description, courseState: 'ACTIVE' },
    });
    res.json(course.data);
  } catch (error) {
    res.status(500).send('Error al crear la clase');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor backend corriendo en el puerto ${PORT}`));
