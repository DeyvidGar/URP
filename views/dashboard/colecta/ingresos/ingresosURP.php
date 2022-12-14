<div class="columnas">
    <div class="columna">
        <table>
            <thead>
                <tr>
                    <th colspan="2">Ingreso de la urp</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Rendimiento (Ton/Ha)</td>
                    <td><input type="number" name="" class="ingresosUrpInputs" required></td>
                </tr>
                <tr>
                    <td>Cantidad Producida Total URP</td>
                    <td id="cantidadProducidaUrp"></td>
                </tr>
                <tr>
                    <td>Porcentaje Vendido de la Producción</td>
                    <td><input type="number" name="" class="ingresosUrpInputs" required><span>%</span></td>
                </tr>
                <tr>
                    <td>Cantidad Vendida (Ton)</td>
                    <td id="cantidadVendida"></td>
                </tr>
                <tr>
                    <td>Precio ($/Ton)</td>
                    <td><span>$</span><input type="number" name="" class="ingresosUrpInputs" required></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>Subtotal</td>
                    <td id="subtotalIngresosUrp"></td>
                </tr>
            </tfoot>
        </table>
        <?php include_once __DIR__.'/subproductos.php';?>
    </div>
    <div class="columna">
        <table>
            <tr>
                <th>Rendimiento real para venta(TON/HA)</th>
                <td><input type="number" name="" class="ingresosUrpInputs" required></td>
            </tr>
            <tr>
                <th>Ingreso real por colecta</th>
                <td id="ingresoReal"></td>
            </tr>
            <tr>
                <th>Ingresos totales por cultivo</th>
                <td id="ingresosTotalesCultivo"></td>
            </tr>
        </table>
    </div>
</div>
