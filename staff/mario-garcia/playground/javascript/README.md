# JavaScript

Es un lenguaje de programación interpretado / compilado.

Basado en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional).

![](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa29pcGFwdWRldDY1ZzQxazM5eXB4NnNlNWhyam9rMWdtdmhnemYycCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ws6T5PN7wHv3cY8xy8/giphy.gif)

DEMO (https://docs.google.com/spreadsheets/d/1Pu4ZaC_RH1lecf9jJyUllP-uPiWv6C33/edit?usp=sharing&ouid=101149764009724277999&rtpof=true&sd=true)

```js
CODE 

var saludo 
saludo = 'hola'

var edad = 37

var motivación = true

var aladdin {} // new Object()
aladdin['name'] = 'Mena Massoud'
aladdin['edad'] = 25

var fruits = [] // new array()
fruits[0] = 'strawberry'
fruits[2] = 'peach'
fruits['name'] = 'Fruit Box'

var add = function (n1, n2) {return n1 + n2}
var check = add (15, 30)

var things = []
things[0] = aladdin
things[0].country = 'Arabia'

aladdin.city = 'Agrabah'

things[1] = fruits
things[1][2] = 'peach'

fruits [3] = 'cherry'

things[2] = add

// Ahora fruits.length = 4
// Borramos 2 posiciones de Fruits...

delete.fruits[2] // Sería PEACH
delete.fruits[3] // Sería CHERRY

//Ahora fruits.length = 2

var sneakers = [
    {
        id: '150320251911', 
        brand: 'Adidas', 
        model: 'Wolf 25',
        price: 185,
        quantity: 2
    },
    {
        id: '150320251913', 
        brand: 'Nike', 
        model: 'Bitesweet24',
        price: 215,
        quantity: 2
    },
    {
        id: '150320252000', 
        brand: 'Puma', 
        model: 'Blackiss',
        price: 155,
        quantity: 2
    },
]

var total = 0

/*

total = total + sneakers[0].price * sneakers[0].quantity
total = total + sneakers[1].price * sneakers[1].quantity
total = total + sneakers[2].price * sneakers[2].quantity

*/

BUCLE WHILE

/* var i = 0, item

while (i < sneakers.length) {

item = sneakers[i]
total = total + item.price * item.quantity

i ++ } */

BUCLE DO WHILE

/* var i = 0, item

do { item = sneakers[i]
     total = total + item.price * item.quantity

     i++
} while (i < sneakers.length)*/

BUCLE FOR

for (i = 0; i < sneakers.length; i++) {

    var item = sneakers[i]
    total = total + item.price * item.quantity
}
```





