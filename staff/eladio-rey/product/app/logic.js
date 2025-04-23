import { data } from './data'

const registerUser = (name, email, username, password) => {
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

    for (let i = 0; i < data.users.length; i++) {
        const user = data.users[i]

        if (user.email === email || user.username === username) throw new Error('user already exists')
    }

    data.usersCount++

    data.users.push({
        id: 'user-' + data.usersCount,
        name: name,
        email: email,
        username: username,
        password: password
    })
}

const loginUser = (username, password) => {
    if (typeof username !== 'string') throw new Error('invalid username type')
    if (username.length < 3) throw new Error('invalid username min length')
    if (username.length > 20) throw new Error('invalid username max length')

    if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.length < 8) throw new Error('invalid password min length')
    if (password.length > 20) throw new Error('invalid password max length')

    let user

    for (let i = 0; i < data.users.length; i++) {
        const _user = data.users[i]

        if (_user.username === username) {
            user = _user

            break
        }
    }

    if (user === undefined) throw new Error('user not found')

    if (user.password !== password) throw new Error('wrong credentials')

    data.userId = user.id
}

const getUserUsername = () => {
    let user

    for (let i = 0; i < data.users.length; i++) {
        const _user = data.users[i]

        if (_user.id === data.userId) {
            user = _user

            break
        }
    }

    if (user === undefined) throw new Error('user not found')

    return user.username
}

const logoutUser = () => {
    data.userId = null
}

const getPosts = () => {
    return data.posts.toReversed()
}

export const logic = {
    registerUser,
    loginUser,
    getUserUsername,
    logoutUser,
    getPosts
}


