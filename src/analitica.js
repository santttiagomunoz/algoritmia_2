import { ventas } from "./datos.js";

  const normalizar = (texto) =>
    String(texto ?? "")
    .trim()
    .toLowerCase()
    .normalize("NFD") // NFD separa cada letra acentuada en la letra base mas su tilde (í pasa a i + ´)
    .replace(/[\u0300-\u036f]/g, "") ///[\u0300-\u036f]/g dice que reemplace las tildes
    

function valorVenta(ventas){
    // return ventas.map(v => v.cantidad * v.precio)
    const precioPorProducto = []

    const ciudadyprecio = []
    for(let i = 0; i < ventas.length; i++){
    precioPorProducto[i] = ventas[i].cantidad * ventas[i].precio     

    
    //  ciudadyprecio[i] = {
    //     ciudad : ventas[i].ciudad,
    //     total : ventas[i].cantidad * ventas[i].precio
    //  }
    }
    return precioPorProducto
}

function totalVendido(ventas){
    //s 1.0
    // let total = 0
    // for(const value of ventas){
    //     total += value.cantidad * value.precio
    // }
    // return total

    //s 2.0
    let accumulator = 0
    for(const value of valorVenta(ventas)){
        accumulator += value
    } 
    return accumulator   
}

function unidadesVendidas(ventas){
    let totalUnidades = 0
    for(const value of ventas){
        totalUnidades += value.cantidad
    }
    return totalUnidades
}

function ventaMayor(ventas){
    let mayorVenta = 0
    for(const value of ventas){
        if(value.precio > mayorVenta) mayorVenta = value.precio
    }
    return mayorVenta
}

function ticketPromedio(ventas){
    let accumulator = 0
    for(const value of valorVenta(ventas)){
        accumulator += value
    }

    return accumulator / unidadesVendidas(ventas)  
}

function promedioPorCiudad(ventas, ciudad){
    let total = 0
    let cont = 0
    
    for(let i = 0; i < ventas.length; i++){
        if(normalizar(ventas[i].ciudad) === normalizar(ciudad)){
            total= (ventas[i].precio * ventas[i].cantidad) / ventas[i].cantidad
            cont++
        }     
    }
       return cont === 0 ? 0 : total / cont
}

function ventasPorCiudad(ventas, ciudad){
 
    let totalVentasPorCiudad = 0
    for(let i = 0; i < ventas.length; i ++){
        if(normalizar(ventas[i].ciudad) === normalizar(ciudad)){
            totalVentasPorCiudad += ventas[i].cantidad
        }
    }
    return totalVentasPorCiudad
}

//reto: crear una funcion que devuelva en un objeto nombre de la ciudad y precio acumulado 
function nombrePrecioAcumulado(ventas){//intento fallido
    const nombres = [...new Set(ventas.map(v => normalizar(v.ciudad)))]
    let acc = 0
    let objeto = []
    for(let i = 0; i < ventas.length; i++){
        if(normalizar(ventas[i].ciudad) === nombres[i]){
            acc += ventas[i].cantidad * ventas[i].precio
            objeto[i] = {
                ciudad : nombres[i],
                precioAcumulado: acc
            }
        }
    }
    return objeto
}

function nombrePrecioAcumulado2(ventas) {//solucion IA
  const normalizar = (t) => String(t ?? "").trim().toLowerCase();
  const nombres = [...new Set(ventas.map(v => normalizar(v.ciudad)))];
  const resultado = [];

  for (let i = 0; i < nombres.length; i++) {
    let acc = 0;
    for (let j = 0; j < ventas.length; j++) {
      if (normalizar(ventas[j].ciudad) === nombres[i]) {
        acc += ventas[j].cantidad * ventas[j].precio;
      }
    }
    resultado.push({ ciudad: nombres[i], precioAcumulado: acc });
  }

  return resultado;
}

console.log(nombrePrecioAcumulado(ventas))