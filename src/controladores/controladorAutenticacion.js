const serviciosAuth = require('../servicios/servicioAutenticacion');

const autenticarUsuario = async (req, res) => {
  try {
    // Generar URL de autenticación
    const tokenAuth = await serviciosAuth.generarAuthUrl(req);
    res.status(200).json({ status: 'success', token: tokenAuth });
  } catch (error) {
    console.error('Error al autenticar usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const authcallback = async (req, res) => {
  try {
    const code = req.query.code; // Código recibido en el callback
    if (!code) {
      return res.status(400).json({ error: 'Código de autorización no proporcionado' });
    }

    const tokens = await serviciosAuth.authcallback(code);

    // guardo tokens en la sesion
    req.session.tokens = tokens;

    // Redirigir a una página de éxito 
    res.status(200).json({ status: 'success', tokens });
  } catch (error) {
    console.error('Error en el callback de autenticación:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  autenticarUsuario,
  authcallback,
};
