<?php

require_once __DIR__ . '/../includes/app.php';

use MVC\Router;
use Controllers\LoginController;
use Controllers\DashboardController;
$router = new Router();

//registrar nuevos usuarios
$router->get('/crear_cuenta', [LoginController::class, 'crear_cuenta']);
$router->post('/crear_cuenta', [LoginController::class, 'crear_cuenta']);

//iniciar sesion
$router->get('/', [LoginController::class, 'index']);
$router->post('/', [LoginController::class, 'index']);

//cerrar sesion
$router->get('/logout', [LoginController::class, 'logout']);

//pagina si olvidaste la contraseña
$router->get('/olvide_password', [LoginController::class, 'olvide_password']);
$router->post('/olvide_password', [LoginController::class, 'olvide_password']);

//siel usario existe podra escribir una nueva password en la siguiente paguina
$router->get('/nuevo_password', [LoginController::class, 'crear_nueva_password']);
$router->post('/nuevo_password', [LoginController::class, 'crear_nueva_password']);

//confirmacion de cuenta
$router->get('/mensaje', [LoginController::class, 'mensaje']); //instruccinoes revisar email
//confirmar cuenta con token
$router->get('/confirmar', [LoginController::class, 'confirmar']);

//admin
//ZONA DE PROYECTOS
$router->get('/dashboard', [DashboardController::class, 'index']);
$router->get('/colecta', [DashboardController::class, 'colecta']);
$router->post('/colecta', [DashboardController::class, 'colecta']);
$router->get('/nueva-colecta', [DashboardController::class, 'nueva_colecta']);
$router->post('/nueva-colecta', [DashboardController::class, 'nueva_colecta']);
// $router->get('/perfil', [DashboardController::class, 'perfil']);
// $router->post('/perfil', [DashboardController::class, 'perfil']);
// $router->get('/cambiar-password', [DashboardController::class, 'cambiar_password']);
// $router->post('/cambiar-password', [DashboardController::class, 'cambiar_password']);

//COLECTA(FORMULARIOS)
// $router->get('/colecta', [::class, ''])




// Comprueba y valida las rutas, que existan y les asigna las funciones del Controlador
$router->comprobarRutas();