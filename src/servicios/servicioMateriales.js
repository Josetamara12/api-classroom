const { google } = require('googleapis');
const { oauth2Client } = require('./servicioAutenticacion');

// crear material 
const crearMaterial = async (courseId, courseWorkMaterial) => {
    const classroom = google.classroom({ version: 'v1', auth: oauth2Client });
    try {
        const material = await classroom.courses.courseWorkMaterials.create({
            courseId,
            requestBody: courseWorkMaterial,
        });
        return material.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// listar material
const listarMaterial = async (courseId) => {
    const classroom = google.classroom({ version: 'v1', auth: oauth2Client });
    try {
        // solicitud para obtener los materiales
        const res = await classroom.courses.courseWorkMaterials.list({
            courseId,
        });
        return res.data.courseWorkMaterials; // devuelve los materiales listados
    } catch (error) {
        console.log('Error al listar los materiales', error.message);
        throw new Error(error.message);
    }
};

// Eliminar material
const eliminarMaterial = async (courseId, tareaId) => {
    const classroom = google.classroom({ version: 'v1', auth: oauth2Client });
    
    try {
        await classroom.courses.courseWorkMaterials.delete({
            courseId,
            id: materialId,
        });
        console.log(`Material ${materialId} eliminado correctamente del curso ${courseId}`);
    } catch (error) {
        console.log(`Error al eliminar el material ${materialId} en el curso ${courseId}: ${error.message}`);
        throw new Error(`Error al eliminar el material: ${error.message}`);
    }
};

module.exports = {
    crearMaterial,
    listarMaterial,
    eliminarMaterial

};