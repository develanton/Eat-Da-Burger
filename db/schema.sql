
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
id INT NOT NULL AUTO_INCREMENT,
burger_name CHAR(50) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY(id)
);

