<?php

namespace Controllers;

use Model\Colecta;
use Model\Usuario;
use MVC\Router;

class DashboardController {
    public static function index( Router $router){
        isAuth();
        $colectas = [];

        if(!isset($_SESSION)) session_start();

        isAuth();//solo con login

        $id = $_SESSION['id'];
        $colectas = Colecta::belongsTo('usuarioId', $id);

        $router->render('dashboard/index', [
            'titulo' => 'Proyectos',
            'colectas' => $colectas
        ]);
    }

    public static function colecta( Router $router ){

        // if(!isset($_SESSION)) session_start();

        // isAuth();//solo con login

        // //validacion, proyecto correspondiente a quien lo creo
        // $url = $_GET['id'];

        // if(!$url) header('Location: /dashboard');

        // $colecta = Colecta::where('url', $url);

        // if($colecta->usuarioId !== $_SESSION['id']) header('Location: /dashboard');


        $router->render('dashboard/colecta/index', [
            'titulo' => 'Colecta'
        ]);
    }

    public static function nueva_colecta( Router $router){

        if(!isset($_SESSION)) session_start();

        isAuth();

        $alertas = [];

        $colecta = new Colecta();

        if($_SERVER['REQUEST_METHOD'] === 'POST'){

            $colecta->sincronizar($_POST);

            $alertas = $colecta->validarDatosColecta();

            if(empty($alertas)){
                $hash = md5(uniqid());
                $colecta->url = $hash;

                $colecta->usuarioId =$_SESSION['id'];
                $r = $colecta->guardar();

                if($r){
                    header('Location: /colecta?id='.$colecta->url);
                } else {
                    Colecta::setAlerta('error','Error al crear colecta, intetalo mas tarde.');
                    $alertas = Colecta::getAlertas();
                }
            }

        }

        $router->render('dashboard/nueva-colecta', [
            'titulo' => 'Nueva Colecta',
            'alertas' => $alertas,
            'colecta' => $colecta
        ]);
    }

    // public static function perfil( Router $router ){
    //     if(!isset($_SESSION)) session_start();
    //     isAuth();

    //     $alertas = [];

    //     $usuario = Usuario::find($_SESSION['id']);

    //     if($_SERVER['REQUEST_METHOD'] === 'POST'){

    //         $usuario->sincronizar($_POST);

    //         $alertas = $usuario->validarNombre();
    //         $alertas = $usuario->validarEmail();

    //         if(empty($alertas)){

    //             $find = Usuario::where('email', $usuario->email);

    //             if($find && $find->id !== $usuario->id){ // DE ESTA FORMA BUSCA EL EMAIL Y QUE ADEMAS SEA DIFERENTE DEL ID ACTUAL
    //                 Usuario::setAlerta('error', 'Este correo ya es ta registrado');
    //             } else {
    //                 $usuario->guardar();

    //                 //soncronizamos el valor de la session
    //                 $_SESSION['nombre'] = $usuario->nombre;

    //                 Usuario::setAlerta('exito', 'Tu nombre ha sido actualizado');
    //             }
    //         }
    //         $alertas = Usuario::getAlertas();
    //     }

    //     $router->render('dashboard/perfil', [
    //         'titulo' => 'Perfil',
    //         'nombre' => $usuario->nombre,
    //         'email' => $usuario->email,
    //         'alertas' => $alertas
    //     ]);
    // }

    // public static function cambiar_password( Router $router){
    //     if(!isset($_SESSION)) session_start();
    //     isAuth();

    //     $alertas = [];

    //     if($_SERVER['REQUEST_METHOD'] === 'POST'){

    //         $usuario = Usuario::find($_SESSION['id']);
    //         $hash = $usuario->password;

    //         $usuario->sincronizar($_POST);

    //         $alertas = $usuario->validarPassword();
    //         $alertas = $usuario->validarPasswordNuevo();

    //         if(empty($alertas)){
    //             $isauth = password_verify($usuario->password, $hash);

    //             if(!$isauth){
    //                 Usuario::setAlerta('error', 'Password incorrecto.');
    //                 $alertas = Usuario::getAlertas();
    //             } else {

    //                 $usuario->password = $usuario->password2;

    //                 //eliminar el elemento temporal
    //                 unset($usuario->password2);

    //                 $usuario->hashPassword();

    //                 $result = $usuario->guardar();

    //                 if($result){
    //                     Usuario::setAlerta('exito', 'Tu password se actualizo correctamente.');
    //                     $alertas = Usuario::getAlertas();
    //                 }
    //             }
    //         }
    //     }

    //     $router->render('dashboard/cambiar-password', [
    //         'titulo' => 'Cambia tu password',
    //         'alertas' => $alertas
    //     ]);
    // }
}