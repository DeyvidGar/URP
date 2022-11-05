<aside class="sidebar">
    <h2>URP</h2>

    <nav class="sidebar-nav">
        <a class="<?php echo ($titulo === 'Proyectos') ? 'activo' : ''; ?>" href="/dashboard">Proyectos</a>
        <a class="<?php echo ($titulo === 'Nuevo Proyecto') ? 'activo' : ''; ?>" href="/nuevo-proyecto">Nuevo Proyecto</a>
        <a class="<?php echo ($titulo === 'Perfil') ? 'activo' : ''; ?>" href="/perfil">Perfil</a>
    </nav>

    <div class="cerrar-session-mobile">
        <a href="/logout">Cerrar Sesion</a>
    </div>
</aside>
