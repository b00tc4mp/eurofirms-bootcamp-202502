//el querySelector es para poder entrar en el body del html
var body = document.querySelector('body') 



//metemos el contenido de una pág. en una función y después lo invocaremos
function buildLandingView() {

//creamos un div para separar en bloques las secciones
var landingView = document.createElement('div')
landingView.classList.add('p-20px')
/*crear logo: 
1 crear etiqueta html,
2 crear el nodo de texto, 
3 poner el texto dentro de la etiqueta*/

// Crear un h1 para el logo
var logo = document.createElement('i');
logo.classList.add('block')
// Crear el nodo de texto para el h1
var logoText = document.createTextNode('Mi Logo');

// Insertar el texto dentro del h1
logo.appendChild(logoText)

// Insertar el h1 dentro del div
landingView.appendChild(logo)


//creamos el link de registerView
var registerLink = document.createElement('a')
//añadimos la propiedad dentro de href a 'a' para controlar la navegacion
registerLink.href = '#'
//creamos el texto register
var registerText = document.createTextNode('Register')
//metemos el texto registro dentro de registertext
registerLink.appendChild(registerText)
//ensamblamos registerLink dentro de LandingView
landingView.appendChild(registerLink)


registerLink.addEventListener('click', function (event)  {
    body.removeChild(landingView)
    let registerView = buildRegisterView() // Crear la vista de registro antes de usarla
    body.appendChild(registerView)
})

var orText = document.createTextNode('or')
landingView.appendChild(orText)

var logingLink = document.createElement('a')
logingLink.href = '#'
var logingText = document.createTextNode('Login')
logingLink.appendChild(logingText)
landingView.appendChild(logingLink)

logingLink.addEventListener('click', function (event) {
})

return landingView
}




//metemos el contenido de una pág. en una función y después lo invocaremos
function buildRegisterView() {

//creamos un div para separar en bloques las secciones
var registerView = document.createElement('div')
registerView.classList.add('p-20px')


/*crear logo: 
1 crear etiqueta html,
2 crear el nodo de texto, 
3 poner el texto dentro de la etiqueta*/

// Crear un h1 para el logo
var logo = document.createElement('i')
// Crear el nodo de texto para el h1
var logoText = document.createTextNode('Mi Logo')
// Insertar el texto dentro del h1
logo.appendChild(logoText);
// Insertar el h1 dentro del div
registerView.appendChild(logo)
logo.appendChild(logoText)
registerView.appendChild(logo)

var registerTitle = document.createElement('h1')
var registerText = document.createTextNode('Register')
registerTitle.appendChild(registerText)
registerView.appendChild(registerTitle)


//crear el formulario
var registerForm = document.createElement('form')
registerForm.classList.add('flex', 'flex-col', 'gap-20px')


//creo que la segunda anterior sustituye a esta linea que voy a crear
var nameField = document.createElement('div')
nameField.classList.add('flex', 'flex-col', 'gap-10px')
// Aquí puedes agregar los campos de entrada, como un input para el nombre de usuario, contraseña, etc.
var nameLabel = document.createElement('label')
nameLabel.htmlFor = 'name'
var nameText = document.createTextNode('Name')
nameLabel.appendChild(nameText)
nameField.appendChild(nameLabel)
var nameInput = document.createElement('input')
nameInput.type = 'text'
nameInput.id = 'name'
nameInput.name = 'name' 
nameInput.placeholder = 'todo tu nombre'
nameField.appendChild(nameInput)
registerForm.appendChild(nameField)
//voy por la línea 71 del Manu

var emailField = document.createElement('div')
emailField.classList.add('flex', 'flex-col', 'gap-10px')
var emailLabel = document.createElement('label')
emaillabel.htmlFor ='e-mail'
var emailText = document.createTextNode(E-mail)
emailLabel.appendChild(emailText)
emailLabel.appendChild(emailLabel)
var emailInput = document.createElement('input')
emailInput.type = 'email'
emailInput.id = 'email'
emailInput.name = 'email'
emailInput.placeholder = 'your e-mail'
emailField.appendChild(emailInput)
registerForm.appendChild(emailField)


var usernameField = document.createElement('div')
usernameField.classList.add('flex', 'flex-col', 'gap-10px')
var usernameLabel = document.createElement('label')
usernameLabel.htmlFor = 'username'
var usernameText = document.createTextNode('Username')
usernameLabel.appendChild(usernameText)
usernameField.appendChild(usernameLabel)
var usernameInput = document.createElement('input')
usernameInput.type = 'text'
usernameInput.id = 'name'
usernameInput.name = 'name' 
usernameInput.placeholder = 'todo tu nombre'
usernameField.appendChild(usernameInput)
registerForm.appendChild(usernameField)
//103
var passwordField = document.createElement('div')
