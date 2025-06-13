//ejemplo de destructuring con objetos
var marga = {
    name: 'Marga Rita',
    birthdate: new Date(2000, 10, 1, 18, 15),
    city: 'Barcelona'
}

// var name = marga.name
// var birthdate = marga.birthdate
// var city = marga.city

// var { name } = marga
// var { birthdate } = marga
// var { city } = marga

// var { name, birthdate, city } = marga

// console.log(name)
// console.log(birthdate)
// console.log(city)

var { name, birthdate, city: location } = marga //si en vez de querer el nombre de la propiedad city, quiero almacenarlo con otro, utilizaria los doble puntos seguido del nuevo nombre

console.log(name)
console.log(birthdate)
console.log(location)