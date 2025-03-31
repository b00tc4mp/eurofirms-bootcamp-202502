function registerUser(name, email, username, password) {
    if (typeof name !== "string") throw new Error("invalid name type")
    if (name.length < 1) throw new Error("invalid name length")
    if (name.length > 30) throw new Error("invalid name max length")


    if (typeof email !== "string") throw new Error("invaled email type")
    if (email.length < 6) throw new Error ("invalid email length")
    if (email.length > 30) throw new Error("invalid email max length")


    if (typeof username !== "string") throw new Error("invalid username type")
    if (username.length < 3) throw new Error("invalid username length")
    if (username.length > 20) throw new Error("invalid username max lenth")


    if (typeof password !== "string") throw new Error ("invalid password type")
    if (password.length < 8) throw new Error("invalid password length")
    if (password.length > 20) throw new Error("invalid password max length")
        //TO DO REGISTER USER IN DATABASE
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
    
        if (user.email === email || user.username === username) throw new Error("user already exists")
    }
    var user = {
        name: name,
        email: email,
        username: username,
        password: password,
    }
    
    users[users.length] = user

}




function loginUser(username, password){
    
}