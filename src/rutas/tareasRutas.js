// importacion de dependencias 
const express = require('express');
const router = express.Router();
const {
    crearTareasControlador

}= require('../controladores/controladorTareas');

// crear tarea
router.post('/cursos/:courseId/tareas', crearTareasControlador);


module.exports = router; 