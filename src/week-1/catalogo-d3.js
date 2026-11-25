import { ventas } from "./datos-d1.js"
import {normalizar, ventasDelDia} from "./analitica-d1.js"

// mc-10.1-d3
export const catalogo = [
  { id: 1, nombre: "Origen Nariño 250 g", precio: 26000 },
  { id: 2, nombre: "Origen Huila 500 g", precio: 42000 },
  { id: 3, nombre: "Origen Sierra 500 g", precio: 45000 },
  { id: 4, nombre: "Filtros de papel x100", precio: 18000 },
  { id: 5, nombre: "Taza de cerámica", precio: 35000 },
  { id: 6, nombre: "Origen Huila 1 kg", precio: 79000 },
  { id: 7, nombre: "Prensa francesa", precio: 95000 },
  { id: 8, nombre: "Molino manual", precio: 120000 }
];

//mc-10.2-d3

//complejidad temporal on2  - espacial o1
export function comboRegaloFuerzaBruta(catalogo, valor){


    for(let i = 0; i < catalogo.length; i++){
        
        for(let j = i + 1; j < catalogo.length; j++){
            if(catalogo[i].precio + catalogo[j].precio === valor){
                return {
                    producto1: catalogo[i],
                    producto2: catalogo[j]
                }
            }
        }
    }
    return  null
}

// mc-10.3-d3
function comboRegalo(catalogo, valor){
    const vistos = new Map()
    for (const p of catalogo) {
        const falta = valor - p.precio
        if(vistos.has(falta)) {            
          return [vistos.get(falta), p]  
        }

        vistos.set(p.precio, p)
        
    }
    return null
}


function productoEstrellaPorCiudad(ventas){
    const ciudades = new Map()   

    for(const v of ventas){

        const ciudad = normalizar(v.ciudades)
        const producto = normalizar(v.producto)

        if(!ciudades.has(ciudad)) ciudades.set(ciudad, new Map())
        
        const mapaProductos = ciudad.get(ciudad)
        mapaProductos.set(producto, (mapaProductos.get(producto) || 0) + 1)

        let resultado = {}

        for(const [ciudad, mapaProductos] of ciudades.entries()){
            let estrella = null
            let maxCantidad = 0

            for(const [producto, cantidad] of mapaProductos.entries()){
                if(cantidad > maxCantidad){
                    maxCantidad = cantidad
                    estrella = producto
                }
            }
            resultado [ciudad] = {
                producto: estrella,
                cantidad: maxCantidad
            }
        }
        return resultado
    }

}

function primerClienteUnico(ventas){
    
    const clientes = new Map()    
    for(const v of ventas){
        clientes.set(v.cliente, (clientes.get(v.cliente) || 0) + 1)            
    }

    for (const v of ventas) {
        if(clientes.get(v.cliente) === 1){
            return v.cliente
        }
    }
    return null

}

const ventasPrueba = [87000, 61000, 50000]

function pruebas(ventasPrueba, catalogo){

    let combo = []
    for (const v of ventasPrueba) {
       combo.push(comboRegalo(catalogo, v))
    }
    return combo
}

console.log(pruebas(ventasPrueba, catalogo))