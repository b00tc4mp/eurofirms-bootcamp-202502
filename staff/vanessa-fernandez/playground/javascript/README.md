# JavaScript

JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,​ basado en prototipos, imperativo, débilmente tipado y dinámico.

Se utiliza principalmente del lado del cliente, implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas.

![develop dancing](https://media.giphy.com/media/ViQb3BY5WQNQiQJd90/giphy.gif?cid=790b7611r8jngsz41wa6huezvw4mmrda0ewykib6cwifbeuf&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## Stack vs Heap

### Demo

[Memory](https://1drv.ms/x/c/d872dad8d6e99237/EYeVWhRy8exFriOQE2nOb2oBhjBnhU_dldTECRQcNfOzcQ?e=qtyARO)

``` js

Code

var name
name = "Vanessa"
var age = 45
var happy = true
var harry = {}
harry['name'] = "Harry Potter"
harry['age'] = age
var magic = []
magic['0']='wand'
magic['name'] = 'Magic Box'
magic['2'] = 'owl'
var add = function(n1, n2) {return n1 + n2}
var result = add(10,20)
var things = []
things[0] = harry
things[0]['country'] = "London"
things[0].country = "UK"
harry.city = "London"
things[1] = magic
things[1][1]='magic cape'
magic[3] = 'broom'
things[2] = add
var n4 = things[2](result, 40)
delete things[1].name
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
/*total = total + cart[0].price * cart[0].quantity
total = total + cart[1].price * cart[1].quantity
total = total + cart[2].price * cart[2].quantity*/
for(var i = 0; i < cart.length; i++) {
    var item = cart[i]
    total = total + item.price * item.quantity
}
```