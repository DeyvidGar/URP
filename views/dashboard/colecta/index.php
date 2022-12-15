<?php include_once __DIR__.'/../templates/header.php';?>

    <?php //include_once __DIR__.'/../../templates/alertas.php';?>

<main class="contenedor">
    <?php include_once __DIR__.'/navegacion/navegacion.php';?>

    <!-- Patron de cultivos de la URP -->
    <div class="seccion" id="paso-1">
        <h2>Patron de cultivos de la URP</h2>
        <?php include_once __DIR__.'/patronCultivos/variedadArboles.php';?>
        <?php include_once __DIR__.'/patronCultivos/patronCultivos.php';?>

        <!-- DESARROLLO -->
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
        <?php include_once __DIR__.'/costosOperacion/costosManoObraContratada.php';?>
        <?php include_once __DIR__.'/costosOperacion/costosManoObraFamiliar.php';?>
    </div>

    <!-- 5. Costos generales -->
    <div class="seccion" id="paso-4">
        <h2>Costros generales</h2>
        <h2>5.1Costros generales mano de obra</h2>
        <?php include_once __DIR__.'/costosGenerales/costosManoObraPermanente.php';?>

        <h2>5.1Costros generales mano de obra</h2>
        <?php include_once __DIR__.'/costosGenerales/otrosCostosProduccion.php';?>
    </div>

    <!-- 6. Ingresos -->
    <div class="seccion" id="paso-5">
        <h2>Ingresos</h2>
        <?php include_once __DIR__.'/ingresos/ingresosURP.php';?>
        <?php include_once __DIR__.'/ingresos/otrosIngresosURP.php';?>
    </div>

    <!-- 7. Gastos familiares -->
    <div class="seccion" id="paso-6">
        <h2>Gastos familiares</h2>
        <?php include_once __DIR__.'/gastosFamiliares/gastosFamiliares.php';?>
    </div>

    <!-- 8. Otra informacion -->
    <div class="seccion" id="paso-7">
        <h2>Otra Información</h2>
        <?php include_once __DIR__.'/otraInformacion/otraInformacion.php';?>
    </div>

    <!-- 9. Costos de financiamiento -->
    <div class="seccion" id="paso-8">
        <h2>Costos de financiamiento</h2>
        <?php include_once __DIR__.'/costosFinanciamiento/creditoInstitucion.php';?>
        <h2>Crédito de avío</h2>
        <?php include_once __DIR__.'/costosFinanciamiento/creditoAvio.php';?>
        <h2>Crédito refaccionario</h2>
        <?php include_once __DIR__.'/costosFinanciamiento/creditoRefaccionario.php';?>
    </div>

    <!-- 10. Costo capital -->
    <div class="seccion" id="paso-9">
        <h2>Costo Capital</h2>
        <?php include_once __DIR__.'/costoCapital/costoCapital.php';?>
    </div>

       <!-- 10. ANALISIS FINANCIERO -->
    <div class="seccion" id="paso-10">
        <h2>Analisis financiero</h2>
        <?php include_once __DIR__.'/resumen/capitalTrabajo.php';?>
        <?php include_once __DIR__.'/resumen/mejorasCapital.php';?>
        <h2>Costo de producción de limón persa por URP, conceptos seleccionados</h2>
        <?php include_once __DIR__.'/resumen/costoOperacion.php';?>
        <?php include_once __DIR__.'/resumen/costoGenerales.php';?>
        <?php include_once __DIR__.'/resumen/costoOportunidad.php';?>
        <?php include_once __DIR__.'/resumen/otros.php';?>

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