import { ventas } from "../week-1/datos-d1.js";
//import { generarVentas } from "./generador-d2.js";

const nVentas = [1000, 2000, 4000, 8000, 16000]


function clientesRecurrentes(ventas) {

    const recurrentes = [];

    for (let i = 0; i < ventas.length; i++) {

        for (let j = i + 1; j < ventas.length; j++) {

            if (ventas[i].cliente === ventas[j].cliente && !recurrentes.includes(ventas[i].cliente)) {
                recurrentes.push(ventas[i].cliente);
            }
        }
    }
    return recurrentes;
}

// console.log(clientesRecurrentes(ventas))

for (const v of nVentas) {

    const ventasPrueba = generarVentas(v)

    const etiqueta = `Prueba con ${v} ventas`

    console.time(etiqueta)
    clientesRecurrentes(ventasPrueba)
    console.timeEnd(etiqueta)
    
    
}