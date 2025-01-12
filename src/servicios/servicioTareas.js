const { google } = require('googleapis');
const { oauth2Client } = require('./servicioAutenticacion');

// crear tarea 
const crearTarea = async (courseId, detallesTarea) => {
    const classroom = google.classroom({ version: 'v1', auth: oauth2Client });
    try {
        const tarea = await classroom.courses.courseWork.create({
            courseId, // id del curso en el que se creara la tarea
            requestBody: detallesTarea,
        });
        return tarea.data; // devuelve los detalles de la tarea creada
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    
    crearTarea

};