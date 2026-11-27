import { catalogo } from "./catalogo-d3.js";


const ventasDiarias = [
  320, 410, 280, 390, 510, 620, 700, 300, 290, 450,
  480, 530, 610, 680, 350, 330, 420, 470, 560, 640,
  710, 380, 360, 440, 500, 590, 650, 720, 400, 370,
];


//mc-11.2-d3
export function mejorSemana(dias, k) {

  let sumaVentana = 0

  for (let i = 0; i < k; i++) {
    sumaVentana += dias[i];
  }

  let maxSuma = sumaVentana
  let dia = 0
  for (let i = k; i < dias.length; i++) {
    const elementoQueEntra = dias[i]
    const elementoQueSale = dias[i - k]
    sumaVentana += elementoQueEntra - elementoQueSale

    if (sumaVentana > maxSuma) {
      maxSuma = sumaVentana
      dia = i - k + 1
    }
  }
  return {
    maxSuma,
    dia
  }
}

//mc-11.1-d3
export function mejorSemanaBruta(dias, k) {

  let maxSuma = 0
  let dia = 0

  for (let i = 0; i < dias.length; i++) {
    let sumaVentana = 0
    for (let j = i; j < i + k; j++) {
      sumaVentana += dias[j]
    }
    if (sumaVentana > maxSuma) {
      maxSuma = sumaVentana
      dia = i
    }
  }
  return {
    maxSuma,
    dia
  }
}

//mc-11.4-d3
export function generarDiasAleatorios(cantidad, min = 100, max = 1000) {
  const dias = [];
  for (let i = 0; i < cantidad; i++) {
    dias.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return dias;
}

function medirTiempo(fn) {
  const inicio = performance.now();
  const resultado = fn();
  const fin = performance.now();
  return {
    resultado,
    tiempoMs: Number((fin - inicio).toFixed(3)),
  };
}

// 1. Prueba con septiembre (k = 7)
const resSeptBruta = mejorSemanaBruta(ventasDiarias, 7);
const resSeptVentana = mejorSemana(ventasDiarias, 7);

console.log("Septiembre - Bruta:", resSeptBruta);
console.log("Septiembre - Ventana:", resSeptVentana);
console.log(
  "¿Coinciden en septiembre?:",
  JSON.stringify(resSeptBruta) === JSON.stringify(resSeptVentana)
);

// 2. Prueba con 100.000 días aleatorios
const dias100k = generarDiasAleatorios(100000);
const kGrande = 500;

const medicionBruta = medirTiempo(() => mejorSemanaBruta(dias100k, kGrande));
const medicionVentana = medirTiempo(() => mejorSemana(dias100k, kGrande));

console.log("\n100.000 días (k = 500):");
console.log("Bruta:", medicionBruta.resultado, `en ${medicionBruta.tiempoMs} ms`);
console.log("Ventana:", medicionVentana.resultado, `en ${medicionVentana.tiempoMs} ms`);
console.log(
  "¿Coinciden en 100.000 días?:",
  JSON.stringify(medicionBruta.resultado) === JSON.stringify(medicionVentana.resultado)
);

//mc-11.5-d3
export function parMasCercano(precios, presupuesto) {

  if (!Array.isArray(precios) || precios.length < 2) {
    return null;
  }

  let izq = 0
  let der = precios.length - 1
  let maxSuma = -Infinity
  let mejorPar = null

  while (izq < der) {

    let suma = precios[izq] + precios[der]

    if (suma > presupuesto) {
      der--
    } else {

      if (suma > maxSuma) {

        maxSuma = suma
        mejorPar = [precios[izq], precios[der]]
      }
      izq++
    }
    
  }
  return mejorPar
}

//mc-11.6-d3
const precios = catalogo.map(p => p.precio ).sort((a,b)=> a.precio - b.precio )

console.log(precios)

const presupuestosPrueba = [100000, 140000, 40000]

for(const presupuesto of presupuestosPrueba){

  const par = parMasCercano(precios, presupuesto)

  console.log("par mas cercano: ", par)
}