//utilizada en la logica removePost.jsx : 
//con splice el decimos que borre de esa posicion un elemento; es decir que quite ese post
//posts.splice(index, 1)

var cars = [
    { brand: 'Fiat', model: 'Cinquecento', year: 2016 },
    { brand: 'Seat', model: 'Ibiza', year: 2018 },
    { brand: 'Opel', model: 'Corsa', year: 2001 }
]

//borra el elemento de la posicion 1, indicamos posicion:en este caso 1;  y numeros de elementos a borrar: en este caso 1, si indicamos mas, por ejemplo 2 borraria la siguiente posicion
//cars.splice(1, 1) 
//console.log(cars)
//si en la posicion indicamos -1 se va al ultimo elemento del array; si indicamos -2 quitaria el penultimo


// splice tambien se puede utilizar para sustituir, el tercer elemento seria el nuevo contenido de la posicion indicada
// si indicamos que sera un solo elemento cambiara ese elemento
//var removed = cars.splice(-3, 1, { brand: 'Peugeot', model: '205', year: 2006 })

// si indicamos que seran dos solo elemento cambiará los dos elementos, los borrara y sustituira por el elemento pasado
//var removed = cars.splice(-3, 2, { brand: 'Peugeot', model: '205', year: 2006 })

// si indicamos que sera 0 elemento no borrará ninguno, no sustituira ninguno, sino que añadira uno nuevo a la posicion indicada y el resto de elementos los desplazará
cars.splice(1, 1, { brand: 'Peugeot', model: '205', year: 2006 })

console.log(cars)

//si queremos ver lo que se ha sustituido, metemos el splice en una variable y se guardara en ella (con el 0 no ya que es añadir nuevo elemento no sustituir nada)
var removed = cars.splice(-3, 1, { brand: 'Peugeot', model: '205', year: 2006 })
console.log(removed)

//crear un for para simular el funcionamiento se necesitaria un tiempo del que no disponemos