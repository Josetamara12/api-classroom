// importe de dependencias 
const servicioEstudiantes = require('../servicios/servicioEstudiantes');

// 1. agregar estudiantes
const agregarEstudianteControlador = async (req, res) => {
    try {
        const { courseId, estudiante } = req.body;
        const estudianteNuevo = await servicioEstudiantes. agregarEstudiante(courseId, estudiante); 
        res.status(201).json(estudianteNuevo); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message }); 
    }
}; 

// 2. Listar estudiantes
const listarEstudiantesControlador = async (req, res) => {
    try {
        const { courseId } = req.params; 
        const estudiantes = await servicioEstudiantes.listarEstudiantesControlador(courseId); 
        res.status(200).json(estudiantes);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: error.message });
    }
}; 

// Eliminar estudiantes
const eliminarEstudianteControlador = async (req, res) => {
    try {
        const { courseId, userId} = req.params; 
        await servicioEstudiantes.eliminarEstudianteControlador(courseId, userId); 
        res.status(204).json({ error: error.message });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: error.message });
    }
}; 

module.exports = { 
    agregarEstudianteControlador, 
    listarEstudiantesControlador, 
    eliminarEstudianteControlador
}; 
