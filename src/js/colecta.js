const colecta = {
    arboles: [],
    patronCultivos:{
        hectareaRiego: '',
        hectareaTemporal: '',
        sinUso: '' //TODO: PREGUNTAR ESTA PARTE
    }
}

// ----------- COLECTA ARBOL
document.addEventListener('DOMContentLoaded', () => {
    colectaArbol();
    colectaPatronCultivos();
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

                        dividirPorcentaje('#tablaVariedadArboles',1, 2);
                    }
                    // console.log(colecta)
                })
            }
        }
        // termina iteracion fila
        colecta.arboles = [...arboles, arbol];
    }
}
// -------------- FIN COLECTA ARBOL

// -------------- COLECTA PATRON CULTIVOS
function colectaPatronCultivos(){
    const tablaPatronCultivos = document.querySelector('#tablaPatronCultivos')
    // console.log(tablaPatronCultivos.children[1])// columna limon persa
    // console.log(tablaPatronCultivos.children[1].children.length)// num de filas en el tbody

    for( let i = 0 ; i < tablaPatronCultivos.children[1].children.length ; i++ ){ //iteramos filas

        const td = tablaPatronCultivos.children[1].children[i].cells[1]; //td de la comulna 2
        const input = td.children[0]

        // console.log(td.children[0])
        input.addEventListener('input', ()=>{
            const valorInputHectareaRiego = document.querySelector('#hectareaRiegoInput').value;
            const valorInputHectareaTemporal = document.querySelector('#hectareaTemporalInput').value;
            const valorInputHectareaSinUso = document.querySelector('#hectareaSinUsoInput').value;

            colecta.patronCultivos.hectareaRiego = valorInputHectareaRiego;
            colecta.patronCultivos.hectareaTemporal = valorInputHectareaTemporal;
            colecta.patronCultivos.sinUso = valorInputHectareaSinUso;

            // console.log(colecta)
            // if(i < 2) {
            //     dividirPorcentaje('#tablaPatronCultivos',1,2);
                mostrarSumatoriaPatronCultivos();
            // }

            // console.log(colecta)
        })
    }
}

function mostrarSumatoriaPatronCultivos(){
    const superficeCultivo = document.querySelector('#superficieCultivo');
    const superficeCultivoPorcentaje = document.querySelector('#superficieCultivoPorcentaje');
    const hectareaRiegoPorcentaje = document.querySelector('#hectareaRiegoPorcentaje');
    const hectareaTemporalPorcentaje = document.querySelector('#hectareaTemporalPorcentaje');
    const sinUsoPorcentaje = document.querySelector('#hectareaSinUsoPorcentaje');
    const totalHectareas = document.querySelector('#totalHectareas');
    const totalHectareasPorcentaje = document.querySelector('#totalHectareasPorcentaje');

    let superficeCultivoValue = parseFloat(document.querySelector('#superficieCultivo').textContent);
    let hectareaRiego = parseFloat(document.querySelector('#hectareaRiegoInput').value);
    let hectareaTemporal = parseFloat(document.querySelector('#hectareaTemporalInput').value);
    let sinUso = parseFloat(document.querySelector('#hectareaSinUsoInput').value);
    let totalHectareasValue = parseFloat(document.querySelector('#totalHectareas').textContent);

    let superficeCultivoPorcentajeValue = 0;
    let hectariaRiegoPorcentaje = 0;
    let hectariaTemporalPorcentaje = 0;
    let sinUsoPorcentajeValue = 0;
    let totalHectareasPorcentajeValue = 0;

    superficeCultivoValue = hectareaRiego + hectareaTemporal;
    totalHectareasValue = superficeCultivoValue + sinUso;
    superficeCultivoPorcentajeValue = (superficeCultivoValue/totalHectareasValue)*100;
    hectariaRiegoPorcentaje = (hectareaRiego/superficeCultivoValue)*100;
    hectariaTemporalPorcentaje = (hectareaTemporal/superficeCultivoValue)*100;
    sinUsoPorcentajeValue = (sinUso/totalHectareasValue)*100;
    totalHectareasPorcentajeValue = superficeCultivoPorcentajeValue + sinUsoPorcentajeValue;

    superficeCultivo.textContent = superficeCultivoValue;
    superficeCultivoPorcentaje.textContent = superficeCultivoPorcentajeValue.toFixed(2);
    hectareaRiegoPorcentaje.textContent = hectariaRiegoPorcentaje.toFixed(2);
    hectareaTemporalPorcentaje.textContent = hectariaTemporalPorcentaje.toFixed(2);
    sinUsoPorcentaje.textContent = sinUsoPorcentajeValue.toFixed(2);
    totalHectareas.textContent = totalHectareasValue;
    totalHectareasPorcentaje.textContent = totalHectareasPorcentajeValue.toFixed(2);
}
// -------------- FIN COLECTA PATRON CULTIVOS

// ------------- FUNCION SUMAR COLUMNA INPUTS
function sumarColumnaInputs(tabla, columna){
    const tablaArbol = document.querySelector(tabla);
    let sumatoria = 0;

    //iterando tr
    // console.log(tablaArbol.children[1].children.length) //num de filas en el tbody, donde estan los td inputs
    for( let i = 0 ; i < tablaArbol.children[1].children.length ; i++ ){
        //iterando por td
        //de esta forma solo iteramos la columna que ingresemos y acumulamos sus valores parceandolos a enteros
        // console.log(tablaArbol.children[1].rows[i].cells[columna]) //obtenemos los valores de los inputs en el tbody
        sumatoria += parseInt(tablaArbol.children[1].rows[i].cells[columna].firstChild.value)
        // sumatoria += parseInt(tablaArbol.rows[i].cells[comulna].firstChild.value)
    }
    return sumatoria;
}
// ------------- FIN FUNCION SUMAR COLUMNA INPUTS

// ------------ FUNCION MOSTRAR PORCENTAJES
function dividirPorcentaje(tabla, columnaSumatoria, columnaInsertarValores){
    const tablaArbol = document.querySelector(tabla);
    // console.log(tablaArbol.children[1].children.length)//numero de filas en tbody
    // todo:iterar tabla y mostrar resultado

    for( let i = 0 ; i < tablaArbol.children[1].children.length ; i++ ){
        // console.log(tablaArbol.children[1].children[i].cells.length)//numero de columnas
        //iteramos solo la columna del final
        for( let l = columnaInsertarValores ; l < tablaArbol.children[1].children[i].cells.length ; l++ ){
            const sumatoria = sumarColumnaInputs(tabla, columnaSumatoria);
            const valor = parseInt(tablaArbol.children[1].children[i].cells[l-1].firstChild.value) //valor del no arboles de es misma fila
            const formula = (valor/sumatoria)*100;
            const formulaDosDecimales = formula.toFixed(2) ;
            const td = tablaArbol.children[1].children[i].cells[l]; //columna total

            // console.log(formula)
            td.innerHTML = `<span>% ${formulaDosDecimales}</span>`;
        }
    }
}
// ------------ FIN FUNCION MOSTRAR PORCENTAJES

// -------------- FUNCION BOTON AGREGAR Y ELIMINAR FILAS EN VARIEDAD ARBOLES
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
    if(tablaVariedadArboles.children.length > 0){
        tr.remove(); //remover elemento tr de la tabla
        colecta.arboles.pop(); //eliminar el ultimo valor del arrglo de colecta
        // console.log('eliminando', colecta)
    }
}
// -------------- FIN FUNCION BOTON AGREGAR Y ELIMINAR FILAS EN VARIEDAD ARBOLES