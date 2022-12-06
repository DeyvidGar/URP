<?php include_once __DIR__.'/../templates/header.php';?>

    <?php //include_once __DIR__.'/../../templates/alertas.php';?>

<main class="contenedor">
    <?php include_once __DIR__.'/navegacion/navegacion.php';?>

    <!-- Patron de cultivos de la URP -->
    <div class="seccion" id="paso-1">
        <!-- <h2>Patron de cultivos de la URP</h2> -->
        <?php //include_once __DIR__.'/patronCultivos/variedadArboles.php';?>
        <?php //include_once __DIR__.'/patronCultivos/patronCultivos.php';?>

        <!-- DESARROLLO -->
        <!-- <h2>4.1 Costo anual repuesto herramientas</h2> -->
        <?php //include_once __DIR__.'/costosOperacion/costoAnualRepuestoHerramientas.php';?>
        <?php include_once __DIR__.'/activos_fijos/superficieUrp.php';?>
    </div>

    <!-- 3. Activos Fijos -->
    <div class="seccion" id="paso-2">
        <h2>Activos Fijos de la URP</h2>
        <h3>3.1 Superficie de la URP</h3>
        <?php include_once __DIR__.'/activos_fijos/superficieUrp.php';?>
        <?php include_once __DIR__.'/activos_fijos/valorTierra.php';?>

        <!-- BORRAR ESTE SI NO ESTAMOS EN DESARROLO -->
        <?php include_once __DIR__.'/patronCultivos/variedadArboles.php';?>
        <!-- BORRAR ESTE SI NO ESTAMOS EN DESARROLO -->
        <?php include_once __DIR__.'/patronCultivos/patronCultivos.php';?>

        <h3>3.2 Valor de la plantación</h3>
        <?php include_once __DIR__.'/activos_fijos/valorPlantacion.php';?>

        <h3>3.2 Otros activos fijos</h3>
        <?php include_once __DIR__.'/activos_fijos/otrosActivosFijos.php';?>
    </div>

    <!-- 4. Costos de operacion -->
    <div class="seccion" id="paso-3">
        <h2>Costos de operacíon</h2>
        <h2>4.1 Costo anual repuesto herramientas</h2>
        <?php include_once __DIR__.'/costosOperacion/costoAnualRepuestoHerramientas.php';?>

        <h2>4.2 Costos de agroquimicos</h2>
        <?php include_once __DIR__.'/costosOperacion/costoAgroquimicos.php';?>

        <h2>4.3 combustibles y lubricantes</h2>
        <?php include_once __DIR__.'/costosOperacion/combustiblesLubricantes.php';?>

        <h2>4.4 Matenimiento y reparaciones</h2>
        <?php include_once __DIR__.'/costosOperacion/matenimientoReparaciones.php';?>

        <h2>4.5 Costos de cosecha (pesos / hectárea)</h2>
        <?php include_once __DIR__.'/costosOperacion/costosCosecha.php';?>

        <h2>4.6 Costos de mano de hobra temporal</h2>
        <?php include_once __DIR__.'/costosOperacion/costosManoObraTemporal.php';?>
    </div>

    <!-- 5. Costos generales -->
    <div class="seccion" id="paso-4">
        <h2>Costros generales</h2>
        <h2>5.1Costros generales mano de obra</h2>
        <?php include_once __DIR__.'/costosGenerales/manoObraPermanente.php';?>

        <h2>5.1Costros generales mano de obra</h2>
        <?php include_once __DIR__.'/costosGenerales/otrosCostosProduccion.php';?>
    </div>

    <!-- 6. Ingresos -->
    <div class="seccion" id="paso-5">
        <h2>Ingresos</h2>
        <h2>5.1Costros generales mano de obra</h2>
        <?php include_once __DIR__.'/ingresos/ingresosURP.php';?>
    </div>

    <!-- 7. Gastos familiares -->
    <div class="seccion" id="paso-6">
        <h2>Gastos familiares</h2>
        <?php include_once __DIR__.'/gastosFamiliares/gastosFamiliares.php';?>
    </div>

    <!-- pie de pagina -->
    <div class="paginacion">
        <button type="button" class="boton" id="boton-anterior">&laquo; Anterior</button>
        <button type="button" class="boton" id="boton-siguiente">Siguiente &raquo;</button>
    </div>
</main> <!-- fin contenedor-->

<?php include_once __DIR__.'/../templates/footer.php';?>
<?php $script.="
    <script src='build/js/tabs.js'></script>
    <script src='build/js/colecta.js'></script>
    <script src='build/js/nuevaFila.js'></script>
";?>