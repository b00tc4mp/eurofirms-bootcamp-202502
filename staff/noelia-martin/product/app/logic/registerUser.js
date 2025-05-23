import { data } from '../data'

/**
 * Este tipo de comentario no es para mi, sino para mis compañeros, que les ayude a comprender mi codigo si lo van a utilizar
 * solo vamos a comentar la logica ya que es lo mas importante
import { data } from '../data'
*/

/** 
 * Registers a user in the system.
 * 
 * @param {string} name The user name.
 * @param {string} email The user e-mail.
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
export const registerUser = (name, email, username, password) => {
    if (typeof name !== 'string') throw new Error('invalid name type')
    if (name.length < 1) throw new Error('invalid name min length')
    if (name.length > 30) throw new Error('invalid name max length')

    if (typeof email !== 'string') throw new Error('invalid email type')
    if (email.length < 6) throw new Error('invalid email min length')
    if (email.length > 30) throw new Error('invalid email max length')

    if (typeof username !== 'string') throw new Error('invalid username type')
    if (username.length < 3) throw new Error('invalid username min length')
    if (username.length > 20) throw new Error('invalid username max length')

    if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.length < 8) throw new Error('invalid password min length')
    if (password.length > 20) throw new Error('invalid password max length')

    //fetch es un objeto de tipo promesa, quue tiene dos metodos: then y catch (el orden de estos objetos se pondrá segun nos interese)   
    return fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({ name, email, username, password })
        //body: '{"name":"Mercedes","email":"mercedes@pan.com","username":"mercedes","password":"123123123"}'
    })
        .catch(error => { throw new Error('connection error') }) //primero por seguridad creamos un aviso si el error se debe a la conexion
        .then(response => { //segundo si la coneccion es correcta, entra en el then.
            //const status = response.status
            const { status } = response

            if (status === 201) return //si el status es 201 perfecto, como no hay nada a retornar, indicamos que queremos salir: return que nos saca de esta pg; si falla entra en el siguiente return

            //si el estatus es 500, hay datos a retornar:
            return response.json() //Para este return capturamos la respuesta que daremos, recibimos un json (de la api(de index.js)) y lo convertimos a objeto
                .catch(error => { throw new Error('json error') }) //si ocurre algun error en esta conversion, cosa que no suele suceder, creamos un aviso (si sucediera seria por ejemplo si el servidor se ha confundido y nos ha mandado otro formato en vez de json)
                .then(body => { //si no hay error de conversion, entramos en esta funcion la cual desestructuramos la variable body del objeto response y lanzamos el mensaje de error 
                    const { error, message } = body

                    throw new Error(message)
                }) //nos podriamos haber ahorrado los errores propios ya que error lo hubiera capturado del propio json que tiene que ver con fetch pero sería mas dificil de comprender
        })
}
//borramos todo excepto las validaciones, ya que estas nos evitará en caso de error, llamar innecesariamente a la api.
//copiamos el fetch que teniamos configurado en tests de api, excepto el ultimo catch y then que lo realizará quien llame a esta logica.
//Modificamos solo una linea,la del JSON de la variable body del objeto request. En el fetch que hemos copiado traemos un JSON con datos a registrar, en esta logica no nos interesa ya que tenemos nuestros propios datos, nuestros parametros. Asi que creamos un objeto con esos parametros el cual convertimos a formato JSON
//retornamos el fetch