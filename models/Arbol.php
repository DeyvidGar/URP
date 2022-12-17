<?php
namespace Model;

class Arbol extends ActiveRecord {
    //base de datos
    protected static $tabla = 'arboles';
    protected static $columnasDB = ['id', 'variedad', 'numArboles', 'id_colecta'];

    //atributos
    public $id;
    public $variedad;
    public $numArboles;
    public $id_colecta;

    public function __construct($args = [])
    {
        $this->id = $args['id'] ?? null;
        $this->variedad = $args['variedad'] ?? '';
        $this->numArboles = $args['numArboles'] ?? '';
        $this->id_colecta = $args['id_colecta'] ?? '';
    }
}