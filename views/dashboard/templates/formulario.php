<div class="campo">
    <label for="proyecto">Región:</label>
    <input
        type="text"
        name="region"
        id="region"
        value="<?php echo $colecta->region;?>"
        placeholder="Ej. Centro"
    >
</div>
<div class="campo">
    <label for="proyecto">Panel:</label>
    <input
        type="text"
        name="panel"
        value="<?php echo $colecta->panel;?>"
        id="panel"
        placeholder="Ej. Velp7.5"
    >
</div>
<div class="campo">
    <label for="proyecto">Fecha:</label>
    <input
        type="date"
        name="fechaPanel"
        id="fecha"
        placeholder="Ej. Centro"
        value="<?php echo date('Y-m-d');?>"
    >
</div>
<div class="campo">
    <label for="proyecto">Descripción:</label>
    <textarea name="descripcion" id="descripcion" cols="80" rows="10">
    <?php echo $colecta->descripcion;?>
    </textarea>
</div>