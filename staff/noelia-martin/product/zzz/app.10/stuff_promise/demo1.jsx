var resolveRef

new Promise((resolve, reject) => {
    resolveRef = resolve
})
    .then(() => console.log('ok, promesa resuelta!!!'))
// Promise {<pending>}


resolveRef()
// VM2018:6 ok, promesa resuelta!!!