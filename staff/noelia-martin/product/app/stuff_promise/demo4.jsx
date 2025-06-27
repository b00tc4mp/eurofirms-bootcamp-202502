var resolve1, reject1, resolve2, reject2, resolve3, reject3, resolve4, reject4, resolve5, reject5, resolve6, reject6, resolve7, reject7, resolve8, reject8, resolve9, reject9

new Promise((resolve, reject) => {
    resolve1 = resolve
    reject1 = reject
})
    .then(() => console.log('ok, promesa 1 resuelta!!!'))
    .catch(() => console.error('ko, promesa 1 denegada!!!'))
    .then(() =>
        new Promise((resolve, reject) => {
            resolve2 = resolve
            reject2 = reject
        })
    )
    .then(() => console.log('ok, promesa 2 resuelta :)'))
    .then(() =>
        new Promise((resolve, reject) => {
            resolve4 = resolve
            reject4 = reject
        })
            .then(() => console.log('ok, promesa 4 resuelta!!!'))
            .catch(() => console.error('ko, promesa 4 denegada!!!'))
            .then(() =>
                new Promise((resolve, reject) => {
                    resolve5 = resolve
                    reject5 = reject
                })
            )
            .then(() => console.log('ok, promesa 5 resuelta :)'))
            .catch(() => console.error('ko, promesa 5 denegada :('))
            .then(() =>
                new Promise((resolve, reject) => {
                    resolve6 = resolve
                    reject6 = reject
                })
            )
            .then(() => console.log('ok, promesa 6 resuelta... yupeee!'))
            .catch(() => console.error('ko, promesa 6 denegada... ohhhhh!'))
    )
    .catch(() => {
        console.error('ko, promesa 2 denegada :(')

        return new Promise((resolve, reject) => {
            resolve7 = resolve
            reject7 = reject
        })
            .then(() => console.log('ok, promesa 7 resuelta!!!'))
            .catch(() => console.error('ko, promesa 7 denegada!!!'))
            .then(() =>
                new Promise((resolve, reject) => {
                    resolve8 = resolve
                    reject8 = reject
                })
            )
            .then(() => console.log('ok, promesa 8 resuelta :)'))
            .catch(() => console.error('ko, promesa 8 denegada :('))
            .then(() =>
                new Promise((resolve, reject) => {
                    resolve9 = resolve
                    reject9 = reject
                })
            )
            .then(() => console.log('ok, promesa 9 resuelta... yupeee!'))
            .catch(() => console.error('ko, promesa 9 denegada... ohhhhh!'))
    })
    .then(() =>
        new Promise((resolve, reject) => {
            resolve3 = resolve
            reject3 = reject
        })
    )
    .then(() => console.log('ok, promesa 3 resuelta... yupeee!'))
    .catch(() => console.error('ko, promesa 3 denegada... ohhhhh!'))
    .then(() => console.log('hemos llegado al final!'))


reject1()
// ko, promesa 1 denegada!!!

reject2()
// ko, promesa 2 denegada :(

resolve7()
// ok, promesa 7 resuelta!!!

reject8()
// ko, promesa 8 denegada :(

resolve9()
// ok, promesa 9 resuelta...yupeee!

reject3()
// ko, promesa 3 denegada... ohhhhh!
