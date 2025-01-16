const { google } = require('googleapis'); 
const { oauth2Client } = require('./servicioAutenticacion');

// crear un estudiante
const agregarEstudiante = async (courseId, estudiante) => {
    const classroom = google.classroom({ version: 'v1', auth: oauth2Client }); 
    try {
        const estudianteCreado = await classroom.courses.students.create({
            courseId,
            requestBody: estudiante
        });
        return estudianteCreado.data;
    } catch (error) {
        throw new error(`Error al agregar estudiante: ${error.message}`);
    }
}; 

// listar estudiantes
const listarEstudiantes = async (courseId) => {
    const classroom = google.classroom({ version: 'v1', auth: oauth2Client }); 
    try {
        const res = await classroom.courses.students.list({ courseId });
        return res.data.students || [];
    } catch (error) {
        console.log(`Error al listar estudiantes: ${error.message}`); 
        throw new Error(`Error al listar estudiantes: ${error.message}`); 
    }
}; 

// eliminar estudiante 
const eliminarEstudiante = async (userId) => {
    const classroom = google.classroom({ version: 'v1', auth: oauth2Client });
    try {
       const res =  await classroom.courses.students.delete({ userId: userId });
       console.log(res);
        return res.data;
    } catch (error) {
        throw new Error(error.message);
    }
};


module.exports = {
    agregarEstudiante, 
    listarEstudiantes,
    eliminarEstudiante
    
};