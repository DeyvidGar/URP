<table id="tablaValorPlantacion">
    <tr>
        <th>Año en que se estableció</th>
        <td><input type="number" name="" id="anioEstablecido" placeholder="Ej. 2000"></td>
    </tr>
    <tr>
        <th>Promedio de vida util (Años)</th>
        <td><input type="number" name="" id="vidaUtil" placeholder="Ej. 12" required></td>
    </tr>
    <tr>
        <th>Árboles/Ha</th>
        <td><input type="number" name="" id="arbolesHa" placeholder="Ej. 400"></td>
    </tr>
    <tr>
        <th>Costo/Árbol ($/unidad)</th>
        <td><span>$</span><input type="number" name="" id="costoArbol"></td>
    </tr>
    <tr>
        <th>Costo de Plantacion ($/Planta)</th>
        <td id="costoPlantacion"><span>$</span>0.00</td>
    </tr>
</table>

<table id="tablaActividadesProduccion">
    <thead>
        <tr>
            <th>Actividades de producción</th>
            <th>Precio Unitario</th>
            <th>Actual</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><input type="text" name="" id="" value="COSTO DE PLANTULAS ($/HA)"></td>
            <td class="etiqueta"><span>$</span><input type="number" name="" id=""></td>
            <td class="etiqueta"><span>$</span><input type="number" name="" id=""></td>
        </tr>
        <tr>
            <td><input type="text" name="" id="" value="FERTILIZANTES ($/HA)"></td>
            <td class="etiqueta"><span>$</span><input type="number" name="" id=""></td>
            <td class="etiqueta"><span>$</span><input type="number" name="" id=""></td>
        </tr>
        <tr>
            <td><input type="text" name="" id="" value="FERTILIZANTES ($/HA)(jornales)"></td>
            <td class="etiqueta"><span>$</span><input type="number" name="" id=""></td>
            <td class="etiqueta"><span>$</span><input type="number" name="" id=""></td>
        </tr>
        <tr>
            <td><input type="text" name="" id="" value="FERTILIZANTES + JORNAL ($/HA)"></td>
            <td class="etiqueta"><span>$</span><input type="number" name="" id=""></td>
            <td class="etiqueta"><span>$</span><input type="number" name="" id=""></td>
        </tr>
        <tr>
            <td><input type="text" name="" id="" value="HERBICIDAS + JORNAL  ($/HA) "></td>
            <td class="etiqueta"><span>$</span><input type="number" name="" id=""></td>
            <td class="etiqueta"><span>$</span><input type="number" name="" id=""></td>
        </tr>
        <tr>
            <td><input type="text" name="" id="" value="INSECTICIDAS + JORNAL ($/HA)"></td>
            <td class="etiqueta"><span>$</span><input type="number" name="" id=""></td>
            <td class="etiqueta"><span>$</span><input type="number" name="" id=""></td>
        </tr>
    </tbody>
</table>
<div class="botones-agregar-fila">
    <button type="button" class="" id="nuevaFilaActividadesProduccion">Agregar Fila</button>
    <button type="button" class="" id="eliminarFilaActividadesProduccion">Eliminar Fila</button>
</div>

<table id="tablaOtrosCostos">
    <thead>
        <tr>
            <th>Otros Costos ($/HA)</th>
            <th>Precio Unitario</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><input type="text" name="" id="" value="RIEGO"></td>
            <td class="etiqueta"><span>$</span><input type="number" name="" id=""></td>
            <td class="etiqueta"><span>$</span><input type="number" name="" id=""></td>
        </tr>
        <tr>
            <td><input type="text" name="" id="" value="PODA"></td>
            <td class="etiqueta"><span>$</span><input type="number" name="" id=""></td>
            <td class="etiqueta"><span>$</span><input type="number" name="" id=""></td>
        </tr>
    </tbody>
</table>
<div class="botones-agregar-fila">
    <button type="button" class="" id="nuevaFilaOtosCostos">Agregar Fila</button>
    <button type="button" class="" id="eliminarFilaOtosCostos">Eliminar Fila</button>
</div>

<table id="tablaCostoAnualEstablecimientoPlantacion">
    <thead>
        <tr>
            <th>Costo Anual De establecimiento de la plantación</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><input type="text" name="" id=""></td>
            <td><span>$</span><input type="number" name="" id="" class="costoAnual"></td>
        </tr>
    </tbody>
</table>
<div class="botones-agregar-fila">
    <button type="button" class="" id="nuevaFilaCostoAnualEstablecimientoPlantacion">Agregar Fila</button>
    <button type="button" class="" id="eliminarFilaCostoAnualEstablecimientoPlantacion">Eliminar Fila</button>
</div>

<table id="tablaTotalActividadesProduccion">
    <tr>
        <th>Costo Anual De establecimiento de la plantación</th>
        <th id="costoTotalEst"></th>
    </tr>
    <tr>
        <th>Depreciacíon Anual</th>
        <th id="depreciacionAnual"></th>
    </tr>
    <tr>
        <th>Depreciacíon Anual HA</th>
        <th id="depreciacionAnualHa"></th>
    </tr>
</table>