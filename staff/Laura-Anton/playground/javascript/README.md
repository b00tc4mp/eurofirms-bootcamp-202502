var hola
hola = 'mundo'
hola['name'] = 'Hola Mundo' // NO EFFECT

var age = 47

var happy = true

var peter = {} //new Object()
peter['name'] = 'Peter Pan'
peter['age'] = age

var fruits = [] //new Array()
fruits['0'] = 'apple'
fruits['name'] = 'Fruit Box'
fruits['2'] = 'lemon'

var add = function(n1, n2) { return n1 + n2 }
var n3 = add(10, 20)

var things = []
things[0] = peter
//things[0]['country'] = 'Neverland'
things[0].country = 'Neverland'

peter.city = 'Barcelona'

things[1] = fruits
things[1][1] = 'orange'

fruits[3] = 'banana'

things[2] = add
var n4 = things[2](n3, 40)

delete things[1].name

delete fruits[2]
delete fruits[3]
fruits.length = 2
fruits.length-- //fruits.length = fruits.length - 1

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