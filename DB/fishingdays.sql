-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema fishingdaysdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `fishingdaysdb` ;

-- -----------------------------------------------------
-- Schema fishingdaysdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `fishingdaysdb` DEFAULT CHARACTER SET utf8 ;
USE `fishingdaysdb` ;

-- -----------------------------------------------------
-- Table `fishinginformation`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fishinginformation` ;

CREATE TABLE IF NOT EXISTS `fishinginformation` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `location` VARCHAR(200) NULL DEFAULT NULL,
  `fishing_style` VARCHAR(200) NULL DEFAULT NULL,
  `fishing_mode` VARCHAR(200) NULL DEFAULT NULL,
  `amount_caught` VARCHAR(45) NULL DEFAULT NULL,
  `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `species_id` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `species`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `species` ;

CREATE TABLE IF NOT EXISTS `species` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `amount_caught` INT NULL,
  `fishinginformation_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_species_fishinginformation_idx` (`fishinginformation_id` ASC),
  CONSTRAINT `fk_species_fishinginformation`
    FOREIGN KEY (`fishinginformation_id`)
    REFERENCES `fishinginformation` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS user@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'user'@'localhost' IDENTIFIED BY 'user';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'user'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `fishinginformation`
-- -----------------------------------------------------
START TRANSACTION;
USE `fishingdaysdb`;
INSERT INTO `fishinginformation` (`id`, `location`, `fishing_style`, `fishing_mode`, `amount_caught`, `date`, `species_id`) VALUES (1, 'Colorado River - Two Bridges', 'Fly Fishing', 'Float', '8', DEFAULT, NULL);
INSERT INTO `fishinginformation` (`id`, `location`, `fishing_style`, `fishing_mode`, `amount_caught`, `date`, `species_id`) VALUES (2, 'Colorado River - State Bridge', 'Fly Fishing', 'Float', '9', DEFAULT, NULL);
INSERT INTO `fishinginformation` (`id`, `location`, `fishing_style`, `fishing_mode`, `amount_caught`, `date`, `species_id`) VALUES (3, 'Roaring Fork River - Basalt', 'Fly Fishing', 'Float', '3', DEFAULT, NULL);
INSERT INTO `fishinginformation` (`id`, `location`, `fishing_style`, `fishing_mode`, `amount_caught`, `date`, `species_id`) VALUES (4, 'South Platte River - Cheeseman Canyon', 'Fly Fishing', 'Walk/Wade', '9', DEFAULT, NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `species`
-- -----------------------------------------------------
START TRANSACTION;
USE `fishingdaysdb`;
INSERT INTO `species` (`id`, `name`, `amount_caught`, `fishinginformation_id`) VALUES (1, 'Rainbow Trout', 7, 1);

COMMIT;

