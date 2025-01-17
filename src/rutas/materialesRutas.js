// importacion de dependencias
const express = require('express');
const router = express.Router();
const {
    crearMaterialControlador, 
    listarMaterialControlador,
    eliminarMaterialControlador

} = require('../controladores/controladorMateriales');

// crear material
router.post('/cursos/:courseId/materiales', crearMaterialControlador);

// listar material 
router.get('/cursos/:courseId/materiales', listarMaterialControlador);

// eliminar material
router.delete('/cursos/:courseId/materiales/:materialId', eliminarMaterialControlador);


module.exports = router;

