import { ventas } from "./datos.js";


function valorVenta(ventas){
    // return ventas.map(v => v.cantidad * v.precio)
    const precioPorProducto = []
    for(let i = 0; i < ventas.length; i++){
     precioPorProducto[i] = ventas[i].cantidad * ventas[i].precio
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

function ventasPorCiudad(ventas, ciudad){}

console.log(totalVendido(ventas))