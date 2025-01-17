// Importación de dependencias
const express = require('express');
const session = require('express-session'); // Manejo de sesiones
const cors = require('cors');
require('dotenv').config(); // Cargar variables de entorno
const autenticacionRutas = require('./rutas/autenticacionRutas'); // Rutas de la utenticación
const cursosRutas = require('./rutas/cursosRutas'); // rutas de los cursos
const tareasRutas = require('./rutas/tareasRutas'); // rutas de las tareas 
const estudiantesRutas = require('./rutas/estudiantesRutas'); // rutas para los estudiantes
const materialesRutas = require('./rutas/materialesRutas'); // rutas para los materiales

const app = express();

// Middlewares
app.use(cors()); // Permitir solicitudes desde el frontend
app.use(express.json());

// Configuración de sesiones
app.use(
  session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Cambiar a true en producción con HTTPS
  })
);

// Ruta para redirigir a la autenticación de Google
app.use('/', autenticacionRutas);

// Rutas para los cursos
app.use('/api', cursosRutas);

// Rutas para las tareas
app.use('/api', tareasRutas);

// Rutas para los estudiantes
app.use('api', estudiantesRutas); 

// Rutas para los materiales
app.use('api', materialesRutas);


module.exports = app;
