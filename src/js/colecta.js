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
    otrosCostosActividadesProduccion: [],
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
    repuestoHerramientas: [],
    fertilizantesGranular: [],
    fertilizantesFoliar: [],
    insecticidas: [],
    fungicidas: [],
    herbicidas: [],
    combustiblesLubricantes: [],
    mantenimientosReparaciones: [],
    costosCosecha: [],
    manoObraContratada: [],
    manoObraFamiliar: [],
    tiempoManoObra:{
        promedioDiasLaborados: 0,
        mesesLaborados: 0
    },
    manoObraPermanente: [],
    otrosCostosGenerales: [],
    ingresosUrp: {
        rendimiento: 0,
        porcentajeVendido: 0,
        precio: '',
        rendimientoVenta: 0
    },
    subproductos: [],
    otrosIngresosUrp: [],
    gastosFamiliares: {
        noMiembros: 0,
        seguroFamiliar: 0,
        gastoFamiliarAnual: 0
    },
    otraInformacion: {
        rentaTierraRegion: 0,
        costoTotalJornalRegion: 0
    }
}

document.addEventListener('DOMContentLoaded', () => {
    colectaArbol();
    colectaPatronCultivos();
    colectaSuperficeUrp();
    colectaValorTierra();
    colectaValorPlantacion();
    colectaActividadesProduccion();
    colectaOtrosCostosActividadesProduccion();
    colectaCostoAnualEstablecimientoPlantacion();
    colectaConstrucciones();
    colectaVehiculos();
    colectaImplementos();
    colectaEquiposComunicacion();
    colectaEquipos();
    colectaRepuestoHerramientas();
    colectaFertilizanteGranular();
    colectaFertilizanteFoliar();
    colectaInsecticidas();
    colectaFungicidas();
    colectaHerbicidas();
    colectaCombustiblesLubricantes();
    colectaMantenimientoReparaciones();
    colectaCostosCosecha();
    colectaManoObraContratada();
    colectaManoObraFamiliar();
    colectaTiempoManoObra();
    colectaManoObraPermanente();
    colectaOtrosCostosGenerales();
    colectaIngresosUrp();
    colectaSubproductos();
    colectaOtrosIngresosUrp();
    colectaGastosFamiliares();
    colectaOtraInformacion();
    inputsOperaciones();
});

// ---------- COLECTA ARBOL
function colectaArbol(){
    const inputs = document.querySelectorAll('#tablaVariedadArboles input');
    let arbol = {
        variedad: '',
        numArboles: 0
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaVariedadArboles', arbol);
            colecta.arboles = objetos;
            operacionesArboles();
        })
    });
}
function operacionesArboles(){
    dividirPorcentaje('#tablaVariedadArboles',1, 2);
    sumarArboles();
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
    const inputs = document.querySelectorAll('#tablaPatronCultivos input');
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            almacenarDatosPatronCultivos();
            mostrarSumatoriaPatronCultivos();
        })
    });
}
function almacenarDatosPatronCultivos(){
    const valorInputHectareaRiego = document.querySelector('#hectareaRiegoInput');
    const valorHectareaRiego = valorInputHectareaRiego.value === '' ? 0 : parseFloat(valorInputHectareaRiego.value)
    const valorInputHectareaTemporal = document.querySelector('#hectareaTemporalInput');
    const valorHectareaTemporal = valorInputHectareaTemporal.value === '' ? 0 : parseFloat(valorInputHectareaTemporal.value)
    const valorInputHectareaSinUso = document.querySelector('#hectareaSinUsoInput');
    const valorHectareaSinUso = valorInputHectareaSinUso.value === '' ? 0 : parseFloat(valorInputHectareaSinUso.value)

    colecta.patronCultivos.hectareaRiego = valorHectareaRiego;
    colecta.patronCultivos.hectareaTemporal = valorHectareaTemporal;
    colecta.patronCultivos.sinUso = valorHectareaSinUso;
}

function mostrarSumatoriaPatronCultivos(){
    const superficeCultivo = document.querySelector('#superficieCultivo');
    const superficeCultivoPorcentaje = document.querySelector('#superficieCultivoPorcentaje');
    const hectareaRiegoPorcentaje = document.querySelector('#hectareaRiegoPorcentaje');
    const hectareaTemporalPorcentaje = document.querySelector('#hectareaTemporalPorcentaje');
    const sinUsoPorcentaje = document.querySelector('#hectareaSinUsoPorcentaje');
    const totalHectareas = document.querySelector('#totalHectareas');
    const totalHectareasPorcentaje = document.querySelector('#totalHectareasPorcentaje');

    let superficeCultivoValue = (superficeCultivo.textContent === '') ? 0 : parseFloat(superficeCultivo.textContent);
    let hectareaRiego = document.querySelector('#hectareaRiegoInput');
    let hectareaRiegoValue = (hectareaRiego.value === '') ? 0 : parseFloat(hectareaRiego.value);
    let hectareaTemporal = document.querySelector('#hectareaTemporalInput');
    let hectareaTemporalValue = (hectareaTemporal.value === '') ? 0 : parseFloat(hectareaTemporal.value);
    let sinUso = document.querySelector('#hectareaSinUsoInput');
    let sinUsolValue = (sinUso.value === '') ? 0 : parseFloat(sinUso.value);
    let totalHectareasValue = (totalHectareas.textContent === '') ? 0 : parseFloat(totalHectareas.textContent);

    superficeCultivoValue = hectareaRiegoValue + hectareaTemporalValue;
    totalHectareasValue = superficeCultivoValue + sinUsolValue;
    superficeCultivoPorcentajeValue = (superficeCultivoValue/totalHectareasValue)*100;
    superficeCultivoPorcentajeValue = isNaN(superficeCultivoPorcentajeValue) ? 0 : superficeCultivoPorcentajeValue;
    hectariaRiegoPorcentaje = (hectareaRiegoValue/superficeCultivoValue)*100;
    hectariaRiegoPorcentaje = isNaN(hectariaRiegoPorcentaje) ? 0 : hectariaRiegoPorcentaje;
    hectariaTemporalPorcentaje = (hectareaTemporalValue/superficeCultivoValue)*100;
    hectariaTemporalPorcentaje = isNaN(hectariaTemporalPorcentaje) ? 0 : hectariaTemporalPorcentaje;
    sinUsoPorcentajeValue = (sinUsolValue/totalHectareasValue)*100;
    sinUsoPorcentajeValue = isNaN(sinUsoPorcentajeValue) ? 0 : sinUsoPorcentajeValue;
    totalHectareasPorcentajeValue = superficeCultivoPorcentajeValue + sinUsoPorcentajeValue;
    totalHectareasPorcentajeValue = isNaN(totalHectareasPorcentajeValue) ? 0 : totalHectareasPorcentajeValue;


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
    const inputsSuperficeUrp = document.querySelectorAll('#tablaSuperficeUrp input');
    // const tbody =
    inputsSuperficeUrp.forEach(input => {
        input.addEventListener('input', ()=>{
            almacenarDatosSuperfice();
            operacionesSuperficieUrp();
        })
    });
}
function operacionesSuperficieUrp(){
    sumaAreaCultivadaSuperficeUrp();
    sumarTotalHectareasFilas();
    sumarTotalHA();
    superficeValorTierra();
}
function almacenarDatosSuperfice(){
    const input = document.querySelectorAll('#tablaSuperficeUrp input');
    const {superficieUrp} = colecta;

    const keys = Object.keys(superficieUrp);//indices del objet
    let key;
    for (let i = 0; i < keys.length; i++) {
        key = keys[i]; //asignamos el indice acutal auna variable
        const valor = input[i].value === '' ? 0 : parseFloat(input[i].value);
        superficieUrp[key] = valor//en el objeto busca la coincidencia con el indice y le asigna el valor de nuestro arreglo de inputs
    }
    // console.log(colecta)
}
function sumaAreaCultivadaSuperficeUrp(){
    const td = document.querySelectorAll('.sumaAreaCultivada');
    const tbody = document.querySelector('#tablaSuperficeUrp tbody');

    //sumar por columnas
    for( let i=1; i <= td.length; i++){
        let suma = 0;
        for (let l = 1; l < tbody.rows.length -1; l++) {
            const input = tbody.rows[l].cells[i].lastChild;
            const value = input.value === '' ? 0 : parseFloat(input.value);
            suma += value;
            const insertar = tbody.rows[0].cells[i];
            insertar.textContent = suma
        }
    }
}
function sumarTotalHectareasFilas(){
    const tabla = document.querySelector('#tablaSuperficeUrp tbody');

    //iteramos por filas
    for (let i = 0; i < tabla.rows.length ; i++) {
        let acumulador = 0;

        for (let l = 1; l < tabla.rows[i].cells.length - 1; l++) { //iteracion por columnas
            if( i === 0 ){ //columna sin input
                const element = tabla.rows[i].cells[l];//td
                acumulador += parseFloat(element.textContent)
            } else { //columnas con input
                const input = tabla.rows[i].cells[l].lastChild;//input
                const value = input.value === '' ? 0 : parseFloat(input.value);
                acumulador += value
            }

        }
        const ultimaColumna = tabla.rows[i].cells.length-1; //numero de columnas
        const total = tabla.rows[i].cells[ultimaColumna];
        total.textContent = acumulador;
    }
}
function sumarTotalHA(){
    const tabla = document.querySelector('#tablaSuperficeUrp').children[1]

    //iteramos por columnas
    for (let l = 1; l < tabla.rows[1].cells.length ; l++) {
        let acumulador = 0;

        for (let i = 1; i < tabla.rows.length ; i++) {

            const ultimaColumnaValue = tabla.rows[1].cells.length -1;
            if( l === ultimaColumnaValue ){ //cuando este en la ultima columna (no son inputs)
                const element = tabla.rows[i].cells[l];//td
                acumulador += parseFloat(element.textContent)
            } else {
                const input = tabla.rows[i].cells[l].firstChild;//input
                const value = input.value === '' ? 0 : parseFloat(input.value);
                acumulador += value
            }

        }
        const tfoot = document.querySelector('#tablaSuperficeUrp').children[2].firstElementChild.cells[l]
        tfoot.textContent = acumulador;
    }
}
// ------------- FIN COLECTA SUPERFICIE URP

// ------------- COLECTA VALOR TIERRA
function colectaValorTierra(){
    const inputs = document.querySelectorAll('#tablaValorTierra input');

    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            //sincronizar los valores del input con el objeto
            almacenarDatosValorTierra();
            operacionesValorTierra();
        })
    });
}
function almacenarDatosValorTierra(){
    const input = document.querySelectorAll('#tablaValorTierra input');
    const {valorTierra} = colecta;

    const keys = Object.keys(valorTierra);//indices del objet
    let key;
    for (let i = 0; i < keys.length; i++) {
        key = keys[i]; //asignamos el indice acutal auna variable
        const valor = input[i].value === '' ? 0 : parseFloat(input[i].value);
        valorTierra[key] = valor;//en el objeto busca la coincidencia con el indice y le asigna el valor de nuestro arreglo de inputs
    }
    // console.log(colecta)
}
function operacionesValorTierra(){
    //multiplicar los datos
    calcularValorTotalValorTierra();
    //total superficie y valor de tabla valor de la tierra
    sumatoriaTotalSuperficeValorTierra();
}
function superficeValorTierra(){
    const areaCultivada = document.querySelector('#areaCultivadaSuperficie');
    areaCultivada.textContent = document.querySelector('#totalHa').textContent;
    const hectareaPropiedadSuperficie = document.querySelector('#hectareaPropiedadSuperficie');
    hectareaPropiedadSuperficie.textContent = document.querySelector('#totalHectareasPropiasPrivada').textContent;
    const hectareaEjidalesSuperficie = document.querySelector('#hectareaEjidalesSuperficie');
    hectareaEjidalesSuperficie.textContent = document.querySelector('#totalHectareasPropiasEjidales').textContent;
    const hectareaPrestadasSuperficie = document.querySelector('#hectareaPrestadasSuperficie');
    hectareaPrestadasSuperficie.textContent = document.querySelector('#totalHectareasNoPropiasPrestadas').textContent;
    const hectareaSinUsoSuperficie = document.querySelector('#hectareaSinUsoSuperficie');
    hectareaSinUsoSuperficie.textContent = document.querySelector('#totalHectareasNoPropiasRentadas').textContent;
}
function calcularValorTotalValorTierra(){
    const tbody = document.querySelector('#tablaValorTierra tbody');

    for (let i = 0; i < tbody.rows.length; i++) {
        let multiplicar = 0;
        let valorHa = tbody.rows[i].cells[1];
        valorHa = valorHa.textContent === '' ? 0 : parseFloat(valorHa.textContent)
        const elementValorTotal = tbody.rows[i].cells[2].lastChild;
        const valorTotal = elementValorTotal.value === '' ? 0 : parseFloat(elementValorTotal.value)

        multiplicar = valorHa * valorTotal;
        const insertar = tbody.rows[i].cells[3];
        insertar.textContent = convertirValorMonetario(multiplicar)
    }
}
function sumatoriaTotalSuperficeValorTierra(){
    const sumaSuperficie = sumarColumna('#tablaValorTierra',1);
    // console.log(sumaSuperficie)
    const sumaValorTotal = sumarColumna('#tablaValorTierra',3);
    //contenedores
    const totalSuperficeHas = document.querySelector('#totalSuperficeHas');
    const totalSuperficeValorTotal = document.querySelector('#totalSuperficeValorTotal');
    //asignacion
    totalSuperficeHas.textContent = sumaSuperficie;
    totalSuperficeValorTotal.textContent = convertirValorMonetario(sumaValorTotal);
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
}
function calcularCostoPlantacion(){
    const arbolesHaInput = document.querySelector('#tablaValorPlantacion #arbolesHa');
    const arbolesHa = arbolesHaInput.value === '' ? 0 : parseFloat(arbolesHaInput.value);
    const costoArbolInput = document.querySelector('#tablaValorPlantacion #costoArbol');
    const costoArbol = costoArbolInput.value === '' ? 0 : parseFloat(costoArbolInput.value);
    const totalSuperficeHasText = document.querySelector('#tablaValorTierra #totalSuperficeHas');
    const totalSuperficeHas = totalSuperficeHasText.textContent === '' ? 0 : parseFloat(totalSuperficeHasText.textContent);
    //contenedor
    const costoPlantacion = document.querySelector('#tablaValorPlantacion #costoPlantacion');
    costoPlantacion.textContent = convertirValorMonetario(arbolesHa*costoArbol*totalSuperficeHas);
}
function almacenarDatosValorPlantacion(){
    const inputsValorPlantacion = document.querySelectorAll('#tablaValorPlantacion input');
    const {valorPlantacion} = colecta;
    const keys = Object.keys(valorPlantacion);//indices del objet
    let key;
    for (let i = 0; i < keys.length; i++) {
        key = keys[i]; //asignamos el indice acutal auna variable
        valorPlantacion[key] = inputsValorPlantacion[i].value === '' ? 0 : parseFloat(inputsValorPlantacion[i].value);//en el objeto busca la coincidencia con el indice y le asigna el valor de nuestro arreglo de inputs
    }
    // console.log(colecta)
}
// ------------- FIN COLECTA VALOR PLANTACION

// ------------- COLECTA ACTIVIDADES DE PRODUCCION
function colectaActividadesProduccion(){
    const inputs = document.querySelectorAll('#tablaActividadesProduccion input');
    let actividadProduccion = {
        nombreActividadProduccion: '',
        precioUnitario: 0,
        actual: 0
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaActividadesProduccion', actividadProduccion);
            colecta.actividadesProduccion = objetos;
        })
    });
}
function colectaOtrosCostosActividadesProduccion(){
    const inputs = document.querySelectorAll('#tablaOtrosCostosActividadesProduccion input');
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            almacenarDatosOtrosCostosActividadesProduccion();
        })
    });
}
function almacenarDatosOtrosCostosActividadesProduccion(){
    const tbody = document.querySelector('#tablaOtrosCostosActividadesProduccion tbody');
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
    colecta.otrosCostosActividadesProduccion = objetos
    console.log(colecta)
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
function colectaConstrucciones(){
    const inputs = document.querySelectorAll('#tablaContrucciones input');
    let construccion = {
        nombre: '',
        anioConstruccionAdquisicion: 0,
        modelo: 0,
        anioVidaUtil: 0,
        depreciacionAnual: 0,
        valorActualMercado: '',
        valorRecuperacion: ''
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaContrucciones', construccion);
            colecta.construcciones = objetos;
            operacionesOtrosActivosFijos('#tablaContrucciones');
        })
    });
}
function colectaVehiculos(){
    const inputs = document.querySelectorAll('#tablaVehiculos input');
    let vehiculo = {
        nombre: '',
        anioConstruccionAdquisicion: 0,
        modelo: 0,
        anioVidaUtil: 0,
        depreciacionAnual: 0,
        valorActualMercado: '',
        valorRecuperacion: ''
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaVehiculos', vehiculo);
            colecta.vehiculos = objetos;
            operacionesOtrosActivosFijos('#tablaVehiculos');
        })
    });
}
function colectaImplementos(){
    const inputs = document.querySelectorAll('#tablaImplementos input');
    let implemento = {
        nombre: '',
        anioConstruccionAdquisicion: 0,
        modelo: 0,
        anioVidaUtil: 0,
        depreciacionAnual: 0,
        valorActualMercado: '',
        valorRecuperacion: ''
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaImplementos', implemento);
            colecta.implementos = objetos;
            operacionesOtrosActivosFijos('#tablaImplementos');
        })
    });
}
function colectaEquiposComunicacion(){
    const inputs = document.querySelectorAll('#tablaEquiposComunicacion input');
    let equipoComunicacion = {
        nombre: '',
        anioConstruccionAdquisicion: 0,
        modelo: 0,
        anioVidaUtil: 0,
        depreciacionAnual: 0,
        valorActualMercado: '',
        valorRecuperacion: ''
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaEquiposComunicacion', equipoComunicacion);
            colecta.equiposComunicacion = objetos;
            operacionesOtrosActivosFijos('#tablaEquiposComunicacion');
        })
    });
}
function colectaEquipos(){
    const inputs = document.querySelectorAll('#tablaEquipos input');
    let equipo = {
        nombre: '',
        anioConstruccionAdquisicion: 0,
        modelo: 0,
        anioVidaUtil: 0,
        depreciacionAnual: 0,
        valorActualMercado: '',
        valorRecuperacion: ''
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaEquipos', equipo);
            colecta.equipos = objetos;
            operacionesOtrosActivosFijos('#tablaEquipos');
        })
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
        let celdaFinal = tbody.rows[i].cells[7]
        let depreciacionPorcentaje = tbody.rows[i].cells[4].firstChild;
        depreciacionPorcentaje = depreciacionPorcentaje.value === '' ? 0 : parseFloat(depreciacionPorcentaje.value);
        let porcenaje = depreciacionPorcentaje*0.01;
        let valorActualMercado = tbody.rows[i].cells[5].lastChild;
        valorActualMercado = valorActualMercado.value === '' ? 0 : parseFloat(valorActualMercado.value);
        let valorRecuperacion = tbody.rows[i].cells[6].lastChild;
        valorRecuperacion = valorRecuperacion.value === '' ? 0 : parseFloat(valorRecuperacion.value);
        let depreciacionAnualRubro = parseFloat((valorActualMercado - valorRecuperacion) * porcenaje);

        celdaFinal.textContent = convertirValorMonetario(depreciacionAnualRubro);
    }
}

function sumaValorRecuperacion(tabla){
    const valorRecuperacion = document.querySelector(tabla+' #totalValorRecuperacion')
    const inputsValorRecuperacion = document.querySelectorAll(tabla+' .valorRecuperacion');
    let totalValorRecuperacion = 0;
    inputsValorRecuperacion.forEach(input => {
        let valor = input.value === '' ? 0 : parseFloat(input.value)
        totalValorRecuperacion += valor;
    });
    valorRecuperacion.innerHTML = convertirValorMonetario(totalValorRecuperacion);
}

function sumaValorActualMercado(tabla){
    const valorActualMercado = document.querySelector(tabla+' #totalValorActualMercado')
    const inputsValorActualMercado = document.querySelectorAll(tabla+' .valorActualMercado');
    let totalValorActualMercado = 0;
    inputsValorActualMercado.forEach(input => {
        let valor = input.value === '' ? 0 : parseFloat(input.value)
        totalValorActualMercado += valor;
    });
    valorActualMercado.innerHTML = convertirValorMonetario(totalValorActualMercado);
}
// ------------- FIN OTROS ACTIVOS FIJOS

// ------------- HERRAMIENTAS
function colectaRepuestoHerramientas(){
    const inputs = document.querySelectorAll('#tablaRepuestoHerramientas input');
    let herramienta = {
        nombreHerramienta: '',
        cantidadHectarea: 0,
        precioUnitario: 0,
        vidaUtil: 0,
        valorRepocicion: 0
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaRepuestoHerramientas', herramienta);
            colecta.repuestoHerramientas = objetos;
            operacionesRepuestoHerramientas();
        })
    });
}
function operacionesRepuestoHerramientas(){
    costoRepuestoHerramientas();
    costoDepreciacionAnual();
    costoTotalRepuestoHerramientas();
    valorRepocicionTotalRepuestoHerramientas();
    depreciacionAnualTotalRepuestoHerramientas();
}
function depreciacionAnualTotalRepuestoHerramientas(){
    const contenedor = document.querySelector('#tablaRepuestoHerramientas #totalDepreciacionAnual');
    let valor = sumarColumna('#tablaRepuestoHerramientas', 6);
    contenedor.textContent = convertirValorMonetario(valor)
}
function valorRepocicionTotalRepuestoHerramientas(){
    const contenedor = document.querySelector('#tablaRepuestoHerramientas #totalValorRepocicion');
    let valor = sumarColumnaInputs('#tablaRepuestoHerramientas', 5);
    contenedor.textContent = convertirValorMonetario(valor)
}
function costoTotalRepuestoHerramientas(){
    const contenedor = document.querySelector('#tablaRepuestoHerramientas #totalCostoTotal');
    let valor = sumarColumna('#tablaRepuestoHerramientas', 3);
    contenedor.textContent = convertirValorMonetario(valor)
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
// ------------- FIN HERRAMIENTAS

// ------------- AGROQUIMICOS
// ------------- FERTILIZANTE GRANULAR
function colectaFertilizanteGranular(){
    const inputs = document.querySelectorAll('#tablaFertilizantesGranular input');
    let granular = {
        nombreFertilizante: '',
        unidad: '',
        cantidadHa: 0,
        precioUnitario: 0
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaFertilizantesGranular', granular);
            colecta.fertilizantesGranular = objetos;
            operacionesAgroquimicos('#tablaFertilizantesGranular');
        })
    });
}
// ------------- FIN FERTILIZANTE GRANULAR
// ------------- FERTILIZANTE FOLIAR
function colectaFertilizanteFoliar(){
    const inputs = document.querySelectorAll('#tablaFertilizantesFoliar input');
    let foliar = {
        nombreFertilizante: '',
        unidad: '',
        cantidadHa: 0,
        precioUnitario: 0
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaFertilizantesFoliar', foliar);
            colecta.fertilizantesFoliar = objetos;
            operacionesAgroquimicos('#tablaFertilizantesFoliar');
        })
    });
}
// ------------- FIN FERTILIZANTE FOLIAR
// ------------- PESTICIDAS CONTRO BIOLOGICO Y OTROS
function colectaInsecticidas(){
    const inputs = document.querySelectorAll('#tablaInsecticidas input');
    let insecticida = {
        nombreInsecticida: '',
        unidad: '',
        cantidadHa: 0,
        precioUnitario: 0
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaInsecticidas', insecticida);
            colecta.insecticidas = objetos;
            operacionesAgroquimicos('#tablaInsecticidas');
        })
    });
}
function colectaFungicidas(){
    const inputs = document.querySelectorAll('#tablaFungicidas input');
    let fungicida = {
        nombreFungicida: '',
        unidad: '',
        cantidadHa: 0,
        precioUnitario: 0
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaFungicidas', fungicida);
            colecta.fungicidas = objetos;
            operacionesAgroquimicos('#tablaFungicidas');
        })
    });
}
function colectaHerbicidas(){
    const inputs = document.querySelectorAll('#tablaHerbicidas input');
    let herbicida = {
        nombreHerbicida: '',
        unidad: '',
        cantidadHa: 0,
        precioUnitario: 0
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaHerbicidas', herbicida);
            colecta.herbicidas = objetos;
            operacionesAgroquimicos('#tablaHerbicidas');
        })
    });
}
function colectaCombustiblesLubricantes(){
    const inputs = document.querySelectorAll('#tablaCombustiblesLubricantes input');
    let combustibleLubricante = {
        nombreCombustiblesLubricantes: '',
        litros: 0,
        precioUnitario: 0,
        costo: 0
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaCombustiblesLubricantes', combustibleLubricante);
            colecta.combustiblesLubricantes = objetos;
            operacionesCombustiblesLubricantes();
        })
    });
}
// ------------- FIN PESTICIDAS CONTRO BIOLOGICO Y OTROS
function operacionesCombustiblesLubricantes(){
    costoMesCombustiblesLubricantes();
    costoAnualCombustiblesLubricantes();
    totalCombustiblesLubricantes();
}
function operacionesAgroquimicos(tabla){
    costoTotalAgroquimico(tabla);
    subtotalAgroquimicosFertilizantes();
    subtotalAgroquimicosOtrosInsecticidas();
    totalAgroquimicos();
}
function costoAnualCombustiblesLubricantes(){
    const tbody = document.querySelector('#tablaCombustiblesLubricantes tbody');
    const numMeses = 12;

    for (let i = 0; i < tbody.rows.length; i++) {
        let valormes = tbody.rows[i].cells[3].textContent;
        valormes = extraerCaracteresNumber(valormes);

        let total = (valormes * numMeses);

        let celdaFinal = tbody.rows[i].cells[4];
        celdaFinal.textContent = convertirValorMonetario(total);
    }
}
function costoMesCombustiblesLubricantes(){
    const tbody = document.querySelector('#tablaCombustiblesLubricantes tbody');

    for (let i = 0; i < tbody.rows.length; i++) {
        let litros = tbody.rows[i].cells[1].lastChild;
        litros = litros.value === '' ? 0 : parseFloat(litros.value);
        let precioUnitario = tbody.rows[i].cells[2].lastChild;
        precioUnitario = precioUnitario.value === '' ? 0 : parseFloat(precioUnitario.value);

        let total = (precioUnitario * litros);

        let celdaFinal = tbody.rows[i].cells[3];
        celdaFinal.textContent = convertirValorMonetario(total);
    }
}
function totalCombustiblesLubricantes(){
    const total = document.querySelector('#totalCombustiblesLubricantes');
    const totalCombustiblesLubricantes = sumarColumna('#tablaCombustiblesLubricantes', 4);
    total.textContent = convertirValorMonetario(totalCombustiblesLubricantes);
}
function totalAgroquimicos(){
    const total = document.querySelector('#totalCostoAgroquimicos');
    const subtotalFertilizantes = extraerCaracteresNumber(document.querySelector('#subtotalFertilizantes').textContent);
    const subtotalOtros = extraerCaracteresNumber(document.querySelector('#subtotalPesticidasControBiologicoOtros').textContent);
    total.textContent = convertirValorMonetario(subtotalFertilizantes+subtotalOtros);
}
function subtotalAgroquimicosOtrosInsecticidas(){
    const totalInsecticidas = sumarColumna('#tablaInsecticidas', 4);
    const totalFungicidas = sumarColumna('#tablaFungicidas', 4);
    const totalHerbicidas = sumarColumna('#tablaHerbicidas', 4);
    const subtotalFertilizantes = document.querySelector('#tablaHerbicidas #subtotalPesticidasControBiologicoOtros');

    subtotalFertilizantes.textContent =convertirValorMonetario(totalInsecticidas+totalFungicidas+totalHerbicidas)
}
function subtotalAgroquimicosFertilizantes(){
    const totalGranular = sumarColumna('#tablaFertilizantesGranular', 4);
    const totalFoliar = sumarColumna('#tablaFertilizantesFoliar', 4);
    const subtotalFertilizantes = document.querySelector('#tablaFertilizantesFoliar #subtotalFertilizantes');

    subtotalFertilizantes.textContent =convertirValorMonetario(totalGranular+totalFoliar)
}
function costoTotalAgroquimico(tabla){
    const tbody = document.querySelector(tabla + ' tbody');
    const valor = getTotalSuperficie();

    for (let i = 0; i < tbody.rows.length; i++) {
        let cantidadha = tbody.rows[i].cells[2].lastChild;
        cantidadha = cantidadha.value === '' ? 0 : parseFloat(cantidadha.value);
        let precioUnitario = tbody.rows[i].cells[3].lastChild;
        precioUnitario = precioUnitario.value === '' ? 0 : parseFloat(precioUnitario.value);

        let total = (valor * precioUnitario * cantidadha);

        let celdaFinal = tbody.rows[i].cells[4];
        celdaFinal.textContent = convertirValorMonetario(total);
    }
}
// ------------- FIN AGROQUIMICOS
// ------------- MANTENIMIENTO REPARACIONES
function colectaMantenimientoReparaciones(){
    const inputs = document.querySelectorAll('#tablaMantenimientoReparaciones input');
    let mantenimietoReparacion = {
        nombreMantenimietoReparacion: '',
        unidades: 0,
        precioUnitario: 0,
        costoMes: 0,
        costoAnual: 0,
        porcenajeUso: 0
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaMantenimientoReparaciones', mantenimietoReparacion);
            colecta.mantenimientosReparaciones = objetos;
            operacionesMantenimientoReparaciones();
        })
    });
}
function operacionesMantenimientoReparaciones(){
    totalCostoActualMantenimientoReparaciones();
}
function totalCostoActualMantenimientoReparaciones(){
    const suma = sumarColumnaInputs('#tablaMantenimientoReparaciones', 4);
    const total = document.querySelector('#totalMantenimientoReparaciones');
    total.textContent = convertirValorMonetario(suma)
}
// ------------- FIN MANTENIMIENTO REPARACIONES
// ------------- COSTO COSECHA
function colectaCostosCosecha(){
    const inputs = document.querySelectorAll('#tablaCostosCosecha input');
    let producto = {
        nombreProducto: '',
        unidades: '',
        cantidad: 0,
        precioUnitario: 0
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaCostosCosecha', producto);
            colecta.costosCosecha = objetos;
            operacionesCostosCosecha();
        })
    });
}
function operacionesCostosCosecha(){
    operacionCostoCosechaUrp();
    totalCostoCosechaUrp();
}
function totalCostoCosechaUrp(){
    const total = document.querySelector('#totalComercializacionProduccion');
    const valorTotal = sumarColumna('#tablaCostosCosecha', 4);
    total.textContent = convertirValorMonetario(valorTotal)
}
function operacionCostoCosechaUrp(){
    const tbody = document.querySelector('#tablaCostosCosecha tbody');
    const numMeses = 12;

    for (let i = 0; i < tbody.rows.length; i++) {
        let cantidad = tbody.rows[i].cells[2].lastChild;
        cantidad = cantidad.value === '' ? 0 : parseFloat(cantidad.value);
        let precioUnitario = tbody.rows[i].cells[3].lastChild;
        precioUnitario = precioUnitario.value === '' ? 0 : parseFloat(precioUnitario.value);

        let total = (precioUnitario * cantidad * numMeses);

        let celdaFinal = tbody.rows[i].cells[4];
        celdaFinal.textContent = convertirValorMonetario(total);
    }
}
// ------------- FIN COSTO COSECHA

// ------------- MANO OBRA CONTRATADA
function colectaManoObraContratada(){
    const inputs = document.querySelectorAll('#tablaManoObraContratada input');
    let manoObra = {
        labor: '',
        cantidadJornales: '',
        precioJornal: 0
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaManoObraContratada', manoObra);
            colecta.manoObraContratada = objetos;
            operacionesManoObra('#tablaManoObraContratada');
        })
    });
}
function colectaManoObraFamiliar(){
    const inputs = document.querySelectorAll('#tablaManoObraFamiliar input');
    let manoObra = {
        labor: '',
        cantidadJornales: '',
        precioJornal: 0
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaManoObraFamiliar', manoObra);
            colecta.manoObraFamiliar = objetos;
            operacionesManoObra('#tablaManoObraFamiliar');
        })
    });
}
function operacionesManoObra(tabla){
    costoTotalUrpAnioManoObra(tabla);
    subtotalCostoTotalUrpAnioManoObra(tabla);
    costoHaAnioManoObra(tabla);
    subtotalCostoHaAnioManoObra(tabla);
    subtotalJornalesTotalesManoObra(tabla);
    jornalesTotalesManoObraContratada();
}
function costoTotalUrpAnioManoObra(tabla){
    const tbody = document.querySelector(tabla + ' tbody');
    const totalSuperficie = getTotalSuperficie();

    for (let i = 0; i < tbody.rows.length; i++) {
        let cantidadJornales = tbody.rows[i].cells[1].lastChild;
        cantidadJornales = cantidadJornales.value === '' ? 0 : parseFloat(cantidadJornales.value);
        let precioJornal = tbody.rows[i].cells[2].lastChild;
        precioJornal = precioJornal.value === '' ? 0 : parseFloat(precioJornal.value);

        let total = (totalSuperficie * cantidadJornales * precioJornal);

        let contenedor = tbody.rows[i].cells[3];
        contenedor.textContent = convertirValorMonetario(total);
    }
}
function subtotalCostoTotalUrpAnioManoObra(tabla){
    const suma = sumarColumna(tabla, 3);
    const contenedor = document.querySelector(tabla + ' #subtotalCostoTotalUrpAnio');
    contenedor.textContent = convertirValorMonetario(suma)
}
function costoHaAnioManoObra(tabla){
    const tbody = document.querySelector(tabla + ' tbody');
    const totalSuperficie = getTotalSuperficie();

    for (let i = 0; i < tbody.rows.length; i++) {
        let cantidadJornales = tbody.rows[i].cells[3].textContent;
        cantidadJornales = extraerCaracteresNumber(cantidadJornales)

        let total = (cantidadJornales / totalSuperficie);
        total = isNaN(total) ? 0 : total;

        let contenedor = tbody.rows[i].cells[4];
        contenedor.textContent = convertirValorMonetario(total);
    }
}
function subtotalCostoHaAnioManoObra(tabla){
    const suma = sumarColumna(tabla, 4);
    const contenedor = document.querySelector(tabla + ' #subtotalCostoHaAnio');
    contenedor.textContent = convertirValorMonetario(suma);
}
function subtotalJornalesTotalesManoObra(tabla){
    const suma = sumarColumnaInputs(tabla, 1);
    const contenedor = document.querySelector(tabla + ' #subtotalCantidadJornales');
    contenedor.textContent = suma;
}
function jornalesTotalesManoObraContratada(){
    const totalSuperficie = getTotalSuperficie();
    const subtotalJornales = extraerCaracteresNumber(document.querySelector('#subtotalCantidadJornales').textContent);
    const contenedor = document.querySelector('#joranesTotalesUrp');
    contenedor.textContent = (totalSuperficie*subtotalJornales);
}
// ------------- FIN MANO OBRA CONTRATADA

// ------------- TIEMPO MANO OBRA
function colectaTiempoManoObra(){
    const inputs = document.querySelectorAll('#tablaTiempoManoObra input');
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            almacenarDatosTiempoManoObra();
        })
    });
}
function almacenarDatosTiempoManoObra(){
    let promedioDiasLaborados = document.querySelector('#promedioDiasLaborados');
    promedioDiasLaborados = promedioDiasLaborados.value === '' ? 0 : parseFloat(promedioDiasLaborados.value)
    let mesesLaborados = document.querySelector('#mesesLaborados');
    mesesLaborados = mesesLaborados.value === '' ? 0 : parseFloat(mesesLaborados.value)

    colecta.tiempoManoObra.promedioDiasLaborados = promedioDiasLaborados;
    colecta.tiempoManoObra.mesesLaborados = mesesLaborados;
}
// ------------- FIN TIEMPO MANO OBRA

// ------------- MANO OBRA PERMANENTE
function colectaManoObraPermanente(){
    const inputs = document.querySelectorAll('#tablaManoObraPermanente input');
    let manoObra = {
        labor: '',
        numEmpleados: 0,
        precioUnitarioDia: 0
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaManoObraPermanente', manoObra);
            colecta.manoObraPermanente = objetos;
            operacionesManoObraPermanente();
        })
    });
}
function operacionesManoObraPermanente(){
    costoItegradoManoObraPermanente();
    costoMensualManoObraPermanente();
    costoTotalAnualManoObraPermanente();
    totalNoEmpleadosManoObraPermanente();
    totalCostoMensualManoObraPermanente();
    totalCostoTotalAnualManoObraPermanente();
    totalJornalesManoObraPermanente();
}
function costoItegradoManoObraPermanente(){
    const tbody = document.querySelector('#tablaManoObraPermanente tbody');
    const constante = 1.33

    for (let i = 0; i < tbody.rows.length; i++) {
        let noEmpleados = tbody.rows[i].cells[1].lastChild;
        noEmpleados = noEmpleados.value === '' ? 0 : parseFloat(noEmpleados.value);
        let costoUnitario = tbody.rows[i].cells[2].lastChild;
        costoUnitario = costoUnitario.value === '' ? 0 : parseFloat(costoUnitario.value);

        let total = (noEmpleados * costoUnitario * constante);

        let contenedor = tbody.rows[i].cells[3];
        contenedor.textContent = convertirValorMonetario(total);
    }
}
function costoMensualManoObraPermanente(){
    const tbody = document.querySelector('#tablaManoObraPermanente tbody');
    let diasLaborados = document.querySelector('#tablaTiempoManoObra #promedioDiasLaborados');
    diasLaborados = diasLaborados.value === '' ? 0 : parseFloat(diasLaborados.value);

    for (let i = 0; i < tbody.rows.length; i++) {
        let costoIntegrado = extraerCaracteresNumber(tbody.rows[i].cells[3].textContent);

        let total = (diasLaborados * costoIntegrado);

        let contenedor = tbody.rows[i].cells[4];
        contenedor.textContent = convertirValorMonetario(total);
    }
}
function costoTotalAnualManoObraPermanente(){
    const tbody = document.querySelector('#tablaManoObraPermanente tbody');
    let mesesLaborados = document.querySelector('#tablaTiempoManoObra #mesesLaborados');
    mesesLaborados = mesesLaborados.value === '' ? 0 : parseFloat(mesesLaborados.value);

    for (let i = 0; i < tbody.rows.length; i++) {
        let costoMensual = extraerCaracteresNumber(tbody.rows[i].cells[4].textContent);

        let total = (mesesLaborados * costoMensual);

        let contenedor = tbody.rows[i].cells[5];
        contenedor.textContent = convertirValorMonetario(total);
    }
}
function totalNoEmpleadosManoObraPermanente(){
    const suma = sumarColumnaInputs('#tablaManoObraPermanente', 1);
    const contenedor = document.querySelector('#tablaManoObraPermanente #noEmpleadosManoObraPermanente');
    contenedor.textContent = suma;
}
function totalCostoMensualManoObraPermanente(){
    const suma = sumarColumna('#tablaManoObraPermanente', 4);
    const contenedor = document.querySelector('#tablaManoObraPermanente #costoMensualManoObraPermanente');
    contenedor.textContent = suma;
}
function totalCostoTotalAnualManoObraPermanente(){
    const suma = sumarColumna('#tablaManoObraPermanente', 5);
    const contenedor = document.querySelector('#tablaManoObraPermanente #costoTotalAnualManoObraPermanente');
    contenedor.textContent = suma;
}
function totalJornalesManoObraPermanente(){
    let diasLaborados = document.querySelector('#tablaTiempoManoObra #promedioDiasLaborados');
    diasLaborados = diasLaborados.value === '' ? 0 : parseFloat(diasLaborados.value);
    let mesesLaborados = document.querySelector('#tablaTiempoManoObra #mesesLaborados');
    mesesLaborados = mesesLaborados.value === '' ? 0 : parseFloat(mesesLaborados.value);
    let totalEmpleados = extraerCaracteresNumber(document.querySelector('#tablaManoObraPermanente #noEmpleadosManoObraPermanente').textContent);
    let total = (diasLaborados*mesesLaborados*totalEmpleados)
    const contenedor = document.querySelector('#tablaManoObraPermanente #jornalesTotalManoObraPermanente');
    contenedor.textContent = total;
}
// ------------- FIN MANO OBRA PERMANENTE

// ------------- OTROS COSTOS DE PRODUCCION / COSTOS GENERALES
function colectaOtrosCostosGenerales(){
    const inputs = document.querySelectorAll('#tablaOtrosCostosProduccionCostosGenerales input');
    let costoGeneral = {
        nombreCosto: '',
        unidad: 0,
        costoMes: 0,
        costoAnio: 0
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaOtrosCostosProduccionCostosGenerales', costoGeneral);
            colecta.otrosCostosGenerales = objetos;
            operacionesOtrosCostosGenerales();
        })
    });
}
function operacionesOtrosCostosGenerales(){
    costoAnioOtrosCostosGenerales();
    costoHaOtrosCostosGenerales();
    sumatoriasOtrosCostosGenerales();
}
function costoAnioOtrosCostosGenerales(){
    const tbody = document.querySelector('#tablaOtrosCostosProduccionCostosGenerales tbody');

    for (let i = 0; i < tbody.rows.length; i++) {
        let mes = tbody.rows[i].cells[2].lastChild;
        mes = mes.value === '' ? 0 : parseFloat(mes.value);
        let totalanio = (mes * 12);
        let contenedor = tbody.rows[i].cells[3];
        contenedor.textContent = convertirValorMonetario(totalanio);
    }
}
function costoHaOtrosCostosGenerales(){
    const tbody = document.querySelector('#tablaOtrosCostosProduccionCostosGenerales tbody');
    const totalSuperficie = getTotalSuperficie();

    for (let i = 0; i < tbody.rows.length; i++) {
        let totalAnio = tbody.rows[i].cells[3].textContent;
        totalAnio = extraerCaracteresNumber(totalAnio)

        let total = (totalAnio / totalSuperficie);
        total = !isFinite(total) ? 0 : total;

        let contenedor = tbody.rows[i].cells[4];
        contenedor.textContent = convertirValorMonetario(total);
    }
}
function sumatoriasOtrosCostosGenerales(){
    const sumaCostoMes = sumarColumnaInputs('#tablaOtrosCostosProduccionCostosGenerales',2);
    const sumaCostoAnio = sumarColumna('#tablaOtrosCostosProduccionCostosGenerales',3);
    const sumaCostoHa = sumarColumna('#tablaOtrosCostosProduccionCostosGenerales',4);
    const contenedorCostoMes = document.querySelector('#tablaOtrosCostosProduccionCostosGenerales #totalCostoMesOtrosCostosProduccion');
    const contenedorCostoAnio = document.querySelector('#tablaOtrosCostosProduccionCostosGenerales #totalAnioOtrosCostosProduccion');
    const contenedorCostoHa = document.querySelector('#tablaOtrosCostosProduccionCostosGenerales #totalCostoHaOtrosCostosProduccion');
    contenedorCostoMes.textContent = convertirValorMonetario(sumaCostoMes);
    contenedorCostoAnio.textContent = convertirValorMonetario(sumaCostoAnio);
    contenedorCostoHa.textContent = convertirValorMonetario(sumaCostoHa);
}
// ------------- FIN OTROS COSTOS DE PRODUCCION / COSTOS GENERALES

// ------------- INGRESOS URP
function colectaIngresosUrp(){
    const inputs = document.querySelectorAll('.ingresosUrpInputs');
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            //sincronizar los valores del input con el objeto
            almacenarDatosIngresosUrp();
            operacionesIngresosUrp();
        })
    });
}
function almacenarDatosIngresosUrp(){
    const input = document.querySelectorAll('.ingresosUrpInputs');
    const {ingresosUrp} = colecta;

    const keys = Object.keys(ingresosUrp);//indices del objet
    let key;
    for (let i = 0; i < keys.length; i++) {
        key = keys[i]; //asignamos el indice acutal auna variable
        const valor = input[i].value === '' ? 0 : parseFloat(input[i].value);
        ingresosUrp[key] = valor;//en el objeto busca la coincidencia con el indice y le asigna el valor de nuestro arreglo de inputs
    }
    console.log(colecta)
}
function operacionesIngresosUrp(){
    cantidadProducidaIngresosUrp();
    cantidadVendidaIngresosUrp();
    ingresosRealIngresosUrp();
    subtotalIngresosUrp();
    ingresosTotalesCultivo();
}
function cantidadProducidaIngresosUrp(){
    const cantidadProducida = document.querySelector('#cantidadProducidaUrp');
    const totalSuperficie = getTotalSuperficie();
    let input = document.querySelectorAll('.ingresosUrpInputs');
    input = input[0].value === '' ? 0 : parseFloat(input[0].value);
    cantidadProducida.textContent = totalSuperficie * input;
}
function cantidadVendidaIngresosUrp(){
    const cantidodVendida = document.querySelector('#cantidadVendida');
    let input = document.querySelectorAll('.ingresosUrpInputs');
    input = input[1].value === '' ? 0 : parseFloat(input[1].value);
    let cantidadProducida = document.querySelector('#cantidadProducidaUrp').textContent;
    cantidadProducida = extraerCaracteresNumber(cantidadProducida)
    cantidodVendida.textContent = input * cantidadProducida;
}
function ingresosRealIngresosUrp(){
    const input = document.querySelectorAll('.ingresosUrpInputs');
    const precio = input[2].value === '' ? 0 : parseFloat(input[2].value);
    const rendimiento = input[3].value === '' ? 0 : parseFloat(input[3].value);
    const ingresoReal = document.querySelector('#ingresoReal');
    ingresoReal.textContent = convertirValorMonetario(precio * rendimiento);
}
function subtotalIngresosUrp(){
    const input = document.querySelectorAll('.ingresosUrpInputs');
    const  rendimiento = input[0].value === '' ? 0 : parseFloat(input[0].value);
    const precio = input[2].value === '' ? 0 : parseFloat(input[2].value);
    const subtotalIngresosUrp = document.querySelector('#subtotalIngresosUrp');
    subtotalIngresosUrp.textContent = convertirValorMonetario(precio * rendimiento);
}
function ingresosTotalesCultivo(){
    const totalSuperficie = getTotalSuperficie();
    let ingresoReal = document.querySelector('#ingresoReal').textContent;
    ingresoReal = extraerCaracteresNumber(ingresoReal);
    const ingresosTotales = document.querySelector('#ingresosTotalesCultivo');
    ingresosTotales.textContent = convertirValorMonetario(totalSuperficie * ingresoReal);
}

function colectaSubproductos(){
    const inputs = document.querySelectorAll('#tablaSubproductos input');
    let subproducto = {
        nombreIngreso: '',
        ingreso: 0
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaSubproductos', subproducto);
            colecta.subproductos = objetos;
            operacionesSubproductos();
        })
    });
}
function operacionesSubproductos(){
    subtotalSubproductos();
    totalHectareasIngresosUrp();
}
function subtotalSubproductos(){
    const sumaSubproducto = sumarColumnaInputs('#tablaSubproductos',1);
    const subtotalSubproducto = document.querySelector('#tablaSubproductos #subtotalSubproductos');
    subtotalSubproducto.textContent = convertirValorMonetario(sumaSubproducto);
}
function totalHectareasIngresosUrp(){
    let subtotalSubproducto = document.querySelector('#tablaSubproductos #subtotalSubproductos').textContent;
    subtotalSubproducto = extraerCaracteresNumber(subtotalSubproducto);
    let subtotalIngresosUrp = document.querySelector('#subtotalIngresosUrp').textContent;
    subtotalIngresosUrp = extraerCaracteresNumber(subtotalIngresosUrp);
    const totalSubproductoUrp = document.querySelector('#tablaSubproductos #totalSubproductosUrp');
    totalSubproductoUrp.textContent = convertirValorMonetario(subtotalSubproducto + subtotalIngresosUrp);
}
// ------------- FIN INGRESOS URP

// ------------- OTROS INGRESOS URP
function colectaOtrosIngresosUrp(){
    const inputs = document.querySelectorAll('#tablaOtrosIngresosUrp input');
    let otroIngreso = {
        nombreIngreso: '',
        monto: 0
    };
    let objetos;
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            objetos = almacenarObjeto('#tablaOtrosIngresosUrp', otroIngreso);
            colecta.otrosIngresosUrp = objetos;
            operacionesOtrosIngresosUrp();
        })
    });
}
function operacionesOtrosIngresosUrp(){
    totalOtrosIngresosUrp();
}
function totalOtrosIngresosUrp(){
    const suma = sumarColumnaInputs('#tablaOtrosIngresosUrp',1);
    const total = document.querySelector('#tablaOtrosIngresosUrp #totalOtrosIngresosUrp');
    total.textContent = convertirValorMonetario(suma);
}
// ------------- FIN OTROS INGRESOS URP

// ------------- GASTOS FAMILIARES
function colectaGastosFamiliares(){
    const inputs = document.querySelectorAll('#tablaGastosFamiliares input');
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            //sincronizar los valores del input con el objeto
            almacenarDatosGastosFamiliares();
            montoAnualGastosFamiliares();
        })
    });
}
function almacenarDatosGastosFamiliares(){
    const input = document.querySelectorAll('#tablaGastosFamiliares input');
    const {gastosFamiliares} = colecta;

    const keys = Object.keys(gastosFamiliares);//indices del objet
    let key;
    for (let i = 0; i < keys.length; i++) {
        key = keys[i]; //asignamos el indice acutal auna variable
        const valor = input[i].value === '' ? 0 : parseFloat(input[i].value);
        gastosFamiliares[key] = valor;//en el objeto busca la coincidencia con el indice y le asigna el valor de nuestro arreglo de inputs
    }
    console.log(colecta)
}
function montoAnualGastosFamiliares(){
    const monto = sumarColumnaInputs('#tablaGastosFamiliares',1);
    const total = document.querySelector('#tablaGastosFamiliares #montoAnualGastosFamiliares');
    total.textContent = convertirValorMonetario(monto);
}
// ------------- FIN GASTOS FAMILIARES

// ------------- OTRA INFORMACION
function colectaOtraInformacion(){
    const inputs = document.querySelectorAll('#tablaOtraInformacion input');
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            //sincronizar los valores del input con el objeto
            almacenarDatosOtraInformacion();
        })
    });
}
function almacenarDatosOtraInformacion(){
    const input = document.querySelectorAll('#tablaOtraInformacion input');
    const {otraInformacion} = colecta;

    const keys = Object.keys(otraInformacion);//indices del objet
    let key;
    for (let i = 0; i < keys.length; i++) {
        key = keys[i]; //asignamos el indice acutal auna variable
        const valor = input[i].value === '' ? 0 : parseFloat(input[i].value);
        otraInformacion[key] = valor;//en el objeto busca la coincidencia con el indice y le asigna el valor de nuestro arreglo de inputs
    }
    console.log(colecta)
}
// ------------- FIN OTRA INFORMACION
mostrarGuardarColecta()
// ------------- FINALIZAR COLECTA
function mostrarGuardarColecta(){
    const resumen = document.querySelector('#guardarColecta');
    //si pasa la validacion borramos alerta
    while(resumen.firstChild){
        resumen.removeChild(resumen.firstChild);
    }

    //validar datos
    if( 1 !== 1 ){
        // console.log('faltan datos');

        mostrarAlerta('DEBES INGRESAR MAS VALORES PARA GUARDAR TU COLECTA', 'error', '#guardarColecta', false);

        //cortamos el codigo para quitar el else
        return;
    }
    //Boton para crear una cita
    const botonReservar = document.createElement('BUTTON');
    botonReservar.classList.add('boton');
    botonReservar.textContent = 'Guardar Colecta';
    botonReservar.onclick = guardarColecta; //Llammamos a la funcion pero recordar que si la funcion recibe parametros debe ser llamada atravez de un callback

    resumen.appendChild(botonReservar);
}
// ------------- FIN FINALIZAR COLECTA

// ------------- FIN FINALIZAR COLECTA
//Ruta del servidor
const server = window.location.origin;
async function guardarColecta(){
    const { arboles, patronCultivos } = colecta;

    //FORMDATA ES COMO EL SUBMIT DE UN FORMULARIO CONTIENEN TODA LA INFO QUE QUIERAMOS ENVIAR
    const datos = new FormData();

    const arbolesJson = JSON.stringify(arboles)
    const patronCultivosJson = JSON.stringify(patronCultivos)

    //con append le agregamos datos al formdata
    //del lado de las comillas son las variables que recibira POST por ejemplo el nombre en la apicontroller se leeria: $_POST['nombre']. y del lado derecho es el valor
    datos.append('arboles', arbolesJson);
    datos.append('patronCultivos', patronCultivosJson);

    //try catch en caso de que la api falle ya que no se puede evaluar con variables comparativas y es critico esta parte
    try {
        //peticion hacia la api
        const url = `${server}/api/colectas`;
        // console.log(url);

        //PARA DEBUGUEAR UN FETCH LO PODEMOS HACER EN POSTMAN DESDE EL LUHAR DONDE SE HACE EL QUERY
        const respuesta = await fetch(url, { //hacemos fetch al endpoint de tipo post ya registrado
            //objeto de configuracion - cuando es una peticion de tipo post es obligatorio este obejeto de configuracion
            method: 'POST',

            //fetch no sabe de la existencia de formdata y los datos que queremos enviar por eso debemos usar body que seria el cuerpo de la peticion que hacemos
            body: datos
        });

        // console.log(respuesta) //muestra su la conexion con la api fue correcta

        //leemos el json que el proto de resultado nos retorna
        const resultado = await respuesta.json();

        console.log(resultado)
        return

        if( !resultado ){
            mostrarAlerta('Algo salio mal, intenta recargando la pagina','error', '#resumen');
        } else{
            // console.log(resultado); // el arreglo asociativo de apicontroller

            //mostramos un mensaje de alerta creado con la libreria en el script
            Swal.fire({
            icon: 'success',
            title: 'Cita creada',
            text: 'Tu cita fue creada correctamente',
            button: 'OK'
            }).then(()=>{
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            });
        }


    } catch (error) {
        // Swal.fire(
        //     'Ups... algo salio mal',
        //     'Intentalo mas tarde o recarga la pagina',
        //     'question'
        // )
    }
}
// ------------- FIN FINALIZAR COLECTA

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