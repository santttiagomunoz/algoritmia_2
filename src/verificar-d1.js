import { ventas } from "./datos-d1.js";
import { totalVendido } from "./analitica-d1.js";
import { totalVendidoM } from "./analitica-d1.js";
import { unidadesVendidas } from "./analitica-d1.js";
import { unidadesVendidasM } from "./analitica-d1.js";
import { ventasPorCiudad } from "./analitica-d1.js";
import { ventasPorCiudadM } from "./analitica-d1.js";

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