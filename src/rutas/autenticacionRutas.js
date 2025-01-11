// importacion de dependencias
const express = require("express");
const router = express.Router();
const controladorAutenticacion = require('../controladores/controladorAutenticacion');
const app = require("../app");


// Endpoint para redirigir al usuario a Google para autenticación
router.get("/auth/google", controladorAutenticacion.autenticarUsuario); 

// Endpoint de callback para manejar la respuesta de Google
router.get("/auth/callback", controladorAutenticacion.authcallback); 
  
module.exports = router;


