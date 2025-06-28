//constructoras que vienen con javascript
const error = new Error('hola error') //Como hemos hecho hasta ahora
console.log(error.message) //hola error //message es una propiedad del objeto message el cual ha sido creado con la constructora Error

//const nums= [10,20,30] //esto es la forma literal; es igual que si lo escribieramos asi: new Array(10,20,30)

const o = { name: 'Oswald' } //Tambien se puede escribir: const o = new Object() ; o.name= 'Oswald'

const date = new Date()


//constructoras propias, nuestras

//Forma antigua
function Person(namee) { //creamos una funcion que cree el tipo Personas con la propiedad name
    this.name = namee //this: este objeto; referencia al objeto de memoria donde aplicamos la constructora( de la funcion)
    //Hemos creado la propiedad name con el contenido que viene como parametro en la funcion
}
const peter = new Person('Peter Pan')
console.log(peter.name) //Peter Pan //llamamos a la propiedad name de peter, que es Peter Pan

function Car(brand, model, year, color) {
    this.brand = brand
    this.model = model
    this.year = year
    this.color = color
}
//const cinquecento = { brand: 'Fiat', model: '500', year: 2020, color: 'pink' }//Esto es un objeto literal es un objeto como el trabajado hasta ahora
const cinquecento = new Car('Fiat', '500', 2020, 'pink') //usamos la constructora, devuelve lo mismo que creandolo literal pero ademas te indica que es de tipo coche
console.log(cinquecento)
console.log(cinquecento instanceof Car) // con esto podemos comprobar si cinquecento de un tipo coche con el operador instanceof

//Todo esto con funcion flecha no se puede hacer

//toda funcion tiene un prototipo, lo crea automaticamente javascript, si es nueva la constructora/funcion lo deja vacio, es de tipo objeto
//sirve para dar un comportamiento (ejemplo de prototype de arrays: forEach)
Person.prototype.salute = function () {
    return this.name + ': Hello!'
}
console.log(peter.salute())
/*
//Asi funcionaría pero lo voy a configurar para que solo salude a tipos person
Person.prototype.saluteTo = function (persona) {
    return this.name + ': Hello, ' + persona + '!'
}
console.log(peter.saluteTo('Wendy'))
*/
Person.prototype.saluteTo = function (persona) {
    if (!(persona instanceof Person)) throw new Error('Invalido no es tipo Person')
    return this.name + ': Hello, ' + persona.name + '!' //con la propiedad name filtro que si no tiene dicha propiedad, devuelve un indefinido ( pero con el filtro anterior no habrá esa posibilidad)
}
const wendy = new Person('Wendy Darling')
console.log(peter.saluteTo(wendy))
Person.prototype.eat = function (food) {
    return this.name + ': eating ' + food
}
console.log(peter.eat('hamburguesa'))


//forma moderna; internamente javascript lo ejecutará con el codigo que tendría como forma antigua
// class Person {
//     constructor(namee) {
//         this.name = namee
//     }
//     //los prototipos de esta forma son mas faciles de crear, te ahorrar escrbir Tipo.prototype e indicar que es una funcion
//     salute() {
//         return this.name + ': Hello!'
//     }
//     saluteTo(persona) {
//         if (!(persona instanceof Person)) throw new Error('Invalido no es tipo Person')
//         return this.name + ': Hello, ' + persona.name + '!'
//     }
//     eat(food) {
//         return this.name + ': eating ' + food
//     }
// }


//ejemplo completo con coche
/*
function Car(brand, model, year, color) {
    this.brand = brand
    this.model = model
    this.year = year
    this.color = color

    this.status = 'off'
}

Car.prototype.start = function() {
    this.status = 'on'
}

Car.prototype.stop = function() {
    this.status = 'off'
}


class Car {
    constructor(brand, model, year, color) {
        this.brand = brand
        this.model = model
        this.year = year
        this.color = color

        this.status = 'off'
    }

    start() {
        this.status = 'on'
    }

    stop() {
        this.status = 'off'
    }
}

const cinquecento = new Car('Fiat', '500', 2020, 'pink')
const ibiza = new Car('Seat', 'Ibiza', 2023, 'white')
const golf = new Car('Volkswagen', 'Golf', 2019, 'black')
*/