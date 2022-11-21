const colecta = {
    arboles: []
}

document.addEventListener('DOMContentLoaded', () => {
    colectaArbol();
});

function colectaArbol(){
    const tablaArbol = document.querySelector('#tablaVariedadArboles');
    const arbol = {}; //un objeto por cada arbol
    const { arboles } = colecta;

    //iterando tr
    // console.log(tablaArbol.rows.length) numeros de filas
    for( let i = 1 ; i < tablaArbol.rows.length ; i++ ){
        //iterando por td
        // console.log(tablaArbol.rows[i].cells.length) //numero de columnas


        for( let l = 0 ; l < tablaArbol.rows[i].cells.length ; l++ ){
            // console.log(tablaArbol.rows[i].cells[l])//muestra la celda

            const input = tablaArbol.rows[i].cells[l].firstChild;//muestra la celda
            if(input){
                input.addEventListener('input', function(e){
                    // console.log(e.target.value)
                    if(l < 1 ){
                        arbol.variedad = tablaArbol.rows[i].cells[l].firstChild.value;
                        // console.log(tablaArbol.rows[i].cells[l].firstChild.value); //entramos al input de td
                    } else {
                        valorActual = parseInt(tablaArbol.rows[i].cells[l].firstChild.value);
                        arbol.numArboles = valorActual;

                        mostrarPorcentaje();
                    }
                    // console.log(colecta)
                })
            }
        }
        // termina iteracion fila
        colecta.arboles = [...arboles, arbol];
    }
}

function sumatoriaArboles(){
    const tablaArbol = document.querySelector('#tablaVariedadArboles');
    let sumatoria = 0;

    //iterando tr
    for( let i = 1 ; i < tablaArbol.rows.length ; i++ ){
        //iterando por td
        //de esta forma solo iteramos la columna que ingresemos y acumulamos sus valores parceandolos a enteros
        // console.log(tablaArbol.rows[i].cells[1].firstChild.value)//muestra la celda
        sumatoria += parseInt(tablaArbol.rows[i].cells[1].firstChild.value)
    }
    return sumatoria;
}

function mostrarPorcentaje(){
    const tablaArbol = document.querySelector('#tablaVariedadArboles');

    for( let i = 1 ; i < tablaArbol.rows.length ; i++ ){
        //iteramos solo la columna del final
        for( let l = 2 ; l < tablaArbol.rows[i].cells.length ; l++ ){
            const sumatoria = sumatoriaArboles();
            const valor = parseInt(tablaArbol.rows[i].cells[l-1].firstChild.value) //valor del no arboles de es misma fila
            const formula = (valor/sumatoria)*100;
            const formulaDosDecimales = formula.toFixed(2) ;

            const td = tablaArbol.rows[i].cells[l]; //columna total

            // console.log(formula)
            td.innerHTML = `<span>% ${formulaDosDecimales}</span>`;
        }
    }
}
// -------------- FIN COLECTA ARBOL


// -------------- FUNCION BOTON AGREGAR FILAS EN VARIEDAD ARBOLES
const botonAgregarFilaVariedadArboles = document.querySelector('#nuevaFilaVariedad');

botonAgregarFilaVariedadArboles.addEventListener('click', ()=>{
    filaVariedadArboles();
})

function filaVariedadArboles() {
    // Obtiene una referencia a la tabla en la posicion dentro del body
    const tablaVariedadArboles = document.querySelector('#tablaVariedadArboles').children[1];
    const tr = document.createElement('TR');
    const td1 = document.createElement('TD');
    const td2 = document.createElement('TD');
    const td3 = document.createElement('TD');
    const input = document.createElement('INPUT');
    const input2 = document.createElement('INPUT');

    input.setAttribute('type', 'text');
    input.setAttribute('name', 'arboles[variedad]');
    input.setAttribute('required', '');
    input2.setAttribute('type', 'number');
    input2.setAttribute('required', '');
    input2.setAttribute('name', 'arboles[variedad]');
    td3.classList.add('total');

    td1.appendChild(input);
    td2.appendChild(input2);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tablaVariedadArboles.appendChild(tr);

    // console.log(colecta)
    colectaArbol();
}

// FUNCION BOTON ELIMINAR FILA
const botonEliminarFilaVariedad = document.querySelector('#eliminarFilaVariedad');

botonEliminarFilaVariedad.addEventListener('click', ()=>{
    eliminarFilaVariedad();
})

function eliminarFilaVariedad(){
    const tablaVariedadArboles = document.querySelector('#tablaVariedadArboles').children[1];
    const ultimaFila = tablaVariedadArboles.rows.length-1;
    // console.log(tablaVariedadArboles.children.length)//elemento tr, el ultima agregado todo: borrar elemeto y borrar el objeto del arrglo de colecta.arbol
    const tr = tablaVariedadArboles.children[ultimaFila]

    //solo se eliminan las filas pero debe existir una almenos
    if(tablaVariedadArboles.children.length > 1){
        tr.remove(); //remover elemento tr de la tabla
        colecta.arboles.pop(); //eliminar el ultimo valor del arrglo de colecta
        // console.log('eliminando', colecta)
    }
}