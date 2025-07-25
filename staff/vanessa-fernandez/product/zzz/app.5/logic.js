import { data } from './data'

// function registerUser(name, email, username, password)
// const registerUser = function (name, email, username, password) {}
const registerUser = (name, email, username, password) => {
    if (!name) throw new Error('You must fill the name field.')
    if (typeof name !== 'string') throw new Error('Invalid type of name.')
    if (name.length < 1) throw new Error('Invalid name min length.')
    if (name.length > 30) throw new Error('Invalid name max length.')

    if (!email) throw new Error('You must fill the email field.')
    if (typeof email !== 'string') throw new Error('Invalid type of email.')
    if (email.length < 6) throw new Error('Invalid email min length.')
    if (email.length > 30) throw new Error('Invalid email max length.')

    if (!username) throw new Error('You must fill the username field.')
    if (typeof username !== 'string') throw new Error('Invalid type of username.')
    if (username.length < 3) throw new Error('Invalid username min length.')
    if (username.length > 20) throw new Error('Invalid username max length.')

    if (!password) throw new Error('You must fill the password field.')
    if (typeof password !== 'string') throw new Error('Invalid type of password.')
    if (password.length < 8) throw new Error('Invalid password min length.')
    if (password.length > 20) throw new Error('Invalid password max lenght.')

    for (let i = 0; i < data.users.length; i++) {
        const user = data.users[i]

        if (user.email === email || user.username === username) throw new Error('User already exits.')
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

// function loginUser(username,password)
// const loginUser = function (username, password){}
function loginUser(username, password) {
    if (!username) throw new Error('You must fill the username  field.')
    if (typeof username !== 'string') throw new Error('Invalid type of username.')
    if (username.length < 3) throw new Error('Invalid username min length.')
    if (username.length > 20) throw new Error('Invalid username max length.')

    if (!password) throw new Error('You must fill the password field.')
    if (typeof password !== 'string') throw new Error('Invalid type of password.')
    if (password.length < 8) throw new Error('Invalid password min lenght.')
    if (password.length > 20) throw new Error('Invalid password max length.')

    let user

    for (let i = 0; i < data.users.length; i++) {
        const _user = data.users[i]
        if (_user.username === username) {
            user = _user
            break
        }
    }

    if (user === undefined) throw new Error('User not found.')
    if (user.password !== password) throw new Error('Wrong credentials.')

    data.setUserId(user.id)    // modificamos esta línea para usar el metodo nuevo setUserId

}

const getUserUsername = () => {
    let user

    for(let i = 0; i < data.users.length; i++) {
        const _user = data.users[i]

        if (_user.id === data.getUserId() ) { //añadimos getUserId para traer el userId de forma correcta ahora con la new version
            user = _user

            break
        }
    }

    if (user === undefined) throw new Error('User not found.')

    return user.username

}

const logoutUser = () => {
    data.removeUserId() 
}

const isUserLoggedIn = () => { //comprueba si usuario esta logeado o no
    !!data.getUserId() // atención a la doble negación
}

const getPosts = () => {
    return data.posts.toReversed()
}

const createPost = (image, text) => {
    if(!text) throw new Error('You must provide text.')
    if(typeof text !== 'string') throw new Error('Invalid text type.')    
    if(text.length < 10) throw new Error('Invalid text min length.')
    if(text.length > 250) throw new Error('Invalid text max length.')

    if(!image) throw new Error('You must provide an image.')
        
    const userId = data.userId
    
    if(!userId) throw new Error('User not authenticated.')

    const user = data.users.find(user => user.id === userId)
    
    if(!user) throw new Error('User not found.')

    data.postsCount ++
    
    data.posts.push({
        id: 'post-' + data.postsCount,
        author: user.name,
        image: image,
        text : text,
        date: new Date().toISOString(),
        likes: []
    })
}

export const logic = {
    registerUser,
    loginUser,
    getUserUsername,
    logoutUser,
    isUserLoggedIn,
    getPosts,
    createPost
}


