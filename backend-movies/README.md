Profe le dejo la descripción del proyecto.

-Movies Project (nombre de fantasia utilizado) se basa en la conocida app web llamada Letterboxd. que se trata de una red social sobre dejar reseñas de peliculas en detalle por medio de comentarios y rating por estrellas, reitero solo esta basado y hecho a menor escala para poder presentar la función principal que es poder dejar una reseña y un comentario de la pelicula en especifica cargada por mi.

-El CRUD de mi API REST esta compuesto por 3 rutas que son las que permiten el funcionamiento del Backend, las rutas son:

-auth.js(ruta que proporciona tanto el Login como el Register del usuario en concreto)
-movies.js(ruta que trae el listado de peliculas(10) y lo va a buscar hacia su debido controller.)
-reviews.js(ruta que trae el CRUD de las reseñas: get, post, update y delete también lo busca en su controller.)

-CONTROLLERS, para que cumplan su accionar estan componetizadas para que no se vuelva extenso el código ademas sirven como intermediario con el SERVICE.

-auth.controller.js(login y register del usuario, ademas se genera el JWT(token, credencial) que es un mecanismo de autenticación sin estado, ya que el estado del usuario nunca se guarda en la memoria del servidor)
movies.controller.js
.reviews.controller.js

-los CONTROLLERS delegan su tarea de exportar los metodos del CRUD hacia el SERVICE(este ultimo es el que se encargara de validar los datos, verificar si el usuario ya existe y, finalmente, guardar la información en la base de datos).

-movies.service.js(se encarga de traer de la base de datos todas las peliculas).
-reviews.service.js(selecciona todas las reseñas, selecciona por id, se trae las reseñas hechas por el usuario en particular, permite editar y/o eliminar estas mismas reseñas).

-ahora bien donde se encuentran todos los datos que va a buscar el SERVICE ¿?

-../config/db.js (mi base de datos, en este caso uso MySql)

-para el tema de la autentificación ademas del JWT se verifica mediante un MIDDLEWARE ( función que se puede ejecutar antes o después del manejo de una ruta, y tiene acceso al objeto Request, Response y la función next().)

-auth.middleware.js




-ese seria mi Backend profe :) 