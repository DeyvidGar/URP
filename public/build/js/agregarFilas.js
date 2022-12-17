const botonAgregarFilaVariedadArboles=document.querySelector("#nuevaFilaVariedad");function filaVariedadArboles(){const e=document.querySelector("#tablaVariedadArboles").children[1],t=document.createElement("TR"),a=document.createElement("TD"),n=document.createElement("TD"),i=document.createElement("TD"),o=document.createElement("INPUT"),l=document.createElement("INPUT");o.setAttribute("type","text"),o.setAttribute("required",""),l.setAttribute("type","number"),l.setAttribute("required",""),i.classList.add("total"),a.appendChild(o),n.appendChild(l),t.appendChild(a),t.appendChild(n),t.appendChild(i),e.appendChild(t),colectaArbol(),actualizarOperaciones()}botonAgregarFilaVariedadArboles.addEventListener("click",()=>{filaVariedadArboles()});const botonEliminarFilaVariedad=document.querySelector("#eliminarFilaVariedad");botonEliminarFilaVariedad.addEventListener("click",()=>{eliminarUltimaFila("#tablaVariedadArboles",colecta.arboles,operacionesArboles)});const botonNuevaFilaActividadesProduccion=document.querySelector("#nuevaFilaActividadesProduccion"),botonNuevaFilaOtosCostos=document.querySelector("#nuevaFilaOtosCostosActividadesProduccion");function filaActividadesProduccion(e,t){const a=document.querySelector(e).children[1],n=document.createElement("TR"),i=document.createElement("TD"),o=document.createElement("TD"),l=document.createElement("TD"),c=document.createElement("INPUT"),r=document.createElement("INPUT"),s=document.createElement("INPUT");o.classList.add("etiqueta"),l.classList.add("etiqueta"),c.setAttribute("type","text"),c.setAttribute("placeholder","Escribe el nombre"),c.setAttribute("required",""),r.setAttribute("type","number"),s.setAttribute("type","number"),i.appendChild(c),o.innerHTML+="<span>$</span>",o.appendChild(r),l.innerHTML+="<span>$</span>",l.appendChild(s),n.appendChild(i),n.appendChild(o),n.appendChild(l),a.appendChild(n),t(),actualizarOperaciones()}botonNuevaFilaActividadesProduccion.addEventListener("click",()=>{filaActividadesProduccion("#tablaActividadesProduccion",colectaActividadesProduccion)}),botonNuevaFilaOtosCostos.addEventListener("click",()=>{filaActividadesProduccion("#tablaOtrosCostosActividadesProduccion",colectaOtrosCostosActividadesProduccion)});const botonEliminarFilaActividadesProduccion=document.querySelector("#eliminarFilaActividadesProduccion"),botonEliminarFilaOtosCostos=document.querySelector("#eliminarFilaOtosCostosActividadesProduccion");botonEliminarFilaActividadesProduccion.addEventListener("click",()=>{eliminarUltimaFila("#tablaActividadesProduccion",colecta.actividadesProduccion,colectaActividadesProduccion)}),botonEliminarFilaOtosCostos.addEventListener("click",()=>{eliminarUltimaFila("#tablaOtrosCostosActividadesProduccion",colecta.otrosCostosActividadesProduccion,almacenarDatosOtrosCostosActividadesProduccion)});const botonNuevaFilaCostoAnualEstablecimientoPlantacion=document.querySelector("#nuevaFilaCostoAnualEstablecimientoPlantacion");function filaCostoAnualEstablecimientoPlantacion(e,t){const a=document.querySelector(e).children[1],n=document.createElement("TR"),i=document.createElement("TD"),o=document.createElement("TD"),l=document.createElement("INPUT"),c=document.createElement("INPUT");o.classList.add("etiqueta"),l.setAttribute("type","text"),l.setAttribute("required",""),c.setAttribute("type","number"),c.classList.add("costoAnual"),i.appendChild(l),o.innerHTML+="<span>$</span>",o.appendChild(c),n.appendChild(i),n.appendChild(o),a.appendChild(n),t(),colocarNumeroAnio(),actualizarOperaciones()}botonNuevaFilaCostoAnualEstablecimientoPlantacion.addEventListener("click",()=>{filaCostoAnualEstablecimientoPlantacion("#tablaCostoAnualEstablecimientoPlantacion",colectaCostoAnualEstablecimientoPlantacion)});const botonEliminarFilaCostoAnualEstablecimientoPlantacion=document.querySelector("#eliminarFilaCostoAnualEstablecimientoPlantacion");botonEliminarFilaCostoAnualEstablecimientoPlantacion.addEventListener("click",()=>{eliminarUltimaFila("#tablaCostoAnualEstablecimientoPlantacion",colecta.costoAnualesEstablecimientoPlantacion,colectaCostoAnualEstablecimientoPlantacion)});const botonNuevaFilaContrucciones=document.querySelector("#nuevaFilaContrucciones"),botonNuevaFilaVehiculos=document.querySelector("#nuevaFilaVehiculos"),botonNuevaFilaImplementos=document.querySelector("#nuevaFilaImplementos"),botonNuevaFilaEquipoComunicacion=document.querySelector("#nuevaFilaEquipoComunicacion"),botonNuevaFilaEquipo=document.querySelector("#nuevaFilaEquipo");function filaOtrosActivosFijos(e,t){const a=document.querySelector(e).children[1],n=document.createElement("TR"),i=document.createElement("TD"),o=document.createElement("TD"),l=document.createElement("TD"),c=document.createElement("TD"),r=document.createElement("TD");r.classList.add("etiqueta","porcentaje");const s=document.createElement("TD");s.classList.add("etiqueta");const d=document.createElement("TD");d.classList.add("etiqueta");const u=document.createElement("TD");u.classList.add("valorDepreciacionAnual");const m=document.createElement("INPUT"),b=document.createElement("INPUT"),p=document.createElement("INPUT"),E=document.createElement("INPUT"),F=document.createElement("INPUT"),C=document.createElement("INPUT"),v=document.createElement("INPUT");m.setAttribute("type","text"),m.setAttribute("placeholder","Escribe el nombre"),m.setAttribute("required",""),b.setAttribute("type","number"),b.setAttribute("placeholder","Ej. 2012"),p.setAttribute("type","number"),p.setAttribute("required",""),"#tablaContrucciones"!==e&&p.setAttribute("placeholder","Ej. 2012"),E.setAttribute("type","number"),E.setAttribute("required",""),"#tablaContrucciones"===e&&(E.value=0),F.setAttribute("type","number"),"#tablaContrucciones"===e&&F.setAttribute("disabled",""),"#tablaContrucciones"===e&&(F.value=0),C.setAttribute("type","number"),C.classList.add("valorActualMercado"),v.setAttribute("type","number"),v.classList.add("valorRecuperacion");const A=document.createElement("SPAN");A.innerHTML="<span>%</span>",i.appendChild(m),o.appendChild(b),l.appendChild(p),c.appendChild(E),r.appendChild(F),r.appendChild(A),s.innerHTML+="<span>$</span>",s.appendChild(C),d.innerHTML+="<span>$</span>",d.appendChild(v),n.appendChild(i),n.appendChild(o),n.appendChild(l),n.appendChild(c),n.appendChild(r),n.appendChild(s),n.appendChild(d),n.appendChild(u),a.appendChild(n),t(),actualizarOperaciones()}botonNuevaFilaContrucciones.addEventListener("click",()=>{filaOtrosActivosFijos("#tablaContrucciones",colectaConstrucciones)}),botonNuevaFilaVehiculos.addEventListener("click",()=>{filaOtrosActivosFijos("#tablaVehiculos",colectaVehiculos)}),botonNuevaFilaImplementos.addEventListener("click",()=>{filaOtrosActivosFijos("#tablaImplementos",colectaImplementos)}),botonNuevaFilaEquipoComunicacion.addEventListener("click",()=>{filaOtrosActivosFijos("#tablaEquiposComunicacion",colectaEquiposComunicacion)}),botonNuevaFilaEquipo.addEventListener("click",()=>{filaOtrosActivosFijos("#tablaEquipos",colectaEquipos)});const botonEliminarFilaConstruccion=document.querySelector("#eliminarFilaContrucciones"),botonEliminarFilaVehiculos=document.querySelector("#eliminarFilaVehiculos"),botonEliminarFilaImplementos=document.querySelector("#eliminarFilaImplementos"),botonEliminarFilaEquipoComunicacion=document.querySelector("#eliminarFilaEquipoComunicacion"),botonEliminarFilaEquipo=document.querySelector("#eliminarFilaEquipo");botonEliminarFilaConstruccion.addEventListener("click",()=>{eliminarUltimaFila("#tablaContrucciones",colecta.construcciones,funcion=null)}),botonEliminarFilaVehiculos.addEventListener("click",()=>{eliminarUltimaFila("#tablaVehiculos",colecta.vehiculos,funcion=null)}),botonEliminarFilaImplementos.addEventListener("click",()=>{eliminarUltimaFila("#tablaImplementos",colecta.implementos,funcion=null)}),botonEliminarFilaEquipoComunicacion.addEventListener("click",()=>{eliminarUltimaFila("#tablaEquiposComunicacion",colecta.equiposComunicacion,funcion=null)}),botonEliminarFilaEquipo.addEventListener("click",()=>{eliminarUltimaFila("#tablaEquipos",colecta.equipos,funcion=null)});const botonNuevaFilaRepuestoHerramientas=document.querySelector("#nuevaFilaRepuestoHerramientas");function filaRepuestoHerramientas(e,t){const a=document.querySelector(e+" tbody"),n=document.createElement("TR"),i=document.createElement("TD"),o=document.createElement("TD"),l=document.createElement("TD"),c=document.createElement("TD"),r=document.createElement("TD"),s=document.createElement("TD"),d=document.createElement("TD"),u=document.createElement("INPUT"),m=document.createElement("INPUT"),b=document.createElement("INPUT"),p=document.createElement("INPUT"),E=document.createElement("INPUT");u.setAttribute("type","text"),u.setAttribute("required",""),m.setAttribute("type","number"),b.setAttribute("type","number"),p.setAttribute("type","number"),E.setAttribute("type","number"),i.appendChild(u),o.innerHTML+="<span>$</span>",o.appendChild(m),l.innerHTML+="<span>$</span>",l.appendChild(b),r.innerHTML+="<span>$</span>",r.appendChild(p),s.innerHTML+="<span>$</span>",s.appendChild(E),n.appendChild(i),n.appendChild(o),n.appendChild(l),n.appendChild(c),n.appendChild(r),n.appendChild(s),n.appendChild(d),a.appendChild(n),t(),actualizarOperaciones()}botonNuevaFilaRepuestoHerramientas.addEventListener("click",()=>{filaRepuestoHerramientas("#tablaRepuestoHerramientas",colectaRepuestoHerramientas)});const botonEliminarFilaRepuestoHerramientas=document.querySelector("#eliminarFilaRepuestoHerramientas");botonEliminarFilaRepuestoHerramientas.addEventListener("click",()=>{eliminarUltimaFila("#tablaRepuestoHerramientas",colecta.repuestoHerramientas,colectaRepuestoHerramientas)});const botonNuevaFilaAgroquimicosGranular=document.querySelector("#nuevaFilaAgroquimicosGranular"),botonNuevaFilaAgroquimicosFoliar=document.querySelector("#nuevaFilaAgroquimicosFoliar"),botonNuevaFilaInsecticidas=document.querySelector("#nuevaFilaInsecticidas"),botonNuevaFilaFungicidas=document.querySelector("#nuevaFilaFungicidas"),botonNuevaFilaHerbicidas=document.querySelector("#nuevaFilaHerbicidas"),botonNuevaFilaCombustiblesLubricantes=document.querySelector("#nuevaFilaCombustiblesLubricantes");function filaCostoAgroquimico(e,t){const a=document.querySelector(e+" tbody"),n=document.createElement("TR"),i=document.createElement("TD"),o=document.createElement("TD"),l=document.createElement("TD"),c=document.createElement("TD"),r=document.createElement("TD"),s=document.createElement("INPUT"),d=document.createElement("INPUT"),u=document.createElement("INPUT"),m=document.createElement("INPUT");s.setAttribute("type","text"),s.setAttribute("required",""),"#tablaCombustiblesLubricantes"===e?d.setAttribute("type","number"):d.setAttribute("type","text"),d.setAttribute("required",""),u.setAttribute("type","number"),m.setAttribute("type","number"),i.appendChild(s),o.appendChild(d),"#tablaCombustiblesLubricantes"===e&&(l.innerHTML+="<span>$</span>"),l.appendChild(u),"#tablaCombustiblesLubricantes"!==e&&(c.innerHTML+="<span>$</span>",c.appendChild(m)),n.appendChild(i),n.appendChild(o),n.appendChild(l),n.appendChild(c),n.appendChild(r),a.appendChild(n),t(),actualizarOperaciones()}botonNuevaFilaAgroquimicosGranular.addEventListener("click",()=>{filaCostoAgroquimico("#tablaFertilizantesGranular",colectaFertilizanteGranular)}),botonNuevaFilaAgroquimicosFoliar.addEventListener("click",()=>{filaCostoAgroquimico("#tablaFertilizantesFoliar",colectaFertilizanteFoliar)}),botonNuevaFilaInsecticidas.addEventListener("click",()=>{filaCostoAgroquimico("#tablaInsecticidas",colectaInsecticidas)}),botonNuevaFilaFungicidas.addEventListener("click",()=>{filaCostoAgroquimico("#tablaFungicidas",colectaFungicidas)}),botonNuevaFilaHerbicidas.addEventListener("click",()=>{filaCostoAgroquimico("#tablaHerbicidas",colectaHerbicidas)}),botonNuevaFilaCombustiblesLubricantes.addEventListener("click",()=>{filaCostoAgroquimico("#tablaCombustiblesLubricantes",colectaCombustiblesLubricantes)});const botonEliminarFilaAgroquimicosGranular=document.querySelector("#eliminarFilaAgroquimicosGranular"),botonEliminarFilaAgroquimicosFoliar=document.querySelector("#eliminarFilaAgroquimicosFoliar"),botonEliminarFilaInsecticidas=document.querySelector("#eliminarFilaInsecticidas"),botonEliminarFilaFungicidas=document.querySelector("#eliminarFilaFungicidas"),botonEliminarFilaHerbicidas=document.querySelector("#eliminarFilaHerbicidas"),botonEliminarFilaCombustiblesLubricantes=document.querySelector("#eliminarFilaCombustiblesLubricantes");botonEliminarFilaAgroquimicosGranular.addEventListener("click",()=>{eliminarUltimaFila("#tablaFertilizantesGranular",colecta.fertilizantesGranular,colectaFertilizanteGranular)}),botonEliminarFilaAgroquimicosFoliar.addEventListener("click",()=>{eliminarUltimaFila("#tablaFertilizantesFoliar",colecta.fertilizantesFoliar,colectaFertilizanteFoliar)}),botonEliminarFilaInsecticidas.addEventListener("click",()=>{eliminarUltimaFila("#tablaInsecticidas",colecta.insecticidas,colectaInsecticidas)}),botonEliminarFilaFungicidas.addEventListener("click",()=>{eliminarUltimaFila("#tablaFungicidas",colecta.fungicidas,colectaFungicidas)}),botonEliminarFilaHerbicidas.addEventListener("click",()=>{eliminarUltimaFila("#tablaHerbicidas",colecta.herbicidas,colectaHerbicidas)}),botonEliminarFilaCombustiblesLubricantes.addEventListener("click",()=>{eliminarUltimaFila("#tablaCombustiblesLubricantes",colecta.combustiblesLubricantes,colectaCombustiblesLubricantes)});const botonNuevaFilaMantenimientoReparaciones=document.querySelector("#nuevaFilaMantenimientoReparaciones");function filaMantenimientoReparaciones(e,t){const a=document.querySelector(e+" tbody"),n=document.createElement("TR"),i=document.createElement("TD"),o=document.createElement("TD"),l=document.createElement("TD"),c=document.createElement("TD"),r=document.createElement("TD"),s=document.createElement("TD"),d=document.createElement("INPUT"),u=document.createElement("INPUT"),m=document.createElement("INPUT"),b=document.createElement("INPUT"),p=document.createElement("INPUT"),E=document.createElement("INPUT");d.setAttribute("type","text"),d.setAttribute("required",""),u.setAttribute("type","number"),d.setAttribute("required",""),m.setAttribute("type","number"),b.setAttribute("type","number"),p.setAttribute("type","number"),E.setAttribute("type","number"),i.appendChild(d),o.appendChild(u),l.innerHTML+="<span>$</span>",l.appendChild(m),c.innerHTML+="<span>$</span>",c.appendChild(b),r.innerHTML+="<span>$</span>",r.appendChild(p),s.innerHTML+="<span>$</span>",s.appendChild(E),n.appendChild(i),n.appendChild(o),n.appendChild(l),n.appendChild(c),n.appendChild(r),n.appendChild(s),a.appendChild(n),t(),actualizarOperaciones()}botonNuevaFilaMantenimientoReparaciones.addEventListener("click",()=>{filaMantenimientoReparaciones("#tablaMantenimientoReparaciones",colectaMantenimientoReparaciones)});const botonEliminarFilaMantenimientoReparaciones=document.querySelector("#eliminarFilaMantenimientoReparaciones");botonEliminarFilaMantenimientoReparaciones.addEventListener("click",()=>{eliminarUltimaFila("#tablaMantenimientoReparaciones",colecta.mantenimientosReparaciones,colectaMantenimientoReparaciones)});const botonNuevaFilaCostosCosecha=document.querySelector("#nuevaFilaCostosCosecha");botonNuevaFilaCostosCosecha.addEventListener("click",()=>{filaCostoAgroquimico("#tablaCostosCosecha",colectaCostosCosecha)});const botonEliminarFilaCostosCosecha=document.querySelector("#eliminarFilaCostosCosecha");botonEliminarFilaCostosCosecha.addEventListener("click",()=>{eliminarUltimaFila("#tablaCostosCosecha",colecta.costosCosecha,colectaCostosCosecha)});const botonNuevaFilaManoObraContratada=document.querySelector("#nuevaFilaManoObraContratada"),botonNuevaFilaManoObraFamiliar=document.querySelector("#nuevaFilaManoObraFamiliar"),botonNuevaFilaManoObraPermanente=document.querySelector("#nuevaFilaManoObraPermanente");function filaManoObra(e,t){const a=document.querySelector(e+" tbody"),n=document.createElement("TR"),i=document.createElement("TD"),o=document.createElement("TD"),l=document.createElement("TD"),c=document.createElement("TD"),r=document.createElement("TD"),s=document.createElement("INPUT"),d=document.createElement("INPUT"),u=document.createElement("INPUT");s.setAttribute("type","text"),s.setAttribute("required",""),d.setAttribute("type","number"),d.setAttribute("required",""),u.setAttribute("type","number"),i.appendChild(s),o.appendChild(d),l.innerHTML+="<span>$</span>",l.appendChild(u),n.appendChild(i),n.appendChild(o),n.appendChild(l),n.appendChild(c),n.appendChild(r),a.appendChild(n),t(),actualizarOperaciones()}function filaManoObraPermanente(e,t){const a=document.querySelector(e+" tbody"),n=document.createElement("TR"),i=document.createElement("TD"),o=document.createElement("TD"),l=document.createElement("TD"),c=document.createElement("TD"),r=document.createElement("TD"),s=document.createElement("TD"),d=document.createElement("INPUT"),u=document.createElement("INPUT"),m=document.createElement("INPUT");d.setAttribute("type","text"),d.setAttribute("required",""),u.setAttribute("type","number"),d.setAttribute("required",""),m.setAttribute("type","number"),i.appendChild(d),o.appendChild(u),l.innerHTML+="<span>$</span>",l.appendChild(m),n.appendChild(i),n.appendChild(o),n.appendChild(l),n.appendChild(c),n.appendChild(r),n.appendChild(s),a.appendChild(n),t(),actualizarOperaciones()}botonNuevaFilaManoObraPermanente.addEventListener("click",()=>{filaManoObraPermanente("#tablaManoObraPermanente",colectaManoObraPermanente)}),botonNuevaFilaManoObraFamiliar.addEventListener("click",()=>{filaManoObra("#tablaManoObraFamiliar",colectaManoObraFamiliar)}),botonNuevaFilaManoObraContratada.addEventListener("click",()=>{filaManoObra("#tablaManoObraContratada",colectaManoObraContratada)});const botonEliminarFilaManoObraContratada=document.querySelector("#eliminarFilaManoObraContratada"),botonEliminarFilaManoObraFamiliar=document.querySelector("#eliminarFilaManoObraFamiliar"),botonEliminarFilaManoObraPermanente=document.querySelector("#eliminarFilaManoObraPermanente");botonEliminarFilaManoObraPermanente.addEventListener("click",()=>{eliminarUltimaFila("#tablaManoObraPermanente",colecta.manoObraPermanente,colectaManoObraPermanente)}),botonEliminarFilaManoObraFamiliar.addEventListener("click",()=>{eliminarUltimaFila("#tablaManoObraFamiliar",colecta.manoObraFamiliar,colectaManoObraFamiliar,2)}),botonEliminarFilaManoObraContratada.addEventListener("click",()=>{eliminarUltimaFila("#tablaManoObraContratada",colecta.manoObraContratada,colectaManoObraContratada)});const botonNuevaFilaOtrosCostosProduccionCostosGeneralesr=document.querySelector("#nuevaFilaOtrosCostosProduccionCostosGenerales");botonNuevaFilaOtrosCostosProduccionCostosGeneralesr.addEventListener("click",()=>{filaManoObra("#tablaOtrosCostosProduccionCostosGenerales",colectaOtrosCostosGenerales)});const botonEliminarFilaOtrosCostosProduccionCostosGenerales=document.querySelector("#eliminarFilaOtrosCostosProduccionCostosGenerales");botonEliminarFilaOtrosCostosProduccionCostosGenerales.addEventListener("click",()=>{eliminarUltimaFila("#tablaOtrosCostosProduccionCostosGenerales",colecta.otrosCostosGenerales,colectaOtrosCostosGenerales,6)});const botonNuevaFilaSubproductos=document.querySelector("#nuevaFilaSubproductos");function filaSubproductos(e,t){const a=document.querySelector(e+" tbody"),n=document.createElement("TR"),i=document.createElement("TD"),o=document.createElement("TD"),l=document.createElement("INPUT"),c=document.createElement("INPUT");l.setAttribute("type","text"),l.setAttribute("required",""),c.setAttribute("type","number"),i.appendChild(l),o.innerHTML+="<span>$</span>",o.appendChild(c),n.appendChild(i),n.appendChild(o),a.appendChild(n),t(),actualizarOperaciones()}botonNuevaFilaSubproductos.addEventListener("click",()=>{filaSubproductos("#tablaSubproductos",colectaSubproductos)});const botonEliminarFilaSubproductos=document.querySelector("#eliminarFilaSubproductos");botonEliminarFilaSubproductos.addEventListener("click",()=>{eliminarUltimaFila("#tablaSubproductos",colecta.subproductos)});const botonNuevaFilaOtrosIngresosUrp=document.querySelector("#nuevaFilaOtrosIngresosUrp");botonNuevaFilaOtrosIngresosUrp.addEventListener("click",()=>{filaSubproductos("#tablaOtrosIngresosUrp",colectaOtrosIngresosUrp)});const botonEliminarFilaOtrosIngresosUrp=document.querySelector("#eliminarFilaOtrosIngresosUrp");botonEliminarFilaOtrosIngresosUrp.addEventListener("click",()=>{eliminarUltimaFila("#tablaOtrosIngresosUrp",colecta.otrosIngresosUrp)});