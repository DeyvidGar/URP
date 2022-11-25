//variable global, almacenara el html data-paso de la pagina
let paso=1;

//PARA LA PAGINACION DEBEMOS HACER UN CALCULO DEPEBDIENDO DE LOS RESULTADO OBTENIDOS EN LA BD
//MARCAMOS UN EL LIMITE Y EL INCIO DE NUESTRA NAVEGACION, YA QUE ESTE PROYECTO CUENTA CON SOLO 3 FASES LAS MARCAMOS EN LAS SIGUIENTES VARIABLES
const pasoInicial = 1;
const pasoFinal = 9; //el paso final por ejemplo, si nuestra bd tiene 500 resultados lo dividiriamos entre 15 el resultado seria el paso final

//creamos el objeto de la cita que vamos a insertar en la BD
const obj = {
}

document.addEventListener('DOMContentLoaded', () => {
    //mostramos el paso que esta asignado
    mostrarSeccion();

    //cambiar la seccion cuando presionen los tabs
    tabs();

    //mostrar o hacer invisible los botones de la paginacion
    botonesPaginacion();

    //funccion botones
    paginaSiguiente();
    paginaAnterior();

});


function mostrarSeccion(){

    //despues de crear el proceso de mostrar, creamos despues el de oculatar el elemento ya que despues de mostrarlos se mantiene visibles
    const seccionAnterior = document.querySelector('.mostrar-nav'); //seleccionamos si hay una clase con el nombre de mostrar

    if(seccionAnterior){
        seccionAnterior.classList.remove('mostrar-nav');
    }

    const seccion = `#paso-${paso}`; //creamos el selector con el paso en que se encuentre

    const mostrar = document.querySelector(seccion); //seleccionamos el elemento a modificar

    mostrar.classList.add('mostrar-nav');

    // Resaltar el tab actual
    const desactivarActual = document.querySelector('.actual');
    if(desactivarActual){
        desactivarActual.classList.remove('actual');
    }


    const activarActual = document.querySelector(`[data-paso="${paso}"]`);

    activarActual.classList.add('actual');
}

function tabs(){
    //selccinoar los elemento que queremos utilziar
    const botones = document.querySelectorAll('.tabs button');

    //debido a que es un nodelist iteramos en cada uno de ellos
    botones.forEach( boton => {

        //por cada elemento escuchamos su evento por los clicks que den en cada uno de ellos
        boton.addEventListener('click', (e) => {
            // console.log(e); //informacion del elemento al que le dimons click

            //CON EL ELEMENTO DATA-PASO HTML 5 NOS PERMITE CREAR ESTE ATRIBUTO Y ASI LO PODEMOS IDENTIFICAR EN CONSOLA
            // console.log(e.target.dataset.paso);

            //la posicion por default de paso en 1, es decir estamos en el paso 1 de nuestro proceso de cita, este paso cambia si da click en algun boton
            paso = parseInt(e.target.dataset.paso);

            //Estas funciones se mandan a llamar en cada clik de boton
            mostrarSeccion();

            //mostramos o hacemos visibles los botones de la paginancion
            botonesPaginacion();
        })

    });
}

function botonesPaginacion(){
    const botonAnterior = document.querySelector('#boton-anterior');
    const botonSiguiente = document.querySelector('#boton-siguiente');

    if(paso === 1){
        botonAnterior.classList.add('ocultar-paginacion');
        botonSiguiente.classList.remove('ocultar-paginacion');
    } else if (paso == 9){
        botonSiguiente.classList.add('ocultar-paginacion');
        botonAnterior.classList.remove('ocultar-paginacion');

        //cuando se cambie de pagina precionando cualquier boton(boton siguiente, barra tab) llamamos a la funcion mostrar resuemn
        mostrarResumen();
    } else {
        botonSiguiente.classList.remove('ocultar-paginacion');
        botonAnterior.classList.remove('ocultar-paginacion');
    }
}

function paginaAnterior(){
    const botonAnterior = document.querySelector('#boton-anterior');

    botonAnterior.addEventListener('click', () => {

        paso--;

        if(paso<pasoInicial) {
            paso = pasoInicial;
            mostrarSeccion();
            botonesPaginacion();
        }

        mostrarSeccion();
        botonesPaginacion();
        // console.log(paso);
    });
}

function paginaSiguiente(){

    const botonSiguiente = document.querySelector('#boton-siguiente');

    botonSiguiente.addEventListener('click', () => {
        // console.log(paso)
        paso++;

        if(paso>pasoFinal) {
            paso = pasoFinal;
        }

        mostrarSeccion();
        botonesPaginacion();

        // console.log(paso);
    });
}