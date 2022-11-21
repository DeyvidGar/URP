<aside class="sidebar">
    <h2>URP</h2>

    <nav class="sidebar-nav">
        <a class="<?php echo ($titulo === 'Nuevo Proyecto') ? 'activo' : ''; ?> crear-proyecto" href="/nueva-colecta"><span>&#43; Nueva Colecta</span></a>
        <a class="<?php echo ($titulo === 'colecta') ? 'activo' : ''; ?>" href="/colecta">Colecta</a>
        <a class="<?php echo ($titulo === 'Proyectos') ? 'activo' : ''; ?>" href="/dashboard">Colectas</a>
        <!-- <a class="<?php //echo ($titulo === 'Perfil') ? 'activo' : ''; ?>" href="/perfil">Perfil</a> -->
    </nav>

    <div class="cerrar-session-mobile">
        <a href="/logout">Cerrar Sesion</a>
    </div>
</aside>
