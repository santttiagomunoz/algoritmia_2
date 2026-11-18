import { ventas } from "../week-1/datos-d1.js";

export const azar =(inicio, limite)=> Math.floor(Math.random() * (limite - inicio) + inicio) 

const productos = Array.from(new Set(ventas.map(v => v.producto)))
const ciudades = Array.from(new Set(ventas.map(v => v.ciudad)))
const precios = Array.from(new Set(ventas.map(v => v.precio)))

// console.log(precios)

export function generarVentas(n) {
  const clientes = Math.max(1, Math.floor(n / 3));
  const ventas = [];

  for (let i = 0; i < n; i++) {    

    ventas.push({
      id: i + 1,
      fecha: "2026-09-" + String(azar(1, 31)).padStart(2, "0"),
      cliente: "C" + String(azar(1, clientes)).padStart(2, "0"),
      producto: productos[azar(0, productos.length - 1)],
      ciudad: ciudades[azar(0, ciudades.length - 1)],
      cantidad: azar(1, 5),
      precio: precios[azar(0, ciudades.length - 1)]
    });
  }

  return ventas;
}

function totalVendidoC(ventas, c){
  let total = 0
  for (const v of ventas) {
    c.ops++
    total += v.cantidad * v.precio
  }
  return total
}

let c = {ops : 0}

function ventaMayor(ventas){
  let mayor = 0
  for (const v of ventas) {
    if (v.precio > mayor) 
      mayor = v.precio
      c.ops++
  }
  return mayor
}

function totalPorciudad(ventas){
  let resultado = []
  let total = 0
  for (const v of ventas) {
      if(resultado[v.ciudad]){
        resultado[v.ciudad] += total
      }else{
        resultado[v.ciudad] = total
      }
  }
}

//console.log(totalVendidoC(generarVentas(10), c))
// console.log(ventaMayor(generarVentas(10)))
// console.log(c.ops)

