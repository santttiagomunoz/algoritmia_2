import {ventas} from "./datos-d1.js"
import {totalPorCiudadM} from "./analitica-d1.js"
import {unidadesPorProducto} from "./analitica-d1.js"
import {topProductosPorValor} from "./analitica-d1.js"

function darFormato(ventas){
    
    let formato = []
    for(const v of ventas){
      formato[v] = v.precio.toLocaleString("es-CO")
    }
    return formato
}   

console.log("Resumen general")

console.log("----------venta por ciudad")
console.table(totalPorCiudadM(ventas))

console.log("----------unidades por producto")
console.table(unidadesPorProducto(ventas))

console.log("----------top 3 de productos por valor")
console.table(topProductosPorValor(ventas, 3))
