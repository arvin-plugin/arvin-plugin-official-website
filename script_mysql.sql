CREATE DATABASE IF NOT EXISTS `arvin_db`;
USE `arvin_db`;

CREATE TABLE IF NOT EXISTS `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` tinytext,
  `content` text,
   `image` varchar(225),
  `slug_id` varchar(225) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug_id` (`slug_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;