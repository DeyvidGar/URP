<aside class="sidebar">
    <h2>URP</h2>

    <nav class="sidebar-nav">
        <a class="<?php echo ($titulo === 'Nueva Colecta') ? 'activo-nueva-colecta' : ''; ?> crear-colecta" href="/nueva-colecta"><span>&#43; Nueva Colecta</span></a>
        <a class="<?php echo ($titulo === 'Colecta') ? 'activo' : ''; ?>" href="/colecta">Colecta</a>
        <a class="<?php echo ($titulo === 'Colectas') ? 'activo' : ''; ?>" href="/dashboard">Colectas</a>
    </nav>

    <div class="cerrar-session-mobile">
        <a href="/logout">Cerrar Sesion</a>
    </div>
</aside>
