import { ventas } from "./src/week-1/datos-d1.js"

const normalizar = (texto) => texto.trim().toLowerCase()

function totalPorCiudad(ventas){

    const ciudades = [...new Set(ventas.map(v => normalizar(v.ciudad)))]

    const totales = new Map()

    let total = 0
    

    for (const v of ventas) {     

        totales.set(v.ciudad, total)

    }
    return totales

}

console.log(totalPorCiudad(ventas))