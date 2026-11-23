function clientesRecurrentesSet(ventas){
    const vistos = new Set()
    const rescurrentes = new Set()

    for(const v of ventas){
        if(vistos.has(v.cliente)) rescurrentes.add(v.cliente)
            else vistos.add(v.cliente)

    }
    return [...rescurrentes]
}

function comprasPorClientes(ventas){
    const compras = new Map()

    for(const v of ventas) compras.set(v.cliente, (compras.get(cliente) || 0) + 1)
    return compras   

}