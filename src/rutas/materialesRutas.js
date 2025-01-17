// importacion de dependencias
const express = require('express');
const router = express.Router();
const {
    crearMaterialControlador

} = require('../controladores/controladorMateriales');

// crear material
router.post('/cursos/:courseId/materiales', crearMaterialControlador);


module.exports = router;

