const menuMobile = document.querySelector('#mobile-menu');
const sidebarmobile = document.querySelector('.sidebar');


if(menuMobile){
    menuMobile.addEventListener('click', function () {
        sidebarmobile.classList.add('mostrar'); // con toogle quita y pone la clase
    })
    sidebarmobile.addEventListener('click', function(){
        // sidebarMobile.classList.remove('mostrar');
        sidebarmobile.classList.add('ocultar'); // con toogle quita y pone la clase

        setTimeout(() => {
            sidebarmobile.classList.remove('mostrar');
            sidebarmobile.classList.remove('ocultar');
        }, 500);
    })
}

//ELIMINANDO LA CLASE DE MOSTRAR DEPENDIENDO EL TAMANIO DE LA PANTALLA
window.addEventListener('resize', function(){
    const anchoPantalla = document.body.clientWidth;
    if(anchoPantalla >= 760){
        sidebarmobile.classList.remove('mostrar');
    }
})

//boton remover alerta
const botonesAlerta = document.querySelectorAll('#cerrar-alerta');
if(botonesAlerta){
    botonesAlerta.forEach( alerta => { //iteramos en las multiples alertas
        alerta.addEventListener('click', botonCerrarAlerta); // de esta forma enviamos evento
    });

}

function botonCerrarAlerta(e){
    //extraemos el id de la alerta
    const alerta = e.target.parentElement.dataset.idAlerta;
    //seleccionar y remover la alerta que dio click
    const alertaActual = document.querySelector(`[data-id-alerta="${alerta}"]`);
    alertaActual.remove();
}