import { connect, disconnect } from '../data/index.js'
import { registerUser } from './registerUser.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            //Esta parte es nueva: como es un control de errores asincrono,tenemos que hacer que la logica devuelva una promesa.
            return registerUser('Peter Pan', 'peter@pan', 'petrpan', '123123123')
                //Si todo ha ido bien mostraremos en consola 'user register'
                //Si hay algun error en el registro nos lo mostrará en consola (recuerda, mostrara el error creado en la logica)
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error) //Catch sincrono: Si hay algun error en las validaciones de la logica lo mostrará en consola(recuerda que todos estos errores son personalizados)
        }
    })
    .catch(error => { //este catch es opcional, si quiero un mensaje personalizado lo creo, sino simplemente lanzo el error y este sería capturado por el siguiente catch, ademas tendrá mas informacion(linea exacta del error y algo mas que no entiendo)
        throw new Error('Se ha producido un error de conexion!!!!')
        //throw new Error(error)
    })
    .catch(error => { console.error(error.message) }) //si no ubiera ningun lanzamiento simplemente escribe el error.message que crea mongo
    .finally(() => disconnect())

//Cambios de trabajar con ficheros json a trabajar con el cliente mongoose, con la BD mongoDB:
//Importamos del index de data lo que necesitamos.
//Nos conectamos a la base de datos que estamos trabajando, llamada test
//creamos un control de errores asincronos, con .then(en el ponemos RETORNADO el antiguo control de error sincronos brevemente modificado), con .catch para manejar errores de conexion y con .finally para cerrar conexion

//En el catch del control de conexion, si lo queremos personalizar creamos otro catch con un lanzamiento Error pero sino simplemente escribimos el error en consola, ya que no habra ningun otro catch que lo necesite

//si cambiamos el lanzamiento del catch de conexion a un mensaje error, entonces el segundo catch que es el de consola si capturaría el mensaje del catch del then, en caso de no existir (no sé el por qué)


//Antiguo codigo
// import { registerUser } from './registerUser.js'

// try {
//     registerUser('Pin 8', 'pin@8.com', 'pin8', '123123123')

//     console.log('user registered')
// } catch (error) {
//     console.error(error)
// }