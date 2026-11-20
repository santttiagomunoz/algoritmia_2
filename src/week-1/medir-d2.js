import { primeraVenta } from "./instrumentadas.d2.js";
import { totalVendidoI } from "./instrumentadas.d2.js";
import { ventaMayorI } from "./instrumentadas.d2.js";
import { totalPorciudadI } from "./instrumentadas.d2.js";
import { generarVentas } from "./generador-d2.js";


const valores = [100, 1000, 10000, 100000]
const resultado = []

for (const v of valores) {
    
    const ventas = generarVentas(v)

    const {totalVendido, totalVendidoCount} = totalVendidoI(ventas)

    let cont2 = {ops: 0}
    ventaMayorI(ventas, cont2)

    let cont3 = {ops: 0}
    totalPorciudadI(ventas, cont3)
    
    const {primeraV, contador} = primeraVenta(ventas)

    resultado.push({
        "n (Datos)": v.toLocaleString(),
    "totalVendido (ops)": totalVendidoCount.toLocaleString(),
    "ventaMayor (ops)": cont2.ops.toLocaleString(),
    "totalPorciudad (ops)": cont3.ops.toLocaleString(),
    "primeraVenta": contador.toLocaleString()
   
    })
}

console.table(resultado)