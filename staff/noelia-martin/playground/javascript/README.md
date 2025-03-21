#javascript
JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.
![JS](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjJlYzAzZTEwb3h5N2xlbXpuZWdoaG8yaHZhdGc1dmwzbjVva2x2NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SvFocn0wNMx0iv2rYz/giphy.gif)

## Stack & Heap
[Memory](la url del doc de Manu)

Code

```js
poner mi codigo aqui




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
delete otroArray[1].name

delete nuevoArray[2]
delete nuevoArray[3]
nuevoArray.length = 2
nuevoArray.length-- //nuevoArray.length = nuevoArray.length - 1

var cart = [
    { 
        id: 'abc-123', 
        brand: 'Apple', 
        model: 'iPhone 16',
        price: 1600,
        quantity: 2
    },
    {
        id: 'def-456',
        brand: 'Samsung',
        model: 'Note',
        price: 800,
        quantity: 3
    },
    {
        id: 'ghi-789',
        brand: 'Apple',
        model: 'USB cable',
        price: 20,
        quantity: 10
    }
]

var total = 0

/*
total = total + cart[0].price * cart[0].quantity
total = total + cart[1].price * cart[1].quantity
total = total + cart[2].price * cart[2].quantity
*/

/*
var i = 0, item

while (i < cart.length) {
    item = cart[i]
    total = total + item.price * item.quantity

    i++
}
*/

/*
var i = 0, item

do {
    item = cart[i]
    total = total + item.price * item.quantity

    i++
} while (i < cart.length)
*/

for (var i = 0; i < cart.length; i++) { //i = i + 1
    //total = total + cart[i].price * cart[i].quantity

    var item = cart[i]
    total = total + item.price * item.quantity
}

// ...

