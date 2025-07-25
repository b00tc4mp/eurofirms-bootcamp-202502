function registerUser(name, email, username, password) {
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

  for (var i = 0; i < users.length; i++) {
    var user = users[i];

    if (user.email === email || user.username === username)
      throw new Error("user already exists");
  }

  var user = {
    name: name,
    email: email,
    username: username,
    password: password,
  };

  users[users.length] = user;
}

function loginUser(username, password) {
  if (typeof username !== "string") throw new Error("invalid username type");

  if (typeof password !== "string") throw new Error("invalid password type");

  if (username.length < 1) throw new Error("invalid username min length");
  if (username.length > 30) throw new Error("invalid username max length");

  if (password.length < 8) throw new Error("invalid password min length");
  if (password.length > 30) throw new Error("invalid password max length");

  let user

  for (var i = 0; i < users.length; i++) {
    const _user = users[i];

    if(_user.username === username){
      user = _user;

      break;
    }

    if(user === undefined) throw new Error("user not found");

    if(user.password !== password) throw new Error ("Wrong Credentials");

  }


  //TODO implement me
}
