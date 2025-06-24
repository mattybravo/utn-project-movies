# 🎥 Movies Project - Letterboxd Style 🍿🌟  

_Un proyecto inspirado en Letterboxd para crear, valorar y reseñar películas._

---

## 👇 Descripción General
**Movies Project** es una versión simplificada de Letterboxd donde los usuarios pueden:
- 🎞️ Ver una selección de películas (10 en total).
- 💬 Dejar reseñas y calificaciones con sistema de ⭐.
- ✍️ Crear, actualizar y borrar reseñas para cada película.

Se trata de un proyecto pensado para mostrar la **funcionalidad clave** de crear y administrar reseñas en una película en específico.

---

## ⚡️ Rutas de la API REST
La API REST ofrece 3 rutas principales para la comunicación entre Frontend y Backend:

### 🔐 `auth.js`
- 👥 **Funciones**:
  - Login
  - Register
  - Generación de JWT para autentificación sin estado

### 🎞️ `movies.js`
- 🎬 **Funciones**:
  - Traer listado de todas las películas (10)

### 🗣️ `reviews.js`
- 💬 **Funciones**:
  - Crear (`POST`), obtener (`GET`), actualizar (`UPDATE`) y borrar (`DELETE`) reseñas

---

## ⚙️ Controladores
Para mantener la lógica organizada, cada operación de la lógica de negocio está ubicada en **Controladores**:

- **auth.controller.js**:  
  🔑 Ejecuta el login, registro y generación de JWT (token para autorización).

- **movies.controller.js**:  
  🎥 Se encarga de obtener todas las películas.

- **reviews.controller.js**:  
  🗣️ Administra todas las reseñas (crear, obtener, actualizar y borrar).

> ✅ Los **Controladores** reciben la solicitud y delegan la lógica al correspondiente **Service**.

---

## 🔥 Services
Los Services hacen la lógica de acceso a datos y validación:

- **movies.service.js**:  
  🎞️ Trae todas las películas de la base de datos.

- **reviews.service.js**:  
  💬 Selecciona todas las reseñas, reseñas por ID, todas las reseñas de un usuario específico, además de permitir crear, editar y eliminar reseñas.

---

## 🗄️ Base de Datos
Todos los datos que usan los Services provienen de:

👉 `../config/db.js` – Implementada con **MySQL** para el almacenamiento de datos.

---

## 🔐 Autenticación y Middleware
La autenticación y autorización se implementan mediante:
- ✅ **JWT** (JSON Web Token) para validar al usuario.
- 🔥 **auth.middleware.js** para verificar la validez del token antes de acceder a las rutas privadas.

---

## 🙌 Conclusión
**Movies Project** ofrece una versión minimalista pero completa de Letterboxd, con foco en la creación de reseñas, la administración de usuarios y el listado de películas. El proyecto sigue una estructura clara basada en **Controladores**, **Services** y **Middlewares**, para garantizar escalabilidad y legibilidad.

Si quieres detalles de cada implementación, ¡no dudes en preguntarme! 🚀

---
