// importacion de dependencias 
const express = require('express');
const router = express.Router();
const {
    crearCursosControlador,
    listarCursosControlador,
    actualizarCursosControlador,
    eliminarCursoControlador
}= require('../controladores/controladorCursos');


// crear curso
router.post('/cursos', crearCursosControlador);

// listar cursos
router.get('/cursos', listarCursosControlador);

// actualizar cursos
router.put('/cursos/:id', actualizarCursosControlador);

// eliminar Cursos
router.delete('/cursos/:id', eliminarCursoControlador);

module.exports = router; 