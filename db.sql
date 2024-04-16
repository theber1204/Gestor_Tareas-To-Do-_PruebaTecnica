-- Creacion de la base de datos
CREATE DATABASE IF NOT EXISTS pruebatecnica_crud;

-- Seleccion de la base de datos
USE pruebatecnica_crud;

-- tabla de tareas
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task VARCHAR(255) NOT NULL
);