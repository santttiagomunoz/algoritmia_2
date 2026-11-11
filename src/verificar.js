import { ventas } from "./datos.js";
import { totalVendido } from "./analitica.js";
import { totalVendidoM } from "./analitica.js";
import { unidadesVendidas } from "./analitica.js";
import { unidadesVendidasM } from "./analitica.js";
import { ventasPorCiudad } from "./analitica.js";
import { ventasPorCiudadM } from "./analitica.js";

function compare(a, b){    
    if(a === b) console.log("OK")
        else console.log("DIFERENTE")
}

console.log("comparacion totalVendido / totalVendidoM")
compare(totalVendido(ventas), totalVendidoM(ventas))

console.log("comparacion unidadesVendidas / unidadesVendidasM")
compare(unidadesVendidas(ventas), unidadesVendidasM(ventas))

console.log("comparacion ventasPorCiudad / ventasPorCiudadM")
compare(ventasPorCiudad(ventas, "medellin"), ventasPorCiudadM(ventas, "medellin"))