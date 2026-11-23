//este patron funciona para el caracter mas repetido, el primer elemento no repetido o los producto mas vendidos

function sonAnagramas(a,b){

    a = a.toLowerCase()
    b = b.toLowerCase()
    if(a.length !== b.length) return false

    const conteo = new Map()
    for(const letra of a) conteo.set(letra , (conteo.get(letra) || 0) + 1)
    
    for(const letra of b){
        if(!conteo.get(letra)) return false
        //console.log(conteo.get(letra))

        conteo.set(letra, conteo.get(letra) - 1)
    }    

    return true

}

//console.log(sonAnagramas("roma", "amor"))


//el companiero que falta, el para que suma un objetivo
function parQueSuma(numeros, objetivo){
    const vistos = new Map()

    for(let i = 0; i < numeros.length; i++){
        const falta = objetivo - numeros[i]
        if(vistos.has(falta)) return [vistos.get(falta), i]
        vistos.set(numeros[i], i)
    }
    return null
}

//dos punteros y ventana deslizante
