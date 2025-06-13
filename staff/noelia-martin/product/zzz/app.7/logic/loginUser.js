import { data } from '../data' //nuevo lo necesito

/**
 * Logs a user in the system.
 * 
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
export const loginUser = (username, password) => {
    if (typeof username !== 'string') throw new Error('invalid username type')
    if (username.length < 3) throw new Error('invalid username min length')
    if (username.length > 20) throw new Error('invalid username max length')

    if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.length < 8) throw new Error('invalid password min length')
    if (password.length > 20) throw new Error('invalid password max length')

    return fetch('http://localhost:8080/users/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        //body: '{"username":"peterpan","password":"123123123"}'
        body: JSON.stringify({ username, password })
    })
        .catch(error => { throw new Error('connection error') })
        .then(response => {
            const { status } = response

            if (status === 200) //en la logica de authenticate retornabamos el userId, aqui en app este dato lo vamos a meter en nuestro SsesionStorage
                return response.json()
                    .catch(error => { throw new Error('json error') })
                    //.then(userId => userId) //las funciones que solo contienen una variable, es igual que si pusieramos return variable
                    .then(userId => data.setUserId(userId))

            return response.json()
                .catch(error => { throw new Error('json error') })
                .then(body => {
                    const { error, message } = body

                    throw new Error(message)
                })
        })

}
//retornamos el fetch de autorization de la api, excepto el ultimo catch y then(que lo configuramos en la view Login), cambiamos contenido del body y guardamos userId en SesionStorage