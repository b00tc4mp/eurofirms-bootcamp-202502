#javascript
JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.
![JS](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjJlYzAzZTEwb3h5N2xlbXpuZWdoaG8yaHZhdGc1dmwzbjVva2x2NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SvFocn0wNMx0iv2rYz/giphy.gif)

## Stack & Heap
[Memory](https://docs.google.com/spreadsheets/d/1VDFE2Ls9B3qmBmPiPu-evp1zjk838D3oAd7B_IhT3sE/edit?usp=sharing)

Code

```js

let noelia
noelia= 'mi nombre'
noelia['apellido']='martin' //no hace nada 

let edad = 27

let mujer = true

let nuevoObjeto = {} //new Object()
nuevoObjeto['Color'] = 'amarillo'
nuevoObjeto['edad'] = edad

let nuevoArray = [] //new Array()
nuevoArray['0'] = 'posicion cero'
nuevoArray['sin posicion'] = 'sin numero de posicion asignado'
nuevoArray['2'] = 'posicion 2' // al no haber declarado una posicion 1, se contara como si existiera (emply) y tendremos una longitud 3.('sin posicion' no se cuenta detro de length)

let sumar = function(a, b) { return a + b }
let resultadoSuma = sumar(10, 20)

let otroArray = []
otroArray[0] = nuevoObjeto
otroArray[0].apellido = 'martin'

nuevoObjeto.ciudad = 'Sevilla' //mete ese valor:clave en nuevoObjeto que a su vez esta dentro de la posicion cero del otroArray

otroArray[1] = nuevoArray
otroArray[1][1] = 'Marina'

nuevoArray[3] = 'Mercedes'

otroArray[2] = sumar
var resultado2 = otroArray[2](resultadoSuma, 40)

//POR AQUI
delete otroArray[1]['sin posicion']

delete nuevoArray[2]
delete nuevoArray[3]
nuevoArray.length = 3
nuevoArray.length-- //sirve para restar uno


var frutas= [
    {
        id='mnzn',
        nombre='manzana',
        preciokg=2,
        cantidad=50
    },
    {
        id='pr',
        nombre='pera',
        preciokg=3,
        cantidad=20
    },{
        id='kw',
        nombre='kiwi',
        preciokg=4,
        cantidad=50
    }
]

var total = 0

//operacion sin bucles
/* 
total = frutas[0].preciokg * frutas[0].cantidad
total= total + frutas[1].preciokg * frutas[1].cantidad
total = total + frutas[2].preciokg * frutas[2].cantidad 
*/


//operaciones con un while
/*
var i = 0, actual

while (i < frutas.length) {
    actual = frutas[i]
    total = total + actual.preciokg * actual.cantidad
    i++
}
*/

//operaciones con un do while
/*
var i = 0, actual

do {
    actual = frutas[i]
    total = total + actual.preciokg * actual.cantidad
    i++
} while (i < frutas.length)
*/

//operaciones con un for
/* 
for (var i = 0; i < frutas.length; i++) { 
    var actual = frutas[i]
    total = total + actual.preciokg * actual.cantidad
}
 */


