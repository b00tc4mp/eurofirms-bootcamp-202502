// Creo jsonBodyParser con el que anteriormente trabajaba en index.js
// Es un middleware(un manejador), que se utiliza para analizar el cuerpo de las solicitudes entrantes que tienen un formato JSON, y hace que los datos estén disponibles en req.body para su uso en los controladores de ruta.( los convierte a objetos JavaScript) 

import { json } from 'express'; //Importamos directamente el método json de express

export const jsonBodyParser = json() //Creamos y exportamos la constante jsonBodyParser del método json

/*En index.js trabajabamos indicando que json estaba dentro de express, pero aqui al desestructurarlo ya no es necesario
    import express from 'express'
    const api = express()
    const jsonBodyParser = express.json()
*/