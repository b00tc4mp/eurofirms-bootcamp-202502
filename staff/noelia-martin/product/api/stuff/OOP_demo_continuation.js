//herencias
//todo hereda de object

//Vamos a crear la siguiente herencia: object => animal => persona(humano)
//Creo la constructora Animal y me traigo de Person el nombre y el prototipo come, ya que tiene mas sentido que esté aqui
function Animal(name) {
    this.name = name
}

//javascript crea lo siguiente automaticamente, pero lo vamos a escribir por aprenderlo. Crea un prototipo Animal a partir de los prototipos que tiene Object
Animal.protype = Object.create(Object.prototype)
Animal.prototype.constructor = Animal //ajustamos la constructora( indicamos nombre de la constructora)

Animal.prototype.eat = function (food) {
    return this.name + ': eating ' + food
}


function Human(name) {
    Animal.call(this, name) //delegamos la construcción del nombre a Animal //llamamos a la constructora Animal para cree el nombre del objeto al que señala this (creado con New)
}

//aqui si es necesario configurarlo, si queremos tirar de Objecto entonces si es opcional como dije antes. Human hereda de Animal
Human.prototype = Object.create(Animal.prototype)
Human.prototype.constructor = Human

const sultan = new Animal('Sultan')
console.log(sultan.eat('carne'))
console.log('¿Es un objeto? ' + (sultan instanceof Object))
console.log('¿Es un Animal? ' + (sultan instanceof Animal))
console.log('¿Es un Humano? ' + (sultan instanceof Human))


const peter = new Human('Peter Pan')
console.log(peter.eat('pizza'))
console.log('¿Es un objeto? ' + (peter instanceof Object))
console.log('¿Es un Animal? ' + (peter instanceof Animal))
console.log('¿Es un Humano? ' + (peter instanceof Human))

//si pusieramos los prototipos del codigo anterior, Peter podría hacer mas comportamiento, saludar en general o saludar a alguien
//Pero sultan no podría porque serían prototype de un constructor al que no pertenece(ni hereda)
console.log(sultan.__proto__) //con este console.log podemos ver los prototype que tiene sultan de Animal
console.log(sultan.__proto__.__proto__) //y con este de Object (aqui no se ve, node no da esa opción, en debugger del navegador si se ve todos los metodos y mucha mas info)

/*
//forma moderna
class Animal {
    constructor(name) {
        this.name = name
    }
    eat(food) {
        return this.name + ': eating ' + food
    }
}

class Human extends Animal { //indicamos que human herede de animal
    constructor(name) {
        super(name) //con esta linea llamamos a la constructora madre de la cual heredamos
    }
    salute() {
        return this.name + ': Hello!'
    }
    saluteTo(person) {
        if (!(person instanceof Human)) throw new Error('invalid person type')

        return this.name + ': Hello, ' + person.name + '!'
    }
}
*/