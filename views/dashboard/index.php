<?php include_once __DIR__.'/templates/header.php';?>

<?php if(count($proyectos) === 0) {?>
    <p class="no-proyectos">Aun no tienes proyectos. <a href="/nuevo-proyecto">Comienza creado uno.</a></p>
<?php } else { ?>

    <ul class="listado-proyectos">
        <?php foreach($proyectos as $key => $value):?>
            <li>
                <a class="proyecto" href="/proyecto?id=<?php echo $value->url;?>">
                    <?php echo $value->proyecto;?>
                </a>
            </li>
        <?php endforeach;?>
    </ul>

<?php } ?>

<?php include_once __DIR__.'/templates/footer.php';?>