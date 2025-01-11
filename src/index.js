// constante que requiere directorio donde esta la app
const app = require('./app'); 
const session = require('express-session');

   
const PORT = process.env.PORT || 5000;

// escuchar en el puerto 5000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
           