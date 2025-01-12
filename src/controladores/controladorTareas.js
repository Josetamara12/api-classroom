// importe de dependencias 
const servicioTareas= require('../servicios/servicioTareas')

// 1. Crear una tarea
const crearTareasControlador = async (req, res) => {
    const { courseId } = req.params;
    const detallesTarea = req.body;

    try {
        const nuevaTarea = await servicioTareas(courseId, detallesTarea);
        res.status(201).json(nuevaTarea);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



module.exports = {
    crearTareasControlador

}; 