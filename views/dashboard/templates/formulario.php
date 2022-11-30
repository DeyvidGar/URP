<div class="campo">
    <label for="nombreCultivo">Nombre del cultivo</label>
    <input
        class="input-text"
        type="text"
        name="nombreCultivo"
        id="nombreCultivo"
        value="Limon Persa"
    />
</div>
<div class="campo">
    <label for="estado">Estado de la República</label>
    <select id="estado" name="estado">
        <?php include_once __DIR__.'/estadosRepublica.php';?>
    </select>
</div>
<div class="campo">
    <label for="region">Región:</label>
    <input
        class="input-text"
        type="text"
        name="region"
        id="region"
        value="<?php echo $colecta->region;?>"
        placeholder="Ej. Centro"
    />
</div>
<div class="campo">
    <label for="fecha">Fecha:</label>
    <input
        type="date"
        name="fechaPanel"
        id="fecha"
        value="<?php echo date('Y-m-d',);?>"
    />
</div>
<div class="campo">
    <label for="panel">Panel:</label>
    <input
        class="input-text"
        type="text"
        name="panel"
        value="<?php echo $colecta->panel;?>"
        id="panel"
        placeholder="Ej. Velp7.5"
        disabled
    />
</div>
<div class="campo">
    <label for="proyecto">Descripción:</label>
    <textarea name="descripcion" id="descripcion" cols="80" rows="10"><?php // echo $colecta->descripcion;?></textarea>
</div>