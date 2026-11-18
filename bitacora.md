### Dicionario de datos 

--- 
| ID | Fecha      | Cliente | Producto            | Ciudad   | Cantidad | Precio   |
|----|------------|---------|---------------------|----------|----------|----------|
| 1  | 2026-09-01 | C01     | Origen Huila 500 g  | Medellín | 2        | $42,000  |
| 2  | 2026-09-01 | C02     | Origen Nariño 250 g | Bogotá   | 1        | $26,000  |
| 3  | 2026-09-02 | C03     | Prensa francesa     | Cali     | 1        | $95,000  |
| 4  | 2026-09-02 | C01     | Origen Huila 500 g  | Medellín | 1        | $42,000  |
| 5  | 2026-09-03 | C04     | Origen Sierra 500 g | medellín | 3        | $45,000  |
| 6  | 2026-09-03 | C05     | Origen Nariño 250 g | Bogotá   | 2        | $26,000  |
| 7  | 2026-09-04 | C02     | Molino manual       | Bogotá   | 1        | $120,000 |
| 8  | 2026-09-04 | C06     | Origen Huila 500 g  | Cali     | 0        | $42,000  |
| 9  | 2026-09-05 | C03     | Origen Sierra 500 g | Cali     | 2        | $45,000  |
| 10 | 2026-09-05 | C07     | Origen Huila 500 g  | Pereira  | 4        | $42,000  |
| 11 | 2026-09-06 | C01     | Prensa francesa     | Medellín | 1        | $95,000  |
| 12 | 2026-09-06 | C08     | Origen Nariño 250 g | Bogotá   | 3        | $26,000  |

---

### Casos de borde detectados

|tipo de problema|descripcion del problema| posible solucion|
|---|---|---|
|producto|actualmente es un nombre que tiene varias propiedades en una sola columna. la conlumna cantidad actual no describe mucho|se puede realizar una nueva columnas como cantidan|
|identificacion del cliente| los id no dicen mucha informacion|se puede reemplazar por un dato real del cliente|
|id general| al haber 2 id se puede confundir la lectura|eliminar la columna de id|

---
### Plan de pseudocodigo
|Indicador|Que se recorre|Condicion aplicada|Que se acumula| Valor inicial|
|---|---|---|---|---|
|Venta total|se recorre el arreglo ventas|  | se acumula cantidad * precio| 0 | 
|Unidades que salieron| se recorre el arreglo de ventas en su propiedad cantidad|total += ventas.cantidad| la propiedad cantidad|21|
|Mayor venta|el arreglo ventas en su propiedad precio| si ventas.precion >= mayorVenta entonces mayorVenta = ventas.precio| no se acumula nada| 120000
|Promedio por cliente| se recorre el arreglo ventas| 


### mc-4.5-d1 
### Descripcion del proyecto
---
El proyecto es una solucion a el manejo de de los resgitros y visualizacion de las ventas de un cafe
---
|preguntas|respuestas|
|---|---|
|como se pueden visualizar mejor los datos del cafe?|datos distribuidos en filas y columnas|
|como se agiliza el calculo del total?|aumotatizando el proceso con un metodo que haga la suma|


### mc-5.3-d2
### prediccion

la cantidad de operaciones se multiplica por 10
si tengo 10 datos, se realizaran 10 operaciones 1 por cada dato
---

### mc-5.6-d2
### comparacion entre funciones segun big O
|funcion|big O|justificacion|
|---|---|---|
|totalVendidoI()|O(n)| la cantidad de operaciones varia de forma lineal|
|ventaMayorI()|O(n)| la cantidad de operaciones varia de forma lineal|
|totalPorciudad()|O(n)| la cantidad de operaciones varia de forma lineas|
|primeraVenta|O(n)|la cantidad de operaciones no varia, es constante|

---

### mc-6.2-d2
### traza de comparaciones para 5 ventas
|comparacion| indice i = 0 | indice j = i + 1 | 
|---|---|---|
| 1 | 0 | 1 |
| 2 | 0 | 2 |
| 3 | 0 | 3 |
| 4 | 0 | 4 |
| 5 | 1 | 2 |
| 6 | 1 | 3 |
| 7 | 1 | 4 | 
| 8 | 2 | 3 |
| 9 | 2 | 4 |
| 10| 3 | 4 |

se dice que es cuedratica porque si no hubieran restricciones al haber 2 bucles se compararian las 5 vueltas con del primer bucle con las 5 vueltas del segundo lo que daria 5*5

sin embargo para este ejercicio una vuelta (o indice mejor dicho) no se compara consigo misma ni se compara con vueltas anteriores

---
### mc-6.3-d2
### tabla de resultados de tiempo 
|cantidad de ventas| tiempo transcurrido en ms|
|---|---|
|1000| 5.119|
|2000|14.22|
|4000|59.869|
|8000|263.592|
|16000|959.108|
---

### mc-6.4-d2
### Que pasa con el tiempo?

el tiempo se cruadruplica aproximadamente cada vez que duplicamos la entrada 

---

### mc-6.5-d2
### estimacion 
|cantidad de datos| tiempo que tarda |
|---|---|
|100000| 37.5s |
|1000000| 62.5m

formula tiempoNuevo = tiempoConocido X (Nnuevo/Nconocido)^2

---

### mc-6.6-d2
### identificacion del costo oculto: .include

el peor de los casos ocurre cuando varios datos coinciden o todos los datos son iguales.
.include es un metodo que recorre un arreglo para encontrar una coincidencia.
al estar recorriendo dos arreglos y sumarle un tercero cambia drasticamente la ejecucion del metodo porque al incrementar la cantidad de datos tendra que realizar un recorrido mas largo para encontrar una coincidencia

---

### mc-6.7-d2
### conclusion

el proceso se vuelve mucho mas lento por que se tienen que comparar todos los clientes para ver si se encuentrar en la lista de recuerrentes 