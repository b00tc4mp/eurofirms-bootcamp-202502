import { data } from '../data'

// function loginUser(username, password) {
// const loginUser = function (username, password) {

/**
 * Logs a user in the system.
 * 
 * @param {string} username The user username.
 * @param {string} password  The user password.
 */
export const loginUser = (username, password) => {
    if (typeof username !== "string") throw new Error("invalid username type");

    if (typeof password !== "string") throw new Error("invalid password type");

    if (username.length < 1) throw new Error("invalid username min length");
    if (username.length > 30) throw new Error("invalid username max length");

    if (password.length < 8) throw new Error("invalid password min length");
    if (password.length > 30) throw new Error("invalid password max length");

    let user

    for (var i = 0; i < data.users.length; i++) {
        const _user = data.users[i];

        if (_user.username === username) {
            user = _user;

            break;
        }

    }

    if (user === undefined) throw new Error("user not found");

    if (user.password !== password) throw new Error("Wrong Credentials");

    data.setUserId(user.id)

}