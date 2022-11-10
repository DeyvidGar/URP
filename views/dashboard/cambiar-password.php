<?php include_once __DIR__.'/templates/header.php';?>

<div class="contenedor-sm">
    
    <a href="/perfil" class="enlace">Cambiar Nombre o Email</a>

    <?php include_once __DIR__.'../../templates/alertas.php';?>
    
    <form action="" class="formulario" method="POST">
        <div class="campo">
            <label for="password">Password actual:</label>
            <input 
                type="password"
                name="password"
                id="password"
                placeholder="Tu password actual"
            />
        </div> <!--FIN CAMPO-->

    <div class="campo">
        <label for="nuevo-password">Nuevo password:</label>
        <input 
            type="password"
            name="password2"
            id="password2"
            placeholder="Tu nuevo password"
        />
    </div> <!--FIN CAMPO-->

    <input type="submit" value="Guardar Cambios">

    </form>

</div>

<?php include_once __DIR__.'/templates/footer.php';?>