<?php
//importamos el autoload de composer
require __DIR__ . '/../vendor/autoload.php';

//Dependencia para leer las varialbes de entorno: composer require vlucas/phpdotenv
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->safeload();

//importamos el archivo de funciones php
require 'funciones.php';
//importamos credenciales y conexion a la base de datos
require 'database.php';

// Conectarnos a la base de datos
use Model\ActiveRecord;
ActiveRecord::setDB($db);