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

// 2. Listar materiales
const listarMaterialControlador = async (req, res) => {
    const { courseId } = req.params;
    
    try {
        const materiales = await servicioMateriales.listarMaterial(courseId);
        res.status(200).json(materiales);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 3. Eliminar materiales
const eliminarMaterialControlador = async (req, res) => {
    const { courseId, tareaId } = req.params;
    try {
        await servicioMateriales.eliminarMaterial(courseId, tareaId);
        res.status(204).json({ message: `El material con ID ${tareasId} ha sido eliminado correctamente del curso ${courseId}.`});
    } catch (error) {
        res.status(500).json({ error: `Error al eliminar el material: ${error.message}`});
    }
};
       
module.exports = {
    crearMaterialControlador,
    listarMaterialControlador, 
    eliminarMaterialControlador
};