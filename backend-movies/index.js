//Imports
const express = require('express'); //express
const cors = require(`cors`)
//Routes
const moviesRouter = require(`./src/routes/movies`);
const usersRouter = require(`./src/routes/users`);
const reviewsRouter = require(`./src/routes/reviews`);
const authRouter =require(`./src/routes/auth`);

const app = express(); // App
app.use(cors());
app.use(express.json());// Middleware habilita el parseo del json en el body

const PORT = process.env.PORT || 3000; // Puerto donde escuchará el servidor

//usar Rutas
app.use(`/api/movies`, moviesRouter);
app.use(`/api/users`, usersRouter);
app.use(`/api/reviews`, reviewsRouter);
app.use(`/api`, authRouter)
//iniciar servidor
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
