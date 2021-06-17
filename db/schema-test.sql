-- MySQL Workbench Forward Engineering
CREATE DATABASE main_db;
USE main_db;

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema plataforma5
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS User (
  id INT NOT NULL AUTO_INCREMENT,
  userName VARCHAR(255) NULL,
  firstName VARCHAR(255) NULL,
  lastName VARCHAR(255) NULL,
  email VARCHAR(255) NOT NULL,
  passwordEncrypted VARCHAR(255) NOT NULL,
  role VARCHAR(255) NULL,
  createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS Product (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  brand VARCHAR(255),
  price DECIMAL(5,2),
  createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id))
ENGINE = InnoDB;

LOCK TABLES User WRITE;
/*!40000 ALTER TABLE User DISABLE KEYS */;
INSERT INTO User (id,userName,email,passwordEncrypted,firstName,lastName,role)
values
(1,'userName', 'user@mail.com', '$123456', 'Juan', 'Sanchez', 'admin'),
(2,'comprador', 'comprador@mail.com', '$Comprador', 'Juan', 'Comprador', 'comprador');

/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;


-- -----------------------------------------------------
-- Table `Cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `status` VARCHAR(255) NOT NULL DEFAULT `cerrado`,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`userId`) REFERENCES User(`id`)))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CartHasProducts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cartId` INT NOT NULL,
  `productId` INT NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`cartId`) REFERENCES Cart(`id`),
  FOREIGN KEY (`productId`) REFERENCES Product(`id`)))
ENGINE = InnoDB;


LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` (id,userName)
values
(1,'userName');

LOCK TABLES `Product` WRITE;
/*!40000 ALTER TABLE `Product` DISABLE KEYS */;
INSERT INTO `Product` (id,name,brand,price)
values
(1,'polenta', 'morixe', '50.000');

/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

