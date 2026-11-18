import { generarVentas } from "./generador-d2.js"

export const ventasI = generarVentas(10)

export function totalVendidoI(ventas){
  let total = 0
  let count = 0
  for (const v of ventas) {
    count++
    total += v.cantidad * v.precio
  }
  return {totalVendido: total, totalVendidoCount: count}
}


export function ventaMayorI(ventas, contador){
  let mayor = 0
  for (const v of ventas) {
    contador.ops++
    if (v.precio > mayor) {
        mayor = v.precio        
    }      
  }
  return mayor
}

export function totalPorciudadI(ventas, contador){

    let resultado = {}

    
    for(const v of ventas){
        contador.ops++
        let subtotal = v.precio * v.cantidad
        
        if(resultado[v.ciudad]) resultado[v.ciudad] += subtotal
        else resultado[v.ciudad] = subtotal
    }

    return resultado
}


export function primeraVenta(ventas){

    let count = 1
    return {primeraVenta: ventas.at(0), contador: count}
    
}
