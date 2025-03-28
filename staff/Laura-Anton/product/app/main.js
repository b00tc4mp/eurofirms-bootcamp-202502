//el querySelector para poder entrar en el body del html
var body = document.querySelector('body')

//metemos el contenido de una pagina en una funcion y depues lo invocaremos
function buildLandingView() {
  //creamos un div para separar en bloques para las secciones
  var landingView = document.createElement('div')
  //crear logo: 1 crear etiqueta html, 2 crear el nodo de texto, 3 poner el texto dentro de la etiqueta
  var logoHeading = document.createElement('h1')
  var logoText = document.createTextNode('Logo')
  logoHeading.appendChild(logoText)
  //ensamblar logoHeading dentro de landingView
  landingView.appendChild(logoHeading)

  // creamos el Link
  var registerLink = document.createElement('a')
  //añadimos la propiedad dentro de href a 'a' para controlar la navegacion
  registerLink.href = '#'
  var registerText = document.createTextNode('Register')
  //metemos el texto registro dentro de registerText 
  registerLink.appendChild(registerText)
  //ensamblamos registerLink dentro de landingView
  landingView.appendChild(registerLink)
  //creamos texto or y lo ensamblamos en landingView (que es el div que es hijo directo)
  var orText = document.createTextNode(' or ')
  landingView.appendChild(orText)

  // creamos el Link
  var loginLink = document.createElement('a')
  //añadimos la propiedad dentro de href a 'a' para controlar la navegacion
  loginLink.href = '#'
  //creamos el texto login
  var loginText = document.createTextNode('Login')
  //metemos el texto login dentro de la etiqueta 'a' en la variable loginLink
  loginLink.appendChild(loginText)
  landingView.appendChild(loginLink)

  return landingView
}


function buildRegisterView() {
  var registerView = document.createElement('div')

  var logoHeading = document.createElement('h1')
  var logoText = document.createTextNode('Logo')
  logoHeading.appendChild(logoText)
  registerView.appendChild(logoHeading)

  var registerForm = document.createElement('form')

  var nameField = document.createElement('div')
  var nameLabel = document.createElement('label')
  nameLabel.htmlFor = 'name'
  var nameText = document.createTextNode('Name')
  nameLabel.appendChild(nameText)
  var nameInput = document.createElement('input')
  nameInput.placeholder = 'your name'
  nameInput.type = 'text'
  nameInput.name = 'name'
  nameInput.id = 'name'

  nameField.appendChild(nameLabel)
  nameField.appendChild(nameInput)
  registerForm.appendChild(nameField)
  registerView.appendChild(registerForm)

  var br = document.createElement('div')
  nameField.appendChild(br)



  var EmailField = document.createElement('div')
  var EmailLabel = document.createElement('label')
  EmailLabel.htmlFor = 'E-mail'
  var EmailText = document.createTextNode('E-mail')
  EmailLabel.appendChild(EmailText)
  var EmailInput = document.createElement('input')
  EmailInput.type = 'text'
  EmailInput.name = 'E-mail'

  EmailField.appendChild(EmailLabel)
  EmailField.appendChild(EmailInput)
  registerForm.appendChild(EmailField)

  var br = document.createElement('div')
  EmailField.appendChild(br)


  var usernameField = document.createElement('div')
  var usernameLabel = document.createElement('label')
  usernameLabel.htmlFor = 'Username'
  var usernameText = document.createTextNode('Username')
  usernameLabel.appendChild(usernameText)
  var usernameInput = document.createElement('input')
  usernameInput.type = 'text'
  usernameInput.name = 'Username'

  usernameField.appendChild(usernameLabel)
  usernameField.appendChild(usernameInput)
  registerForm.appendChild(usernameField)

  var br = document.createElement('div')
  usernameField.appendChild(br)

  var passwordField = document.createElement('div')
  var passwordLabel = document.createElement('label')
  passwordLabel.htmlFor = 'Password'
  var passwordText = document.createTextNode('Password')
  passwordLabel.appendChild(passwordText)
  var passwordInput = document.createElement('input')
  passwordInput.type = 'text'
  passwordInput.name = 'Password'

  passwordField.appendChild(passwordLabel)
  passwordField.appendChild(passwordInput)
  registerForm.appendChild(passwordField)

  var br = document.createElement('div')
  passwordField.appendChild(br)

  
  var loginLink = document.createElement('a')
  loginLink.href = '#'
  var loginText = document.createTextNode('Login')
  loginLink.appendChild(loginText)
  registerView.appendChild(loginLink)

  var br = document.createElement('div')
  passwordField.appendChild(br)

  loginLink.style.marginRight = '20px'

  var registerLink = document.createElement('button')
  registerLink.href = '#'
  var registerText = document.createTextNode('Register')
  registerLink.appendChild(registerText)
  registerView.appendChild(registerLink)

  return registerView
}






function buildLoginView() {

  var loginView = document.createElement('div')

  var logoHeading = document.createElement('h1')
  var logoText = document.createTextNode('Logo')
  logoHeading.appendChild(logoText)
  loginView.appendChild(logoHeading)

  var loginForm = document.createElement('form')


  var usernameField = document.createElement('div')
  var usernameLabel = document.createElement('label')
  usernameLabel.htmlFor = 'Username'
  var usernameText = document.createTextNode('Username')
  usernameLabel.appendChild(usernameText)
  var usernameInput = document.createElement('input')
  usernameInput.type = 'text'
  usernameInput.name = 'Username'

  usernameField.appendChild(usernameLabel)
  usernameField.appendChild(usernameInput)
  loginForm.appendChild(usernameField)

  var br = document.createElement('div')
  loginView.appendChild(br)


  var passwordField = document.createElement('div')
  var passwordLabel = document.createElement('label')
  passwordLabel.htmlFor = 'Password'
  var passwordText = document.createTextNode('Password')
  passwordLabel.appendChild(passwordText)
  var passwordInput = document.createElement('input')
  passwordInput.type = 'text'
  passwordInput.name = 'Password'

  passwordField.appendChild(passwordLabel)
  passwordField.appendChild(passwordInput)
  loginForm.appendChild(passwordField)

  var br = document.createElement('div')
  passwordField.appendChild(br)
  loginView.appendChild(loginForm)

  
  var loginLink = document.createElement('a')
  loginLink.href = '#'
  var loginText = document.createTextNode('Register')
  loginLink.appendChild(loginText)
  loginView.appendChild(loginLink)

  var br = document.createElement('div')
  passwordField.appendChild(br)

  loginLink.style.marginRight = '20px'

  var loginLink = document.createElement('button')
  loginLink.href = '#'
  var loginText = document.createTextNode('Login')
  loginLink.appendChild(loginText)
  loginView.appendChild(loginLink)
 

  return loginView

}


function buildHomeView() {

  var homeView = document.createElement('div')
  
  var logoHeading = document.createElement('h1')
  var logoText = document.createTextNode('Logo')
  logoHeading.appendChild(logoText)
  homeView.appendChild(logoHeading)



  var phraseHeading = document.createElement ('h4')
  var phraseText = document.createTextNode ('Hello, Home!')
  phraseHeading.appendChild(phraseText)
  homeView.appendChild(phraseHeading)


  return homeView
}









var landingView = buildLandingView()
body.appendChild(landingView)

var registerView = buildRegisterView()
body.appendChild(registerView)

var loginView = buildLoginView()
body.appendChild(loginView)

var homeView = buildHomeView()
body.appendChild(homeView)






/*  var registerForm = document.createElement('form')

  var nameField = document.createElement('div')
  var nameLabel = document.createElement('label')
  nameLabel.htmlFor = 'name'
  var nameText = document.createTextNode('Name')
  nameLabel.appendChild(nameText)
  var nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'name'
  nameField.appendChild(nameLabel)
  nameField.appendChild(nameInput)
  registerForm.appendChild(nameField)

  // TODO finish register view
  registerView.appendChild(registerForm)

  return registerView
}
*/













