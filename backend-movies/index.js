const express = require('express'); //express
const app = express(); // App
const PORT = 3000; // Puerto donde escuchará el servidor

app.get('/', (req, res) => {
    res.send('¡Hola desde Express! 😄');
  });
  
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
