<?php include_once __DIR__.'/templates/header.php';?>

    <p class="descripcion-pagina">Iniciar Sesion</p>

    <?php include_once __DIR__. '/../templates/alertas.php';?>

    <form action="/" method="POST" class="formulario">
        <div class="campo">
            <label for="email">Email:</label>
            <input
                type="email"
                id="email"
                placeholder="Tu email"
                name="email"
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

        <input type="submit" class="boton" value="Iniciar Sesion">
    </form>

    <div class="acciones">
        <a href="/crear_cuenta">Aun no tienes cuenta, crear una aqui</a>
        <a href="/olvide_password">Olvide mi password</a>
    </div>

<?php include_once __DIR__.'/templates/footer.php';?>