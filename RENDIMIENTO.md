### mc-8.1-d2 
### tabla de funciones 

**funciones analitica**

|funcion|Que realiza|Big O Temporal|Big O espacial|Justificacion|operaciones con 10000|
|---|---|---|---|---|---|
|valorVenta()|devuelve el precio de un objeto por la cantidad de ese objeto|O(n)|O(n)|su complejidad temporal y espacial son lineales debido a que lo que devuelve es un arreglo, y este para su ejecucion y para su almacenamiento depende del tamanio de los datos que el arreglo contenga|2.637ms|
|totalVendido()|Calcula el total general de las ventas|O(n)|O(n)|su complejidad temporal y espacial son lineales por que la funcion valorVenta() devuelve un arreglo|2.892ms|
|unidadesVendidas()|Devuleve el total general de unidades|O(n)|O(1)|su complejidad temporal es lineal debido a que el tiempo de ejecucion depende del tamanio del arreglo y su complejidad espacial es constante porque solo devuelve la variable totalUnidades en cada ocacion|1.007ms|
|ventaMayor()|Devuelve la venta de mayor valor entre las ventas|O(n)|O(1)|su complejidad temporal es lineal debido a que el tiempo de ejecucion depende del tamanio del arreglo que recorre y su complejidad espacial es constante porque solo devuelve la variable mayorVenta en cada ocacion|2.04|
|ticketPromedio()|Devuelve el promedio general de las ventas|O(n)|O(n)|su complejidad temporal y espacial son lineales debido a que lo que devuelve es un arreglo, y este para su ejecucion y para su almacenamiento depende del tamanio de los datos que el arreglo contenga|2.04ms|
|promedioPorCiudad()|Devuelve el promedio de ventas por una ciudad especifica|O(n)|O(1)|su complejidad temporal es lineal debido a que el tiempo de ejecucion depende del tamanio del arreglo que reccore y su complejidad espacial es constante porque solo devuelve la variable cont en cada ocacion|8.122ms|
|ventasPorCiudad()|Devuelve el total de ventas por una ciudad especifica|O(n)|O(1)|su complejidad temporal es lineal debido a que el tiempo de ejecucion depende del tamanio del arreglo que recorre y su complejidad espacial es constante porque solo devuelve la variable totalVentaPorCiudad en cada ocacion|7.515ms|
|totalPorCiudad2()|Devuelve un objeto con el nombre de cada ciudad y el total para cada ciudad|O(n)|O(n)|su complejidad temporal y espacial son lineales debido a que lo que devuelve es un arreglo, y este para su ejecucion y para su almacenamiento depende del tamanio de los datos que el arreglo contenga|19.583ms|
|totalVendidoM()|Devuelve un el total general usando el metodo .reduce|O(1)|O(1)|su complejidad temporal y espacial es constante por que siempre me devuelve un numero(dato primitivo)|1.076ms|
|unidadesVendidasM()|Devuelve el total general de las unidades usando .reduce|O(1)|O(1)|su complejidad temporal y espacial es constante por que siempre me devuelve un numero(dato primitivo)|0.497ms|
|ventasPorCiudadM()|Devuelde el numero de ventas realizado por una ciudad especifica usando .filter y reduce|O(n)|O(n)|su complejidad temporal y espacial son lineales debido a que lo que devuelve es un arreglo, y este para su ejecucion y para su almacenamiento depende del tamanio de los datos que el arreglo contenga|8.25ms|
|totalPorCiudadM()|Devuelve un objeto ciudad y totalVendido para cada ciudad|O(n^2)|O(n)|su complejidad temporal es cuadratica debido a que se recorre un bucle dentro de otro y su complejidad espacial es lineal debido a que la cantidad de elementos que almacene depende del tamanio del arreglo que recorre|39.184ms|
|unidadesPorProducto()|Devuelve un objeto producto y cantidadVentas usando .Set .map .filter .reduce|O(n)|O(n)|su complejidad temporal es cuadratica debido a que se recorre un bucle dentro de otro y su complejidad espacial es lineal debido a que la cantidad de elementos que almacene depende del tamanio del arreglo que recorre|19.478ms|
|topProductosPorValor()|Devuelve un arreglo de objetos con las 3 ventas con mayor valor dentro de las ventas|O(n)|O(n)|su complejidad temporal y espacial son lineales debido a que lo que devuelve es un arreglo, y este para su ejecucion y para su almacenamiento depende del tamanio de los datos que el arreglo contenga|6.48ms|
|ventasDelDia()|Devuelve el numero de ventas realizado una fecha especifica|O(n)|O(n)|su complejidad temporal y espacial son lineales debido a que la funcion filter devulve un arreglo|0.5ms|

### mc-8.2-d2
**funciones totalCiudad versionadas y funcion recurrente**


| funcion | Que realiza | Big O Temporal | Big O espacial | Justificacion | operaciones | Tiempo medido con 10,000 ventas | Proyeccion | Riesgos | Optimizacion |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `totalCiudad()` | Calcula el total vendido (`precio * cantidad`) en una ciudad encadenando `.map()`, `.filter()`, `.map()` y `.reduce()`. | $O(n)$ | $O(n)$ | Realiza 4 recorridos secuenciales ($4n \rightarrow O(n)$) y crea arreglos intermedios (objetos normalizados, filtrados y montos) proporcionales a `ventas`. | $\approx 4n$ pasos de arreglo + $n$ llamadas a `normalizar()` | `[Medir en tu máquina, típicamente pocos ms]` | $\approx 100\times$ el tiempo de 10,000 ventas (crecimiento lineal). | **Medio-bajo:** Escala lineal en tiempo, pero genera arreglos temporales que presionan memoria y *Garbage Collector*. | Evitar arreglos intermedios usando un solo recorrido o acumulador directo si buscas menor uso de memoria. |
| `totalCiudadUnaPasada()` | Valida entradas y suma `precio * cantidad` de las ventas que coinciden con `ciudad` normalizada en un solo ciclo. | $O(n)$ | $O(1)$ | Hace una sola pasada (`for...of`) con un acumulador numérico `totales` y variables locales sin crear arreglos ni mapas proporcionales a `n`. | $1$ recorrido de $n$ elementos + $n$ llamadas a `normalizar()` | `[Medir en tu máquina, típicamente más rápido que totalCiudad()]` | $\approx 100\times$ el tiempo de 10,000 ventas (crecimiento lineal). | **Bajo:** Mejor equilibrio entre tiempo lineal y memoria constante $O(1)$; vigilar solo el costo de `normalizar()` por iteración. | Si se consultan muchas ciudades sobre el mismo lote, pre-normalizar o agrupar por ciudad una sola vez. |
| `recurrentes()` | Identifica clientes que aparecen más de una vez en `ventas` sin duplicar el resultado. | $O(n^2)$ | $O(n)$ | Usa dos bucles anidados (`i` y `j = i + 1`) más `.includes()` sobre `recurrentes`, creciendo cuadráticamente con `n`. | $\frac{n(n-1)}{2}$ comparaciones de pares (más búsquedas en `recurrentes`) | `[Interpolable entre 263.592 ms (8k) y 959.108 ms (16k), ~350–450 ms]` | $\approx 10,000\times$ ($100^2$) el tiempo de 10,000 ventas (puede tardar decenas de minutos/horas en 1M). | **Crítico (mayor riesgo):** Al duplicar `n` el tiempo se cuadruplica ($\times 4$); bloquea el hilo principal con volúmenes altos. | Contar ocurrencias o registrar clientes ya vistos/agregados en una estructura de consulta rápida (`Set` o `Map`/`{}`) en una sola pasada $O(n)$. |


### mc-8.3-d2
### Proyeccion

Al pasar de **10.000** a **1.000.000** de ventas, el volumen crece **100 veces** ($k = 100$):

* **Funciones lineales $O(n)$ (`totalVendido`, `ventaMayor`, `ventasDelDia`, `totalCiudadCadena`, `totalCiudadUnaPasada`):** el tiempo crece aproximadamente $\times 100$ respecto a 10.000 ventas.
  * `totalVendido`: `[tiempo_10k * 100 ms]`
  * `ventaMayor`: `[tiempo_10k * 100 ms]`
  * `ventasDelDia`: `[tiempo_10k * 100 ms]`
  * `totalCiudadUnaPasada`: `[tiempo_10k * 100 ms]`
* **Funciones cuadráticas $O(n^2)$ (`clientesRecurrentes`):** el tiempo crece aproximadamente $\times 10.000$ ($100^2$) respecto a 10.000 ventas.
  * `clientesRecurrentes`: `[tiempo_10k * 10000 ms]`
* **Funciones logarítmicas / de ordenamiento $O(n \log n)$ (si aplica, como ordenamientos por producto/valor):** el tiempo crece cerca de $\times 150$ ($100 \times \frac{\log_2(1.000.000)}{\log_2(10.000)} \approx 150$).
---

### mc-8.4-d2
### Riesgos

El criterio para ordenar de **mayor a menor riesgo** ante el crecimiento de datos es **cómo escala el tiempo de ejecución y el consumo de memoria/recolector de basura a medida que $n$ aumenta**:

1. **`clientesRecurrentes` (Riesgo crítico — $O(n^2)$ temporal):** al duplicar o multiplicar los datos, las comparaciones crecen de forma cuadrática y pueden bloquear el hilo de ejecución con cientos de miles o un millón de ventas.
2. **Funciones $O(n)$ temporal con $O(n)$ espacial (`ventasDelDia`):** aunque su tiempo escala de forma lineal, crean arreglos intermedios proporcionales a $n$, aumentando el uso de memoria y el trabajo del *Garbage Collector*.
3. **Funciones $O(n)$ temporal con $O(1)$ espacial (`totalCiudadUnaPasada`, `ventaMayor`):** menor riesgo operativo; escalan linealmente en tiempo y mantienen constante la memoria auxiliar.
---

### mc-8.5-d2
### Plan de optimizacion

* **¿Qué trabajo se repite?** Por cada venta en la posición `i`, la versión actual vuelve a recorrer el resto del arreglo desde `j = i + 1` comparando clientes una y otra vez, y además revisa repetidamente si el cliente ya está en el arreglo de recurrentes.
* **¿Qué información se podría guardar para no buscarla de nuevo?** Durante una única pasada por `ventas`, se puede llevar la cuenta de cuántas veces aparece cada cliente en una estructura de consulta rápida (como un `Map` o un objeto diccionario) o guardar un conjunto (`Set`) de clientes ya vistos y otro conjunto de clientes ya añadidos a recurrentes, evitando re-recorrer el arreglo en cada iteración.

---

### mc-8.6-d2
### Observaciones

---

### mc-9.1-d3

|entradas|salidas|restricciones|restriccion|caso borde|
|---|---|---|
|arreglo de ventas|arreglo con los clientes que se repiten dentro del arreglo de ventas|sin duplicados y consistencia en el nombre del cliente|arregglo vacio[] , sin clientes repetidos [], cliente compra 3 veces o mas -> aparece una sola vez, un solo cliente en todas las ventas|

### mc-9.6-d3

#### intercambio de tiempo y memoria
al no tener que realizar un bucle dentro de otro para realizar las respectivas comparaciones i j, se disminuye a On la complejidad temporal y su espacial se mantiene en On