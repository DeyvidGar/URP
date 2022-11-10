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
$router->get('/proyecto', [DashboardController::class, 'proyecto']);
$router->get('/nuevo-proyecto', [DashboardController::class, 'nuevo_proyecto']);
$router->post('/nuevo-proyecto', [DashboardController::class, 'nuevo_proyecto']);
$router->get('/perfil', [DashboardController::class, 'perfil']);
$router->post('/perfil', [DashboardController::class, 'perfil']);
$router->get('/cambiar-password', [DashboardController::class, 'cambiar_password']);
$router->post('/cambiar-password', [DashboardController::class, 'cambiar_password']);




// Comprueba y valida las rutas, que existan y les asigna las funciones del Controlador
$router->comprobarRutas();