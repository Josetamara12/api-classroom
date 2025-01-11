// generacion de URL de autenticacion 
const { google } = require('googleapis');
const app = require('../app');


// Crear instancia de OAuth2
const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
);

// Generar URL de autenticación
const generarAuthUrl = async () => { 
    const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: [
            'https://www.googleapis.com/auth/classroom.courses',
            'https://www.googleapis.com/auth/classroom.courses.readonly',
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/classroom.rosters',
            'https://www.googleapis.com/auth/classroom.rosters.readonly',
            'https://www.googleapis.com/auth/classroom.profile.emails',
        ],
    });
    return { url };
};

// Callback de Google OAuth
const authcallback = async (code) => {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    

    // Opcional: Puedes guardar los tokens en una base de datos o sesión aquí
    return tokens;
};

module.exports = {
    generarAuthUrl,
    authcallback,
};
