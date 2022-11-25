<table class="" id="tablaVariedadArboles">
    <thead>
        <tr>
            <th>Variedad</th>
            <th>No. Árboles</th>
            <th>% de superficie</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td><input type="text" name="arboles[variedad]" placeholder="Ej. Carrizo" required></td>
            <td><input type="number" name="arboles[numArboles]" required></td>
            <td class="total"></td>
        </tr>
    </tbody>

    <tfoot>
        <tr>
            <th>Total Arboles</th>
            <th id="totalArboles"></th>
        </tr>
    </tfoot>
</table>
<div class="botones-agregar-fila">
    <button type="" class="boton-agregar-fila" id="nuevaFilaVariedad">Agregar Fila</button>
    <button type="" class="boton-eliminar-fila" id="eliminarFilaVariedad">Eliminar Fila</button>
</div>
