<div class="contenedor olvide-pass">
    <h1 class="uptask">URP</h1>
    <p class="tagline">Ingresa tu correo y resibiras instrucciones.</p>

    <div class="contenedor-sm">
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
    </div><!-- contedor-sm -->
</div><!-- contedor -->