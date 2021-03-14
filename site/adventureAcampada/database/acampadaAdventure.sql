-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema adventure_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema adventure_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `adventure_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `adventure_db` ;

-- -----------------------------------------------------
-- Table `adventure_db`.`image_product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `adventure_db`.`image_product` (
  `ID_imageP` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`ID_imageP`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `adventure_db`.`category_product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `adventure_db`.`category_product` (
  `ID_product_PK` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID_product_PK`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `adventure_db`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `adventure_db`.`product` (
  `ID_product_PK` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(60) NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  `price` FLOAT NOT NULL,
  `ID_imageP` INT NULL,
  `ID_category` INT NOT NULL,
  `color` VARCHAR(45) NULL,
  `mark` VARCHAR(45) NULL,
  `size` VARCHAR(45) NULL,
  `stock` INT NULL,
  `delibery` VARCHAR(45) NULL,
  PRIMARY KEY (`ID_product_PK`),
  INDEX `ID_imageP_idx` (`ID_imageP` ASC),
  INDEX `ID_category_idx` (`ID_category` ASC),
  CONSTRAINT `ID_imageP`
    FOREIGN KEY (`ID_imageP`)
    REFERENCES `adventure_db`.`image_product` (`ID_imageP`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ID_category`
    FOREIGN KEY (`ID_category`)
    REFERENCES `adventure_db`.`category_product` (`ID_product_PK`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `adventure_db`.`image_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `adventure_db`.`image_user` (
  `ID_image_PK` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`ID_image_PK`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `adventure_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `adventure_db`.`users` (
  `ID_user_PK` INT NOT NULL AUTO_INCREMENT,
  `ID_carrito` INT NOT NULL,
  `firstName` VARCHAR(60) NOT NULL,
  `lastName` VARCHAR(60) NOT NULL,
  `rol` VARCHAR(10) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `ID_imageU` INT NULL,
  PRIMARY KEY (`ID_user_PK`),
  INDEX `ID_imageU_idx` (`ID_imageU` ASC),
  CONSTRAINT `ID_imageU`
    FOREIGN KEY (`ID_imageU`)
    REFERENCES `adventure_db`.`image_user` (`ID_image_PK`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `adventure_db`.`carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `adventure_db`.`carrito` (
  `ID_carrito_PK` INT NOT NULL AUTO_INCREMENT,
  `ID_user` INT NOT NULL,
  `ID_product` INT NOT NULL,
  `fecha` DATE NULL,
  PRIMARY KEY (`ID_carrito_PK`),
  INDEX `ID_product_idx` (`ID_product` ASC),
  INDEX `ID_user_idx` (`ID_user` ASC),
  CONSTRAINT `ID_product`
    FOREIGN KEY (`ID_product`)
    REFERENCES `adventure_db`.`product` (`ID_product_PK`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ID_user`
    FOREIGN KEY (`ID_user`)
    REFERENCES `adventure_db`.`users` (`ID_user_PK`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
