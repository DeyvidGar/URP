<?php include_once __DIR__.'/templates/header.php';?>

<?php if(count($colectas) === 0) {?>
    <p class="no-colectas">Aun no tienes colectas realizadas. <a href="/nueva-colecta">Comienza creando una.</a></p>
<?php } else { ?>

    <ul class="listado-colectas">
        <?php foreach($colectas as $key => $value):?>
            <li>
                <a class="colecta" href="/colecta?id=<?php echo $value->url;?>">
                    Región: <?php echo $value->panel;?>
                </a>
            </li>
        <?php endforeach;?>
    </ul>

<?php } ?>

<?php include_once __DIR__.'/templates/footer.php';?>