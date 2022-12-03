<table id="tablaPatronCultivos">
    <thead>
        <tr>
            <th>Patrón de Cultivos de la URP</th>
            <th>Limón persa</th>
            <th>%</th>
        </tr>
        <tr>
            <td>Superficie de Cultivo</td>
            <td id="superficieCultivo"></td>
            <td id="superficieCultivoPorcentaje"></td>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Hectarea de Riego</td>
            <td><input type="number" name="patronCultivos[hectareaRiego]" id="hectareaRiegoInput"></td>
            <td class="total" id="hectareaRiegoPorcentaje"></td>
        </tr>

        <tr>
            <td>Hetarea Temporal</td>
            <td><input type="number" name="patronCultivos[hectareaTemporal]" id="hectareaTemporalInput"></td>
            <td class="total" id="hectareaTemporalPorcentaje"></td>
        </tr>

        <tr>
            <td>Sin uso</td>
            <td><input type="number" name="patronCultivos[hectareaTemporal]" id="hectareaSinUsoInput"></td>
            <td class="total" id="hectareaSinUsoPorcentaje"></td>
        </tr>
    </tbody>

    <tfoot>
        <tr>
            <td>Total de hectareas de la URPs</td>
            <td id="totalHectareas"></td>
            <td id="totalHectareasPorcentaje"></td>
        </tr>
    </tfoot>
</table>