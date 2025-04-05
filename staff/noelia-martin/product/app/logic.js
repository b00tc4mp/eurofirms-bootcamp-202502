//Este fichero sera para las funciones de los botones

// function registerUser(name, email, username, password)
// const registerUser = function (name, email, username, password) {
const registerUser = (name, email, username, password) => {
    //ponemos varias reglas en la introducción de los datos: todos tienen que seer tipo string y tiene que tener un minimo y maximo razonable segun el campo.
    //Si no se cumple alguna de mis reglas, entrara en el if y se devolverá el error
    //una vez tomamos con un throw termina la funcion(como los break de case)
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

    //Creo un for para una ultima regla, no se puede registar un email o username que ya exista en mi BD, el for comprobara uno a uno los objetos de mi array users
    for (let i = 0; i < users.length; i++) {
        var usuario = users[i]
        if (usuario.email === email || usuario.username === username) throw new Error('user already exists')
    }
    //creamos un nuevo objeto con los campos introducidos en la llamada de mi funcion, es decir en la pg de registro
    const usuarioAMeter = {
        name: name, email: email, username: username, password: password
    }
    //metemos el objeto anterior en la siguiente posicion disponible de mi array(BD)
    users[users.length] = usuarioAMeter
}

// function loginUser(username, password) {
// const loginUser = function (username, password) {
const loginUser = (username, password) => {
    //pongo las mismas reglas que puse ne registerUser
    if (typeof username !== 'string') throw new Error('invalid username type')
    if (username.length < 3) throw new Error('invalid username min length')
    if (username.length > 20) throw new Error('invalid username max length')

    if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.length < 8) throw new Error('invalid password min length')
    if (password.length > 20) throw new Error('invalid password max length')

    let datoCorrecto = false

    for (let i = 0; i < users.length; i++) {
        const usuario = users[i]
        if (usuario.username === username && usuario.password === password) {
            datoCorrecto = true;
            break
        }
    }
    if (datoCorrecto == false) throw new Error('Usuario o contraseña incorrecta')

    /*Solucion del profesor
    let user

    for (let i = 0; i < users.length; i++) {
        const _user = users[i]

        if (_user.username === username) {
            user = _user

            break
        }
    }

    if (user === undefined) throw new Error('user not found')

    if (user.password !== password) throw new Error('wrong credentials')*/
}