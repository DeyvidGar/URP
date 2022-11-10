<?php include_once __DIR__.'/templates/header.php';?>

    <p class="descripcion-pagina">Crea tu cuenta llenando los siguientes campos.</p>

    <?php include_once __DIR__. '/../templates/alertas.php';?>

    <form action="/crear_cuenta" method="POST" class="formulario">
        <div class="campo">
            <label for="nombre">Nombre:</label>
            <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre"
                value="<?php echo $usuario->nombre?>"
            />
        </div>
        <div class="campo">
            <label for="apellido">Apellidos:</label>
            <input
                type="text"
                id="apellido"
                name="apellido"
                placeholder="Tu apellido"
                value="<?php echo $usuario->apellido?>"
            />
        </div>
        <div class="campo">
            <label for="email">Tu correo electronico:</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Tu correo electronico"
                value="<?php echo $usuario->email?>"
            />
        </div>
        <div class="campo">
            <label for="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Tu password"
            />
        </div>

        <div class="campo">
            <label for="password2">Confirma tu password:</label>
            <input
                type="password"
                name="password2"
                id="password2"
                placeholder="Vuelve a escribir tu password"
            />
        </div>

        <input type="submit" value="Solicitar registro" class="boton">
    </form>

    <div class="acciones">
        <a href="/">Inicia sesion aqui</a>
        <a href="/olvide_password">Olvide mi password</a>
    </div>

<?php include_once __DIR__.'/templates/footer.php';?>

