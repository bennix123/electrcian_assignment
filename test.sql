-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 09, 2024 at 07:39 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------



--
-- Table structure for table `electricians`
--

CREATE TABLE `electricians` (
  `electrician_id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `other_info` varchar(200) DEFAULT NULL,
  `created_ts` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_ts` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `electricians`
--

INSERT INTO `electricians` (`electrician_id`, `name`, `is_active`, `other_info`, `created_ts`, `modified_ts`) VALUES
(1, 'john_doe2', 1, 'Good Employee', '2024-03-08 19:16:49', '2024-03-08 19:16:49'),
(2, '', 1, 'Good Employee', '2024-03-08 19:23:36', '2024-03-08 19:23:36'),
(3, '', 1, 'Good Employee', '2024-03-08 19:24:23', '2024-03-08 19:24:23'),
(4, '', 1, 'Good Employee', '2024-03-08 19:25:17', '2024-03-08 19:25:17'),
(5, '', 1, 'Good Employee', '2024-03-08 19:26:46', '2024-03-08 19:26:46'),
(6, 'john_doe2', 1, 'Good Employee', '2024-03-08 19:29:28', '2024-03-08 19:29:28'),
(7, 'john_doe2', 1, 'Good Employee', '2024-03-08 19:33:12', '2024-03-08 19:33:12'),
(8, 'john_doe2', 1, 'Good Employee', '2024-03-08 19:53:22', '2024-03-08 19:53:22'),
(9, 'john_doe2', 1, 'Good Employee', '2024-03-08 19:55:40', '2024-03-08 19:55:40'),
(10, 'john_doe2', 1, 'Good Employee', '2024-03-08 19:56:45', '2024-03-08 19:56:45'),
(11, 'john_doe2', 1, 'Good Employee', '2024-03-08 19:57:12', '2024-03-08 19:57:12'),
(12, 'john_doe2', 1, 'Good Employee', '2024-03-08 19:57:48', '2024-03-08 19:57:48'),
(13, 'john_doe2', 1, 'Good Employee', '2024-03-08 19:58:11', '2024-03-08 19:58:11'),
(14, 'john_doe2', 1, 'Good Employee', '2024-03-08 20:01:39', '2024-03-08 20:01:39'),
(15, 'john_doe2', 1, 'Good Employee', '2024-03-08 20:02:47', '2024-03-08 20:02:47'),
(16, 'john_doe2', 1, 'Good Employee', '2024-03-08 20:03:04', '2024-03-08 20:03:04'),
(17, 'john_doe2', 1, 'Good Employee', '2024-03-08 20:05:40', '2024-03-08 20:05:40'),
(18, 'john_doe2', 1, 'Good Employee', '2024-03-08 20:06:18', '2024-03-08 20:06:18'),
(19, 'john_doe2', 1, 'Good Employee', '2024-03-08 20:06:50', '2024-03-08 20:06:50'),
(20, 'john_doe2', 1, 'Good Employee', '2024-03-08 20:07:17', '2024-03-08 20:07:17'),
(21, 'john_doe2', 1, 'Good Employee', '2024-03-08 20:09:45', '2024-03-08 20:09:45'),
(22, 'john_doe2', 1, 'Good Employee', '2024-03-08 20:10:46', '2024-03-08 20:10:46'),
(23, 'john_doe2', 1, 'Good Employee', '2024-03-08 20:11:54', '2024-03-08 20:11:54'),
(24, 'john_doe2', 1, 'Good Employee', '2024-03-08 20:19:32', '2024-03-08 20:19:32'),
(25, 'john_doe2', 1, 'Good Employee', '2024-03-08 20:27:05', '2024-03-08 20:27:05'),
(26, '', 1, 'Good Employee', '2024-03-08 20:27:37', '2024-03-08 20:27:37'),
(27, '', 1, 'Good Employee', '2024-03-08 20:39:11', '2024-03-08 20:39:11'),
(28, '', 1, 'Good Employee', '2024-03-08 20:44:02', '2024-03-08 20:44:02'),
(29, '', 1, 'Good Employee', '2024-03-08 20:44:45', '2024-03-08 20:44:45'),
(30, '', 1, 'Good Employee', '2024-03-08 20:45:20', '2024-03-08 20:45:20'),
(31, '', 1, 'Good Employee', '2024-03-08 20:45:48', '2024-03-08 20:45:48'),
(32, '', 1, 'Good Employee', '2024-03-08 20:46:38', '2024-03-08 20:46:38');

-- --------------------------------------------------------



--
-- Table structure for table `sites`
--

CREATE TABLE `sites` (
  `site_id` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `is_completed` tinyint(1) NOT NULL DEFAULT 0,
  `assigned_electrician_id` int(11) NOT NULL,
  `other_info` text DEFAULT NULL,
  `created_ts` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_ts` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------






--
-- Indexes for table `electricians`
--
ALTER TABLE `electricians`
  ADD PRIMARY KEY (`electrician_id`);




--
-- Indexes for table `sites`
--
ALTER TABLE `sites`
  ADD PRIMARY KEY (`site_id`),
  ADD KEY `fk_constraint` (`assigned_electrician_id`);



--
-- AUTO_INCREMENT for table `electricians`
--
ALTER TABLE `electricians`
  MODIFY `electrician_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;





--
-- AUTO_INCREMENT for table `sites`
--
ALTER TABLE `sites`
  MODIFY `site_id` int(11) NOT NULL AUTO_INCREMENT;




--
-- Constraints for table `sites`
--
ALTER TABLE `sites`
  ADD CONSTRAINT `fk_constraint` FOREIGN KEY (`assigned_electrician_id`) REFERENCES `electricians` (`electrician_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
