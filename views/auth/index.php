<div class="contenedor login">
    <h1 class="uptask">URP</h1>
    <p class="tagline">Crea y administra tus proyectos</p>

    <!-- contenedor de formularios mas pequenos que el normal -->
    <div class="contenedor-sm">
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
    </div> <!-- contedor-sm -->
</div> <!-- contedor -->