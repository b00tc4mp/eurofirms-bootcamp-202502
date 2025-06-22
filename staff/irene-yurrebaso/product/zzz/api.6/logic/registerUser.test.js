import { connect, disconnect } from '../data/index.js'
import { registerUser } from "./registerUser.js";

//primero conectamos a la bbdd mongo
connect('mongodb://localhost:27017/test')
    //luego probamos la logica
    .then(() => {
        try {
            //ponemos "return" porque al conectar con la bbdd de forma asincrona, necesitamos q la logica devuelva una promesa
            return registerUser('Peter Pan', 'peter@pan.com', 'peterpan', '123123123')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
            //con este catch capturariamos los errores sincronos de la logica de validacion de registerUser.js
        }
    })
    //este catch es para capturar errores de conexion
    .catch(error => console.log(error))
    //cuando termine el test, que desconecte
    .finally(() => disconnect())