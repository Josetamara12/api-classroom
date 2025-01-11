// importacion de dependencias 
const express = require('express');
const router = express.Router();
const {
    crearCursosControlador,
    listarCursosControlador,
    actualizarCursosControlador
}= require('../controladores/controladorCursos');


// crear curso
router.post('/cursos', crearCursosControlador);

// listar cursos
router.get('/cursos', listarCursosControlador);

// actualizar cursos
router.put('/cursos/:id', actualizarCursosControlador);

module.exports = router; 