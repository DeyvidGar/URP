<?php
//namespace que debe estar sincronisado con el autoload de composer
namespace Controllers;

use MVC\Router;
use Clasess\Email;
use Model\Usuario;

class LoginController {
    public static function index( Router $router ){

        $email = '';
        $alertas = [];

        if($_SERVER['REQUEST_METHOD'] === 'POST'){

            $auth = new Usuario($_POST);
            $email = $auth->email;

            $alertas = $auth->validarLogin();

            if(empty($alertas)){
                $usuario = $auth->where('email', $email);

                if($usuario){
                    //usuario existente
                    $resultado = $usuario->comporbarPasswordAndVerificado($auth->password);

                    if($resultado){
                        //retorna true es decir todo valido
                        $usuario->login();
                    }

                } else{
                    Usuario::setAlerta('error', 'Usuario no esta registrado.');
                }

                $alertas = Usuario::getAlertas();
            }
        }

        $router -> render('auth/index', [
            'email' => $email,
            'alertas' => $alertas
        ]);
    }

    public static function crear_cuenta( Router $router){

        $usuario = new Usuario;

        $alertas = $usuario::getAlertas();

        if($_SERVER['REQUEST_METHOD'] === 'POST'){

            $usuario->sincronizar($_POST);
            $alertas = $usuario->validarNuevaCuenta();

            //revisar que alertas este vacio
            if(empty($alertas)){
                $resultado = Usuario::where('email', $usuario->email);

                if(!$resultado){
                    //eliminamos password2 del modelo
                    unset($usuario->password2);

                    $usuario->hashPassword();

                    $usuario->crearToken();

                    $result = $usuario->guardar();

                    //crear token
                    $email = new Email($usuario->nombre, $usuario->email, $usuario->token);
                    $email->confirmarCuenta();
                    header( 'Location: /mensaje ');

                } else{
                    Usuario::setAlerta('error', 'Este usuario ya se encuentra registrado.');
                    $alertas = Usuario::getAlertas();
                }
            }
        }
        $alertas = Usuario::getAlertas();

        $router->render('auth/crear_cuenta', [
            'usuario' => $usuario,
            'alertas' => $alertas
        ]);
    }

    public static function logout(){
        if(!isset($_SESSION)) session_start();
        $_SESSION = [];
        header('Location: /');
    }

    public static function olvide_password( Router $router){

        $alertas = [];

        if($_SERVER['REQUEST_METHOD'] === 'POST'){

            $usuario = new Usuario($_POST);

            $alertas = $usuario->validarEmail();

            if(empty($alertas)){

                $auth = $usuario->where('email', $usuario->email);

                if($auth && $auth->confirmado === '1'){

                    $auth->createToken();

                    //remover variables temporales
                    unset($auth->password2);

                    $auth->guardar();

                    $email = new Email($auth->nombre, $auth->email, $auth->token);
                    //enviar indicacinoes al email
                    $email->enviarInstrucciones();

                    Usuario::setAlerta('exito', 'Te enviamos instruccinoes a tu correo electronico.');
                } else {
                    Usuario::setAlerta('error', 'Este usuario no esta registrado o aun no confirma su cuenta.');
                }
            }
        }

        $alertas = Usuario::getAlertas();

        $router->render('auth/olvide_password', [
            'alertas' => $alertas
        ]);
    }

    public static function nuevo_password( Router $router){

        $error = false;
        $alertas = [];
        $token = $_GET['token'] ?? null;
        $usuario = Usuario::where('token', $token);

        if(!$token || empty($usuario)){
            $alertas = Usuario::setAlerta('error', 'No existe token');
            $error = true;
        }

        if($_SERVER['REQUEST_METHOD'] === 'POST'){

            $password = new Usuario($_POST);

            $alertas = $password->validarPassword();

            if(empty($alertas)){
                $usuario->password = $password->password;
                $usuario->hashPassword();
                $usuario->token = '';
                $resultado = $usuario->guardar();
                if($resultado){
                    header('Location: /');
                } else{
                    $alerta = Usuario::setAlerta('error', 'Algo salio mal intentelo mas tarde.');
                }
            }
        }

        $alertas = Usuario::getAlertas();

        $router->render('auth/nuevo_password', [
            'alertas' => $alertas,
            'error' => $error
        ]);
    }

    public static function mensaje( Router $router ){

        $router->render('auth/mensaje', [
            'titulo' => 'Revisa tu email'
        ]);
    }

    public static function confirmar( Router $router ){

        $token = s($_GET['token']);

        if(!$token) header('Location: /');

        $usuario = Usuario::where('token',$token);

        if($usuario){

            $usuario->confirmado = 1;
            $usuario->token = '';
            unset($usuario->password2);

            $result = $usuario->guardar();

            if($result){
                Usuario::setAlerta('exito', 'Tu cuenta se ha creado correctamente.');
                $alertas = Usuario::getAlertas();
            }else{
                Usuario::setAlerta('error','Intentalo mas tarde.');
                $alertas = Usuario::getAlertas();
            }
        } else{
            Usuario::setAlerta('error','Este token no existe,');
            $alertas = Usuario::getAlertas();
        }


        $router->render('auth/confirmar', [
            'titulo' => 'Confirma tu cuenta',
            'alertas' => $alertas
        ]);
    }
}