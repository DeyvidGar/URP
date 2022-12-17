// -------------- BOTONES AGREGAR Y ELIMINAR FILAS -------------- //
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
    //acutalizar operaciones
    actualizarOperaciones();
}
//ELIMINAR
const botonEliminarFilaVariedad = document.querySelector('#eliminarFilaVariedad');
botonEliminarFilaVariedad.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaVariedadArboles', colecta.arboles, operacionesArboles);
})
// -------------- FIN BOTONES VARIEDAD ARBOLES

// -------------- BOTONES ACTIVIDADES PRODUCCION
const botonNuevaFilaActividadesProduccion = document.querySelector('#nuevaFilaActividadesProduccion');
const botonNuevaFilaOtosCostos = document.querySelector('#nuevaFilaOtosCostosActividadesProduccion');
botonNuevaFilaActividadesProduccion.addEventListener('click', ()=>{
    filaActividadesProduccion('#tablaActividadesProduccion', colectaActividadesProduccion);
})
botonNuevaFilaOtosCostos.addEventListener('click', ()=>{
    filaActividadesProduccion('#tablaOtrosCostosActividadesProduccion', colectaOtrosCostosActividadesProduccion);
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
    // if(idTabla === 'tablaOtrosCostosActividadesProduccion')input3.classList.add('otrosCostosActividadesProduccionTotal')
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

    //acutalizar operaciones
    actualizarOperaciones();
}
//ELIMINAR
const botonEliminarFilaActividadesProduccion = document.querySelector('#eliminarFilaActividadesProduccion');
const botonEliminarFilaOtosCostos = document.querySelector('#eliminarFilaOtosCostosActividadesProduccion');

botonEliminarFilaActividadesProduccion.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaActividadesProduccion', colecta.actividadesProduccion, colectaActividadesProduccion);
})
botonEliminarFilaOtosCostos.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaOtrosCostosActividadesProduccion', colecta.otrosCostosActividadesProduccion, almacenarDatosOtrosCostosActividadesProduccion);
})

// -------------- FIN BOTONES ACTIVIDADES PRODUCCION

// -------------- COSTO ANUAL ESTABLECIMIENTOS DE PLANTACION
const botonNuevaFilaCostoAnualEstablecimientoPlantacion = document.querySelector('#nuevaFilaCostoAnualEstablecimientoPlantacion');
botonNuevaFilaCostoAnualEstablecimientoPlantacion.addEventListener('click', ()=>{
    filaCostoAnualEstablecimientoPlantacion('#tablaCostoAnualEstablecimientoPlantacion', colectaCostoAnualEstablecimientoPlantacion);
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
    //acutalizar operaciones
    actualizarOperaciones();
}
// elimiar
const botonEliminarFilaCostoAnualEstablecimientoPlantacion = document.querySelector('#eliminarFilaCostoAnualEstablecimientoPlantacion');
botonEliminarFilaCostoAnualEstablecimientoPlantacion.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaCostoAnualEstablecimientoPlantacion', colecta.costoAnualesEstablecimientoPlantacion, colectaCostoAnualEstablecimientoPlantacion)
})
// -------------- FIN COSTO ANUAL ESTABLECIMIENTOS DE PLANTACION

// -------------- BOTONES OTROS ACTIVOS FIJOS
const botonNuevaFilaContrucciones = document.querySelector('#nuevaFilaContrucciones');
const botonNuevaFilaVehiculos = document.querySelector('#nuevaFilaVehiculos');
const botonNuevaFilaImplementos = document.querySelector('#nuevaFilaImplementos');
const botonNuevaFilaEquipoComunicacion = document.querySelector('#nuevaFilaEquipoComunicacion');
const botonNuevaFilaEquipo = document.querySelector('#nuevaFilaEquipo');

botonNuevaFilaContrucciones.addEventListener('click', ()=>{
    filaOtrosActivosFijos('#tablaContrucciones', colectaConstrucciones);
});
botonNuevaFilaVehiculos.addEventListener('click', ()=>{
    filaOtrosActivosFijos('#tablaVehiculos', colectaVehiculos);
});
botonNuevaFilaImplementos.addEventListener('click', ()=>{
    filaOtrosActivosFijos('#tablaImplementos', colectaImplementos);
});
botonNuevaFilaEquipoComunicacion.addEventListener('click', ()=>{
    filaOtrosActivosFijos('#tablaEquiposComunicacion', colectaEquiposComunicacion);
});
botonNuevaFilaEquipo.addEventListener('click', ()=>{
    filaOtrosActivosFijos('#tablaEquipos', colectaEquipos);
});

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
    if(idTabla === '#tablaContrucciones') input4.value = 0;

    input5.setAttribute('type', 'number');
    // input5.value = 0;
    if(idTabla === '#tablaContrucciones') input5.setAttribute('disabled', '')
    if(idTabla === '#tablaContrucciones') input5.value = 0;

    input6.setAttribute('type', 'number');
    input6.classList.add('valorActualMercado')
    // input6.value = 0;
    input7.setAttribute('type', 'number');
    input7.classList.add('valorRecuperacion')
    // input7.value = 0;
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


    // calcularOperacionesActivosFijos(idTabla)
    // sumaValorActualMercado()

    //acutalizar operaciones
    actualizarOperaciones();
}

// FUNCION BOTON ELIMINAR FILA
const botonEliminarFilaConstruccion = document.querySelector('#eliminarFilaContrucciones');
const botonEliminarFilaVehiculos = document.querySelector('#eliminarFilaVehiculos');
const botonEliminarFilaImplementos = document.querySelector('#eliminarFilaImplementos');
const botonEliminarFilaEquipoComunicacion = document.querySelector('#eliminarFilaEquipoComunicacion');
const botonEliminarFilaEquipo = document.querySelector('#eliminarFilaEquipo');

botonEliminarFilaConstruccion.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaContrucciones', colecta.construcciones, funcion = null);
});
botonEliminarFilaVehiculos.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaVehiculos', colecta.vehiculos, funcion = null);
});
botonEliminarFilaImplementos.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaImplementos', colecta.implementos, funcion = null);
});
botonEliminarFilaEquipoComunicacion.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaEquiposComunicacion', colecta.equiposComunicacion, funcion = null);
});
botonEliminarFilaEquipo.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaEquipos', colecta.equipos, funcion = null);
});
// -------------- FIN OTROS ACTIVOS FIJOS

// -------------- REPUESTO HERRAMIENTAS
const botonNuevaFilaRepuestoHerramientas = document.querySelector('#nuevaFilaRepuestoHerramientas')
botonNuevaFilaRepuestoHerramientas.addEventListener('click', ()=>{
    filaRepuestoHerramientas('#tablaRepuestoHerramientas', colectaRepuestoHerramientas)
});
function filaRepuestoHerramientas(idTabla, funcion){
    const tbody = document.querySelector(idTabla + ' tbody');
    const tr = document.createElement('TR');
    const td1 = document.createElement('TD');
    const td2 = document.createElement('TD');
    // td2.classList.add('etiqueta');
    const td3 = document.createElement('TD');
    const td4 = document.createElement('TD');
    const td5 = document.createElement('TD');
    const td6 = document.createElement('TD');
    const td7 = document.createElement('TD');
    const input1 = document.createElement('INPUT');
    const input2 = document.createElement('INPUT');
    const input3 = document.createElement('INPUT');
    const input4 = document.createElement('INPUT');
    const input5 = document.createElement('INPUT');
    input1.setAttribute('type', 'text');
    input1.setAttribute('required', '');
    input2.setAttribute('type', 'number');
    input3.setAttribute('type', 'number');
    input4.setAttribute('type', 'number');
    input5.setAttribute('type', 'number');
    td1.appendChild(input1);
    td2.innerHTML += '<span>$</span>';
    td2.appendChild(input2);
    td3.innerHTML += '<span>$</span>';
    td3.appendChild(input3);
    td5.innerHTML += '<span>$</span>';
    td5.appendChild(input4);
    td6.innerHTML += '<span>$</span>';
    td6.appendChild(input5);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tbody.appendChild(tr);
    funcion();
    //acutalizar operaciones
    actualizarOperaciones();
}
//eliminar
const botonEliminarFilaRepuestoHerramientas = document.querySelector('#eliminarFilaRepuestoHerramientas');
botonEliminarFilaRepuestoHerramientas.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaRepuestoHerramientas', colecta.repuestoHerramientas,colectaRepuestoHerramientas)
});
// -------------- FIN REPUESTO HERRAMIENTAS

// -------------- COSTO AGROQUIMICOS
const botonNuevaFilaAgroquimicosGranular = document.querySelector('#nuevaFilaAgroquimicosGranular');
const botonNuevaFilaAgroquimicosFoliar = document.querySelector('#nuevaFilaAgroquimicosFoliar');
const botonNuevaFilaInsecticidas = document.querySelector('#nuevaFilaInsecticidas');
const botonNuevaFilaFungicidas = document.querySelector('#nuevaFilaFungicidas');
const botonNuevaFilaHerbicidas = document.querySelector('#nuevaFilaHerbicidas');
const botonNuevaFilaCombustiblesLubricantes = document.querySelector('#nuevaFilaCombustiblesLubricantes');

botonNuevaFilaAgroquimicosGranular.addEventListener('click', ()=>{
    filaCostoAgroquimico('#tablaFertilizantesGranular', colectaFertilizanteGranular)
});
botonNuevaFilaAgroquimicosFoliar.addEventListener('click', ()=>{
    filaCostoAgroquimico('#tablaFertilizantesFoliar', colectaFertilizanteFoliar)
});
botonNuevaFilaInsecticidas.addEventListener('click', ()=>{
    filaCostoAgroquimico('#tablaInsecticidas', colectaInsecticidas)
});
botonNuevaFilaFungicidas.addEventListener('click', ()=>{
    filaCostoAgroquimico('#tablaFungicidas', colectaFungicidas)
});
botonNuevaFilaHerbicidas.addEventListener('click', ()=>{
    filaCostoAgroquimico('#tablaHerbicidas', colectaHerbicidas)
});
botonNuevaFilaCombustiblesLubricantes.addEventListener('click', ()=>{
    filaCostoAgroquimico('#tablaCombustiblesLubricantes', colectaCombustiblesLubricantes)
});
function filaCostoAgroquimico(idTabla, funcion){
    const tbody = document.querySelector(idTabla + ' tbody');
    const tr = document.createElement('TR');
    const td1 = document.createElement('TD');
    const td2 = document.createElement('TD');
    // td2.classList.add('etiqueta');
    const td3 = document.createElement('TD');
    const td4 = document.createElement('TD');
    const td5 = document.createElement('TD');
    const input1 = document.createElement('INPUT');
    const input2 = document.createElement('INPUT');
    const input3 = document.createElement('INPUT');
    const input4 = document.createElement('INPUT');
    input1.setAttribute('type', 'text');
    input1.setAttribute('required', '');
    (idTabla === '#tablaCombustiblesLubricantes') ? input2.setAttribute('type', 'number') : input2.setAttribute('type', 'text');;
    input2.setAttribute('required', '');
    input3.setAttribute('type', 'number');
    input4.setAttribute('type', 'number');
    td1.appendChild(input1);
    td2.appendChild(input2);
    if(idTabla === '#tablaCombustiblesLubricantes') td3.innerHTML += '<span>$</span>';
    td3.appendChild(input3);
    if(idTabla !== '#tablaCombustiblesLubricantes'){
        td4.innerHTML += '<span>$</span>';
        td4.appendChild(input4);
    }
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tbody.appendChild(tr);
    funcion();
    //acutalizar operaciones
    actualizarOperaciones();
}
//eliminar
const botonEliminarFilaAgroquimicosGranular = document.querySelector('#eliminarFilaAgroquimicosGranular');
const botonEliminarFilaAgroquimicosFoliar = document.querySelector('#eliminarFilaAgroquimicosFoliar');
const botonEliminarFilaInsecticidas = document.querySelector('#eliminarFilaInsecticidas');
const botonEliminarFilaFungicidas = document.querySelector('#eliminarFilaFungicidas');
const botonEliminarFilaHerbicidas = document.querySelector('#eliminarFilaHerbicidas');
const botonEliminarFilaCombustiblesLubricantes = document.querySelector('#eliminarFilaCombustiblesLubricantes');
botonEliminarFilaAgroquimicosGranular.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaFertilizantesGranular',colecta.fertilizantesGranular, colectaFertilizanteGranular);
})
botonEliminarFilaAgroquimicosFoliar.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaFertilizantesFoliar',colecta.fertilizantesFoliar, colectaFertilizanteFoliar);
})
botonEliminarFilaInsecticidas.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaInsecticidas',colecta.insecticidas, colectaInsecticidas);
})
botonEliminarFilaFungicidas.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaFungicidas',colecta.fungicidas, colectaFungicidas);
})
botonEliminarFilaHerbicidas.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaHerbicidas',colecta.herbicidas, colectaHerbicidas);
})
botonEliminarFilaCombustiblesLubricantes.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaCombustiblesLubricantes',colecta.combustiblesLubricantes, colectaCombustiblesLubricantes);
})
// -------------- FIN COSTO AGROQUIMICOS

// -------------- MANTENIMIETO OPERACIONES
const botonNuevaFilaMantenimientoReparaciones = document.querySelector('#nuevaFilaMantenimientoReparaciones');
botonNuevaFilaMantenimientoReparaciones.addEventListener('click', ()=>{
    filaMantenimientoReparaciones('#tablaMantenimientoReparaciones', colectaMantenimientoReparaciones)
});
function filaMantenimientoReparaciones(idTabla, funcion){
    const tbody = document.querySelector(idTabla + ' tbody');
    const tr = document.createElement('TR');
    const td1 = document.createElement('TD');
    const td2 = document.createElement('TD');
    const td3 = document.createElement('TD');
    const td4 = document.createElement('TD');
    const td5 = document.createElement('TD');
    const td6 = document.createElement('TD');
    const input1 = document.createElement('INPUT');
    const input2 = document.createElement('INPUT');
    const input3 = document.createElement('INPUT');
    const input4 = document.createElement('INPUT');
    const input5 = document.createElement('INPUT');
    const input6 = document.createElement('INPUT');
    input1.setAttribute('type', 'text');
    input1.setAttribute('required', '');
    input2.setAttribute('type', 'number');
    input1.setAttribute('required', '');
    input3.setAttribute('type', 'number');
    input4.setAttribute('type', 'number');
    input5.setAttribute('type', 'number');
    input6.setAttribute('type', 'number');
    td1.appendChild(input1);
    td2.appendChild(input2);
    td3.innerHTML += '<span>$</span>';
    td3.appendChild(input3);
    td4.innerHTML += '<span>$</span>';
    td4.appendChild(input4);
    td5.innerHTML += '<span>$</span>';
    td5.appendChild(input5);
    td6.innerHTML += '<span>$</span>';
    td6.appendChild(input6);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tbody.appendChild(tr);
    funcion();
    //acutalizar operaciones
    actualizarOperaciones();
}
//eliminar
const botonEliminarFilaMantenimientoReparaciones = document.querySelector('#eliminarFilaMantenimientoReparaciones');
botonEliminarFilaMantenimientoReparaciones.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaMantenimientoReparaciones',colecta.mantenimientosReparaciones, colectaMantenimientoReparaciones);
})
// -------------- FIN MANTENIMIETO OPERACIONES

// -------------- COSTO COSECHA
const botonNuevaFilaCostosCosecha = document.querySelector('#nuevaFilaCostosCosecha');
botonNuevaFilaCostosCosecha.addEventListener('click', ()=>{
    filaCostoAgroquimico('#tablaCostosCosecha', colectaCostosCosecha)//debido al mismo formato
});
//eliminar
const botonEliminarFilaCostosCosecha = document.querySelector('#eliminarFilaCostosCosecha');
botonEliminarFilaCostosCosecha.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaCostosCosecha', colecta.costosCosecha, colectaCostosCosecha)//debido al mismo formato
});
// -------------- FIN COSECHA

// -------------- MANO OBRA
const botonNuevaFilaManoObraContratada= document.querySelector('#nuevaFilaManoObraContratada');
const botonNuevaFilaManoObraFamiliar= document.querySelector('#nuevaFilaManoObraFamiliar');
const botonNuevaFilaManoObraPermanente= document.querySelector('#nuevaFilaManoObraPermanente');
botonNuevaFilaManoObraPermanente.addEventListener('click', ()=>{
    filaManoObraPermanente('#tablaManoObraPermanente', colectaManoObraPermanente)//debido al mismo formato
});
botonNuevaFilaManoObraFamiliar.addEventListener('click', ()=>{
    filaManoObra('#tablaManoObraFamiliar', colectaManoObraFamiliar)//debido al mismo formato
});
botonNuevaFilaManoObraContratada.addEventListener('click', ()=>{
    filaManoObra('#tablaManoObraContratada', colectaManoObraContratada)//debido al mismo formato
});
function filaManoObra(idTabla, funcion){
    const tbody = document.querySelector(idTabla + ' tbody');
    const tr = document.createElement('TR');
    const td1 = document.createElement('TD');
    const td2 = document.createElement('TD');
    // td2.classList.add('etiqueta');
    const td3 = document.createElement('TD');
    const td4 = document.createElement('TD');
    const td5 = document.createElement('TD');
    const input1 = document.createElement('INPUT');
    const input2 = document.createElement('INPUT');
    const input3 = document.createElement('INPUT');
    input1.setAttribute('type', 'text');
    input1.setAttribute('required', '');
    input2.setAttribute('type', 'number')
    input2.setAttribute('required', '');
    input3.setAttribute('type', 'number');
    td1.appendChild(input1);
    td2.appendChild(input2);
    td3.innerHTML += '<span>$</span>';
    td3.appendChild(input3);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tbody.appendChild(tr);
    funcion();
    //acutalizar operaciones
    actualizarOperaciones();
}
function filaManoObraPermanente(idTabla, funcion){
    const tbody = document.querySelector(idTabla + ' tbody');
    const tr = document.createElement('TR');
    const td1 = document.createElement('TD');
    const td2 = document.createElement('TD');
    const td3 = document.createElement('TD');
    const td4 = document.createElement('TD');
    const td5 = document.createElement('TD');
    const td6 = document.createElement('TD');
    const input1 = document.createElement('INPUT');
    const input2 = document.createElement('INPUT');
    const input3 = document.createElement('INPUT');
    input1.setAttribute('type', 'text');
    input1.setAttribute('required', '');
    input2.setAttribute('type', 'number');
    input1.setAttribute('required', '');
    input3.setAttribute('type', 'number');
    td1.appendChild(input1);
    td2.appendChild(input2);
    td3.innerHTML += '<span>$</span>';
    td3.appendChild(input3);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tbody.appendChild(tr);
    funcion();
    //acutalizar operaciones
    actualizarOperaciones();
}
//eliminar
const botonEliminarFilaManoObraContratada = document.querySelector('#eliminarFilaManoObraContratada');
const botonEliminarFilaManoObraFamiliar = document.querySelector('#eliminarFilaManoObraFamiliar');
const botonEliminarFilaManoObraPermanente = document.querySelector('#eliminarFilaManoObraPermanente');
botonEliminarFilaManoObraPermanente.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaManoObraPermanente', colecta.manoObraPermanente, colectaManoObraPermanente)//debido al mismo formato
});
botonEliminarFilaManoObraFamiliar.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaManoObraFamiliar', colecta.manoObraFamiliar, colectaManoObraFamiliar, 2)//debido al mismo formato
});
botonEliminarFilaManoObraContratada.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaManoObraContratada', colecta.manoObraContratada, colectaManoObraContratada)//debido al mismo formato
});
// -------------- FIN MANO OBRA

// -------------- OTROS COSTOS DE PRODUCCION COSTOS GENERALES
const botonNuevaFilaOtrosCostosProduccionCostosGeneralesr= document.querySelector('#nuevaFilaOtrosCostosProduccionCostosGenerales');
botonNuevaFilaOtrosCostosProduccionCostosGeneralesr.addEventListener('click', ()=>{
    filaManoObra('#tablaOtrosCostosProduccionCostosGenerales', colectaOtrosCostosGenerales)//debido al mismo formato
});
// eliminar
const botonEliminarFilaOtrosCostosProduccionCostosGenerales = document.querySelector('#eliminarFilaOtrosCostosProduccionCostosGenerales');
botonEliminarFilaOtrosCostosProduccionCostosGenerales.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaOtrosCostosProduccionCostosGenerales', colecta.otrosCostosGenerales, colectaOtrosCostosGenerales, 6)//debido al mismo formato
});
// -------------- FIN OTROS COSTOS DE PRODUCCION COSTOS GENERALES
// -------------- INGRESOS DE LA URP
const botonNuevaFilaSubproductos = document.querySelector('#nuevaFilaSubproductos');
botonNuevaFilaSubproductos.addEventListener('click', ()=>{
    filaSubproductos('#tablaSubproductos', colectaSubproductos)//debido al mismo formato
});
function filaSubproductos(idTabla, funcion){
    const tbody = document.querySelector(idTabla + ' tbody');
    const tr = document.createElement('TR');
    const td1 = document.createElement('TD');
    const td2 = document.createElement('TD');
    const input1 = document.createElement('INPUT');
    const input2 = document.createElement('INPUT');
    input1.setAttribute('type', 'text');
    input1.setAttribute('required', '');
    input2.setAttribute('type', 'number');
    td1.appendChild(input1);
    td2.innerHTML += '<span>$</span>';
    td2.appendChild(input2);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
    funcion();
    //acutalizar operaciones
    actualizarOperaciones();
}
// eliminar
const botonEliminarFilaSubproductos = document.querySelector('#eliminarFilaSubproductos');
botonEliminarFilaSubproductos.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaSubproductos', colecta.subproductos)//debido al mismo formato
});
// -------------- FIN INGRESOS DE LA URP

// -------------- OTROS INGRESOS DE LA URP
const botonNuevaFilaOtrosIngresosUrp = document.querySelector('#nuevaFilaOtrosIngresosUrp');
botonNuevaFilaOtrosIngresosUrp.addEventListener('click', ()=>{
    filaSubproductos('#tablaOtrosIngresosUrp', colectaOtrosIngresosUrp)//debido al mismo formato
});
const botonEliminarFilaOtrosIngresosUrp = document.querySelector('#eliminarFilaOtrosIngresosUrp');
botonEliminarFilaOtrosIngresosUrp.addEventListener('click', ()=>{
    eliminarUltimaFila('#tablaOtrosIngresosUrp', colecta.otrosIngresosUrp)//debido al mismo formato
});
// -------------- FIN OTROS INGRESOS DE LA URP
// -------------- FIN FUNCION BOTON AGREGAR Y ELIMINAR FILAS -------------- //