// importacion de dependencias 
const express = require('express');
const router = express.Router();
const {
    crearCursosControlador,
    listarCursosControlador
}= require('../controladores/controladorCursos');


// crear curso
router.post('/cursos', crearCursosControlador);

// listar cursos
router.get('/cursos', listarCursosControlador);

module.exports = router; 