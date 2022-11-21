// (function(){
//     const botonAgregarFilaVariedad = document.querySelector('#nuevaFilaVariedad');
//     botonAgregarFilaVariedad.addEventListener('click', function(){
//         filaVariedad();
//     })

//     function filaVariedad() {
//         // Obtiene una referencia a la tabla
//         const tablaVariedad = document.querySelector('#tablaVariedadArboles');
//         const tr = document.createElement('TR');
//         const td1 = document.createElement('TD');
//         const td2 = document.createElement('TD');
//         const td3 = document.createElement('TD');
//         const input = document.createElement('INPUT');
//         const input2 = document.createElement('INPUT');
//         input.setAttribute('type', 'text');
//         input2.setAttribute('type', 'number');

//         td1.appendChild(input);
//         td2.appendChild(input2);
//         tr.appendChild(td1);
//         tr.appendChild(td2);
//         tr.appendChild(td3);
//         tablaVariedad.appendChild(tr);
//     }

//     const botonAgregarFilaPlantacion = document.querySelector('#nuevaFilaPlantacion');
//     botonAgregarFilaPlantacion.addEventListener('click', function(){
//         filaPlantacion();
//     })

//     function filaPlantacion() {
//         // Obtiene una referencia a la tabla
//         const tablaVariedad = document.querySelector('#tablaValorPlanteacion');
//         const tr = document.createElement('TR');
//         const td1 = document.createElement('TD');
//         const td2 = document.createElement('TD');
//         const td3 = document.createElement('TD');
//         const input = document.createElement('INPUT');
//         const input2 = document.createElement('INPUT');
//         const input3 = document.createElement('INPUT');
//         input2.setAttribute('type', 'number');

//         td1.appendChild(input);
//         td2.appendChild(input2);
//         td3.appendChild(input3);
//         tr.appendChild(td1);
//         tr.appendChild(td2);
//         tr.appendChild(td3);
//         tablaVariedad.appendChild(tr);
//     }
// })();