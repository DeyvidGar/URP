<div class="contenedor reestablecer-pass">
    <h1 class="uptask">URP</h1>
    <p class="tagline">Ingresa tu nueva password.</p>

    <div class="contenedor-sm">
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
    </div><!-- contedor-sm -->
</div><!-- contedor -->