//en logic.js vamos a poner las funciones que tienen que procesar la informacion que capturamos en main.js

function registerUser(name, email, username, password) {
    //1. validar estos datos (ej. asegurarnos que son strings y dentro de longitud requerida)
    if(typeof name !== 'string') throw new Error('Invalid name type')
    if(name.length < 1) throw new Error('Invalid min name length')
    if(name.length > 30) throw new Error('Invalid max name length')

    if(typeof email !== 'string') throw new Error('Invalid email type')
    if(email.length < 6) throw new Error('Invalid min email length')
    if(email.length > 30) throw new Error('Invalid max email length')

    if(typeof username !== 'string') throw new Error('Invalid username type')
    if(username.length < 3) throw new Error('Invalid min username length')
    if(username.length > 30) throw new Error('Invalid max username length')

    if(typeof password !== 'string') throw new Error('Invalid password type')
    if(password.length < 8) throw new Error('Invalid min password length')
    if(password.length > 20) throw new Error('Invalid max password length')

    //2. ver si el usuario existe en la base de datos data.js
    for(var i = 0; i < users.length; i++) {
        var user = users[i]

        if(user.email === email || user.username === username) throw new Error('User already exists')
    }

    //3. si usuario no existe, crear usario como un objeto y agregarlo a la bbdd
    var user = {
        name: name,
        email: email,
        username: username,
        password: password
    }

    users[users.length] = user

}

//TODO implement loginUser function:
function loginUser(username, password) {
    
    //1. validar datos (ej. asegurarnos que son strings y dentro de longitud requerida)
    if(typeof username !== 'string') throw new Error('Invalid username')
    if(username.length < 3) throw new Error('Invalid min username length')
    if(username.length > 30) throw new Error('Invalid max username length')

    if(typeof password !== 'string') throw new Error('Invalid password type')
    if(password.length < 8) throw new Error('Invalid min password length')
    if(password.length > 20) throw new Error('Invalid max password length')
    
    //2. ver si el usuario existe en la base de datos
    //3. si existe dar paso a Home y si no existe lanzar error
    var userAuthenticated = '' //variable intermedia fuera del bucle
    for(let i = 0; i < users.length; i++) {
        var user = users[i]
        if(user.username === username && user.password === password) {
            userAuthenticated = 'yes'
        }
    }
    if(userAuthenticated !== 'yes') throw new Error('Invalid username or password')
}
