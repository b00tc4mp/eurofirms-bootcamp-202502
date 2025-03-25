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
    nameInput.type = 'text'
    nameInput.name = 'name'
    nameField.appendChild(nameLabel)
    nameField.appendChild(nameInput)
    registerForm.appendChild(nameField)

    // TODO finish register view
    registerView.appendChild(registerForm)

    return registerView
}

function buildLoginView() {
    // TODO implement me
}

function buildHomeView() {
    // TODO implement me
}

var landingView = buildLandingView()
body.appendChild(landingView)

var registerView = buildRegisterView()
body.appendChild(registerView)

// TODO test login view
// TODO test home view

