const servicioCurso= require('../servicios/serviciosCursos')

// 1. Crear un curso
const crearCursosControlador = async (req, res) => {
    try {
        const curso = await servicioCurso.crearCurso(req.body);
        res.status(201).json(curso);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

// 2. Listar Cursos 
const listarCursosControlador = async (req,res) => {
    try {
        const cursos = await servicioCurso.listarCursos();
        res.status(201).json(cursos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }    
};

// 3. Actualizar Cursos
const actualizarCursosControlador = async (req, res) => {
    try {
        const actualizarCursos = await servicioCurso.actualizarCursos(req.params.id, req.body); 
        res.status(200).json(actualizarCursos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}; 

// 4. Eliminar Cursos
const eliminarCursoControlador = async (req, res) => {
    try {
        await eliminarCurso(req.params.id);
        res.status(204).json({ message: `El curso con el ID ${req.params.id} fue eliminado exitosamente` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    crearCursosControlador,
    listarCursosControlador,
    actualizarCursosControlador,
    eliminarCursoControlador

}
