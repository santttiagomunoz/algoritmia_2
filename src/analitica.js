import { ventas } from "./datos.js";

//Inicio mini reto # 2

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

export function totalVendido(ventas){
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

export function unidadesVendidas(ventas){
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

export function ventasPorCiudad(ventas, ciudad){
 
    let totalVentasPorCiudad = 0
    for(let i = 0; i < ventas.length; i ++){
        if(normalizar(ventas[i].ciudad) === normalizar(ciudad)){
            totalVentasPorCiudad += ventas[i].cantidad
        }
    }
    return totalVentasPorCiudad
}

//reto: crear una funcion que devuelva en un objeto nombre de la ciudad y precio acumulado 
function totalPorCiudad(ventas){//intento fallido
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

function totalPorCiudad2(ventas) {//solucion IA
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


//Inicio mini reto # 3 (usar metodos de arreglo para totalVendido, unidadesVendidas y ventasPoeCiudad)

export function totalVendidoM(ventas){
    return ventas.reduce((acc, v) => acc + v.precio * v.cantidad, 0)
}

export function unidadesVendidasM(ventas){
    return ventas.reduce((acc, v)=> acc + v.cantidad,0)
}

export function ventasPorCiudadM(ventas, ciudad){
    return ventas.filter(v => normalizar(v.ciudad) === normalizar(ciudad)).reduce((acc, v)=> acc + v.cantidad, 0)
    
}

//Funcion totalPorCiudad
function totalPorCiudadM(ventas){
    const nombres = [...new Set(ventas.map(v => normalizar(v.ciudad)))]

    return nombres.map(nombre => {
        const ciudades = ventas.filter(v => normalizar(v.ciudad) === nombre)
        const totalVendido = ciudades.reduce((acc, v) => acc + v.precio * v.cantidad,0)
        return {
            ciudad: nombre,
            totalVendido : totalVendido
        }
    })
  
}

function unidadesPorProducto(ventas){
    const productos = [...new Set(ventas.map(v => normalizar(v.producto)))]

    return productos.map(producto => {
        
        const nombreP = ventas.filter(v => normalizar(v.producto) === producto)
        const cantidadVentas = nombreP.reduce((acc, v) => acc + v.cantidad, 0)
        return {
            producto: producto,
            cantidadVentas: cantidadVentas
        }
    })
}

function topProductosPorValor(ventas, k){

   
}

