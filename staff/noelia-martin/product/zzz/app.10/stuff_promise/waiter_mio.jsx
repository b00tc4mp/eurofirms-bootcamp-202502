var resolve1, reject1, resolve2, reject2, resolve3, reject3


new Promise((resolve, reject) => {
    resolve1 = resolve
    reject1 = reject

    console.log('nos encontramos con guille')

    console.log('guille, a donde vamos? a la pizzeria, o a comer tacos?')
})
    .then(place => {
        if (place === 'pizzeria')
            return new Promise((resolve, reject) => {
                resolve2 = resolve
                reject2 = reject //no se ha creado ningun catch que capture este reject

                console.log('como vamos, caminando o en taxi?')
            })
                .then(method => {
                    if (method === 'taxi' || method === 'caminando')
                        console.log('venga vamos ' + method)
                    else throw new Error('unknown method ' + method)
                },
                    //Hay dos opciones para configurar el error de method: 
                    // 1º Poner una coma despues de la sentencia if/else y escribir directamente la construcción del error( dentro del then), la cuál será capturada por algun catch que tenga una función que reciba un error y lo pinte en consola. Manu creo un catch de recepción de errores seguido a este then, pero podríamos utilizar el último catch del código y ahorramos lineas
                    // 2º Como lo dado anteriormente, no crear ningun error en el then, sino crear un catch que tenga una funcion que no reciba parametros,que haga un console.error con un mensaje personalizado (asi: .catch(() => console.error('ko, promesa 4 denegada!!!')))
                    error => console.error(error))
        //.catch(error => console.error(error)) //Lo dejo comentado porque utilicé el catch de la última linea
        else if (place == 'tacos')
            return new Promise((resolve, reject) => {
                resolve3 = resolve
                reject3 = reject //no se ha creado ningun catch que capture este reject

                console.log('venga, vamos, que está aquí al lado')
            })
                .then(() => console.log('venga, ya vera lo bueno que estan esos taquitos...'))
        else
            throw new Error('unknown place ' + place)
    })
    .catch(error => console.error(error)) //este catch captura el error del method y de place


