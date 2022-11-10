<?php include_once __DIR__.'/templates/header.php';?>

    <p class="descripcion-pagina">Reestablece tu password</p>

    <?php include_once __DIR__. '/../templates/alertas.php';?>

    <form method="POST" class="formulario">
        <div class="campo">
            <label for="password">Password:</label>
            <input
                type="password"
                id="password"
                placeholder="escribe tu nuevo password"
                name="password"
            />
        </div>

        <input type="submit" value="Reestablecer password" class="boton">
    </form>

    <div class="acciones">
        <a href="/">Inicia sesion aqui</a>
        <a href="/crear_cuenta">Crea una nueva cuenta</a>
    </div>

<?php include_once __DIR__.'/templates/footer.php';?>