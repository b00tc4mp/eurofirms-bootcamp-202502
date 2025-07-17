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

var { name, birthdate, city: location } = marga

console.log(name)
console.log(birthdate)
console.log(location)