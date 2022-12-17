<?php
namespace Controllers;

use Model\Arbol;

class ApiController {
    public static function index(){
    }
    public static function guardar(){
        $patronCultivos = json_decode($_POST['patronCultivos']);
        debuguear($patronCultivos);
        // si el arreglo no esta vacio se guarda
        if ( $_POST['arboles'] !== '[]'){
            $arboles = json_decode($_POST['arboles']);
            // debuguear($arboles);
            foreach($arboles as $arbol){
                $args = [
                    'variedad' => $arbol->variedad,
                    'numArboles' => $arbol->numArboles,
                    'id_colecta' => 4
                ];
                $arbol = new Arbol($args);
                $arbol->guardar();
            }
        }
    }
}