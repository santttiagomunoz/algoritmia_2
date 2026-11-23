import {ventas} from '../../src/week-1/datos-d1.js'
import {generarVentas} from './generador-d2.js'
import {clientesRecurrentes} from './recurrentes-d2.js'

// mc-9.2-d3


function clientesRecurrentesSet(ventas){
    const vistos = new Set()
    const rescurrentes = new Set()

    for(const v of ventas){
        if(vistos.has(v.cliente)) rescurrentes.add(v.cliente)
            else vistos.add(v.cliente)

    }
    return [...rescurrentes].sort((a, b) => a - b)
}

// mc-9.3-d3
function comprasPorClientes(ventas){
    const compras = new Map()

    for(const v of ventas) compras.set(v.cliente, (compras.get(v.cliente) || 0) + 1)
    return compras   

}

export function clientesRecurrentesMap(mapaCompras) {
  const recurrentes = []

  for (const [cliente, cantidad] of mapaCompras.entries()) {
    if (cantidad > 1) {
      recurrentes.push(cliente)
    }
  }

  return recurrentes.sort((a, b)=> a - b)
}

//const mapaComp = comprasPorClientes(ventas)
//console.log(clientesRecurrentesMap(mapaComp))

//mc-9.4-d3
const ventasGeneradas = generarVentas(5000)
const recurrentesOriginal = clientesRecurrentes(ventasGeneradas)
const clientesSet = clientesRecurrentesSet(ventasGeneradas)

const comprasPC = comprasPorClientes(ventasGeneradas)
const clientesMap = clientesRecurrentesMap(comprasPC)

console.log("original: ", recurrentesOriginal)
console.log("set: ", clientesSet)
console.log("map: ", clientesMap)

// mc-9.5d3
const arregloPrueba = [1000, 10000, 100000];

function medirMs(fn) {
  const inicio = performance.now();
  const resultado = fn();
  const fin = performance.now();
  return {
    resultado,
    tiempoMs: Number((fin - inicio).toFixed(3)),
  };
}

function pruebaDeFunciones() {
  const tabla = [];

  for (const p of arregloPrueba) {
    // 1. Generamos un arreglo de p ventas reales
    const ventasPrueba = generarVentas(p);

    // 2. Medimos original (solo hasta 10.000 ventas por ser O(n^2))
    let tiempoOriginal = "Omitida (>10k)";
    if (p <= 10000) {
      tiempoOriginal = medirMs(() => clientesRecurrentes(ventasPrueba)).tiempoMs;
    }

    // 3. Medimos versión con Set
    const tiempoSet = medirMs(() => clientesRecurrentesSet(ventasPrueba)).tiempoMs;

    // 4. Medimos versión con Map (conteo + extracción de recurrentes)
    const tiempoMap = medirMs(() => {
      const mapa = comprasPorClientes(ventasPrueba);
      return clientesRecurrentesMap(mapa);
    }).tiempoMs;

    tabla.push({
      ventas: p,
      originalMs: tiempoOriginal,
      setMs: tiempoSet,
      mapMs: tiempoMap,
    });
  }

  console.table(tabla);
  return tabla;
}

console.log(pruebaDeFunciones())
