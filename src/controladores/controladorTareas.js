// importe de dependencias 
const servicioTareas = require('../servicios/servicioTareas');


// 1. Crear tareas
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

// 2. Listar Tareas
const listarTareasControlador  = async (req, res) => {
    const { courseId } = req.params; 
    try {
        const tareas = await servicioTareas(courseId); 
        res.status(200).json(tareas); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 3. Actualizar Tareas
 const actualizarTareasControlador = async (req, res) => {
    const { courseId, tareaId } = req.params; // extraigo ambos parametros
    const workDetails = req.body; 
    try {
        const actualizarTareas = await servicioTareas.actualizarTareas(courseId, tareaId, workDetails);
        res.status(200).json(actualizarTareas);
    } catch (error) {
        res.status(500).json({ error: `Error al actualizar la tarea: ${error.message}` });
    }
 };

 // 4. Eliminar Tareas
const eliminarTareasControlador = async (req, res) => {
    const { courseId, tareaId } = req.params;
    
    try {
        await servicioTareas.eliminarTarea(courseId, tareaId);
        res.status(204).json({ message: `la tarea con el ID ${req.params.id} fue eliminada exitosamente` }); 
    } catch (error) {
        res.status(500).json({ error: error.message });     
    }
};

module.exports = {
    crearTareasControlador,
    listarTareasControlador,
    actualizarTareasControlador,
    eliminarTareasControlador

}; 