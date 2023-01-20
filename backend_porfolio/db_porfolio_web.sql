-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-01-2023 a las 14:49:07
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_porfolio_web`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `educacion`
--

CREATE TABLE `educacion` (
  `id` int(11) NOT NULL,
  `anio_fin` int(11) NOT NULL,
  `anio_inicio` int(11) NOT NULL,
  `carrera` varchar(255) DEFAULT NULL,
  `descripcione` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `nombree` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `educacion`
--

INSERT INTO `educacion` (`id`, `anio_fin`, `anio_inicio`, `carrera`, `descripcione`, `img`, `nombree`) VALUES
(20, 2020, 2016, 'Ingeniero en Informática', 'Ingeniería en Informática', 'https://firebasestorage.googleapis.com/v0/b/porfolio-jose-antille.appspot.com/o/educacion_imagenes%2Feducacion_20?alt=media&token=7b451b26-68dd-4d18-9088-3b7ce8c8d078', 'Universidad Nacional del Litoral'),
(21, 2021, 2021, 'Técnico Superior en Desarrollo de Software', 'Programación y Desarrolo de Software', 'https://firebasestorage.googleapis.com/v0/b/porfolio-jose-antille.appspot.com/o/educacion_imagenes%2Feducacion_21?alt=media&token=49b75b2d-0837-4c1c-ac55-637541f60384', 'IES Santa Fe'),
(22, 2023, 2022, 'Técnico Superior en Desarrollo de Software', 'Programación y Desarrollo de Software', 'https://firebasestorage.googleapis.com/v0/b/porfolio-jose-antille.appspot.com/o/educacion_imagenes%2Feducacion_22?alt=media&token=0fe7971b-f996-4abd-b3ef-763ab7244d6b', 'Instituto Superior de Comercio Domingo Guzmán Silva');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `experiencia`
--

CREATE TABLE `experiencia` (
  `id` int(11) NOT NULL,
  `anio_fin` varchar(255) DEFAULT NULL,
  `anio_inicio` varchar(255) DEFAULT NULL,
  `descripcione` varchar(255) DEFAULT NULL,
  `imge` varchar(255) DEFAULT NULL,
  `nombree` varchar(255) DEFAULT NULL,
  `puesto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `experiencia`
--

INSERT INTO `experiencia` (`id`, `anio_fin`, `anio_inicio`, `descripcione`, `imge`, `nombree`, `puesto`) VALUES
(7, NULL, '2016', 'Reparación, montaje, presupuestos, cambio de componentes y mantenimiento de computadoras de escritorio y notebooks. Recuperación de discos rígidos dañados y datos.  Instalación de sistemas operativos y software.', 'https://firebasestorage.googleapis.com/v0/b/porfolio-jose-antille.appspot.com/o/experiencia_imagenes%2Fexperiencia_7?alt=media&token=51203cbe-e6f7-425e-b36e-acbdfc910ce9', 'Autónomo', 'Técnico en reparación y mantenimiento de equipos informáticos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `header`
--

CREATE TABLE `header` (
  `id` int(11) NOT NULL,
  `nombreh` varchar(255) NOT NULL,
  `urlp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `header`
--

INSERT INTO `header` (`id`, `nombreh`, `urlp`) VALUES
(1, 'header', 'https://firebasestorage.googleapis.com/v0/b/porfolio-jose-antille.appspot.com/o/portada_imagen%2Fportada_1?alt=media&token=b840ef25-0783-43d4-8c53-8eaa01607bd1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id` int(11) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `imgp` varchar(255) DEFAULT NULL,
  `nombre` varchar(50) NOT NULL,
  `perfil` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id`, `apellido`, `descripcion`, `img`, `imgp`, `nombre`, `perfil`) VALUES
(1, 'Antille', 'Estudiante avanzado de Tecnicatura en Desarrollo de Software, programador, autodidacta y entusiasta IT.', 'https://firebasestorage.googleapis.com/v0/b/porfolio-jose-antille.appspot.com/o/imagen%2Fperfil_1?alt=media&token=9744767c-c70e-4243-ad4b-ffd2f0d4b662', 'C:\\fakepath\\WallpaperDog-10743123.png', 'José', 'Full Stack Developer Jr');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `id` int(11) NOT NULL,
  `descripcionp` varchar(255) DEFAULT NULL,
  `nombrep` varchar(255) DEFAULT NULL,
  `urlp` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `proyecto`
--

INSERT INTO `proyecto` (`id`, `descripcionp`, `nombrep`, `urlp`) VALUES
(1, 'Proyecto Final para la catedra de \"Programación Orientada a Objetos\" de la carrera Ingeniería en Informatica (U.N.L), programado en C++.', 'Sistema de Gestión de Estacionamiento', 'https://github.com/j4ntill3/sistema_estacionamiento_cpp/blob/master/README.md');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` int(11) NOT NULL,
  `rol_nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id`, `rol_nombre`) VALUES
(1, 'ROLE_ADMIN'),
(2, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `skill`
--

CREATE TABLE `skill` (
  `id` int(11) NOT NULL,
  `nombres` varchar(255) DEFAULT NULL,
  `porcentaje` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `skill`
--

INSERT INTO `skill` (`id`, `nombres`, `porcentaje`) VALUES
(2, 'Java', 63),
(3, 'C++', 61),
(4, 'Angular', 50),
(5, 'MySQL', 55),
(6, 'TypeScript', 39),
(7, 'PHP', 72),
(8, 'Diseño de Bases de Datos Relacionales', 58),
(9, 'Bash Scripting ', 51),
(10, 'Linux', 51),
(11, 'Metodologías Ágiles ', 50),
(12, 'Git', 68);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `nombre_usuario` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `email`, `nombre`, `nombre_usuario`, `password`) VALUES
(1, 'admin@admin.com', 'admin', 'admin', '$2a$10$PBebrYeOXOWaqpPeleMO3e.lCuJ0SJet3lnnZ6GWUhc6E.Z4shVmG');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_rol`
--

CREATE TABLE `usuario_rol` (
  `usuario_rol` int(11) NOT NULL,
  `rol_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario_rol`
--

INSERT INTO `usuario_rol` (`usuario_rol`, `rol_id`) VALUES
(1, 1),
(1, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `educacion`
--
ALTER TABLE `educacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `experiencia`
--
ALTER TABLE `experiencia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `header`
--
ALTER TABLE `header`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_puhr3k3l7bj71hb7hk7ktpxn0` (`nombre_usuario`);

--
-- Indices de la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD PRIMARY KEY (`usuario_rol`,`rol_id`),
  ADD KEY `FK610kvhkwcqk2pxeewur4l7bd1` (`rol_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `educacion`
--
ALTER TABLE `educacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `experiencia`
--
ALTER TABLE `experiencia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `header`
--
ALTER TABLE `header`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `skill`
--
ALTER TABLE `skill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD CONSTRAINT `FK3tjlkh0nxh2bbjrs76x3t9tln` FOREIGN KEY (`usuario_rol`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `FK610kvhkwcqk2pxeewur4l7bd1` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
