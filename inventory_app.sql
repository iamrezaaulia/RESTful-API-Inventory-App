-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 30, 2019 at 03:34 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventory_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category` varchar(128) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category`, `created_at`, `updated_at`) VALUES
(1, 'Komputer', '2019-08-27 10:53:54', '2019-08-29 14:00:57'),
(2, 'Handphone', '2019-08-27 12:08:41', '2019-08-29 13:59:44'),
(3, 'Perlengkapan Rumah', '2019-08-27 12:09:11', NULL),
(4, 'Makanan dan Minuman', '2019-08-27 12:09:31', NULL),
(5, 'Fashion', '2019-08-27 12:09:59', '2019-08-30 00:18:44');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `description` varchar(256) NOT NULL,
  `image` varchar(256) NOT NULL,
  `categories_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `image`, `categories_id`, `quantity`, `created_at`, `updated_at`) VALUES
(1, 'MSI GL62M 7RDX 1018', 'MSI', 'Image', 1, 8, '2019-08-28 02:43:41', '2019-08-28 07:11:09'),
(2, 'Galaxy Note 10+', 'Samsung', 'Image', 2, 10, '2019-08-28 07:26:21', '2019-08-28 09:36:18'),
(3, 'Realme 3 Pro', 'Realme', 'Image', 2, 8, '2019-08-28 09:59:45', '2019-08-28 09:59:45'),
(4, 'Galaxy S10+', 'Samsung', 'Image', 2, 8, '2019-08-28 09:59:56', '2019-08-28 09:59:56'),
(5, 'iPhone 10 XS', 'Apple', 'Image', 2, 8, '2019-08-29 04:56:49', '2019-08-29 04:56:49'),
(6, 'Mie Aceh Cut Ngoh', 'Makanan Khas Aceh', 'Image', 4, 5, '2019-08-29 04:58:21', '2019-08-29 04:58:21'),
(7, 'Asus ROG 2 Phone', 'Asus', 'Image', 2, 2, '2019-08-29 06:44:16', '2019-08-29 06:44:16'),
(8, 'ASUS ZenBook UX391UA', 'Asus', 'Image', 1, 3, '2019-08-29 06:46:24', '2019-08-29 06:46:24'),
(9, 'Dell XPS 13 9360', 'Dell', 'Image', 1, 4, '2019-08-29 06:46:56', '2019-08-29 06:46:56'),
(10, 'Asus Zenbook UX410UQ-GV090T', 'Asus', 'Image', 1, 1, '2019-08-29 06:53:13', '2019-08-29 06:53:13'),
(11, 'MSI GF63 8RC 299ID', 'MSI', 'Image', 1, 1, '2019-08-29 06:56:29', '2019-08-29 06:56:29'),
(12, 'Pepes Sagu', 'Makanan Khas Bogor', 'Image', 4, 3, '2019-08-29 07:04:38', '2019-08-29 07:04:38'),
(13, 'Cungkring', 'Makanan Khas Bogor', 'Image', 4, 10, '2019-08-29 07:05:09', '2019-08-29 07:05:09'),
(14, 'Doclang', 'Makanan Khas Bogor', 'Image', 4, 1, '2019-08-29 07:06:09', '2019-08-29 07:06:09'),
(16, 'Rolex Submariner', 'Jam Tangan', 'Image', 5, 1, '2019-08-29 07:20:01', '2019-08-29 07:20:01'),
(17, 'Reebok Reago Pulse', 'Sepatu', 'Image', 5, 1, '2019-08-29 07:25:59', '2019-08-29 07:25:59'),
(18, 'Converse Chuck Taylor All Star', 'Sepatu', 'Image', 5, 1, '2019-08-29 07:27:44', '2019-08-29 07:27:44'),
(19, 'Strike Olive Brown Backpack', 'Tas Visval', 'Image', 5, 1, '2019-08-29 07:35:21', '2019-08-29 07:35:21'),
(20, 'Strike Olive Maroon Backpack', 'Tas Visval', 'Image', 5, 1, '2019-08-29 07:35:38', '2019-08-29 07:35:38'),
(22, 'Sate Apaleh', 'Khas Aceh', 'Image', 4, 2, '2019-08-30 10:07:25', '2019-08-30 10:07:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
