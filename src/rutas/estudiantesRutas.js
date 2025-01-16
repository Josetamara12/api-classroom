const express = require('express'); 
const router = express.Router(); 
const {
    agregarEstudianteControlador,
    listarEstudiantesControlador,
    eliminarEstudianteControlador


 } = require('../controladores/controladorEstudiantes');

// ruta para agregar un estudiante
router.post('/cursos/agregar', agregarEstudianteControlador); 

// ruta para listar estudiantes
router.get('/cursos/listar/:courseId', listarEstudiantesControlador);

// ruta para eliminar estudiantes
router.delete('/cursos/eliminar/:courseId/:userId', eliminarEstudianteControlador); 


module.exports = router; 

