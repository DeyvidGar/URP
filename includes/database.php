<?php
//PARA EL DEPLOYMENT DEBEMOS OCULTAR ESTA INF EN UN ARCHIVO .ENV QUE CONTIENE VARIBLES DE ENTORNO QUE SERAN DE FORMA PRIVADA
$db = mysqli_connect(
    $_ENV['DB_HOST'],
    $_ENV['DB_USER'],
    $_ENV['DB_PASS'],
    $_ENV['DB_BD']
);


if (!$db) {
    echo "Error: No se pudo conectar a MySQL.";
    echo "errno de depuración: " . mysqli_connect_errno();
    echo "error de depuración: " . mysqli_connect_error();
    exit;
}

//para mostrar la api sin errores de letras latinas
$db->set_charset("utf8");