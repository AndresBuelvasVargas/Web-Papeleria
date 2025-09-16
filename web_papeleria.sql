-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-09-2025 a las 04:49:29
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
-- Base de datos: `web_papeleria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add cliente', 7, 'add_cliente'),
(26, 'Can change cliente', 7, 'change_cliente'),
(27, 'Can delete cliente', 7, 'delete_cliente'),
(28, 'Can view cliente', 7, 'view_cliente'),
(29, 'Can add proveedor', 8, 'add_proveedor'),
(30, 'Can change proveedor', 8, 'change_proveedor'),
(31, 'Can delete proveedor', 8, 'delete_proveedor'),
(32, 'Can view proveedor', 8, 'view_proveedor'),
(33, 'Can add producto', 9, 'add_producto'),
(34, 'Can change producto', 9, 'change_producto'),
(35, 'Can delete producto', 9, 'delete_producto'),
(36, 'Can view producto', 9, 'view_producto'),
(37, 'Can add venta', 10, 'add_venta'),
(38, 'Can change venta', 10, 'change_venta'),
(39, 'Can delete venta', 10, 'delete_venta'),
(40, 'Can view venta', 10, 'view_venta'),
(41, 'Can add detalle venta', 11, 'add_detalleventa'),
(42, 'Can change detalle venta', 11, 'change_detalleventa'),
(43, 'Can delete detalle venta', 11, 'delete_detalleventa'),
(44, 'Can view detalle venta', 11, 'view_detalleventa'),
(45, 'Can add inventario movimiento', 12, 'add_inventariomovimiento'),
(46, 'Can change inventario movimiento', 12, 'change_inventariomovimiento'),
(47, 'Can delete inventario movimiento', 12, 'delete_inventariomovimiento'),
(48, 'Can view inventario movimiento', 12, 'view_inventariomovimiento');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$600000$NGNmld2g2Pmd3NZ1LuEjUu$huXaERjsgHtIg2dexhXO9NguHpk8TpUyDXQS4bDenAE=', '2025-08-29 23:20:56.518619', 1, 'sami', '', '', 'andresfbuelvasvargas@gmail.com', 1, 1, '2025-08-29 23:20:17.504466');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes_cliente`
--

CREATE TABLE `clientes_cliente` (
  `ClienteID` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Direccion` varchar(200) NOT NULL,
  `Telefono` varchar(15) NOT NULL,
  `Email` varchar(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes_cliente`
--

INSERT INTO `clientes_cliente` (`ClienteID`, `Nombre`, `Direccion`, `Telefono`, `Email`) VALUES
(1, 'Andres Felipe Buelvas Vargas', 'Cr 22 # 83B - 142', '3046284371', 'andresfbuelvasvargas@gmail.com'),
(2, 'Samely', 'Cr 22 # 83B - 144', '3046284370', 'samefbuelvasvargas@gmail.com'),
(4, 'Elizabeth', 'Cr 44 # 87 - C', '3014123733', 'andresito1013@hotmail.com'),
(5, 'Jairo Andres', 'Calle 72 Iglesia', '30462843708', 'Jairo107@hotmail.com'),
(8, 'Maria Linda Montes', 'Cr 55 - 78 # 142', '3046284389', 'Maria_linda@micorreo.com'),
(9, 'Carlos Horta', 'Manati', '3046284375', 'carloshorta@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2025-08-29 23:24:55.105480', '1', 'Cliente object (1)', 1, '[{\"added\": {}}]', 7, 1),
(2, '2025-08-29 23:28:14.696915', '1', 'Cliente object (1)', 2, '[]', 7, 1),
(3, '2025-08-29 23:29:27.272388', '2', 'Cliente object (2)', 1, '[{\"added\": {}}]', 7, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(7, 'Clientes', 'cliente'),
(5, 'contenttypes', 'contenttype'),
(9, 'Productos', 'producto'),
(8, 'Proveedores', 'proveedor'),
(6, 'sessions', 'session'),
(11, 'Ventas', 'detalleventa'),
(12, 'Ventas', 'inventariomovimiento'),
(10, 'Ventas', 'venta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2025-08-29 23:01:05.871838'),
(2, 'auth', '0001_initial', '2025-08-29 23:01:06.610294'),
(3, 'admin', '0001_initial', '2025-08-29 23:01:06.817035'),
(4, 'admin', '0002_logentry_remove_auto_add', '2025-08-29 23:01:06.840029'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2025-08-29 23:01:06.876048'),
(6, 'contenttypes', '0002_remove_content_type_name', '2025-08-29 23:01:07.073032'),
(7, 'auth', '0002_alter_permission_name_max_length', '2025-08-29 23:01:07.350536'),
(8, 'auth', '0003_alter_user_email_max_length', '2025-08-29 23:01:07.393536'),
(9, 'auth', '0004_alter_user_username_opts', '2025-08-29 23:01:07.417266'),
(10, 'auth', '0005_alter_user_last_login_null', '2025-08-29 23:01:07.507971'),
(11, 'auth', '0006_require_contenttypes_0002', '2025-08-29 23:01:07.512967'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2025-08-29 23:01:07.538971'),
(13, 'auth', '0008_alter_user_username_max_length', '2025-08-29 23:01:07.576965'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2025-08-29 23:01:07.610967'),
(15, 'auth', '0010_alter_group_name_max_length', '2025-08-29 23:01:07.659966'),
(16, 'auth', '0011_update_proxy_permissions', '2025-08-29 23:01:07.683664'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2025-08-29 23:01:07.725351'),
(18, 'sessions', '0001_initial', '2025-08-29 23:01:07.802364'),
(19, 'Clientes', '0001_initial', '2025-08-29 23:09:54.183030'),
(20, 'Proveedores', '0001_initial', '2025-09-02 20:01:41.643478'),
(21, 'Productos', '0001_initial', '2025-09-02 22:24:34.161259'),
(22, 'Ventas', '0001_initial', '2025-09-13 18:13:33.210804');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('1z9if61vu46pntow5srzeghlfaiynnor', '.eJxVjDsOwjAQBe_iGlmOvf5R0ucM1q4_OIAcKU4qxN1JpBTQvpl5bxZwW2vYel7ClNiVDezyuxHGZ24HSA9s95nHua3LRPxQ-Ek7H-eUX7fT_Tuo2OteGwRjlVcCPIF21mlKwkaPSonkkAxlLFZLEF4pACx-t30BKUQk6Qb2-QK45Da8:1us8Ou:N1H_0rBC9iTLq7TEyB-5b7gLZ9d7XQ4OjNxJefE_K58', '2025-09-12 23:20:56.531464');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_producto`
--

CREATE TABLE `productos_producto` (
  `id` bigint(20) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Descripcion` longtext DEFAULT NULL,
  `Precio_unitario` decimal(10,2) NOT NULL,
  `Stock` int(11) NOT NULL,
  `Proveedor_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos_producto`
--

INSERT INTO `productos_producto` (`id`, `Nombre`, `Descripcion`, `Precio_unitario`, `Stock`, `Proveedor_id`) VALUES
(2, 'Borradore', 'Color blanco, marca gomax, ultra limpios', 700.00, 4996, 5),
(3, 'Portaminas', 'Colores vivos, punta fina incluyen sacapuntas y borrador loool', 1200.00, 80, 3),
(4, 'MOrasss', 'carteleras', 40000.00, 66, 5),
(5, 'Lapiz corrector', 'Borra equivocaciones del lapicero de varios colores sin dejar ningún rastro de este', 15000.00, 99, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores_proveedor`
--

CREATE TABLE `proveedores_proveedor` (
  `ProveedorID` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Contacto` varchar(100) DEFAULT NULL,
  `Telefono` varchar(15) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `proveedores_proveedor`
--

INSERT INTO `proveedores_proveedor` (`ProveedorID`, `Nombre`, `Contacto`, `Telefono`, `Email`) VALUES
(1, 'Papelería El Lápiz Mágico', 'www.papeleria-lamagica.com', '573001234567', 'info@papeleria-lamagica.com'),
(2, 'Utiles Maria', 'Calle Principal 123, Ciudad, País', '5551234567', 'info@utilesmaria.udi.co'),
(3, 'Pedritos Materiales', 'www.materiales-pedro-elmejor.com', '3046284471', 'pedritojose_4@gmail.com'),
(5, 'Fernanda', 'Calle Principal 123, Barranquilla, Colombia', '30462843745', 'ferdanda@hotmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas_detalleventa`
--

CREATE TABLE `ventas_detalleventa` (
  `detalle_id` int(11) NOT NULL,
  `cantidad` int(10) UNSIGNED NOT NULL CHECK (`cantidad` >= 0),
  `precio_unitario` decimal(10,2) NOT NULL,
  `producto_id` bigint(20) NOT NULL,
  `venta_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas_detalleventa`
--

INSERT INTO `ventas_detalleventa` (`detalle_id`, `cantidad`, `precio_unitario`, `producto_id`, `venta_id`) VALUES
(18, 7, 1200.00, 3, 18),
(19, 3, 40000.00, 4, 19),
(20, 2, 700.00, 2, 20),
(21, 3, 700.00, 2, 21),
(22, 1, 1200.00, 3, 21),
(23, 1, 700.00, 2, 21),
(24, 1, 15000.00, 5, 21),
(25, 1, 40000.00, 4, 21),
(26, 1, 700.00, 2, 22);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas_inventariomovimiento`
--

CREATE TABLE `ventas_inventariomovimiento` (
  `movimiento_id` int(11) NOT NULL,
  `fecha_movimiento` datetime(6) NOT NULL,
  `tipo_movimiento` varchar(10) NOT NULL,
  `cantidad` int(10) UNSIGNED NOT NULL CHECK (`cantidad` >= 0),
  `producto_id` bigint(20) NOT NULL,
  `proveedor_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas_inventariomovimiento`
--

INSERT INTO `ventas_inventariomovimiento` (`movimiento_id`, `fecha_movimiento`, `tipo_movimiento`, `cantidad`, `producto_id`, `proveedor_id`) VALUES
(1, '2025-09-13 22:18:13.297726', 'salida', 7, 3, NULL),
(2, '2025-09-13 22:19:51.892131', 'salida', 3, 4, 5),
(3, '2025-09-13 22:20:53.063729', 'salida', 7, 3, NULL),
(4, '2025-09-14 00:15:32.870442', 'salida', 2, 2, 1),
(5, '2025-09-14 00:23:46.797604', 'salida', 3, 2, 1),
(6, '2025-09-14 00:23:46.807144', 'salida', 1, 3, 3),
(7, '2025-09-14 00:23:46.812129', 'salida', 1, 4, 5),
(8, '2025-09-14 00:23:46.810130', 'salida', 1, 5, 2),
(9, '2025-09-14 00:23:46.809130', 'salida', 1, 2, 1),
(10, '2025-09-14 01:06:30.951960', 'entrada', 4, 3, NULL),
(11, '2025-09-14 02:58:39.823400', 'salida', 1, 2, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas_venta`
--

CREATE TABLE `ventas_venta` (
  `venta_id` int(11) NOT NULL,
  `fecha_venta` datetime(6) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `cliente_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas_venta`
--

INSERT INTO `ventas_venta` (`venta_id`, `fecha_venta`, `total`, `cliente_id`) VALUES
(18, '2025-09-13 22:11:28.310828', 8400.00, 1),
(19, '2025-09-13 22:19:51.845465', 120000.00, 2),
(20, '2025-09-14 00:15:32.783551', 1400.00, 1),
(21, '2025-09-14 00:23:46.731054', 59000.00, 9),
(22, '2025-09-14 02:58:39.699119', 700.00, 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indices de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indices de la tabla `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indices de la tabla `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indices de la tabla `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indices de la tabla `clientes_cliente`
--
ALTER TABLE `clientes_cliente`
  ADD PRIMARY KEY (`ClienteID`),
  ADD UNIQUE KEY `Telefono` (`Telefono`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Indices de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indices de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indices de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indices de la tabla `productos_producto`
--
ALTER TABLE `productos_producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Productos_producto_Proveedor_id_731c1d20_fk_Proveedor` (`Proveedor_id`);

--
-- Indices de la tabla `proveedores_proveedor`
--
ALTER TABLE `proveedores_proveedor`
  ADD PRIMARY KEY (`ProveedorID`),
  ADD UNIQUE KEY `Telefono` (`Telefono`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Indices de la tabla `ventas_detalleventa`
--
ALTER TABLE `ventas_detalleventa`
  ADD PRIMARY KEY (`detalle_id`),
  ADD KEY `Ventas_detalleventa_producto_id_080e2777_fk_Productos` (`producto_id`),
  ADD KEY `Ventas_detalleventa_venta_id_96b8ad61_fk_Ventas_venta_venta_id` (`venta_id`);

--
-- Indices de la tabla `ventas_inventariomovimiento`
--
ALTER TABLE `ventas_inventariomovimiento`
  ADD PRIMARY KEY (`movimiento_id`),
  ADD KEY `Ventas_inventariomov_producto_id_00c50dd7_fk_Productos` (`producto_id`),
  ADD KEY `Ventas_inventariomov_proveedor_id_18dfa8d4_fk_Proveedor` (`proveedor_id`);

--
-- Indices de la tabla `ventas_venta`
--
ALTER TABLE `ventas_venta`
  ADD PRIMARY KEY (`venta_id`),
  ADD KEY `Ventas_venta_cliente_id_c8ddb78b_fk_Clientes_cliente_ClienteID` (`cliente_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clientes_cliente`
--
ALTER TABLE `clientes_cliente`
  MODIFY `ClienteID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `productos_producto`
--
ALTER TABLE `productos_producto`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `proveedores_proveedor`
--
ALTER TABLE `proveedores_proveedor`
  MODIFY `ProveedorID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `ventas_detalleventa`
--
ALTER TABLE `ventas_detalleventa`
  MODIFY `detalle_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `ventas_inventariomovimiento`
--
ALTER TABLE `ventas_inventariomovimiento`
  MODIFY `movimiento_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `ventas_venta`
--
ALTER TABLE `ventas_venta`
  MODIFY `venta_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Filtros para la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Filtros para la tabla `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Filtros para la tabla `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Filtros para la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Filtros para la tabla `productos_producto`
--
ALTER TABLE `productos_producto`
  ADD CONSTRAINT `Productos_producto_Proveedor_id_731c1d20_fk_Proveedor` FOREIGN KEY (`Proveedor_id`) REFERENCES `proveedores_proveedor` (`ProveedorID`);

--
-- Filtros para la tabla `ventas_detalleventa`
--
ALTER TABLE `ventas_detalleventa`
  ADD CONSTRAINT `Ventas_detalleventa_producto_id_080e2777_fk_Productos` FOREIGN KEY (`producto_id`) REFERENCES `productos_producto` (`id`),
  ADD CONSTRAINT `Ventas_detalleventa_venta_id_96b8ad61_fk_Ventas_venta_venta_id` FOREIGN KEY (`venta_id`) REFERENCES `ventas_venta` (`venta_id`);

--
-- Filtros para la tabla `ventas_inventariomovimiento`
--
ALTER TABLE `ventas_inventariomovimiento`
  ADD CONSTRAINT `Ventas_inventariomov_producto_id_00c50dd7_fk_Productos` FOREIGN KEY (`producto_id`) REFERENCES `productos_producto` (`id`),
  ADD CONSTRAINT `Ventas_inventariomov_proveedor_id_18dfa8d4_fk_Proveedor` FOREIGN KEY (`proveedor_id`) REFERENCES `proveedores_proveedor` (`ProveedorID`);

--
-- Filtros para la tabla `ventas_venta`
--
ALTER TABLE `ventas_venta`
  ADD CONSTRAINT `Ventas_venta_cliente_id_c8ddb78b_fk_Clientes_cliente_ClienteID` FOREIGN KEY (`cliente_id`) REFERENCES `clientes_cliente` (`ClienteID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
