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
|Venta total| 
|Unidades que salieron|
|Mayor venta|
|Promedio por cliente|
