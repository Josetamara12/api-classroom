const { crearCurso, listarCursos, actualizarCursos, eliminarCursos } = require('../servicios/serviciosCursos')

// 1. Crear un curso
const crearCursosControlador = async (req, res) => {
    try {
        const curso = await crearCurso(req.body);
        res.status(201).json(curso);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

// 2. Listar Cursos 
const listarCursosControlador = async (req,res) => {
    try {
        const cursos = await listarCursos();
        res.status(201).json(cursos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }    
};

module.exports = {
    crearCursosControlador,
    listarCursosControlador

}
