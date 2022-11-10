<?php include_once __DIR__.'/templates/header.php';?>

<div class="contenedor-sm">
    
    <a href="/cambiar-password" class="enlace">Cambia tu password</a>

    <?php include_once __DIR__.'../../templates/alertas.php';?>

    <form action="" class="formulario" method="POST">
        <div class="campo">
            <label for="nombre">Nombre:</label>
            <input 
                type="text"
                value="<?php echo $nombre;?>"
                name="nombre"
                id="nombre"
                placeholder="Tu nombre"
            />
        </div> <!--FIN CAMPO-->

    <div class="campo">
        <label for="email">Email:</label>
        <input 
            type="email"
            value="<?php echo $email;?>"
            name="email"
            id="email"
            placeholder="Tu email"
        />
    </div> <!--FIN CAMPO-->

    <input type="submit" value="Guardar Cambios">

    </form>

</div>

<?php include_once __DIR__.'/templates/footer.php';?>