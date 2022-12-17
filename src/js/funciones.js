// -------------- FUNCIONES -------------- //
// ------------- FUNCION SUMAR COLUMNA
function sumarColumnaInputs(tabla, columna){
    const tbody = document.querySelector(tabla + ' tbody');
    let sumatoria = 0;

    for( let i = 0 ; i < tbody.rows.length ; i++ ){
        //de esta forma solo iteramos la columna que ingresemos y acumulamos sus valores parceandolos a enteros
        let input = tbody.rows[i].cells[columna];
        input = input.firstChild.tagName === 'INPUT' ? input.firstChild : input.lastChild;
        const valor = input.value === '' ? 0 : parseFloat(input.value);

        sumatoria += valor;
    }
    return sumatoria;
}
function sumarColumna(tabla, columna){
    const tbody = document.querySelector(tabla + ' tbody');
    let sumatoria = 0;

    for( let i = 0 ; i < tbody.rows.length ; i++ ){
        //de esta forma solo iteramos la columna que ingresemos y acumulamos sus valores parceandolos a enteros
        const element = tbody.rows[i].cells[columna];
        // console.log(element)
        const valor = element.textContent === '' ? 0 : extraerCaracteresNumber(element.textContent);
        // console.log(valor)

        sumatoria += valor;
    }
    return sumatoria;
}
// ------------ FUNCION MOSTRAR PORCENTAJES
function dividirPorcentaje(tabla, columnaSumatoria, columnaInsertarValores){
    const tbody = document.querySelector(tabla + ' tbody');
    // console.log(tabla.children[1].children.length)//numero de filas en tbody
    // todo:iterar tabla y mostrar resultado

    for( let i = 0 ; i < tbody.rows.length ; i++ ){
        // console.log(tabla.children[1].children[i].cells.length)//numero de columnas
        //iteramos solo la columna del final
        for( let l = columnaInsertarValores ; l < tbody.rows[i].cells.length ; l++ ){
            const sumatoria = sumarColumnaInputs(tabla, columnaSumatoria);
            const input = tbody.rows[i].cells[l-1].firstChild;
            const valor = input.value === '' ? 0 : parseFloat(input.value);
            const formula = (valor/sumatoria)*100;
            const formulaDosDecimales = isNaN(formula) ? 0 : formula.toFixed(2);
            const td = tbody.rows[i].cells[columnaInsertarValores]; //columna total
            td.innerHTML = `<span>${formulaDosDecimales}%</span>`;
        }
    }
}
// ------------ FUNCION RETORNAR UN VALOR A FORMATO $$$
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
function convertirValorMonetario(valor){
    return formatter.format(valor);
}
// ------------ FUNCION PARA EXTRAER SOLO VALORES NUMERICOS EN UNA CADENA DE TEXTO CON FORMATO $XXX,XXX.XX
function extraerCaracteresNumber(caracteres){
    let sincomas = caracteres.replaceAll(',', '')
    let sincaracteres = sincomas.replaceAll('$', '')
    let valorFloat = parseFloat(sincaracteres)
    return valorFloat;
}
// ------------ ALMACENA UN OBJETO A UN ARREGLO DE OBJETOS
function almacenarObjeto(idTabla, objeto){
    const tbody = document.querySelector(idTabla + ' tbody');
    const rows = tbody.rows.length;
    let objetos = [];
    let key;
    let keys = Object.keys(objeto);//indices del objet

    for(let i = 0 ; i < rows ; i ++){
        objeto = {}
        let posicion = 0;
        for (let l = 0; l < tbody.rows[i].cells.length; l++) {
            let input = tbody.rows[i].cells[l].lastChild; //obtenemos el valor del input
            input = (input && input.tagName === 'INPUT') ? input : tbody.rows[i].cells[l].firstChild;// para las tablas con el porcentaje que son lastchild
            if( input !== null && input.tagName === 'INPUT' ){//TODO: EL INPUT ES NULLO CUANDO NO HAY VALORES, DESPUES DEJA DE SER NULO PERO SE DEBE OMITIR
                const valor = input.type === 'number' ? (input.value === '' ? 0 : parseFloat(input.value)) : input.value;
                key = keys[posicion]; //asignamos el indice acutal auna variable
                objeto[key] = input.type === 'text' ? valor : parseFloat(valor)//en el objeto busca la coincidencia con el indice y le asigna el valor de nuestro arreglo de inputs
                posicion++;
            }
        }
        objetos.push(objeto)
    }
    console.log(colecta)
    return objetos;
}
// ------------ ELIMINAR LA ULTIMA FILA Y LO EXIMINA DEL OBJETO
function eliminarUltimaFila(idTabla, objeto, funcionAlmacenarObjeto = null, limite = 1){
    const tbody = document.querySelector(idTabla + ' tbody');
    const ultimaFila = tbody.rows.length-1;
    // console.log(tablaVariedadArboles.children.length)//elemento tr, el ultima agregado todo: borrar elemeto y borrar el objeto del arrglo de colecta.arbol
    const tr = tbody.children[ultimaFila]

    //solo se eliminan las filas pero debe existir una almenos
    if(tbody.children.length > limite){
        tr.remove(); //remover elemento tr de la tabla
        objeto.pop(); //eliminar el ultimo valor del arrglo de colecta
        // console.log('eliminando', colecta)
    }

    if(funcionAlmacenarObjeto) funcionAlmacenarObjeto(idTabla);

    //acutalizar operaciones
    actualizarOperaciones();
    console.log(colecta)
}
// ------------ OBTENER EL VALOR TOTAL DE LA SUPERFICIE
function getTotalSuperficie(){
    let totalSuperficeHasText = document.querySelector('#tablaValorTierra #totalSuperficeHas');
    totalSuperficeHas = totalSuperficeHasText.textContent === '' ? 0 : parseFloat(totalSuperficeHasText.textContent);
    return totalSuperficeHas;
}
// ------------ ACTUALIZA TODAS LAS OPERACIONES CUANDO SE INTERACTUA CON UN INPUT DE TIPO NUMBER
function inputsOperaciones(){
    const inputs = document.querySelectorAll("input[type='number']")
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            actualizarOperaciones();
        })
    });
}
function actualizarOperaciones(){
    operacionesArboles();
    mostrarSumatoriaPatronCultivos();
    operacionesSuperficieUrp();
    operacionesValorTierra();
    calcularCostoPlantacion();
    operacionesValorPlantacion();
    operacionesOtrosActivosFijos('#tablaContrucciones');
    operacionesOtrosActivosFijos('#tablaVehiculos');
    operacionesOtrosActivosFijos('#tablaImplementos');
    operacionesOtrosActivosFijos('#tablaEquiposComunicacion');
    operacionesOtrosActivosFijos('#tablaEquipos');
    operacionesRepuestoHerramientas();
    operacionesAgroquimicos('#tablaFertilizantesGranular');
    operacionesAgroquimicos('#tablaFertilizantesFoliar');
    operacionesAgroquimicos('#tablaInsecticidas');
    operacionesAgroquimicos('#tablaHerbicidas');
    operacionesAgroquimicos('#tablaFungicidas');
    operacionesMantenimientoReparaciones();
    operacionesCombustiblesLubricantes();
    operacionesCostosCosecha();
    operacionesManoObra('#tablaManoObraContratada');
    operacionesManoObra('#tablaManoObraFamiliar');
    operacionesManoObraPermanente();
    operacionesOtrosCostosGenerales();
    operacionesIngresosUrp();
    operacionesSubproductos();
    operacionesOtrosIngresosUrp();
    montoAnualGastosFamiliares();
}
// ------------ MOSTRAR ALERTA
function mostrarAlerta(mensaje, tipo, ubicacion, timeOut = true){
    //en caso de haber mas de dos alertas o evitar que cree varias alertas
    const existeAlerta = document.querySelector('.alerta');
    if(existeAlerta){
        existeAlerta.remove();
    }

    //crear alerta
    const alerta = document.createElement('DIV');
    alerta.textContent = mensaje;
    alerta.classList.add('alerta');
    alerta.classList.add(tipo);

    //Seleccionamos el lugar donde pondremos la alerta, en te caso debajo de formualrio, seleccionamos el formulario con su clase ya que solo hay un formulario en la pagina de lo contrario debemos ser mas especificos
    const referencia = document.querySelector( ubicacion );

    referencia.appendChild(alerta);


    //se el parametro de tiemOut es false entonces ese mensaje no desaparece despues de 3 segundos
    if( timeOut ){
        //alerta dura 3 segundos
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}