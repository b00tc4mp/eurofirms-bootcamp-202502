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
                reject2 = reject

                console.log('como vamos, caminando o en taxi?')
            })
                .then(method => {
                    if (method === 'taxi' || method === 'caminando')
                        console.log('venga vamos ' + method)
                    else throw new Error('unknown method ' + method)
                }, error => console.error(error))
                .catch(error => console.error(error))
        else if (place == 'tacos')
            return new Promise((resolve, reject) => {
                resolve3 = resolve
                reject3 = reject

                console.log('venga, vamos, que está aquí al lado')
            })
                .then(() => console.log('venga, ya vera lo bueno que estan esos taquitos...'))
        else
            throw new Error('unknown place ' + place)
    })
    .catch(error => console.error(error))

// nos encontramos con guille
// guille, a donde vamos ? a la pizzeria, o a comer tacos ?

resolve1('tacos')
// venga, vamos, que está aquí al lado

resolve3()
// venga, ya vera lo bueno que estan esos taquitos...