import { productoEstrellaPorCiudad } from "./catalogo-d3.js"
import { clientesRecurrentes } from "./recurrentes-d2.js"
import { comboRegalo } from "./catalogo-d3.js"
import { primerClienteUnico } from "./catalogo-d3.js"
import { mejorSemana } from "./reporte-d3.js"
import { catalogo } from "./catalogo-d3.js"
import { generarDiasAleatorios } from "./reporte-d3.js"
import { ventas } from "./datos-d1.js"

export function generarReporte({
  ventas = [],
  catalogo = [],
  valorObjetivo = 0,
  cantidadDias = 30,
  k = 7,
}) { // aqui empieza un un block statement (las variables declaradas ahi solo existen ahi)
  const diasAleatorios = generarDiasAleatorios(cantidadDias);

  return {
    clientesRecurrentes: clientesRecurrentes(ventas),
    productoEstrellaPorCiudad: productoEstrellaPorCiudad(ventas),
    comboRegalo: comboRegalo(catalogo, valorObjetivo),
    primerClienteUnico: primerClienteUnico(ventas),
    mejorSemana: mejorSemana(diasAleatorios, k),
    metaDias: {
      cantidadDias,
      k,
      diasGenerados: diasAleatorios,
    },
  };
}


console.log("reportee: ",generarReporte({ventas: ventas, catalogo:catalogo, valorObjetivo:87000, cantidadDias:30, k: 7}))