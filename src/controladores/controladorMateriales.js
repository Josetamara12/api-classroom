// importacion depencias
const servicioMateriales = require('../servicios/servicioMateriales');

// 1. Crear materiales 
const crearMaterialControlador = async (req, res) => {
    const { courseId } = req.params;
    const { courseWorkMaterials } = req.body;

    try {
        const nuevoMaterial = await servicioMateriales(courseId, courseWorkMaterials);
        res.status(201).json(nuevoMaterial);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
       
module.exports = {
    crearMaterialControlador
};