//se puede desestructurar un array igual que como los objetos; ya que recuerda que un array es un objeto
var colors = ['#FF0000', '#00FF00', '#0000FF']

//esto es exclusivamente para arrays, ya lo vimos en la version app.2; se ha puesto modo recordatorio
// var [red, green, blue] = colors 

// console.log(red)
// console.log(green)
// console.log(blue)

// var [, , blue] = colors 
// console.log(blue)


//nuevo
//en vez de utilizar los nombres de las propiedades como en cualquier objeto, al ser un array recuerda que sus propiedades son las posiciones
// var { 0: red, 1: green, 2: blue } = colors

// console.log(red)
// console.log(green)
// console.log(blue)



var { 2: blue } = colors

console.log(blue)