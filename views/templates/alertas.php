<?php
//contamos con 2 arreglo, el primero indica el tipo de error y el segundo contiene los mensajes, por lo tanto:
foreach($alertas as $tipo => $value):
    foreach($value as $key => $alerta):
?>
    <div class="alerta <?php echo $tipo;?>" data-id-alerta="<?php echo $key;?>">
        <div><?php echo $alerta;?></div>

        <!-- <button class="cerra-alerta" id="cerrar-alerta">X</button> -->
    </div>
<?php
    endforeach;
endforeach;
?>