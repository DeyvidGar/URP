<?php include_once __DIR__.'/templates/header.php';?>

    <div class="contenedor-sm">
        <div class="contenedor-nueva-tarea">
            <button
                type="buttom"
                class="agregar-tarea"
                id="agregar-tarea" 
            >
                &#43; Nueva Tarea
            </button>
        </div>

        <div class="filtros" id="filtros">
            <div class="filtros-input">
                <h2>Filtro:</h2>
                <div class="campo">
                    <label for="todas">Todas</label>
                    <input 
                        type="radio"
                        id="todas"
                        name="filtro"
                        value=""
                        checked
                    />
                </div> <!--fin campo-->

                <div class="campo">
                    <label for="completadas">Completadas</label>
                    <input 
                        type="radio"
                        id="completadas"
                        name="filtro"
                        value="1"
                    />
                </div> <!--fin campo-->

                <div class="campo">
                    <label for="pendientes">Pendientes</label>
                    <input 
                        type="radio"
                        id="pendientes"
                        name="filtro"
                        value="0"
                    />
                </div> <!--fin campo-->
            </div>
        </div>

        <ul id="listado-tareas" class="listado-tareas"></ul>
    </div>

<?php include_once __DIR__.'/templates/footer.php';

$script .= "<script src='build/js/tareas.js'></script>
<script src='//cdn.jsdelivr.net/npm/sweetalert2@11'></script>";
?>