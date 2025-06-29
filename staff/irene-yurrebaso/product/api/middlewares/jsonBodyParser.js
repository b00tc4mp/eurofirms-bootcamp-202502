//En Express, un middleware o manejador es una función que se ejecuta antes de que una ruta reciba la petición. Se usa para modificar la req, la res o terminar el ciclo de respuesta. (ej. jsonBodyParser o errorHandler)
//ponemos jsonBodyParser en este fichero para poder importarlo en cualquier parte

import { json } from 'express'

//Crea un middleware que convierte automáticamente el cuerpo de las peticiones con JSON en objetos JavaScript accesibles desde req.body.
export const jsonBodyParser = json()