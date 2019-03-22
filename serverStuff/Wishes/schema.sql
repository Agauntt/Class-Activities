
CREATE DATABASE wishes_db;


USE wishes_db;


-- Create the table in the specified schema
CREATE TABLE wishes
(
    WishNameId INT NOT NULL AUTO_INCREMENT, -- primary key column
    wish VARCHAR(50) NOT NULL,
    PRIMARY KEY (WishNameId)
);

