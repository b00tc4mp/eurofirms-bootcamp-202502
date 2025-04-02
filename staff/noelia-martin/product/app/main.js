//Enlace de figma: https://www.figma.com/proto/KzMLcqmKggQTys6UT6Xejr/eurofirms-bootcamp-202502-product?node-id=1-28&p=f&t=7tk4SSqOURm1GHxP-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A28


var body = document.querySelector('body');
//body.bgColor='DAE820';

function construirAterrizaje() {
    /*  
    Estructura html a imitar
         <div>
             <i>Logo<i>
             <a href="">Register</a> or <a href="">Login</a>
         </div> 
     */

    var aterrrizaje = document.createElement('div')   //Crea el elemento div que es el contenedor de toda la pg
    aterrrizaje.classList.add('p-20px')

    //Comun en todas las paginas
    //Logo
    var logoEncabezado = document.createElement('i')    //Crea el elemento de la etiqueta i del html(Etiqueta de formato cursivo)
    logoEncabezado.classList.add('block')
    var logoTexto = document.createTextNode('Logo')      //crea el texto Logo
    logoEncabezado.appendChild(logoTexto)               //le añadimos como hijo(como propiedad) el texto
    aterrrizaje.appendChild(logoEncabezado)          //por ultimo, añadimos la etiqueta h1 y el texto, a nuestro contenedor(div)


    //Hipervinculo de Register
    var registerLink = document.createElement('a')       //Crea el elemento de la etiqueta a
    registerLink.href = '#'                              //Aqui pondriamos nuestro hipervinculo, actualmente inutilizado
    var registerText = document.createTextNode('Register')  //creamos el texto mostrado al usuario para acceder al hipervinculo
    registerLink.appendChild(registerText)              //añadimos dicho texto a la variable que contiene la etiqueta a
    aterrrizaje.appendChild(registerLink)            //añadimos Register como hijo a nuestro contener principal
    //Configuramos el enlace Register, borra el div de aterrizaje y añade el de register
    registerLink.addEventListener('click', function (event) {
        body.removeChild(aterrizaje)
        body.appendChild(register)
    })


    //Texto ' or ' (con espacios)
    var orText = document.createTextNode(' or ')          //Creamos el texto or

    aterrrizaje.appendChild(orText)                  //Lo metemos en el div

    //Hipervinculo Login
    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    aterrrizaje.appendChild(loginLink)
    //Configuramos el enlace Login, borra el div de aterrizaje y añade el de login
    loginLink.addEventListener('click', function (event) {
        body.removeChild(aterrizaje)
        body.appendChild(login)
    })

    return aterrrizaje
}

function construirRegister() {
    /*  
   Estructura html a imitar
        <div>
            <i>Logo</i>
            <h1>Register</h1>
            <form>
                //Name
                <div>
                    <label for="name">Name</label>
                    <input type="text" name="name">
                </div>
                //E-mail
                <div>
                    <label for="name">E-mail</label>
                    <input type="text" name="name">
                </div>
                //Username
                <div>
                    <label for="name">Username</label>
                    <input type="text" name="name">
                </div>
                //Password
                <div>
                    <label for="name">Password</label>
                    <input type="text" name="name">
                </div>
                <div>
                    <a href="">Login</a>
                    <button type="button">Register</button>
                </div>
            </form>
            
        </div> 
    */
    var register = document.createElement('div')
    register.classList.add('p-20px')

    //Logo
    var registerLogo = document.createElement('i')
    var registerLogoTexto = document.createTextNode('Logo')
    registerLogo.appendChild(registerLogoTexto)
    register.appendChild(registerLogo)

    //Titulo de la pagina
    var registerTitulo = document.createElement('h1')
    var registerTituloText = document.createTextNode('Register')
    registerTitulo.appendChild(registerTituloText)
    register.appendChild(registerTitulo)

    //Creo formulario
    var registerFormulario = document.createElement('form')
    registerFormulario.classList.add('flex', 'flex-col', 'gap-20') //gap separa 20px entre todos los div hijos del div padre del formulario 

    //Name
    var nameEtiquetaDiv = document.createElement('div')          // para que se haga un salto de linea, se decidio meter cada componente por separado en un div 
    nameEtiquetaDiv.classList.add('flex', 'flex-col', 'gap-5') //gap separa 5px entre nombre e input

    var nameEtiquetaLabel = document.createElement('label')
    nameEtiquetaLabel.htmlFor = 'name'                           // añadimos el contenido de for
    var nameEtiquetaLabelText = document.createTextNode('Name')
    nameEtiquetaLabel.appendChild(nameEtiquetaLabelText)

    var nameEtiquetaInput = document.createElement('input')
    nameEtiquetaInput.type = 'text'                               //añadimos el contenido de type
    nameEtiquetaInput.id = 'name'                                 //el id debe tener el mismo contenido que el htmlfor al que corresponde   
    nameEtiquetaInput.name = 'name'                               //para el submit
    nameEtiquetaInput.placeholder = 'your full name'              //añade texto para ayudar al cliente

    nameEtiquetaDiv.appendChild(nameEtiquetaLabel)              //en estas dos lineas metemos label e imput en el div creado exclusivamente para ellos
    nameEtiquetaDiv.appendChild(nameEtiquetaInput)

    registerFormulario.appendChild(nameEtiquetaDiv)

    //E-mail
    var emailEtiquetaDiv = document.createElement('div')
    emailEtiquetaDiv.classList.add('flex', 'flex-col', 'gap-5')

    var emailEtiquetaLabel = document.createElement('label')
    emailEtiquetaLabel.htmlFor = 'email'
    var emailEtiquetaLabelText = document.createTextNode('E-mail')
    emailEtiquetaLabel.appendChild(emailEtiquetaLabelText)

    var emailEtiquetaInput = document.createElement('input')
    emailEtiquetaInput.type = 'email' //no haria falta una expresion regular, un pattern, ya que el tipo email lo tiene integrado
    emailEtiquetaInput.id = 'email'
    emailEtiquetaInput.name = 'email'
    emailEtiquetaInput.placeholder = 'your e-mail'

    emailEtiquetaDiv.appendChild(emailEtiquetaLabel)
    emailEtiquetaDiv.appendChild(emailEtiquetaInput)

    registerFormulario.appendChild(emailEtiquetaDiv)


    //Username
    var usernameEtiquetaDiv = document.createElement('div')
    usernameEtiquetaDiv.classList.add('flex', 'flex-col', 'gap-5')

    var usernameEtiquetaLabel = document.createElement('label')
    usernameEtiquetaLabel.htmlFor = 'username'
    var usernameEtiquetaLabelText = document.createTextNode('Username')
    usernameEtiquetaLabel.appendChild(usernameEtiquetaLabelText)

    var usernameEtiquetaInput = document.createElement('input')
    usernameEtiquetaInput.type = 'text'
    usernameEtiquetaInput.id = 'username'
    usernameEtiquetaInput.name = 'username'
    usernameEtiquetaInput.placeholder = 'your username'

    usernameEtiquetaDiv.appendChild(usernameEtiquetaLabel)
    usernameEtiquetaDiv.appendChild(usernameEtiquetaInput)

    registerFormulario.appendChild(usernameEtiquetaDiv)


    //Password
    var passwordEtiquetaDiv = document.createElement('div')
    passwordEtiquetaDiv.classList.add('flex', 'flex-col', 'gap-5')

    var passwordEtiquetaLabel = document.createElement('label')
    passwordEtiquetaLabel.htmlFor = 'password'
    var passwordEtiquetaLabelText = document.createTextNode('Password')
    passwordEtiquetaLabel.appendChild(passwordEtiquetaLabelText)

    var passwordEtiquetaInput = document.createElement('input')
    passwordEtiquetaInput.type = 'password'
    passwordEtiquetaInput.id = 'password'
    passwordEtiquetaInput.name = 'password'
    passwordEtiquetaInput.placeholder = 'your password'

    passwordEtiquetaDiv.appendChild(passwordEtiquetaLabel)
    passwordEtiquetaDiv.appendChild(passwordEtiquetaInput)

    registerFormulario.appendChild(passwordEtiquetaDiv)


    //Creo un div tambien para login y register
    var loginRegisterEtiquetaDiv = document.createElement('div')
    loginRegisterEtiquetaDiv.classList.add('flex', 'justify-between', 'margin-30px')

    //Hipervinculo Login
    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    loginRegisterEtiquetaDiv.appendChild(loginLink) //añadimos este login a su div correspondiente

    //Boton Register
    var registerButton = document.createElement('button')
    registerButton.classList.add('black-button')
    registerButton.type = 'submit'
    var registerButtonText = document.createTextNode('Register')
    registerButton.appendChild(registerButtonText)
    loginRegisterEtiquetaDiv.appendChild(registerButton) //añadimos este button a su div correspondiente

    registerFormulario.appendChild(loginRegisterEtiquetaDiv)

    register.appendChild(registerFormulario)

    //Configuramos el enlace Login, borra el div de register y añade el de login
    loginLink.addEventListener('click', function (event) {
        body.removeChild(register)
        body.appendChild(login)
    })

    //Configuramos el boton Register(recuerda que configuramos el boton en el formulario, no como los enlaces que se configura en directamente en él)
    registerFormulario.addEventListener('submit', function (event) {
        event.preventDefault() //cancela la accion preterminada, ya que la voy a configurar yo

        const name = nameEtiquetaInput.value
        const email = emailEtiquetaInput.value
        const username = usernameEtiquetaInput.value
        const password = passwordEtiquetaInput.value
        //try indica un bloque de codigo a intentar, si se produce una excepcion entonces entramos en catch
        try {
            registerUser(name, email, username, password) //llamamos a la funcion registerUser con los parametros introducidos en mi pg

            body.removeChild(register)
            body.appendChild(login)
        } catch (error) {
            alert(error.message)
        }
    })


    return register
}

function construirLogin() {
    /*  
   Estructura html a imitar
        <div>
            <i>Logo</i>
            <h1>Login</h1>
            <form>
                //E-mail
                <div>
                    <label for="name">E-mail</label>
                    <input type="text" name="name">
                </div>
                //Passwoord
                <div>
                    <label for="name">Password</label>
                    <input type="text" name="name">
                </div>
                <div>
                    <a href="">Register</a>
                    <button type="button">Login</button>
                </div>
            </form>
        </div> 
    */
    var login = document.createElement('div')
    login.classList.add('p-20px')

    //Titulo Logo
    var loginLogo = document.createElement('i')
    var loginLogoTexto = document.createTextNode('Logo')
    loginLogo.appendChild(loginLogoTexto)
    login.appendChild(loginLogo)

    //Titulo de la pagina
    var loginTitulo = document.createElement('h1')
    var loginTituloText = document.createTextNode('Login')
    loginTitulo.appendChild(loginTituloText)
    login.appendChild(loginTitulo)

    //Creo formulario
    var loginFormulario = document.createElement('form')
    loginFormulario.classList.add('flex', 'flex-col', 'gap-20')

    //Username
    var usernameEtiquetaDiv = document.createElement('div')
    usernameEtiquetaDiv.classList.add('flex', 'flex-col', 'gap-5')

    var usernameEtiquetaLabel = document.createElement('label')
    usernameEtiquetaLabel.htmlFor = 'username'
    var usernameEtiquetaLabelText = document.createTextNode('Username')
    usernameEtiquetaLabel.appendChild(usernameEtiquetaLabelText)

    var usernameEtiquetaInput = document.createElement('input')
    usernameEtiquetaInput.type = 'text'
    usernameEtiquetaInput.id = 'username'
    usernameEtiquetaInput.name = 'username'
    usernameEtiquetaInput.placeholder = 'your username'

    usernameEtiquetaDiv.appendChild(usernameEtiquetaLabel)
    usernameEtiquetaDiv.appendChild(usernameEtiquetaInput)

    loginFormulario.appendChild(usernameEtiquetaDiv)

    //Password
    var passwordEtiquetaDiv = document.createElement('div')
    passwordEtiquetaDiv.classList.add('flex', 'flex-col', 'gap-5')

    var passwordEtiquetaLabel = document.createElement('label')
    passwordEtiquetaLabel.htmlFor = 'password'
    var passwordEtiquetaLabelText = document.createTextNode('Password')
    passwordEtiquetaLabel.appendChild(passwordEtiquetaLabelText)

    var passwordEtiquetaInput = document.createElement('input')
    passwordEtiquetaInput.type = 'password'
    passwordEtiquetaInput.id = 'password'
    passwordEtiquetaInput.name = 'password'
    passwordEtiquetaInput.placeholder = 'your password'

    passwordEtiquetaDiv.appendChild(passwordEtiquetaLabel)
    passwordEtiquetaDiv.appendChild(passwordEtiquetaInput)

    loginFormulario.appendChild(passwordEtiquetaDiv)

    //Creo un div tambien para login y register
    var loginRegisterEtiquetaDiv = document.createElement('div')
    loginRegisterEtiquetaDiv.classList.add('flex', 'justify-between', 'margin-30px')

    //Hipervinculo Register
    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    loginRegisterEtiquetaDiv.appendChild(registerLink)

    //Boton Login
    var loginButton = document.createElement('button')
    loginButton.classList.add('black-button')
    loginButton.type = 'submit'
    var loginButtonText = document.createTextNode('Login')
    loginButton.appendChild(loginButtonText)
    loginRegisterEtiquetaDiv.appendChild(loginButton)

    loginFormulario.appendChild(loginRegisterEtiquetaDiv)

    login.appendChild(loginFormulario)

    //Configuramos el enlace Register, borra el div de login y añade el de register
    registerLink.addEventListener('click', function (event) {
        body.removeChild(login)
        body.appendChild(register)
    })

    //configuramos el boton Login (recuerda que configuramos el boton en el formulario, no como los enlaces que se configura en directamente en él)
    loginFormulario.addEventListener('submit', function (event) {
        event.preventDefault() //cancela la accion preterminada, ya que la voy a configurar yo
        const username = usernameEtiquetaInput.value
        const password = passwordEtiquetaInput.value
        //try indica un bloque de codigo a intentar, si se produce una excepcion entonces entramos en catch
        try {
            loginUser(username, password) //llamamos a la funcion registerUser con los parametros introducidos en mi pg
            body.removeChild(login)
            body.appendChild(home)
        } catch (error) {
            alert(error.message)
        }
    })


    return login


}

function construirHome() {
    /*  
    Estructura html a imitar
         <div>
             <i>Logo</i>
             <h1>Hello, World!</h1>
         </div> 
     */

    var home = document.createElement('div')
    home.classList.add('p-20px')

    //Logo
    var logoEncabezado = document.createElement('i')
    var logoTexto = document.createTextNode('Logo')
    logoEncabezado.appendChild(logoTexto)
    home.appendChild(logoEncabezado)

    //Titulo de la pg
    var contenido = document.createElement('h1')
    var contenidoText = document.createTextNode('Hello,World!')
    contenido.appendChild(contenidoText)
    home.appendChild(contenido)

    return home
}

//Segun la pg que queramos ver, habra que comentar o descomentar. En estas lineas estamos añadiendo las llamadas a las funciones, las cuales contienen el div principal de cada pagina
var aterrizaje = construirAterrizaje()
body.appendChild(aterrizaje)

var register = construirRegister()
//body.appendChild(register)

var login = construirLogin()
//body.appendChild(login)

var home = construirHome()
//body.appendChild(home)

