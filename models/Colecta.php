<?php

namespace Model;

class Colecta extends ActiveRecord{
    //base de datos
    protected static $tabla = 'colectas';
    protected static $columnasDB = ['id', 'fechaPanel' , 'url' , 'region' , 'panel' , 'descripcion' , 'usuarioId', 'estado' ];

    //atributos
    public $id;
    public $fechaPanel;
    public $url;
    public $region;
    public $panel;
    public $descripcion;
    public $usuarioId;
    public $estado;

    public function __construct($args = [])
    {
        $this->id = $args['id'] ?? null;
        $this->fechaPanel = $args['fechaPanel'] ?? '';
        $this->url = $args['url'] ?? '';
        $this->region = $args['region'] ?? '';
        $this->panel = $args['panel'] ?? '';
        $this->descripcion = $args['descripcion'] ?? '';
        $this->usuarioId = $args['usuarioId'] ?? null;
        $this->estado = $args['estado'] ?? '';
    }

    public function validarDatosColecta(){
        if(!$this->region){
            self::$alertas['error'][] = 'Debes ingresar la región';
        }
        if(!$this->panel){
            self::$alertas['error'][] = 'Debes ingresar el nombre del panel';
        }
        if(!$this->fechaPanel){
            self::$alertas['error'][] = 'Debes ingresar la fecha';
        }

        return self::$alertas;
    }
}