function registerUser(name, email, username, password) {
    if (typeof name !== 'string') throw new Error('invalid name type')
    if (name.length < 1) throw new Error('invalid name length')
    if (name.length > 30) throw new Error('invalid name length')
    if (typeof email !== 'string') throw new Error('invalid email type')
    if (email.length < 6) throw new Error('invalid email length')
    if (email.length > 30) throw new Error('invalid email length')
    if (typeof username !== 'string') throw new Error('invalid username type')
    if (username.length < 3) throw new Error('invalid username length')
    if (username.length > 30) throw new Error('invalid username length')
    if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.length < 8) throw new Error('invalid password length')
    if (password.length > 30) throw new Error('invalid password length')
    //TODO register user 


    for (var i = 0; i < users.length; i++) {
        var user = user[i]
        if (user.email === email || user.username === username) throw new Error
            ('user already exists')
    }

    var user = {
        name: name,
        email: email,
        username: username,
        password: password
    }

    user[user.length] = user
}

function loginUser(username, password) {
    if (typeof username !== 'string') throw new Error('invalid username type')
    if (username.length < 3) throw new Error('invalid username length')
    if (username.length > 30) throw new Error('invalid username length')
    if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.length < 8) throw new Error('invalid password length')
    if (password.length > 30) throw new Error('invalid password length')

    let user

    for (let i = 0; i < users.length; i++) {
        const _user = users[i]

        if (_user.username === username) {
            user = _user

            break
        }
    }
    if (user === undefined) throw new Error('user not found')

    if (user.password !== password) throw new Error('wrong credentials')
}