-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-06-2025 a las 01:04:38
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tp-utn-2025`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genre_movie`
--

CREATE TABLE `genre_movie` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `genre_movie`
--

INSERT INTO `genre_movie` (`id`, `name`) VALUES
(1, 'Acción'),
(2, 'Ciencia Ficción'),
(3, 'Comedia'),
(4, 'Drama'),
(5, 'Terror'),
(6, 'Fantasia'),
(7, 'Thriller'),
(8, 'Misterio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `imagen` varchar(255) NOT NULL,
  `genres_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`id`, `titulo`, `descripcion`, `imagen`, `genres_id`) VALUES
(1, 'Requiem For A Dream', 'Las utopías inducidas por drogas de cuatro residentes de Coney Island se rompen cuando sus adicciones son profundas.', 'https://a.ltrbxd.com/resized/sm/upload/lv/4b/f2/zj/muym4jTjdLx7E6as09d1wlC3sOB-0-1000-0-1500-crop.jpg?v=b4d5a4aa37', 4),
(2, 'Kill Bill Vol.1', 'Un asesino es baleado por su despiadado empleador, Bill, y otros miembros de su círculo de asesinatos – pero ella vive para planear su venganza.', 'https://a.ltrbxd.com/resized/sm/upload/sw/w2/ep/v4/9O50TVszkz0dcP5g6Ej33UhR7vw-0-1000-0-1500-crop.jpg?v=5a65f5202f', 1),
(3, 'After Hours', 'Desesperado por escapar de su rutina de adormecimiento mental, el empleado de oficina de Manhattan, Paul Hackett, se aventura en el centro para conectarse con una mujer misteriosa.', 'https://a.ltrbxd.com/resized/sm/upload/2z/7c/vx/lo/qpr5tRmvyx4rbv1gKMKbW1v5JUC-0-1000-0-1500-crop.jpg?v=3f65cdcb25', 3),
(4, 'Donnie Darko', 'Después de escapar por poco de un extraño accidente, un adolescente con problemas está plagado de visiones de un gran conejo que lo manipula para cometer una serie de crímenes.', 'https://a.ltrbxd.com/resized/sm/upload/ye/jq/f3/22/nmb4QhCRmdfNP6rgb81yUFgI83l-0-1000-0-1500-crop.jpg?v=caa3999c6f', 4),
(5, 'Eyes Wide Shut', 'Después del Dr. La esposa de Bill Harford, Alice, admite tener fantasías sexuales sobre un hombre que conoció, Bill se obsesiona con tener un encuentro sexual. Descubre un            grupo sexual clandestino y asiste a una de sus reuniones – y rápidamente descubre que está sobre su cabeza.', 'https://a.ltrbxd.com/resized/film-poster/5/1/7/1/7/51717-eyes-wide-shut-0-1000-0-1500-crop.jpg?v=7010402aeb', 8),
(6, 'In the Mouth of Madness', 'Un investigador de seguros comienza a descubrir que el impacto que los libros de un escritor de terror tienen en sus fanáticos es más que inspirador.', 'https://a.ltrbxd.com/resized/film-poster/5/0/1/6/6/50166-in-the-mouth-of-madness-0-1000-0-1500-crop.jpg?v=bdeff15c79', 5),
(7, 'Whiplash', 'Bajo la dirección de un instructor despiadado, un joven baterista talentoso comienza a perseguir la perfección a cualquier costo, incluso su humanidad.', 'https://a.ltrbxd.com/resized/sm/upload/cl/dn/kr/f1/4C9LHDxMsoYI0S3iMPZdm3Oevwo-0-1000-0-1500-crop.jpg?v=d13ea36528', 4),
(8, 'The Wonderful Story of Henry Sugar', 'Un hombre rico aprende sobre un gurú que puede ver sin usar sus ojos. Se propone dominar la habilidad para hacer trampa en el juego.', 'https://a.ltrbxd.com/resized/film-poster/8/2/9/3/6/4/829364-the-wonderful-story-of-henry-sugar-0-1000-0-1500-crop.jpg?v=887a913aa6', 3),
(9, 'Before Sunrise', 'Un joven y una mujer se encuentran en un tren en Europa y terminan pasando una noche juntos en Viena. Desafortunadamente, ambos saben que esta probablemente será su única         noche juntos.', 'https://a.ltrbxd.com/resized/film-poster/5/1/9/7/4/51974-before-sunrise-0-1000-0-1500-crop.jpg?v=006e8fedea', 4),
(10, 'Spirited Away', 'Una niña, Chihiro, queda atrapada en un extraño nuevo mundo de espíritus. Cuando sus padres experimentan una transformación misteriosa, debe recurrir al coraje que nunca supo que tenía para liberar a su familia.', 'https://a.ltrbxd.com/resized/film-poster/5/1/9/2/1/51921-spirited-away-0-1000-0-1500-crop.jpg?v=a3ad463c55', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `movie_id` int(11) NOT NULL,
  `comentario_reviews` text DEFAULT '\'Añade tu comentario\'',
  `rating` decimal(2,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reviews`
--

INSERT INTO `reviews` (`id`, `user_id`, `movie_id`, `comentario_reviews`, `rating`) VALUES
(8, 1, 1, 'Una película intensa y emocional. Brutal en su mensaje.', 5.0),
(9, 2, 2, 'Kill Bill Vol.1 es pura adrenalina. Tarantino en su mejor forma.', 5.0),
(10, 3, 4, 'Donnie Darko es inquietante y lleno de misterio. Una joya.', 4.0),
(11, 1, 7, 'Whiplash te deja sin aliento. Increíble actuación y dirección.', 5.0),
(12, 2, 10, 'Spirited Away es una obra maestra de animación, mágica en todo sentido.', 5.0),
(13, 2, 3, 'After Hours es una locura de principio a fin. Muy disfrutable.', 4.0),
(14, 1, 5, 'Eyes Wide Shut es inquietante y visualmente impecable. Te deja pensando.', 3.5),
(15, 3, 6, 'Una película infravalorada, mezcla horror con crítica social.', 4.0),
(16, 2, 8, 'Un cuento corto que deja una gran enseñanza. Muy Wes Anderson.', 4.0),
(17, 3, 9, 'Before Sunrise es poesía pura. Diálogos hermosos y naturales.', 4.5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(70) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`) VALUES
(1, 'Juan Pérez', 'juan@example.com', '', '2025-05-25 14:06:13'),
(2, 'Lucía García', 'lucia@example.com', '', '2025-05-25 14:06:13'),
(3, 'Carlos López', 'carlos@example.com', '', '2025-05-25 14:06:13'),
(4, 'josesito123', 'tipito123', '$2b$10$NYhig7Kw49HKfnKac0cEAu9ejy/HrTAYfABGGi7HC.Of/Kc1nHmKu', '2025-06-03 20:10:55');

--
-- Disparadores `users`
--
DELIMITER $$
CREATE TRIGGER `assign_user_role` AFTER INSERT ON `users` FOR EACH ROW BEGIN
    DECLARE userRoleId INT;

    SELECT id INTO userRoleId
    FROM roles
    WHERE name = 'user'
    LIMIT 1;

    IF userRoleId IS NOT NULL THEN
        INSERT INTO user_roles (user_id, role_id)
        VALUES (NEW.id, userRoleId);
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(4, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `genre_movie`
--
ALTER TABLE `genre_movie`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `genres_id` (`genres_id`);

--
-- Indices de la tabla `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `movie_id` (`movie_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `genre_movie`
--
ALTER TABLE `genre_movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `movies_ibfk_1` FOREIGN KEY (`genres_id`) REFERENCES `genre_movie` (`id`);

--
-- Filtros para la tabla `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
