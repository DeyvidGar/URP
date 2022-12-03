const colecta = {
    arboles:[],
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
    actividadesProduccion: [],
    otrosCostos: [],
    costoAnualesEstablecimientoPlantacion: [],
    construcciones: [],
    vehiculos: [],
    implementos: [],
    equiposComunicacion: [],
    equipos: [],
    valorPlantacion:{
        anioEstablecido: '',
        vidaUtil: '',
        arbolesHA: 0,
        costoArbol: 0
    },
    repuestoHerramientas: []
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

    colectaValorPlantacion();
    colectaActividadesProduccion();
    almacenarDatosActividadesProduccion();
    colectaOtrosCostos()
    almacenarDatosOtrosCostos();
    colectaCostoAnualEstablecimientoPlantacion();
    almacenarDatosCostoAnualEstablecimientoPlantacion();

    // calcularOperacionesActivosFijos('#totalValorActualMercado');
    almacenarDatosConstrucciones();
    almacenarDatosVehiculos();
    almacenarDatosImplementos();
    almacenarDatosEquipoComunicacion();
    almacenarDatosEquipo();

    colectaRepuestoHerramientas();
});

// ---------- COLECTA ARBOL
function colectaArbol(){
    const inputs = document.querySelectorAll('#tablaVariedadArboles input');
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            almacenarDatosColectaArboles();
            dividirPorcentaje('#tablaVariedadArboles',1, 2);
            sumarArboles();
        })
    });
}
function almacenarDatosColectaArboles(){
    const tbody = document.querySelector('#tablaVariedadArboles tbody');
    const rows = tbody.rows.length;
    let objetos = [];
    let key;
    for(let i = 0 ; i < rows ; i ++){
        let arbol = {
            variedad: '',
            numArboles: 0
        };
        let keys = Object.keys(arbol);//indices del objet
        for (let l = 0; l < tbody.rows[i].cells.length; l++) {
            const input = tbody.rows[i].cells[l].lastChild; //obtenemos el valor del input
            if( input && input.tagName === 'INPUT' ){ //encaso de existir elemento html debera ser input
                const valor = input.type === 'number' ? (input.value === '' ? 0 : parseFloat(input.value)) : input.value;
                key = keys[l]; //asignamos el indice acutal auna variable
                arbol[key] = input.type === 'text' ? valor : parseFloat(valor)//en el objeto busca la coincidencia con el indice y le asigna el valor de nuestro arreglo de inputs
            }
        }
        objetos.push(arbol)
    }
    colecta.arboles = objetos
    console.log(colecta)
}
function sumarArboles(){
    //seleccionar de la tabla variedadarboles los inputs de tipo number
    const inputsArboles = document.querySelectorAll("#tablaVariedadArboles input[type='number']")
    const totalArboles = document.querySelector('#totalArboles');
    let acumulador = 0;

    inputsArboles.forEach(input => {
        const valor = input.value === '' ? 0 : parseFloat(input.value);
        acumulador += parseFloat(valor);
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

// ------------- COLECTA VALOR PLANTACION
function colectaValorPlantacion(){
    const inputs = document.querySelectorAll('#tablaValorPlantacion input');

    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            almacenarDatosValorPlantacion();
            calcularCostoPlantacion();
        })
    });
    // const arbolesHa = document.querySelector('#tablaValorPlanteacion #arbolesHa');
    // console.log(arbolesHa.value ==='' ? 0 : 'no');
}
function calcularCostoPlantacion(){
    const costoPlantacion = document.querySelector('#tablaValorPlantacion #costoPlantacion');
    const arbolesHa = parseFloat(document.querySelector('#tablaValorPlantacion #arbolesHa').value);
    const costoArbol = parseFloat(document.querySelector('#tablaValorPlantacion #costoArbol').value);
    const totalSuperficeHas = parseFloat(document.querySelector('#tablaValorTierra #totalSuperficeHas').textContent);

    costoPlantacion.textContent = convertirValorMonetario(arbolesHa*costoArbol*totalSuperficeHas);
}
function almacenarDatosValorPlantacion(){
    const inputsValorPlantacion = document.querySelectorAll('#tablaValorPlantacion input');
    const {valorPlantacion} = colecta;
    console.log(inputsValorPlantacion)
    const keys = Object.keys(valorPlantacion);//indices del objet
    let key;
    for (let i = 0; i < keys.length; i++) {
        key = keys[i]; //asignamos el indice acutal auna variable
        valorPlantacion[key] = !isNaN(inputsValorPlantacion[i].value) ? 0 : parseFloat(inputsValorPlantacion[i].value)//en el objeto busca la coincidencia con el indice y le asigna el valor de nuestro arreglo de inputs
    }
    // console.log(colecta)
}
// ------------- FIN COLECTA VALOR PLANTACION

// ------------- COLECTA ACTIVIDADES DE PRODUCCION
function colectaActividadesProduccion(){
    const inputs = document.querySelectorAll('#tablaActividadesProduccion input');
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            almacenarDatosActividadesProduccion();
        })
    });
}
function almacenarDatosActividadesProduccion(){
    const tbody = document.querySelector('#tablaActividadesProduccion tbody');
    const rows = tbody.rows.length;
    let objetos = [];
    let key;
    for(let i = 0 ; i < rows ; i ++){
        let actividadProduccion = {
            nombreActividadProduccion: '',
            precioUnitario: 0,
            actual: 0
        };
        let keys = Object.keys(actividadProduccion);//indices del objet
        for (let l = 0; l < tbody.rows[i].cells.length; l++) {
            const input = tbody.rows[i].cells[l].lastChild; //obtenemos el valor del input
            const valor = input.type === 'number' ? (input.value === '' ? 0 : parseFloat(input.value)) : input.value;

            key = keys[l]; //asignamos el indice acutal auna variable
            actividadProduccion[key] = input.type === 'text' ? valor : parseFloat(valor)//en el objeto busca la coincidencia con el indice y le asigna el valor de nuestro arreglo de inputs
        }
        objetos.push(actividadProduccion)
    }
    colecta.actividadesProduccion = objetos
}
function colectaOtrosCostos(){
    const inputs = document.querySelectorAll('#tablaOtrosCostos input');
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            almacenarDatosOtrosCostos();
        })
    });
}
function almacenarDatosOtrosCostos(){
    const tbody = document.querySelector('#tablaOtrosCostos tbody');
    const rows = tbody.rows.length;
    let objetos = [];
    let key;
    for(let i = 0 ; i < rows ; i ++){
        let otroCosto = {
            nombreOtroCosto: '',
            precioUnitario: 0,
            total: 0
        };
        let keys = Object.keys(otroCosto);//indices del objet
        for (let l = 0; l < tbody.rows[i].cells.length; l++) {
            const input = tbody.rows[i].cells[l].lastChild; //obtenemos el valor del input
            const valor = input.type === 'number' ? (input.value === '' ? 0 : parseFloat(input.value)) : input.value;

            key = keys[l]; //asignamos el indice acutal auna variable
            otroCosto[key] = input.type === 'text' ? valor : parseFloat(valor)//en el objeto busca la coincidencia con el indice y le asigna el valor de nuestro arreglo de inputs
        }
        objetos.push(otroCosto)
    }
    colecta.otrosCostos = objetos
    // console.log(colecta )
}

function colectaCostoAnualEstablecimientoPlantacion(){
    const inputs = document.querySelectorAll('#tablaCostoAnualEstablecimientoPlantacion input');
    colocarNumeroAnio();
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            almacenarDatosCostoAnualEstablecimientoPlantacion();
            operacionesValorPlantacion();
        })
    });
}
function almacenarDatosCostoAnualEstablecimientoPlantacion(){
    const tbody = document.querySelector('#tablaCostoAnualEstablecimientoPlantacion tbody');
    const rows = tbody.rows.length;
    let objetos = [];
    let key;
    for(let i = 0 ; i < rows ; i ++){
        let costoAnualEstablecimientoPlantacion = {
            numAnio: (i+1),
            total: 0
        };
        let keys = Object.keys(costoAnualEstablecimientoPlantacion);//indices del objet
        for (let l = 0; l < tbody.rows[i].cells.length; l++) {
            const input = tbody.rows[i].cells[l].lastChild; //obtenemos el valor del input
            const valor = input.type === 'number' ? (input.value === '' ? 0 : parseFloat(input.value)) : input.value;

            key = keys[l]; //asignamos el indice acutal auna variable
            costoAnualEstablecimientoPlantacion[key] = input.type === 'text' ? valor : parseFloat(valor)//en el objeto busca la coincidencia con el indice y le asigna el valor de nuestro arreglo de inputs
        }
        objetos.push(costoAnualEstablecimientoPlantacion)
    }
    colecta.costoAnualesEstablecimientoPlantacion = objetos
}
function colocarNumeroAnio(){
    const tbody = document.querySelector('#tablaCostoAnualEstablecimientoPlantacion tbody');
    const rows = tbody.rows.length;

    for(let i = 0 ; i < rows ; i ++){
        const inputAnio = tbody.rows[i].cells[0].firstChild;
        inputAnio.value = `Año ${i+1}`;
    }
}
function operacionesValorPlantacion(){
    // NOTE: ESTA FUNCION DEBE INGRESARSE EN LOS EVENTOS DE LAS TABLAS QUE DEPENDE? (VALOR PLANTACION, SUPERFICIE URP, Y EN EL BOTON DE ELIMINAR ANIOS)
    const valorTotalAnio = document.querySelectorAll('.costoAnual');
    const costoAnualEstablecimientoPlantacionTotal = document.querySelector('#tablaTotalActividadesProduccion #costoTotalEst');
    const depreciacionAnualTotal = document.querySelector('#tablaTotalActividadesProduccion #depreciacionAnual');
    const depreciacionAnualHaTotal = document.querySelector('#tablaTotalActividadesProduccion #depreciacionAnualHa');
    const promedioVidaUtil = document.querySelector('#tablaValorPlantacion #vidaUtil');
    const promedioVidaUtilValue = promedioVidaUtil.value === '' ? 0 : parseFloat(promedioVidaUtil.value);
    const totalSuperficeHas = document.querySelector('#tablaValorTierra #totalSuperficeHas').textContent;
    const totalSuperficeHasValue = parseFloat(totalSuperficeHas);
    let acumulador = 0;
    valorTotalAnio.forEach(valor => {
        const valorinput = valor.value === '' ? 0 : parseFloat(valor.value);
        acumulador += valorinput;
        costoAnualEstablecimientoPlantacionTotal.textContent = convertirValorMonetario(acumulador)
    })
    const costoAnualEstablecimientoPlantacionTotalValue = extraerCaracteresNumber(costoAnualEstablecimientoPlantacionTotal.textContent)
    depreciacionAnualTotalValor = costoAnualEstablecimientoPlantacionTotalValue / promedioVidaUtilValue;
    depreciacionAnualTotalValor = (!isFinite(depreciacionAnualTotalValor) ? 0 : depreciacionAnualTotalValor)
    depreciacionAnualTotal.textContent = convertirValorMonetario(depreciacionAnualTotalValor)
    depreciacionAnualHasTotalValor = depreciacionAnualTotalValor / totalSuperficeHasValue;
    depreciacionAnualHasTotalValor = (!isFinite(depreciacionAnualHasTotalValor) ? 0 : depreciacionAnualHasTotalValor)
    depreciacionAnualHaTotal.textContent = convertirValorMonetario(depreciacionAnualHasTotalValor)
}
// ------------- FIN COLECTA ACTIVIDADES DE PRODUCCION

// ------------- COLECTA OTROS ACTIVOS FIJOS
function almacenarDatosConstrucciones(){
    const tbody = document.querySelector('#tablaContrucciones').children[1];
    const construccion = {
        // nombre: '',
        // anioConstruccionAdquisicion: '',
        // modelo: '',
        // anioVidaUtil: '',
        // depreciacionAnual: '',
        // valorActualMercado: '',
        // valorRecuperacion: ''
    };
    const { construcciones } = colecta;
    // console.log(colecta)
    for( let i = 0 ; i < tbody.rows.length ; i++ ){
        for( let l = 0 ; l < tbody.rows[i].cells.length -1 ; l++ ){
            if(l <= 4 ){
                const input = tbody.rows[i].cells[l].firstChild;//muestra la celda
                input.addEventListener('input', ()=>{
                    llenarObjeto(input, l, construccion);
                    calcularOperacionesActivosFijos('#tablaContrucciones');
                    console.log(colecta)
                })
                // console.log(tablaArbol.rows[i].cells[l].firstChild.value); //entramos al input de td
            } else{
                const children = tbody.rows[i].cells[l].children[1];
                children.addEventListener('input', ()=>{
                    llenarObjetoChildren(children, l, construccion);
                    calcularOperacionesActivosFijos('#tablaContrucciones');
                    // sumadepreciacionAnual('#tablaContrucciones');
                    console.log(colecta)
                })
            }
        }
        colecta.construcciones = [...construcciones, construccion];
    }
}
function almacenarDatosVehiculos(){
    const tbody = document.querySelector('#tablaVehiculos').children[1];
    const vehiculo = {
        // nombre: '',
        // anioConstruccionAdquisicion: '',
        // modelo: '',
        // anioVidaUtil: '',
        // depreciacionAnual: '',
        // valorActualMercado: '',
        // valorRecuperacion: ''
    };
    const { vehiculos } = colecta;

    for( let i = 0 ; i < tbody.rows.length ; i++ ){
        for( let l = 0 ; l < tbody.rows[i].cells.length -1 ; l++ ){
            if(l <= 4 ){
                const input = tbody.rows[i].cells[l].firstChild;//muestra la celda
                input.addEventListener('input', ()=>{
                    llenarObjeto(input, l, vehiculo);
                    calcularOperacionesActivosFijos('#tablaVehiculos');
                    console.log(colecta)
                })
                // console.log(tablaArbol.rows[i].cells[l].firstChild.value); //entramos al input de td
            } else{
                const children = tbody.rows[i].cells[l].children[1];
                children.addEventListener('input', ()=>{
                    llenarObjetoChildren(children, l, vehiculo);
                    calcularOperacionesActivosFijos('#tablaVehiculos');
                    // sumadepreciacionAnual('#tablaContrucciones');
                })
            }
        }
        colecta.vehiculos = [...vehiculos, vehiculo];
    }
}
function almacenarDatosImplementos(){
    const tbody = document.querySelector('#tablaImplementos').children[1];
    const implemento = {
        // nombre: '',
        // anioConstruccionAdquisicion: '',
        // modelo: '',
        // anioVidaUtil: '',
        // depreciacionAnual: '',
        // valorActualMercado: '',
        // valorRecuperacion: ''
    };
    const { implementos } = colecta;

    for( let i = 0 ; i < tbody.rows.length ; i++ ){
        for( let l = 0 ; l < tbody.rows[i].cells.length -1 ; l++ ){
            if(l <= 4 ){
                const input = tbody.rows[i].cells[l].firstChild;//muestra la celda
                input.addEventListener('input', ()=>{
                    llenarObjeto(input, l, implemento);
                    calcularOperacionesActivosFijos('#tablaImplementos');
                    console.log(colecta)
                })
                // console.log(tablaArbol.rows[i].cells[l].firstChild.value); //entramos al input de td
            } else{
                const children = tbody.rows[i].cells[l].children[1];
                children.addEventListener('input', ()=>{
                    llenarObjetoChildren(children, l, implemento);
                    calcularOperacionesActivosFijos('#tablaImplementos');
                    // sumadepreciacionAnual('#tablaContrucciones');
                })
            }
        }
        colecta.implementos = [...implementos, implemento];
    }
}
function almacenarDatosEquipoComunicacion(){
    const tbody = document.querySelector('#tablaEquiposComunicacion').children[1];
    const equipoComunicacion = {
        // nombre: '',
        // anioConstruccionAdquisicion: '',
        // modelo: '',
        // anioVidaUtil: '',
        // depreciacionAnual: '',
        // valorActualMercado: '',
        // valorRecuperacion: ''
    };
    const { equiposComunicacion } = colecta;

    for( let i = 0 ; i < tbody.rows.length ; i++ ){
        for( let l = 0 ; l < tbody.rows[i].cells.length -1 ; l++ ){
            if(l <= 4 ){
                const input = tbody.rows[i].cells[l].firstChild;//muestra la celda
                input.addEventListener('input', ()=>{
                    llenarObjeto(input, l, equipoComunicacion);
                    calcularOperacionesActivosFijos('#tablaEquiposComunicacion');
                    console.log(colecta)
                })
                // console.log(tablaArbol.rows[i].cells[l].firstChild.value); //entramos al input de td
            } else{
                const children = tbody.rows[i].cells[l].children[1];
                children.addEventListener('input', ()=>{
                    llenarObjetoChildren(children, l, equipoComunicacion);
                    calcularOperacionesActivosFijos('#tablaEquiposComunicacion');
                    // sumadepreciacionAnual('#tablaContrucciones');
                })
            }
        }
        colecta.equiposComunicacion = [...equiposComunicacion, equipoComunicacion];
    }
}
function almacenarDatosEquipo(){
    const tbody = document.querySelector('#tablaEquipos').children[1];
    const equipo = {
        // nombre: '',
        // anioConstruccionAdquisicion: '',
        // modelo: '',
        // anioVidaUtil: '',
        // depreciacionAnual: '',
        // valorActualMercado: '',
        // valorRecuperacion: ''
    };
    const { equipos } = colecta;

    for( let i = 0 ; i < tbody.rows.length ; i++ ){
        for( let l = 0 ; l < tbody.rows[i].cells.length -1 ; l++ ){
            if(l <= 4 ){
                const input = tbody.rows[i].cells[l].firstChild;//muestra la celda
                input.addEventListener('input', ()=>{
                    llenarObjeto(input, l, equipo);
                    calcularOperacionesActivosFijos('#tablaEquipos');
                    console.log(colecta)
                })
                // console.log(tablaArbol.rows[i].cells[l].firstChild.value); //entramos al input de td
            } else{
                const children = tbody.rows[i].cells[l].children[1];
                children.addEventListener('input', ()=>{
                    llenarObjetoChildren(children, l, equipo);
                    calcularOperacionesActivosFijos('#tablaEquipos');
                    // sumadepreciacionAnual('#tablaContrucciones');
                })
            }
        }
        colecta.equipos = [...equipos, equipo];
    }
}
//funciones estaticas
function calcularOperacionesActivosFijos(tabla){
    const inptus = document.querySelectorAll(tabla +" .etiqueta input[type='number']");
    // const valorRubro = document.querySelectorAll("#tablaContrucciones .valorRubro");

    //sumar por inputs
    inptus.forEach(input => {
        input.addEventListener('input', ()=>{
            //REALIZAR SUMA TOTAL POR RUBRO (VERTICAL, INPUTS)
            operacionesOtrosActivosFijos(tabla);
        });
    });
}
function operacionesOtrosActivosFijos(tabla){
    sumaValorActualMercado(tabla);
    sumaValorRecuperacion(tabla);
    depreciacionAnual(tabla)
    sumadepreciacionAnual(tabla);
    totalValorActualMercado();
    totalValorRecuperacion();
    totalValorDepreciacionAnual();
}
function totalValorDepreciacionAnual(){
    let totalDepreciacionAnualTd = document.querySelector('#tablaTotales #totalDepreciacionAnual')
    let tablaContrucciones = !isNaN(document.querySelector('#tablaContrucciones #totalValorRecuperacion').textContent) ? 0 : extraerCaracteresNumber(document.querySelector('#tablaContrucciones #totalValorDepreciacionAnual').textContent);
    let tablaVehiculos = !isNaN(document.querySelector('#tablaVehiculos #totalValorDepreciacionAnual').textContent) ? 0 : extraerCaracteresNumber(document.querySelector('#tablaVehiculos #totalValorDepreciacionAnual').textContent);
    let tablaImplementos = !isNaN(document.querySelector('#tablaImplementos #totalValorDepreciacionAnual').textContent) ? 0 : extraerCaracteresNumber(document.querySelector('#tablaImplementos #totalValorDepreciacionAnual').textContent);
    let tablaEquiposComunicacion = !isNaN(document.querySelector('#tablaEquiposComunicacion #totalValorDepreciacionAnual').textContent) ? 0 : extraerCaracteresNumber(document.querySelector('#tablaEquiposComunicacion #totalValorDepreciacionAnual').textContent);
    let tablaEquipos = !isNaN(document.querySelector('#tablaEquipos #totalValorDepreciacionAnual').textContent) ? 0 : extraerCaracteresNumber(document.querySelector('#tablaEquipos #totalValorDepreciacionAnual').textContent);

    total = tablaContrucciones+tablaVehiculos+tablaImplementos+tablaEquiposComunicacion+tablaEquipos;
    // console.log(total)
    totalDepreciacionAnualTd.textContent = convertirValorMonetario(total);
}
function totalValorRecuperacion(){
    let totalValorRecuperacionTd = document.querySelector('#tablaTotales #totalValorRecuperacion')
    let tablaContrucciones = !isNaN(document.querySelector('#tablaContrucciones #totalValorRecuperacion').textContent) ? 0 : extraerCaracteresNumber(document.querySelector('#tablaContrucciones #totalValorRecuperacion').textContent);
    let tablaVehiculos = !isNaN(document.querySelector('#tablaVehiculos #totalValorRecuperacion').textContent) ? 0 : extraerCaracteresNumber(document.querySelector('#tablaVehiculos #totalValorRecuperacion').textContent);
    let tablaImplementos = !isNaN(document.querySelector('#tablaImplementos #totalValorRecuperacion').textContent) ? 0 : extraerCaracteresNumber(document.querySelector('#tablaImplementos #totalValorRecuperacion').textContent);
    let tablaEquiposComunicacion = !isNaN(document.querySelector('#tablaEquiposComunicacion #totalValorRecuperacion').textContent) ? 0 : extraerCaracteresNumber(document.querySelector('#tablaEquiposComunicacion #totalValorRecuperacion').textContent);
    let tablaEquipos = !isNaN(document.querySelector('#tablaEquipos #totalValorRecuperacion').textContent) ? 0 : extraerCaracteresNumber(document.querySelector('#tablaEquipos #totalValorRecuperacion').textContent);

    total = tablaContrucciones+tablaVehiculos+tablaImplementos+tablaEquiposComunicacion+tablaEquipos;
    // console.log(total)
    totalValorRecuperacionTd.textContent = convertirValorMonetario(total);
}
function totalValorActualMercado(){
    let totalValorActualMercadoTd = document.querySelector('#tablaTotales #totalValorActualMercado')
    let tablaContrucciones = !isNaN(document.querySelector('#tablaContrucciones #totalValorActualMercado').textContent) ? 0 : extraerCaracteresNumber(document.querySelector('#tablaContrucciones #totalValorActualMercado').textContent);
    let tablaVehiculos = !isNaN(document.querySelector('#tablaVehiculos #totalValorActualMercado').textContent) ? 0 : extraerCaracteresNumber(document.querySelector('#tablaVehiculos #totalValorActualMercado').textContent);
    let tablaImplementos = !isNaN(document.querySelector('#tablaImplementos #totalValorActualMercado').textContent) ? 0 : extraerCaracteresNumber(document.querySelector('#tablaImplementos #totalValorActualMercado').textContent);
    let tablaEquiposComunicacion = !isNaN(document.querySelector('#tablaEquiposComunicacion #totalValorActualMercado').textContent) ? 0 : extraerCaracteresNumber(document.querySelector('#tablaEquiposComunicacion #totalValorActualMercado').textContent);
    let tablaEquipos = !isNaN(document.querySelector('#tablaEquipos #totalValorActualMercado').textContent) ? 0 : extraerCaracteresNumber(document.querySelector('#tablaEquipos #totalValorActualMercado').textContent);

    total = tablaContrucciones+tablaVehiculos+tablaImplementos+tablaEquiposComunicacion+tablaEquipos;
    // console.log(total)
    totalValorActualMercadoTd.textContent = convertirValorMonetario(total);
}

function sumadepreciacionAnual(tabla){
    const tbody = document.querySelector(tabla).children[1];
    const valorDepreciacionAnual = document.querySelector(tabla+' #totalValorDepreciacionAnual')
    let acumulador = 0;
    for (let i = 0; i < tbody.rows.length; i++) {
        depreciacionAnualRubro = tbody.rows[i].cells[7].textContent;
        valorFloat = extraerCaracteresNumber(depreciacionAnualRubro);
        acumulador += valorFloat;

    }
    valorDepreciacionAnual.textContent = formatter.format(acumulador);
}

function depreciacionAnual(tabla){
    const tbody = document.querySelector(tabla).children[1];

    for (let i = 0; i < tbody.rows.length; i++) {
        celdaFinal = tbody.rows[i].cells[7]
        depreciacionPorcentaje = parseFloat(tbody.rows[i].cells[4].firstChild.value)
        porcenaje = depreciacionPorcentaje*0.01
        valorActualMercado = parseFloat(tbody.rows[i].cells[5].children[1].value)
        valorRecuperacion = parseFloat(tbody.rows[i].cells[6].children[1].value)
        depreciacionAnualRubro = parseFloat((valorActualMercado - valorRecuperacion) * porcenaje);

        celdaFinal.textContent = formatter.format(depreciacionAnualRubro);
    }
}

function sumaValorRecuperacion(tabla){
    const valorRecuperacion = document.querySelector(tabla+' #totalValorRecuperacion')
    const inputsValorRecuperacion = document.querySelectorAll(tabla+' .valorRecuperacion');
    let totalValorRecuperacion = 0;
    inputsValorRecuperacion.forEach(input => {
        totalValorRecuperacion += parseFloat(input.value);
    });
    valorRecuperacion.innerHTML = formatter.format(totalValorRecuperacion);
}

function sumaValorActualMercado(tabla){
    const valorActualMercado = document.querySelector(tabla+' #totalValorActualMercado')
    const inputsValorActualMercado = document.querySelectorAll(tabla+' .valorActualMercado');
    let totalValorActualMercado = 0;
    inputsValorActualMercado.forEach(input => {
        totalValorActualMercado += parseFloat(input.value);
    });
    valorActualMercado.innerHTML = formatter.format(totalValorActualMercado);
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
// ------------- FIN OTROS ACTIVOS FIJOS

// ------------- HERRAMIENTAS
function colectaRepuestoHerramientas(){
    const inputs = document.querySelectorAll('#tablaRepuestoHerramientas input');
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            almacenarDatosRepuestoHerramientas();
            costoRepuestoHerramientas();
            costoDepreciacionAnual();
        })
    });
}
function costoDepreciacionAnual(){
    const tbody = document.querySelector('#tablaRepuestoHerramientas tbody');
    for(let i=0; i< tbody.rows.length ; i++){
        const costoTotalText = tbody.rows[i].cells[3].textContent;
        const costoTotal = extraerCaracteresNumber(costoTotalText);
        const vidaUtilinput = tbody.rows[i].cells[4].lastChild;
        const vidaUtil = vidaUtilinput.value === '' ? 0 : parseFloat(vidaUtilinput.value);
        const valorRepocicionInput = tbody.rows[i].cells[5].lastChild;
        const valorRepocicion = valorRepocicionInput.value === '' ? 0 : parseFloat(valorRepocicionInput.value);
        let depreciacionAnual = ((costoTotal-(costoTotal*valorRepocicion))/vidaUtil)*12;//doce por cada mes del anio
        depreciacionAnual = (!isFinite(depreciacionAnual) ? 0 : depreciacionAnual)
        tbody.rows[i].cells[6].textContent = convertirValorMonetario(depreciacionAnual)
    }
}
function costoRepuestoHerramientas(){
    const tbody = document.querySelector('#tablaRepuestoHerramientas tbody');
    for(let i=0; i< tbody.rows.length ; i++){
        const cantidadHainput = tbody.rows[i].cells[1].lastChild;
        const cantidadHa = cantidadHainput.value === '' ? 0 : parseFloat(cantidadHainput.value);
        const precioUnitarioInput = tbody.rows[i].cells[2].lastChild;
        const precioUnitario = precioUnitarioInput.value === '' ? 0 : parseFloat(precioUnitarioInput.value);
        const total = cantidadHa * precioUnitario;
        tbody.rows[i].cells[3].textContent = convertirValorMonetario(total)
    }
}
function almacenarDatosRepuestoHerramientas(){
    const tbody = document.querySelector('#tablaRepuestoHerramientas tbody');
    const rows = tbody.rows.length;
    let objetos = [];
    let key;
    for(let i = 0 ; i < rows ; i ++){
        let herramienta = {
            nombreHerramienta: '',
            cantidadHectarea: 0,
            precioUnitario: 0,
            vidaUtil: 0,
            valorRepocicion: 0
        };
        let keys = Object.keys(herramienta);//indices del objet
        for (let l = 0; l < keys.length; l++) {
            const input = tbody.rows[i].cells[l].lastChild; //obtenemos el valor del input
            if( input && input.tagName === 'INPUT' ){//TODO: EL INPUT ES NULLO CUANDO NO HAY VALORES, DESPUES DEJA DE SER NULO PERO SE DEBE OMITIR
                const valor = input.type === 'number' ? (input.value === '' ? 0 : parseFloat(input.value)) : input.value;
                key = keys[l]; //asignamos el indice acutal auna variable
                herramienta[key] = input.type === 'text' ? valor : parseFloat(valor)//en el objeto busca la coincidencia con el indice y le asigna el valor de nuestro arreglo de inputs
            }
        }
        objetos.push(herramienta)
    }
    colecta.repuestoHerramientas = objetos
    console.log(colecta.repuestoHerramientas)
}
// ------------- FIN HERRAMIENTAS

// FUNCIONES
// ------------- FUNCION SUMAR COLUMNA INPUTS
function sumarColumnaInputs(tabla, columna){
    const tbody = document.querySelector(tabla + ' tbody');
    let sumatoria = 0;

    for( let i = 0 ; i < tbody.rows.length ; i++ ){
        //de esta forma solo iteramos la columna que ingresemos y acumulamos sus valores parceandolos a enteros
        const input = tbody.rows[i].cells[columna].firstChild;
        const valor = input.value === '' ? 0 : parseFloat(input.value);

        sumatoria += valor;
    }
    return sumatoria;
}
// ------------- FIN FUNCION SUMAR COLUMNA INPUTS

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
// ------------ FIN FUNCION MOSTRAR PORCENTAJES

// -------------- BOTONES AGREGAR Y ELIMINAR FILAS
// -------------- BOTONES VARIEDAD ARBOLES
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
    eliminarUltimaFila('#tablaVariedadArboles', colecta.arboles, sumarArboles);
})
// -------------- FIN BOTONES VARIEDAD ARBOLES

// -------------- BOTONES ACTIVIDADES PRODUCCION
const botonNuevaFilaActividadesProduccion = document.querySelector('#nuevaFilaActividadesProduccion');
const botonNuevaFilaOtosCostos = document.querySelector('#nuevaFilaOtosCostos');
botonNuevaFilaActividadesProduccion.addEventListener('click', ()=>{
    filaActividadesProduccion('#tablaActividadesProduccion', colectaActividadesProduccion);
})
botonNuevaFilaOtosCostos.addEventListener('click', ()=>{
    filaActividadesProduccion('#tablaOtrosCostos', colectaOtrosCostos);
})

function filaActividadesProduccion(idTabla, funcion){
    const tbody = document.querySelector(idTabla).children[1];
    const tr = document.createElement('TR');
    const td1 = document.createElement('TD');
    const td2 = document.createElement('TD');
    const td3 = document.createElement('TD');
    const input1 = document.createElement('INPUT');
    const input2 = document.createElement('INPUT');
    const input3 = document.createElement('INPUT');
    td2.classList.add('etiqueta');
    td3.classList.add('etiqueta');
    input1.setAttribute('type', 'text');
    input1.setAttribute('placeholder', 'Escribe el nombre');
    input1.setAttribute('required', '');
    input2.setAttribute('type', 'number');
    input3.setAttribute('type', 'number');
    // if(idTabla === 'tablaOtrosCostos')input3.classList.add('otrosCostosTotal')
    td1.appendChild(input1);
    td2.innerHTML += '<span>$</span>';
    td2.appendChild(input2);
    td3.innerHTML += '<span>$</span>';
    td3.appendChild(input3);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
    funcion();
}

// -------------- BOTONES ELIMINAR
const botonEliminarFilaActividadesProduccion = document.querySelector('#eliminarFilaActividadesProduccion');
const botonEliminarFilaOtosCostos = document.querySelector('#eliminarFilaOtosCostos');

botonEliminarFilaActividadesProduccion.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaActividadesProduccion', colecta.actividadesProduccion, almacenarDatosActividadesProduccion);
})
botonEliminarFilaOtosCostos.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaOtrosCostos', colecta.otrosCostos, almacenarDatosOtrosCostos);
})

// -------------- FIN BOTONES ACTIVIDADES PRODUCCION

// -------------- BOTONES OTROS ACTIVOS FIJOS
const botonNuevaFilaContrucciones = document.querySelector('#nuevaFilaContrucciones');
const botonNuevaFilaVehiculos = document.querySelector('#nuevaFilaVehiculos');
const botonNuevaFilaImplementos = document.querySelector('#nuevaFilaImplementos');
const botonNuevaFilaEquipoComunicacion = document.querySelector('#nuevaFilaEquipoComunicacion');
const botonNuevaFilaEquipo = document.querySelector('#nuevaFilaEquipo');

botonNuevaFilaContrucciones.addEventListener('click', ()=>{
    filaOtrosActivosFijos('#tablaContrucciones', almacenarDatosConstrucciones);
})
botonNuevaFilaVehiculos.addEventListener('click', ()=>{
    filaOtrosActivosFijos('#tablaVehiculos', almacenarDatosVehiculos);
})
botonNuevaFilaImplementos.addEventListener('click', ()=>{
    filaOtrosActivosFijos('#tablaImplementos', almacenarDatosImplementos);
})
botonNuevaFilaEquipoComunicacion.addEventListener('click', ()=>{
    filaOtrosActivosFijos('#tablaEquiposComunicacion', almacenarDatosEquipoComunicacion);
})
botonNuevaFilaEquipo.addEventListener('click', ()=>{
    filaOtrosActivosFijos('#tablaEquipos', almacenarDatosEquipo);
})

function filaOtrosActivosFijos(idTabla, funcion) {
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
    td8.classList.add('valorDepreciacionAnual')
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
    if(idTabla !== '#tablaContrucciones') input3.setAttribute('placeholder', 'Ej. 2012');

    input4.setAttribute('type', 'number');
    input4.setAttribute('required', '');
    input4.value = 0;

    input5.setAttribute('type', 'number');
    input5.value = 0;
    if(idTabla === '#tablaContrucciones') input5.setAttribute('disabled', '')

    input6.setAttribute('type', 'number');
    input6.classList.add('valorActualMercado')
    input6.value = 0;
    input7.setAttribute('type', 'number');
    input7.classList.add('valorRecuperacion')
    input7.value = 0;
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

    // almacenarOtrosActivosFijos();
    funcion();


    calcularOperacionesActivosFijos(idTabla)
    // sumaValorActualMercado()
}

// FUNCION BOTON ELIMINAR FILA
const botonEliminarFilaConstruccion = document.querySelector('#eliminarFilaContrucciones');
const botonEliminarFilaVehiculos = document.querySelector('#eliminarFilaVehiculos');
const botonEliminarFilaImplementos = document.querySelector('#eliminarFilaImplementos');
const botonEliminarFilaEquipoComunicacion = document.querySelector('#eliminarFilaEquipoComunicacion');
const botonEliminarFilaEquipo = document.querySelector('#eliminarFilaEquipo');

botonEliminarFilaConstruccion.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaContrucciones', colecta.construcciones, funcion = null, operacionesOtrosActivosFijos);
})
botonEliminarFilaVehiculos.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaVehiculos', colecta.vehiculos, funcion = null, operacionesOtrosActivosFijos);
})
botonEliminarFilaImplementos.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaImplementos', colecta.implementos, funcion = null, operacionesOtrosActivosFijos);
})
botonEliminarFilaEquipoComunicacion.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaEquipoComunicacion', colecta.equiposComunicacion, funcion = null, operacionesOtrosActivosFijos);
})
botonEliminarFilaEquipo.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaEquipos', colecta.equipos, funcion = null, operacionesOtrosActivosFijos);
})

function eliminarUltimaFila(idTabla, objeto, funcion = null, funcionActualizarOperaciones = null){
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

    if(funcion) funcion();
    if(funcionActualizarOperaciones) funcionActualizarOperaciones(idTabla);
}
// -------------- FIN OTROS ACTIVOS FIJOS

// -------------- COSTO ANUAL ESTABLECIMIENTOS DE PLANTACION
const botonNuevaFilaCostoAnualEstablecimientoPlantacion = document.querySelector('#nuevaFilaCostoAnualEstablecimientoPlantacion');
botonNuevaFilaCostoAnualEstablecimientoPlantacion.addEventListener('click', ()=>{
    filaCostoAnualEstablecimientoPlantacion('#tablaCostoAnualEstablecimientoPlantacion', almacenarDatosCostoAnualEstablecimientoPlantacion);
})
function filaCostoAnualEstablecimientoPlantacion(idTabla, funcion){
    const tbody = document.querySelector(idTabla).children[1];
    const tr = document.createElement('TR');
    const td1 = document.createElement('TD');
    const td2 = document.createElement('TD');
    const input1 = document.createElement('INPUT');
    const input2 = document.createElement('INPUT');
    td2.classList.add('etiqueta');
    input1.setAttribute('type', 'text');
    input1.setAttribute('required', '');
    input2.setAttribute('type', 'number');
    input2.classList.add('costoAnual');
    td1.appendChild(input1);
    td2.innerHTML += '<span>$</span>';
    td2.appendChild(input2);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
    funcion();
    colocarNumeroAnio();
    operacionesValorPlantacion();
    colectaCostoAnualEstablecimientoPlantacion();
}
// elimiar
const botonEliminarFilaCostoAnualEstablecimientoPlantacion = document.querySelector('#eliminarFilaCostoAnualEstablecimientoPlantacion');
botonEliminarFilaCostoAnualEstablecimientoPlantacion.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaCostoAnualEstablecimientoPlantacion', colecta.costoAnualesEstablecimientoPlantacion, almacenarDatosCostoAnualEstablecimientoPlantacion, operacionesValorPlantacion)
})
// -------------- FIN COSTO ANUAL ESTABLECIMIENTOS DE PLANTACION
// -------------- FIN FUNCION BOTON AGREGAR Y ELIMINAR FILAS

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

//funcion extrae caracteres de una etiqueta con comas y signo de pesos
function extraerCaracteresNumber(caracteres){
    let sincomas = caracteres.replaceAll(',', '')
    let sincaracteres = sincomas.replaceAll('$', '')
    let valorFloat = parseFloat(sincaracteres)
    return valorFloat;
}
function convertirValorMonetario(valor){
    return formatter.format(valor);
}