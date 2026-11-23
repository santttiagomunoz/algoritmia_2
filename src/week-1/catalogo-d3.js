function comboRegalo(catalogo, valor){
    const vistos = new Map()
    for (const p of catalogo) {
        const falta = valor - p.precio
        if(vistos.has(falta)) return [vistos.get(falta), p]
    }
    return null
}

function productoEstrellaPorCiudad(){

}

function primerClienteUnico(){
    
}