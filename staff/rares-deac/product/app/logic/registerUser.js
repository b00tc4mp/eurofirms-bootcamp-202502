import { data } from '../data';

// function registerUser(name, email, username, password)
// const registerUser = function (name, email, username, password) {

/**
 * Registers a user in the system.
 * @param {string} name The user name.
 * @param {string} email The user e-mail.
 * @param {string} username The user username. 
 * @param {string} password The user password. 
 */

export const registerUser = (name, email, username, password) => {
    //Campo name

    if (typeof name !== "string") throw new Error("invalid name type");
    if (name.length < 1) throw new Error("invalid name min length");
    if (name.length > 30) throw new Error("invalid name max length");

    //Campo Email

    if (typeof email !== "string") throw new Error("invalid email type");
    if (email.length < 1) throw new Error("invalid email min length");
    if (email.length > 30) throw new Error("invalid email max length");

    // Campo Username

    if (typeof username !== "string") throw new Error("invalid username type");
    if (username.length < 1) throw new Error("invalid username min length");
    if (username.length > 30) throw new Error("invalid username max length");

    //Campo password

    if (typeof password !== "string") throw new Error("invalid password type");
    if (password.length < 8) throw new Error("invalid password min length");
    if (password.length > 20) throw new Error("invalid password max length");

    //user check

    for (var i = 0; i < data.users.length; i++) {
        const user = data.users[i];

        if (user.email === email || user.username === username)
            throw new Error("user already exists");
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