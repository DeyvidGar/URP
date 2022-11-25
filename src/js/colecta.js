const colecta = {
    arboles: [],
    patronCultivos:{
        hectareaRiego: 0,
        hectareaTemporal: 0,
        sinUso: 0 //TODO: PREGUNTAR ESTA PARTE
    },
    superficieUrp:{
        riegoPrivada: 0,
        riegoEjidal: 0,
        riegoPrestada: 0,
        riegoRentada: 0,
        temporalPrivada: 0,
        temporalEjidal: 0,
        temporalPrestada: 0,
        temporalRentada: 0,
        usoPrivada: 0,
        usoEjidal: 0,
        usoPrestada: 0,
        usoRentada: 0
    },
    valorTierra:{
        hectareaPropiedadValorHA: 0,
        hectareaEjidalesValorHA: 0,
        hectareaPrestadasValorHA: 0,
        hectareaSinUsoValorHA: 0
    },
    //todo:faltaria checar valor de la plantacion, acticidades de procuddion
    construcciones: [],
    vehiculos: []
}

document.addEventListener('DOMContentLoaded', () => {
    colectaArbol();

    colectaPatronCultivos();
    mostrarSumatoriaPatronCultivos();//

    colectaSuperficeUrp();
    almacenarDatosSuperfice();
    sumaAreaCultivadaSuperficeUrp();
    sumarTotalHectareasFilas();
    sumarTotalHA();
    llenarValorTierra();

    colectaValorTierra();
    calcularValorTotalValorTierra();
    sumatoriaTotalSuperficeValorTierra();

    //todo:faltaria checar valor de la plantacion, acticidades de procuddion

    colectaConstrucciones();
    almacenarDatosConstrucciones();
});

// ---------- COLECTA ARBOL
function colectaArbol(){
    const tablaArbol = document.querySelector('#tablaVariedadArboles').children[1];
    const arbol = {}; //un objeto por cada arbol
    const { arboles } = colecta;

    //iterando tr
    // console.log(tablaArbol.rows.length) numeros de filas
    for( let i = 0 ; i < tablaArbol.rows.length ; i++ ){
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
                        arbol.numArboles = parseInt(tablaArbol.rows[i].cells[l].firstChild.value);
                        dividirPorcentaje('#tablaVariedadArboles',1, 2);
                        sumarArboles();
                    }
                    // console.log(colecta)
                })
            }
        }
        // termina iteracion fila
        colecta.arboles = [...arboles, arbol];
    }
}

function sumarArboles(){
    //seleccionar de la tabla variedadarboles los inputs de tipo number
    const inputsArboles = document.querySelectorAll("#tablaVariedadArboles input[type='number']")
    const totalArboles = document.querySelector('#totalArboles');
    let acumulador = 0;

    inputsArboles.forEach(input => {
        acumulador += parseFloat(input.value);
    });

    totalArboles.textContent = acumulador;
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

            colecta.patronCultivos.hectareaRiego = parseFloat(valorInputHectareaRiego);
            colecta.patronCultivos.hectareaTemporal = parseFloat(valorInputHectareaTemporal);
            colecta.patronCultivos.sinUso = parseFloat(valorInputHectareaSinUso);

            mostrarSumatoriaPatronCultivos();
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
    superficeCultivoPorcentaje.textContent = superficeCultivoPorcentajeValue ? superficeCultivoPorcentajeValue.toFixed(2) : '';
    hectareaRiegoPorcentaje.textContent = hectariaRiegoPorcentaje ? hectariaRiegoPorcentaje.toFixed(2) : '';
    hectareaTemporalPorcentaje.textContent = hectariaTemporalPorcentaje ? hectariaTemporalPorcentaje.toFixed(2) : '';
    sinUsoPorcentaje.textContent = sinUsoPorcentajeValue ? sinUsoPorcentajeValue.toFixed(2) : '';
    totalHectareas.textContent = totalHectareasValue;
    totalHectareasPorcentaje.textContent = totalHectareasPorcentajeValue ? totalHectareasPorcentajeValue.toFixed(2) : '';
}
// -------------- FIN COLECTA PATRON CULTIVOS

// ------------- COLECTA SUPERFICIE URP
function colectaSuperficeUrp(){
    const inputsSuperficeUrp = document.querySelectorAll('.inputSuperficeUrp');
    // const tbody =
    inputsSuperficeUrp.forEach(input => {
        input.addEventListener('input', ()=>{
            almacenarDatosSuperfice();
            sumaAreaCultivadaSuperficeUrp();
            sumarTotalHectareasFilas();
            sumarTotalHA();

            //para la tabla que depende de estos valores (valor de la tierra)
            llenarValorTierra();
            calcularValorTotalValorTierra();
            sumatoriaTotalSuperficeValorTierra()
        })
    });
}

function almacenarDatosSuperfice(){
    const inputsSuperficeUrp = document.querySelectorAll('.inputSuperficeUrp');
    const {superficieUrp} = colecta;

    const keys = Object.keys(superficieUrp);//indices del objet
    let key;
    for (let i = 0; i < keys.length; i++) {
        key = keys[i]; //asignamos el indice acutal auna variable
        superficieUrp[key] = parseFloat(inputsSuperficeUrp[i].value)//en el objeto busca la coincidencia con el indice y le asigna el valor de nuestro arreglo de inputs
    }
    // console.log(colecta)
}

function sumaAreaCultivadaSuperficeUrp(){
    const inputsSuperficeUrp = document.querySelectorAll('.inputSuperficeUrp');
    const td = document.querySelectorAll('.sumaAreaCultivada');

    for( let i=0; i< td.length; i++){
        if ( i === 0 ) td[0].textContent = parseFloat(inputsSuperficeUrp[0].value) + parseFloat(inputsSuperficeUrp[4].value)
        if ( i === 1 ) td[1].textContent = parseFloat(inputsSuperficeUrp[1].value) + parseFloat(inputsSuperficeUrp[5].value)
        if ( i === 2 ) td[2].textContent = parseFloat(inputsSuperficeUrp[2].value) + parseFloat(inputsSuperficeUrp[6].value)
        if ( i === 3 ) td[3].textContent = parseFloat(inputsSuperficeUrp[3].value) + parseFloat(inputsSuperficeUrp[7].value)
    }
}

function sumarTotalHectareasFilas(){
    const tabla = document.querySelector('#tablaSuperficeUrp').children[1];

    //iteramos por filas
    for (let i = 0; i < tabla.rows.length ; i++) {
        let acumulador = 0;

        for (let l = 1; l < tabla.rows[i].cells.length - 1; l++) { //iteracion por columnas
            if( i === 0 ){ //columna sin input
                const element = tabla.rows[i].cells[l];//td
                acumulador += parseFloat(element.textContent)
            } else { //columnas con input
                const element = tabla.rows[i].cells[l].firstChild;//input
                acumulador += parseFloat(element.value)
            }

        }
        const ultimaColumna = tabla.rows[i].cells.length-1; //numero de columnas
        const total = tabla.rows[i].cells[ultimaColumna];
        total.textContent = acumulador
    }
}

function sumarTotalHA(){
    const tabla = document.querySelector('#tablaSuperficeUrp').children[1]

    //iteramos por columnas
    for (let l = 1; l < tabla.rows[1].cells.length ; l++) {
        let acumulador = 0;

        for (let i = 1; i < tabla.rows.length ; i++) {

            const ultimaColumnaValue = tabla.rows[1].cells.length -1;
            if( l === ultimaColumnaValue ){ //cuando este en la ultima columna
                const element = tabla.rows[i].cells[l];//td
                acumulador += parseFloat(element.textContent)
            } else {
                const element = tabla.rows[i].cells[l].firstChild;//input
                acumulador += parseFloat(element.value)
            }

        }
        const tfoot = document.querySelector('#tablaSuperficeUrp').children[2].firstElementChild.cells[l]
        tfoot.textContent = acumulador
    }
}
// ------------- FIN COLECTA SUPERFICIE URP

// ------------- COLECTA VALOR TIERRA
function llenarValorTierra(){
    //valores
    const toatlHA = document.querySelector('#totalHa').textContent;
    const totalHectareasPropiasPrivada = document.querySelector('#totalHectareasPropiasPrivada').textContent;
    const totalHectareasPropiasEjidales = document.querySelector('#totalHectareasPropiasEjidales').textContent;
    const totalHectareasNoPropiasPrestadas = document.querySelector('#totalHectareasNoPropiasPrestadas').textContent;
    const totalHectareasNoPropiasRentadas = document.querySelector('#totalHectareasNoPropiasRentadas').textContent;
    //contenedores
    const areaCultivadaSuperficie = document.querySelector('#areaCultivadaSuperficie');
    const hectareaPropiedadSuperficie = document.querySelector('#hectareaPropiedadSuperficie');
    const hectareaEjidalesSuperficie = document.querySelector('#hectareaEjidalesSuperficie');
    const hectareaPrestadasSuperficie = document.querySelector('#hectareaPrestadasSuperficie');
    const hectareaSinUsoSuperficie = document.querySelector('#hectareaSinUsoSuperficie');
    //insertar valores a contenedores
    areaCultivadaSuperficie.textContent = toatlHA;
    hectareaPropiedadSuperficie.textContent = totalHectareasPropiasPrivada;
    hectareaEjidalesSuperficie.textContent = totalHectareasPropiasEjidales;
    hectareaPrestadasSuperficie.textContent = totalHectareasNoPropiasPrestadas;
    hectareaSinUsoSuperficie.textContent = totalHectareasNoPropiasRentadas;
}

function colectaValorTierra(){
    const inputs = document.querySelectorAll('#tablaValorTierra input');

    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            //sincronizar los valores del input con el objeto
            almacenarDatosValorTierra();
            //multiplicar los datos
            calcularValorTotalValorTierra();
            //total superficie y valor de tabla valor de la tierra
            sumatoriaTotalSuperficeValorTierra();
            // console.log(colecta)
        })
    })
}
function almacenarDatosValorTierra(){
    const inputsValorTierra = document.querySelectorAll('#tablaValorTierra input');
    const {valorTierra} = colecta;

    const keys = Object.keys(valorTierra);//indices del objet
    let key;
    for (let i = 0; i < keys.length; i++) {
        key = keys[i]; //asignamos el indice acutal auna variable
        valorTierra[key] = parseFloat(inputsValorTierra[i].value)//en el objeto busca la coincidencia con el indice y le asigna el valor de nuestro arreglo de inputs
    }
    // console.log(colecta)
}
function calcularValorTotalValorTierra(){
    //valores
    //superfice
    const hectareaPropiedadSuperficie = parseFloat(document.querySelector('#hectareaPropiedadSuperficie').textContent);
    const hectareaEjidalesSuperficie = parseFloat(document.querySelector('#hectareaEjidalesSuperficie').textContent);
    const hectareaPrestadasSuperficie = parseFloat(document.querySelector('#hectareaPrestadasSuperficie').textContent);
    const hectareaSinUsoSuperficie = parseFloat(document.querySelector('#hectareaSinUsoSuperficie').textContent);
    //valorHA
    const hectareaPropiedadValorHA = parseFloat(document.querySelector('#hectareaPropiedadValorHA').value);
    const hectareaEjidalesValorHA = parseFloat(document.querySelector('#hectareaEjidalesValorHA').value);
    const hectareaPrestadasValorHA = parseFloat(document.querySelector('#hectareaPrestadasValorHA').value);
    const hectareaSinUsoValorHA = parseFloat(document.querySelector('#hectareaSinUsoValorHA').value);

    //contenedores
    const hectareaPropiedadValorTotal = document.querySelector('#hectareaPropiedadValorTotal');
    const hectareaEjidalesValorTotal = document.querySelector('#hectareaEjidalesValorTotal');
    const hectareaPrestadasValorTotal = document.querySelector('#hectareaPrestadasValorTotal');
    const hectareaSinUsoValorTotal = document.querySelector('#hectareaSinUsoValorTotal');

    //insertar valor a contenedores
    hectareaPropiedadValorTotal.innerHTML = `$ ${(hectareaPropiedadSuperficie * hectareaPropiedadValorHA).toFixed(2)}`;
    hectareaEjidalesValorTotal.innerHTML = `$ ${(hectareaEjidalesSuperficie * hectareaEjidalesValorHA).toFixed(2)}`;
    hectareaPrestadasValorTotal.innerHTML = `$ ${(hectareaPrestadasSuperficie * hectareaPrestadasValorHA).toFixed(2)}`;
    hectareaSinUsoValorTotal.innerHTML = `$ ${(hectareaSinUsoSuperficie * hectareaSinUsoValorHA).toFixed(2)}`;
}
function sumatoriaTotalSuperficeValorTierra(){
    //contenedores
    const totalSuperficeHas = document.querySelector('#totalSuperficeHas');
    const totalSuperficeValorTotal = document.querySelector('#totalSuperficeValorTotal');

    //valores
    //superfice
    const hectareaPropiedadSuperficie = parseFloat(document.querySelector('#hectareaPropiedadSuperficie').textContent);
    const hectareaEjidalesSuperficie = parseFloat(document.querySelector('#hectareaEjidalesSuperficie').textContent);
    const hectareaPrestadasSuperficie = parseFloat(document.querySelector('#hectareaPrestadasSuperficie').textContent);
    const hectareaSinUsoSuperficie = parseFloat(document.querySelector('#hectareaSinUsoSuperficie').textContent);

    //contenedores
    const hectareaPropiedadValorTotal = document.querySelector('#hectareaPropiedadValorTotal').textContent;
    const hectareaEjidalesValorTotal = document.querySelector('#hectareaEjidalesValorTotal').textContent;
    const hectareaPrestadasValorTotal = document.querySelector('#hectareaPrestadasValorTotal').textContent;
    const hectareaSinUsoValorTotal = document.querySelector('#hectareaSinUsoValorTotal').textContent;

    //Metodo para separa el signo de pesos y obtener solo el valor splits
    const splitsHectareaPropiedadValorTotal = parseFloat(hectareaPropiedadValorTotal.split(" ")[1]);
    const splitsHectareaEjidalesValorTotal = parseFloat(hectareaEjidalesValorTotal.split(" ")[1]);
    const splitsHectareaPrestadasValorTotal = parseFloat(hectareaPrestadasValorTotal.split(" ")[1]);
    const splitsHectareaSinUsoValorTotal = parseFloat(hectareaSinUsoValorTotal.split(" ")[1]);

    //operacion
    totalSuperficeHas.textContent = hectareaPropiedadSuperficie + hectareaEjidalesSuperficie + hectareaPrestadasSuperficie + hectareaSinUsoSuperficie;
    totalSuperficeValorTotal.textContent = `$ ${splitsHectareaPropiedadValorTotal + splitsHectareaEjidalesValorTotal + splitsHectareaPrestadasValorTotal + splitsHectareaSinUsoValorTotal}`;
}
// ------------- FIN COLECTA VALOR TIERRA

// ------------- COLECTA CONSTRUCCIONES
function colectaConstrucciones(){
    const inputs = document.querySelectorAll("#tablaContrucciones .etiqueta");

    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            console.log('sumar')
        })
    });
}

function almacenarDatosConstrucciones(){
    // console.log(colecta)
    const tbody = document.querySelector('#tablaContrucciones').children[1];
    const construccion = {
        nombre: '',
        anioConstruccionAdquisicion: '',
        modelo: '',
        anioVidaUtil: '',
        depreciacionAnual: '',
        valorActualMercado: '',
        valorRecuperacion: ''
    };
    const { construcciones } = colecta;
    // console.log(colecta)
    for( let i = 0 ; i < tbody.rows.length ; i++ ){
        for( let l = 0 ; l < tbody.rows[i].cells.length -1 ; l++ ){
            if(l <= 4 ){
                const input = tbody.rows[i].cells[l].firstChild;//muestra la celda
                input.addEventListener('input', ()=>{
                    llenarObjeto(input, l, construccion);
                    // console.log(colecta)
                })
                // console.log(tablaArbol.rows[i].cells[l].firstChild.value); //entramos al input de td
            } else{
                const children = tbody.rows[i].cells[l].children[1];
                children.addEventListener('input', ()=>{
                    llenarObjetoChildren(children, l, construccion);
                    // console.log(colecta)
                })
            }
        }
        colecta.construcciones = [...construcciones, construccion];
    }
}

function llenarObjeto(input, l, objeto){
    if( l === 0 ) objeto.nombre = input.value;
    if( l === 1 ) objeto.anioConstruccionAdquisicion = parseInt(input.value)
    if( l === 2 ) objeto.modelo = parseInt(input.value);
    if( l === 3 ) objeto.anioVidaUtil = parseInt(input.value)
    if( l === 4 ) objeto.depreciacionAnual = parseFloat(input.value)
}
function llenarObjetoChildren(children, l, objeto){
    if( l === 5 ) objeto.valorActualMercado = parseFloat(children.value)
    if( l === 6 ) objeto.valorRecuperacion = parseFloat(children.value)
}
// ------------- FIN COLECTA CONSTRUCCION

// FUNCIONES
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

// -------------- FUNCION BOTON AGREGAR Y ELIMINAR FILAS
// -------------- VARIEDAD ARBOLES
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
    // input.setAttribute('name', 'arboles[variedad]');
    input.setAttribute('required', '');
    input2.setAttribute('type', 'number');
    input2.setAttribute('required', '');
    // input2.setAttribute('name', 'arboles[noArboles]');
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
// -------------- FIN VARIEDAD ARBOLES

// -------------- BOTONES OTROS ACTIVOS FIJOS
const botonNuevaFilaContrucciones = document.querySelector('#nuevaFilaContrucciones');
const botonNuevaFilaVehiculos = document.querySelector('#nuevaFilaVehiculos');

botonNuevaFilaContrucciones.addEventListener('click', ()=>{
    filaOtrosActivosFijos('#tablaContrucciones');
})
botonNuevaFilaVehiculos.addEventListener('click', ()=>{
    filaOtrosActivosFijos('#tablaVehiculos');
})

function filaOtrosActivosFijos(idTabla) {
    // Obtiene una referencia a la tabla en la posicion dentro del body
    const tabla = document.querySelector(idTabla).children[1];
    const tr = document.createElement('TR');
    const td1 = document.createElement('TD');
    const td2 = document.createElement('TD');
    const td3 = document.createElement('TD');
    const td4 = document.createElement('TD');
    const td5 = document.createElement('TD');
    td5.classList.add('etiqueta', 'porcentaje');
    const td6 = document.createElement('TD');
    td6.classList.add('etiqueta');
    const td7 = document.createElement('TD');
    td7.classList.add('etiqueta');
    const td8 = document.createElement('TD');
    // td8.classList.add('etiqueta');
    const input1 = document.createElement('INPUT');
    const input2 = document.createElement('INPUT');
    const input3 = document.createElement('INPUT');
    const input4 = document.createElement('INPUT');
    const input5 = document.createElement('INPUT');
    const input6 = document.createElement('INPUT');
    const input7 = document.createElement('INPUT');
    // const input8 = document.createElement('INPUT');

    input1.setAttribute('type', 'text');
    input1.setAttribute('placeholder', 'Escribe el nombre');
    input1.setAttribute('required', '');

    input2.setAttribute('type', 'number');
    input2.setAttribute('placeholder', 'Ej. 2012');

    input3.setAttribute('type', 'number');
    input3.setAttribute('required', '');
    input3.value = 0;

    input4.setAttribute('type', 'number');
    input4.setAttribute('required', '');
    input4.value = 0;

    input5.setAttribute('type', 'number');
    input5.value = 0;

    input6.setAttribute('type', 'number');
    input6.classList.add('valorActualMercado')
    input7.setAttribute('type', 'number');
    input7.classList.add('valorRecuperacion')
    // input8.setAttribute('type', 'number');
    // input8.classList.add('depreciacionAnual')

    const span = document.createElement('SPAN');
    span.innerHTML = '<span>%</span>';

    td1.appendChild(input1);
    td2.appendChild(input2);
    td3.appendChild(input3);
    td4.appendChild(input4);
    td5.appendChild(input5);
    td5.appendChild(span);
    td6.innerHTML += '<span>$</span>';
    td6.appendChild(input6);
    td7.innerHTML += '<span>$</span>';
    td7.appendChild(input7);
    // td8.innerHTML += '<span>$</span>';
    // td8.appendChild(input8);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    // tr.appendChild(td2);
    // tr.appendChild(td3);

    tabla.appendChild(tr);

    // // console.log(colecta)
    almacenarDatosConstrucciones()
}

// FUNCION BOTON ELIMINAR FILA
const botonEliminarFilaConstruccion = document.querySelector('#eliminarFilaContrucciones');
const botonEliminarFilaVehiculos = document.querySelector('#eliminarFilaVehiculos');

botonEliminarFilaConstruccion.addEventListener('click', ()=>{
    eliminarFilaOtrosActivosFijos('#tablaContrucciones', colecta.construcciones);
})
botonEliminarFilaVehiculos.addEventListener('click', ()=>{
    eliminarFilaOtrosActivosFijos('#tablaVehiculos', colecta.vehiculos);
})

function eliminarFilaOtrosActivosFijos(idTabla, objeto){
    const tbody = document.querySelector(idTabla).children[1];
    const ultimaFila = tbody.rows.length-1;
    // console.log(tablaVariedadArboles.children.length)//elemento tr, el ultima agregado todo: borrar elemeto y borrar el objeto del arrglo de colecta.arbol
    const tr = tbody.children[ultimaFila]

    //solo se eliminan las filas pero debe existir una almenos
    if(tbody.children.length > 1){
        tr.remove(); //remover elemento tr de la tabla
        objeto.pop(); //eliminar el ultimo valor del arrglo de colecta
        // console.log('eliminando', colecta)
    }
}
// -------------- FIN CONSTRUCCIONES
// -------------- FIN FUNCION BOTON AGREGAR Y ELIMINAR FILAS