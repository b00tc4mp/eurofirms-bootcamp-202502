function registerUser(name, email, username, password) {
    var user = {
        name: name,
        email: email,
        username: username,
        password: password
    }

    users[users.length]= user
}