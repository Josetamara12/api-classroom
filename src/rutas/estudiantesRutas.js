const express = require('express'); 
const router = express.Router(); 
const {
    agregarEstudianteControlador,
    listarEstudiantesControlador

 } = require('../controladores/controladorEstudiantes');

// ruta para agregar un estudiante
router.post('/cursos/agregar', agregarEstudianteControlador); 

// ruta para listar estudiantes
router.get('/cursos/listar/:courseId', listarEstudiantesControlador);

// ruta para eliminar estudiantes


module.exports = router; 

