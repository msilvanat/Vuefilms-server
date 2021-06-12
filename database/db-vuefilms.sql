/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS `films` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `films`;

CREATE TABLE IF NOT EXISTS `films` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `director` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

/*!40000 ALTER TABLE `films` DISABLE KEYS */;
INSERT INTO `films` (`id`, `title`, `description`, `score`, `director`, `createdAt`, `updatedAt`, `image`) VALUES
	(11, 'Advengers', 'Action movie', 4, 'Joe Russo', '2021-06-11 04:03:56', '2021-06-12 15:53:17', 'https://res.cloudinary.com/silvana/image/upload/v1623478441/ojw6r0vaa2wehucubdiw.jpg'),
	(13, 'Cruella', 'Comedy movie', 5, 'Craig Gillespie', '2021-06-11 20:47:36', '2021-06-12 06:31:21', 'https://res.cloudinary.com/silvana/image/upload/v1623444455/qdhpl5nq8z3mepoa5t1m.jpg'),
	(14, 'The Godfather', 'American crime film', 5, ' Francis Ford Coppola', '2021-06-12 00:12:19', '2021-06-12 06:13:12', 'https://res.cloudinary.com/silvana/image/upload/v1623478344/s7znxwtpl41afrbgcv9x.jpg'),
	(15, 'Goodfellas', 'Ganster movie', 5, 'Martin Scorsese', '2021-06-12 00:53:30', '2021-06-12 06:18:27', 'https://res.cloudinary.com/silvana/image/upload/v1623478630/zerihxdaviy9bjlh7gr5.jpg'),
	(16, 'Mulan', 'Action movie', 3, 'Niki Caro', '2021-06-12 02:41:01', '2021-06-12 06:24:39', 'https://res.cloudinary.com/silvana/image/upload/v1623479027/cjyzhqnvhbnugeoymgyj.jpg'),
	(17, 'MM84', 'Action movie', 2, 'Patty Jenkins', '2021-06-12 02:55:38', '2021-06-12 06:32:59', 'https://res.cloudinary.com/silvana/image/upload/v1623479208/t7imjib1hqwbrbxopk1f.jpg');
/*!40000 ALTER TABLE `films` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(150) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
	(1, 'Santiago', 'santiago@gmail.com', '$2a$10$NXs7Xc/Hh8J4RtCxcWmDTOvsiilpERf0tKWXTu3zKy5Ryou1RLoyq', '2021-01-30 03:26:33', '2021-01-30 03:26:33'),
	(2, 'Manuel', 'Manuel@gmail.com', '$2a$10$Oy.GCZa07RXSFTw.7n2wH.e8PPCdDdTzs7PK9OS5oudH7o4YP3fB.', '2021-01-30 03:42:08', '2021-01-30 03:42:08');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
