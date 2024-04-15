-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-04-2024 a las 18:16:35
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nutrihelp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favorites`
--

CREATE TABLE `favorites` (
  `id` int(100) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `api` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `favorites`
--

INSERT INTO `favorites` (`id`, `user_email`, `api`) VALUES
(1, 'pepe@gmail.com', '53050'),
(2, 'jose@gmail.com', '53050');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foodia`
--

CREATE TABLE `foodia` (
  `id` int(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `api` varchar(100) NOT NULL,
  `allergies` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `foodia`
--

INSERT INTO `foodia` (`id`, `category`, `api`, `allergies`) VALUES
(1, 'bajo en calorías', '53008', NULL),
(2, 'bajo en calorías', '52965', NULL),
(3, 'fuente de energía sostenida', '52996', NULL),
(5, 'rico en fibra', '52997', NULL),
(6, 'rico en fibra', '53077', NULL),
(7, 'alto en antioxidantes', '52998', NULL),
(8, 'alto en antioxidantes', '53082', NULL),
(13, 'rico en vitaminas y minerales', '52893', NULL),
(15, 'alto en proteínas', '53011', NULL),
(17, 'libre de gluten', '53059', NULL),
(18, 'libre de gluten', '52954', NULL),
(19, 'libre de gluten', '52928', NULL),
(20, 'libre de gluten', '52774', NULL),
(23, 'bajo en grasas saturadas', '52841', NULL),
(24, 'alto en proteínas', '52959', NULL),
(25, 'alto en proteínas', '52848', NULL),
(26, 'alto en proteínas', '52999', NULL),
(27, 'alto en proteínas', '53028', NULL),
(28, 'rico en fibra', '53029', NULL),
(29, 'bajo en grasas saturadas', '52948', 'gluten'),
(30, 'alto en proteínas', '52962', NULL),
(31, 'bajo en calorías', '52906', 'lacteos'),
(32, 'alto en proteínas', '53042', NULL),
(33, 'bajo en grasas saturadas', '52829', 'lacteos'),
(34, 'alto en proteínas', '52818', 'lacteos'),
(35, 'bajo en grasas saturadas', '53014', 'lacteos'),
(36, 'bajo en grasas saturadas', '52987', 'lacteos'),
(37, 'bajo en grasas saturadas', '53076', NULL),
(38, 'bajo en grasas saturadas', '53080', 'lacteos'),
(39, 'bajo en grasas saturadas', '52840', 'mariscos'),
(40, 'alto en proteínas', '52802', NULL),
(41, 'alto en proteínas', '52824', NULL),
(42, 'bajo en grasas saturadas', '52779', 'lacteos'),
(43, 'alto en proteínas', '52887', NULL),
(44, 'alto en proteínas', '52852', NULL),
(45, 'alto en proteínas', '52915', NULL),
(46, 'alto en proteínas', '52963', NULL),
(47, 'Alto en grasas saludables', '52819', 'mariscos'),
(48, 'Alto en grasas saludables', '52775', NULL),
(49, 'Alto en grasas saludables', '52962', NULL),
(50, 'Alto en grasas saludables', '52960', 'mariscos'),
(51, 'Alto en grasas saludables', '53079', 'mariscos'),
(52, 'Rico en vitaminas y minerales', '52780', NULL),
(53, 'Rico en vitaminas y minerales', '52972', NULL),
(54, 'Rico en vitaminas y minerales', '52821', 'mariscos'),
(55, 'Rico en vitaminas y minerales', '52814', NULL),
(56, 'Rico en vitaminas y minerales', '52827', NULL),
(57, 'Fuente de energía sostenida', '53067', NULL),
(58, 'Fuente de energía sostenida', '52802', 'mariscos'),
(59, 'Fuente de energía sostenida', '52868', NULL),
(60, 'Fuente de energía sostenida', '52783', NULL),
(61, 'Fuente de energía sostenida', '52773', 'mariscos'),
(62, 'Fuente de energía sostenida', '52839', 'mariscos'),
(63, 'Bajo en azúcares añadidos', '52961', NULL),
(64, 'Bajo en azúcares añadidos', '52962', NULL),
(65, 'Bajo en azúcares añadidos', '52861', NULL),
(66, 'Bajo en azúcares añadidos', '52922', NULL),
(67, 'Bajo en azúcares añadidos', '52927', NULL),
(69, 'Bajo en azúcares añadidos', '52960', NULL),
(70, 'Bajo en sodio', '52944', NULL),
(71, 'Bajo en sodio', '52996', NULL),
(72, 'Bajo en sodio', '52938', NULL),
(73, 'Bajo en sodio', '53040', NULL),
(74, 'Bajo en sodio', '52784', NULL),
(75, 'Bajo en sodio', '52811', NULL),
(76, 'Bajo en colesterol', '53026', NULL),
(77, 'Bajo en colesterol', '52968', NULL),
(78, 'Bajo en colesterol', '52964', NULL),
(79, 'Bajo en colesterol', '52948', NULL),
(80, 'Bajo en carbohidratos', '52959', NULL),
(81, 'Bajo en carbohidratos', '52940', NULL),
(82, 'Bajo en carbohidratos', '52960', NULL),
(83, 'Bajo en carbohidratos', '52959', NULL),
(84, 'Bajo en carbohidratos', '52822', NULL),
(85, 'Bajo en carbohidratos', '53041', NULL),
(86, 'libre de gluten', '53067', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `nickname` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `pic` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `nickname`, `pass`, `pic`) VALUES
(1, 'javi@gmail.com', 'javi', 'admin123', 'no'),
(5, 'lol@gmail.com', 'lol', 'lol123', 'no'),
(6, 'add@gmail.com', 'add', 'add123', 'no'),
(8, 'angel@gmail.com', 'angie', 'admin123', 'no'),
(9, 'elmer@gmail.com', 'putelmer', 'soygay', 'no');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `foodia`
--
ALTER TABLE `foodia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `foodia`
--
ALTER TABLE `foodia`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
