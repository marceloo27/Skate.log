DROP DATABASE IF EXISTS `Skate.log`;
CREATE DATABASE `Skate.log`;
USE `Skate.log`;


CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(50) UNIQUE,
    senha VARCHAR(255),
    estilo VARCHAR(50) default 'street'
);


CREATE TABLE manobra (
    idManobra INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    categoria VARCHAR(45) 
);


CREATE TABLE sessao (
    idSessao INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    dtSessao DATETIME DEFAULT CURRENT_TIMESTAMP,
    tempoMinutos INT,
    diaSemana VARCHAR(15),
    CONSTRAINT fk_sessao_usuario FOREIGN KEY (fkUsuario) 
        REFERENCES usuario(idUsuario) ON DELETE CASCADE
);


CREATE TABLE registro_manobra (
    idRegistro INT PRIMARY KEY AUTO_INCREMENT,
    fkSessao INT,
    fkManobra INT,
    CONSTRAINT fk_reg_sessao FOREIGN KEY (fkSessao) 
        REFERENCES sessao(idSessao) ON DELETE CASCADE,
    CONSTRAINT fk_reg_manobra FOREIGN KEY (fkManobra) 
        REFERENCES manobra(idManobra)
);


INSERT INTO manobra (nome, categoria) VALUES 
('Ollie', 'Street'), ('Kickflip', 'Street'), ('Heelflip', 'Street'),
('Drop-in', 'Transition'), ('Rock to Fakie', 'Transition'), ('Manual', 'Street');

select * from usuario;




