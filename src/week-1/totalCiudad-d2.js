import {generarVentas} from './generador-d2.js'
import { normalizar } from './analitica-d1.js'


const ventas = generarVentas(10000)

// mc-7.1-d2
export function totalCiudad(ventas, ciudad){
    
    return ventas.map(v => ({ciudad: normalizar(v.ciudad), precio: v.precio, cantidad: v.cantidad}))
    .filter(v => v.ciudad == ciudad)
    .map(v => v.precio * v.cantidad)
    .reduce((acc , v) => acc + v, 0)

}

// mc-7.2-d2
export function totalCiudadUnaPasada(ventas, ciudad){

    if(!ventas || !ciudad) return null 

    let totales = 0

    for (const v of ventas) {
        const ciudadV = normalizar(v.ciudad)        
        if(ciudadV === ciudad){
            totales += v.precio * v.cantidad
        }
    }

    return totales
}

export function totalCiudadUnaPasadaR(ventas, ciudad){

    return ventas.reduce((acc , v) => {       
        if(normalizar(v.ciudad) === normalizar(ciudad)){
             acc += v.precio * v.cantidad             
        }
        return acc
    }, 0)

}

// mc-7.3-d2
console.log('total1: ', totalCiudad(ventas, "medellin"))
console.log('total2: ', totalCiudadUnaPasada(ventas, "medellin"))
console.log('total3: ', totalCiudadUnaPasadaR(ventas, "medellin"))

