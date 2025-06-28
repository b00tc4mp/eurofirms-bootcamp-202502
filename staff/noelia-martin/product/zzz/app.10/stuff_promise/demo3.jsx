var resolve1
var resolve2
var resolve3

new Promise((resolve, reject) => {
    resolve1 = resolve
})
    .then(() => console.log('ok, promesa resuelta!!!'))
    .then(() =>
        new Promise((resolve, reject) => {
            resolve2 = resolve
        })
    )
    .then(() => console.log('ok, promesa 2 resuelta tambien ,)'))
    .then(() =>
        new Promise((resolve, reject) => {
            resolve3 = resolve
        })
    )
    .then(() => console.log('ok, promesa 3 resuelta tambien... yupeee!'))
    .then(() => console.log('hemos llegado al final!'))

resolve1()
//VM272:8 ok, promesa resuelta!!!

resolve2()
//VM272:13 ok, promesa 2 resuelta tambien ,)

resolve3()
//VM272:19 ok, promesa 3 resuelta tambien... yupeee!
//VM272:21 hemos llegado al final!

//diferencia respecto a la demo2 es que los then dentro de un then se pueden sacar fuera. Ya que el then retorna una promesa y una vez finalizas con él pasa al siguiente then

//Recuerda:
//Las funciones flechas que no contienen llaves tienen un return implicito
//Las promeses son de un solo uso