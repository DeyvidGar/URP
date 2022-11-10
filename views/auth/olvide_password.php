<?php include_once __DIR__.'/templates/header.php';?>

    <p class="descripcion-pagina">Solicita reestablece tu password</p>

    <?php include_once __DIR__. '/../templates/alertas.php';?>

    <form action="/olvide_password" method="POST" class="formulario">
        <div class="campo">
            <label for="email">Email:</label>
            <input
                type="email"
                id="email"
                placeholder="ej: correo@correo.com"
                name="email"
            />
        </div>

        <input type="submit" value="Enviar email" class="boton">
    </form>

    <div class="acciones">
        <a href="/">Inicia sesion aqui</a>
        <a href="/crear_cuenta">Crea una nueva cuenta</a>
    </div>

<?php include_once __DIR__.'/templates/footer.php';?>