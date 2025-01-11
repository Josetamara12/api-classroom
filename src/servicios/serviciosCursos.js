const { google } = require('googleapis');
const { oauth2Client } = require('./servicioAutenticacion'); 

// Crear Curso
const crearCurso = async (detallesCurso) => {
    const classroom = google.classroom({ version: 'v1', auth: oauth2Client });
    try {
        const curso = await classroom.courses.create({
            requestBody: detallesCurso,
        });
        return curso.data;
    } catch (error) {
        throw new Error(error.message);
        
    }
}

// listar Cursos 
const listarCursos = async () => {
    const classroom = google.classroom({ version: 'v1', auth: oauth2Client });
    try {
        // Hago la solicitud para obtener los cursos
        const res = await classroom.courses.list();
        return res.data.courses || [];
    } catch (error) {
        console.log('Error al listar los cursos', error.res.data);
        throw new Error(error.message);
    }
}

module.exports ={
    crearCurso,
    listarCursos
}