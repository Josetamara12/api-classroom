// importacion de dependencias 
const express = require('express');
const router = express.Router();
const {
    crearTareasControlador,
    listarTareasControlador,
    actualizarTareasControlador,
    eliminarTareasControlador

}= require('../controladores/controladorTareas');

// crear tarea
router.post('/cursos/:courseId/tareas', crearTareasControlador);

// listar tareas 
router.get('/cursos/:courseId/tareas', listarTareasControlador);

// actualizar tareas
router.put('/cursos/:courseId/tareas/:tareaId', actualizarTareasControlador);

// eliminar tareas
router.delete('/cursos/:courseId/tareas/:tareaId', eliminarTareasControlador);


module.exports = router; 