function registerUser (name, email, username, password) {

    if (typeof name !=='string') throw new Error ('invalid name type')
    if (name.length < 1) throw new Error ('infalid name min length')
    if (name.length > 30) throw new Error ('invalid name max length')

    if (typeof email !== 'string') throw new Error ('invalid email type')
    if (email.length < 6) throw new Error ('invalid email min length')
    if (email.length >30) throw new Error ('invalid email max length')

    if (typeof password !== 'string') throw new Error ('invalid password type')
    if (password.length < 8) throw new Error ('invalid password min length')
    if (password.length > 20) throw new Error ('invalid password max length')   

        for( var i =0; i < user.length; i++) {
            var user = user[i]

            if (user.email === email || user.username === username) throw new Error ('user already exists')
        }
}


function registerUser(name, email, username, password){
    var user = {
        name: name,
        email: email,
        username: username,
        password: password
    }

    users [users.length] = user
}

function loginUser(username, password) {
 

    //código que no se si está bien

    if (typeof username !== 'string') throw new Error('invalid username type')
        if (username.length < 3) throw new Error('invalid username min length')
        if (username.length > 20) throw new Error('invalid username max length')
    
        if (typeof password !== 'string') throw new Error('invalid password type')
        if (password.length < 8) throw new Error('invalid password min length')
        if (password.length > 20) throw new Error('invalid password max length') 

        }