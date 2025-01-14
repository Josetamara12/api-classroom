const { google } = require('googleapis');
const { oauth2Client } = require('./servicioAutenticacion');
const { classroom } = require('googleapis/build/src/apis/classroom');

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

// listar tareas
const listarTareas = async () => {
    const classroom = google.classroom({ version: 'v1', auth: oauth2Client });
    try {
        // solicitud para obtener las tareas
        const res = await classroom.courses.courseWork.list({});    
        return res.data.courseWork || [];
    } catch (error) {
     console.log('Error al listar las tareas', error.res.data);
     throw new Error(error.message);     
    }
};

// Actualizar detalles de las tareas
const actualizarTareas = async (courseId, tareaId, workDetails ) => {
    const classroom = google.classroom({ version: 'v1', auth: oauth2Client }); 
    try {
        // solicitud para actualizar las tareas
        const tareaActualizada = await classroom.courses.courseWork.patch({
            courseId,
            id: tareaId, // id de la tarea que se actualizará 
            requestBody: workDetails,
        });
        return tareaActualizada.data; // devuelve la tarea actualizada
    } catch (error) {
        console.error(`Error al actualizar la tarea ${tareaId} en el curso ${courseId}:`, error.message);
        throw new Error(error.message); 
    }
};

// Eliminar tarea
const eliminarTarea = async (courseId, tareaId) => {
    const classroom = google.classroom({ version: 'v1', auth: oauth2Client });
    try {
        await classroom.courses.courseWork.delete({
            courseId, // ID del curso
            id: tareaId, // ID de la tarea a eliminar
        });
        console.log(`Tarea ${tareaId} eliminada correctamente del curso ${courseId}`);
    } catch (error) {
        console.error(`Error al eliminar la tarea ${tareaId} en el curso ${courseId}:`, error.message);
        throw new Error(error.message);
    }
};

module.exports = {
    
    crearTarea,
    listarTareas,
    actualizarTareas,
    eliminarTarea

};