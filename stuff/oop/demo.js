//const o = { name: 'Oswald' }
const o = new Object()
o.name = 'Oswald'

//const nums = [10, 20, 30]
const nums = new Array(10, 20, 30)
//nums.forEach(num => console.log(num))

const date = new Date()


// custom constructors

/*
function Animal(name) {
    this.name = name
}

// automatic
Animal.prototype = Object.create(Object.prototype)
Animal.prototype.constructor = Animal

Animal.prototype.eat = function(food) {
    return this.name + ': eating ' + food
}


function Human(name) {
    Animal.call(this, name)
}

Human.prototype = Object.create(Animal.prototype)
Human.prototype.constructor = Human

Human.prototype.salute = function() {
    return this.name + ': Hello!'
}

Human.prototype.saluteTo = function(person) {
    if (!(person instanceof Human)) throw new Error('invalid person type')
    
    return this.name + ': Hello, ' + person.name + '!'
}
*/


class Animal {
    constructor(name) {
        this.name = name
    }

    eat(food) {
        return this.name + ': eating ' + food
    }
}

class Human extends Animal {
    constructor(name) {
        super(name)
    }

    salute() {
        return this.name + ': Hello!'
    }

    saluteTo(person) {
        if (!(person instanceof Human)) throw new Error('invalid person type')

        return this.name + ': Hello, ' + person.name + '!'
    }
}

const sultan = new Animal('Sultan')
//console.log(sultan.eat('🍗'))
const symba = new Animal('Symba')
//console.log(symba.eat('🌾'))

const peter = new Human('Peter Pan')
const wendy = new Human('Wendy Darling')
//console.log(peter.salute())
//console.log(wendy.salute())
//console.log(peter.saluteTo(wendy))
//console.log(wendy.saluteTo(peter))
//console.log(peter.saluteTo(1000))
//console.log(peter.eat('🍔'))
//console.log(wendy.eat('🍧'))

//console.log(peter.name)
// Peter Pan

//const cinquecento = { brand: 'Fiat', model: '500', year: 2020, color: 'pink' }
//const ibiza = { brand: 'Seat', model: 'Ibiza', year: 2023, color: 'white' }
//const golf = { brand: 'Volkswagen', model: 'Golf', year: 2019, color: 'black' }

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
*/

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

// official errors

const error = new Error('hola error')

const typeError = new TypeError('invalid name type')

const rangeError = new RangeError('invalid age value')

// ...

// custom errors

class ValidationError extends Error {
    constructor(message) {
        super(message)
    }
}

const validationError = new ValidationError('invalid name type')

class DuplicityError extends Error {
    constructor(message) {
        super(message)
    }
}

const duplicityError = new DuplicityError('user already exists')

class NotFoundError extends Error {
    constructor(message) {
        super(message)
    }
}

const notFoundError = new NotFoundError('user not found')


class CredentialsError extends Error {
    constructor(message) {
        super(message)
    }
}

const credentialsError = new CredentialsError('wrong password')


class SystemError extends Error {
    constructor(message) {
        super(message)
    }
}

const systemError = new SystemError('mongo error')