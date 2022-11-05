<?php
//le asignamos un name space, este name space debe estar cargado en el composer.json y cargado con el comando composer update
namespace Clasess;

use PHPMailer\PHPMailer\PHPMailer;

class Email{

    public $nombre;
    public $email;
    public $token;

    //la forma de nuestro objeto la definen los valores que recive
    public function __construct($nombre, $email, $token)
    {
        //el atributo de nuestro objeto es igual al nombre que recibe en el lugar donde se instancie
        $this->nombre = $nombre;
        $this->email = $email;
        $this->token = $token;
    }

    public function confirmarCuenta(){

        //creamos el objeto eamil - Codiog que nos proporciona mailtrap
        $phpmailer = new PHPMailer();
        $phpmailer->isSMTP();
        $phpmailer->Host = 'smtp.mailtrap.io';
        $phpmailer->SMTPAuth = true;
        $phpmailer->Port = 2525;
        $phpmailer->Username = 'af5e08cc99afd6';
        $phpmailer->Password = 'e66c6ad6525a01';

        $phpmailer->setFrom('cuentas@appsalon.com');
        $phpmailer->addAddress('cuentas@appsalon.com', 'Appsalon.com');
        $phpmailer->Subject ='Confirma tu cuenta';

        //set HTML
        $phpmailer->isHTML(TRUE);
        $phpmailer->CharSet = 'UTF-8';

        //contenido
        $contenido = "<html>";
        $contenido .= "<p><strong>Hola ".$this->nombre."</strong><p>";
        $contenido .= "<p>Has creado una cuenta en URP.com, para confirmar tu registro presiona el siguiente enlace.</p>";
        $contenido .= "Presiona aquí: <a href='https://localhost:3000/confirmar-cuenta?token=$this->token'>Confirmar cuenta</a>";
        $contenido .= "<p>Si tu no has solictado este cambio puedes ignorar este mensaje.</p>";

        //guardamos contenido
        $phpmailer->Body = $contenido;

        //enviar Email
        $resultado = $phpmailer->send();

        return $resultado;
    }

    public function enviarInstrucciones(){
        //creamos el objeto eamil - Codiog que nos proporciona mailtrap
        $phpmailer = new PHPMailer();
        $phpmailer->isSMTP();
        $phpmailer->Host = 'smtp.mailtrap.io';
        $phpmailer->SMTPAuth = true;
        $phpmailer->Port = 2525;
        $phpmailer->Username = 'af5e08cc99afd6';
        $phpmailer->Password = 'e66c6ad6525a01';

        $phpmailer->setFrom('cuentas@appsalon.com');
        $phpmailer->addAddress('cuentas@appsalon.com', 'Appsalon.com');
        $phpmailer->Subject ='Reestablece tu password';

        //set HTML
        $phpmailer->isHTML(TRUE);
        $phpmailer->CharSet = 'UTF-8';

        //contenido
        $contenido = "<html>";
        $contenido .= "<p><strong>Hola ".$this->nombre."</strong><p>";
        $contenido .= "<p>Has solicitado reestablecer tu password en AppSalon, para confirmar que lo has solicitado tú presiona el siguiente enlace.</p>";
        $contenido .= "<a href='https://protected-garden-13147.herokuapp.com/crear-nueva-password?token=$this->token'>Confirmar cuenta</a>";
        $contenido .= "<p>Si tu no has solictado este cambio puedes ignorar este mensaje.</p>";
        // debuguear($contenido);
        //guardamos contenido
        $phpmailer->Body = $contenido;

        //enviar Email
        $resultado = $phpmailer->send();

        return $resultado;
    }
}