import { ventas } from "./datos-d1.js";
import { generarVentas } from "./generador-d2.js";

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

const resultado = []
for (const v of nVentas) {

    const ventasPrueba = generarVentas(v)

    //const etiqueta = `Prueba con ${v} ventas`

    //console.time(etiqueta)
    //clientesRecurrentes(ventasPrueba)
    //console.timeEnd(etiqueta)
    
    const inicio = performance.now();
    clientesRecurrentes(ventasPrueba);
    const fin = performance.now();

    resultado.push({
    ventas: v,
    tiempoMs: Number((fin - inicio).toFixed(3)),
  });

}

console.table(resultado)