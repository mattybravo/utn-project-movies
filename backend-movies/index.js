//Imports
const express = require('express'); //express
const cors = require(`cors`)
//Routes
const moviesRouter = require(`./src/routes/movies`);
const usersRouter = require(`./src/routes/users`);
const reviewsRouter = require(`./src/routes/reviews`);

const app = express(); // App
app.use(cors());
app.use(express.json());// Middleware habilita el parseo del json en el body

const PORT = process.env.PORT || 3000; // Puerto donde escuchará el servidor

//usar Rutas
app.use(`/movies`, moviesRouter);
app.use(`/users`, usersRouter);
app.use(`/api/reviews`, reviewsRouter);

//iniciar servidor
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
