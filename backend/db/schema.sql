CREATE TABLE user(
    _IdUser INT AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lasttName VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (_IdUser)
);

CREATE TABLE proudect (
    _IdProudect INT AUTO_INCREMENT NOT NULL,
    userId INT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    url VARCHAR(255) NOT NULL,
    FOREIGN KEY (userId) REFERENCES user(_IdUser),
    PRIMARY KEY (_IdProudect)
);

CREATE TABLE cart(
    _IdCart INT AUTO_INCREMENT NOT NULL,
    userId INT,
    proudectId INT,
    approval INT DEFAULT 0,
    FOREIGN KEY (userId) REFERENCES user(_IdUser),
    FOREIGN KEY (proudectId) REFERENCES proudect(_IdProudect),
    PRIMARY KEY (_IdCart)
);

CREATE TABLE requsetItems(
    _Idrequset INT AUTO_INCREMENT NOT NULL,
    _IdCart INT,
    proudectId INT,
    FOREIGN KEY (_IdCart) REFERENCES cart (_IdCart),
    PRIMARY KEY (_Idrequset)
);