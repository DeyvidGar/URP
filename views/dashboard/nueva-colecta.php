<?php include_once __DIR__.'/templates/header.php';?>

    <div class="contenedor-sm">

        <?php include_once __DIR__.'/../templates/alertas.php';?>


        <form action="" class="formulario" method="POST">

            <?php include_once __DIR__.'/templates/formulario.php';?>
            <input type="submit" value="Crear Colecta" class="boton-crear-colecta">

        </form>
    </div>

<?php include_once __DIR__.'/templates/footer.php';?>