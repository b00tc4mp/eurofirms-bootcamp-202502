//Enlace de figma: https://www.figma.com/proto/KzMLcqmKggQTys6UT6Xejr/eurofirms-bootcamp-202502-product?node-id=1-28&p=f&t=7tk4SSqOURm1GHxP-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A28


var body = document.querySelector('body');
body.bgColor='DAE820';

function construirAterrizaje() {
   /*  
   Estructura html a imitar
        <div>
            <i>Logo<i>
            <br>
            <a href="">Register</a> or <a href="">Login</a>
        </div> 
    */

    var aterrrizaje= document.createElement('div')   //Crea el elemento div que es el contenedor de toda la pg

    //Comun en todas las paginas
    //Logo
    var logoEncabezado= document.createElement('i')    //Crea el elemento de la etiqueta i del html(Etiqueta de formato cursivo)
    var logoTexto= document.createTextNode('Logo')      //crea el texto Logo
    logoEncabezado.appendChild(logoTexto)               //le añadimos como hijo(como propiedad) el texto
    aterrrizaje.appendChild(logoEncabezado)          //por ultimo, añadimos la etiqueta h1 y el texto, a nuestro contenedor(div)

    var saltopagina= document.createElement('br')
    aterrrizaje.appendChild(saltopagina)

    //Hipervinculo de Register
    var registerLink= document.createElement('a')       //Crea el elemento de la etiqueta a
    registerLink.href= '#'                              //Aqui pondriamos nuestro hipervinculo, actualmente inutilizado
    var registerText= document.createTextNode('Register')  //creamos el texto mostrado al usuario para acceder al hipervinculo
    registerLink.appendChild(registerText)              //añadimos dicho texto a la variable que contiene la etiqueta a
    aterrrizaje.appendChild(registerLink)            //añadimos Register como hijo a nuestro contener principal

    //Texto ' or ' (con espacios)
    var orText=document.createTextNode(' or ')          //Creamos el texto or
    aterrrizaje.appendChild(orText)                  //Lo metemos en el div

    //Hipervinculo Login
    var loginLink= document.createElement('a')
    loginLink.href='#'
    var loginText= document.createTextNode('Login')
    loginLink.appendChild(loginText)
    aterrrizaje.appendChild(loginLink)

    return aterrrizaje
}

function construirRegister(){
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
            </form>
            <a href="">Login</a>
            <button type="button">Register</button>
        </div> 
    */
    var register= document.createElement('div')

    //Logo
    var registerLogo= document.createElement('i')    
    var registerLogoTexto= document.createTextNode('Logo')      
    registerLogo.appendChild(registerLogoTexto)               
    register.appendChild(registerLogo)  

    //Titulo de la pagina
    var registerTitulo=document.createElement('h1')
    var registerTituloText= document.createTextNode('Register')
    registerTitulo.appendChild(registerTituloText)               
    register.appendChild(registerTitulo)

    //Creo formulario
    var registerFormulario= document.createElement('form')
    
    //Name
    var nameEtiquetaDiv= document.createElement('div')          // para que se haga un salto de linea, se decidio meter cada componente por separado en un div 
    
    var nameEtiquetaLabel= document.createElement('label')
    nameEtiquetaLabel.htmlFor='name'                           // añadimos el contenido de for
    var nameEtiquetaLabelText=document.createTextNode('Name')
    nameEtiquetaLabel.appendChild(nameEtiquetaLabelText)

    var nameEtiquetaInput= document.createElement('input')
    nameEtiquetaInput.type='text'                               //añadimos el contenido de type
    nameEtiquetaInput.id='name'                                 //el id debe tener el mismo contenido que el htmlfor al que corresponde   
    nameEtiquetaInput.name='name'                               //para el submit
    nameEtiquetaInput.placeholder='your full name'              //añade texto para ayudar al cliente
    
    nameEtiquetaDiv.appendChild(nameEtiquetaLabel)              //en estas dos lineas metemos label e imput en el div creado exclusivamente para ellos
    nameEtiquetaDiv.appendChild(nameEtiquetaInput)
    
    //E-mail
    var emailEtiquetaDiv= document.createElement('div')

    var emailEtiquetaLabel=document.createElement('label')
    emailEtiquetaLabel.htmlFor='email'
    var emailEtiquetaLabelText= document.createTextNode('E-mail')
    emailEtiquetaLabel.appendChild(emailEtiquetaLabelText)

    var emailEtiquetaInput= document.createElement('input')
    emailEtiquetaInput.type='email' //no haria falta una expresion regular, un pattern, ya que el tipo email lo tiene integrado
    emailEtiquetaInput.id='email'
    emailEtiquetaInput.name='email'
    emailEtiquetaInput.placeholder='your e-mail'


    emailEtiquetaDiv.appendChild(emailEtiquetaLabel)
    emailEtiquetaDiv.appendChild(emailEtiquetaInput)

    //Username
    var usernameEtiquetaDiv= document.createElement('div')

    var usernameEtiquetaLabel=document.createElement('label')
    usernameEtiquetaLabel.htmlFor='username'
    var usernameEtiquetaLabelText= document.createTextNode('Username')
    usernameEtiquetaLabel.appendChild(usernameEtiquetaLabelText)

    var usernameEtiquetaInput= document.createElement('input')
    usernameEtiquetaInput.type='text'
    usernameEtiquetaInput.id='username'
    usernameEtiquetaInput.name='username'
    usernameEtiquetaInput.placeholder='your username'

    usernameEtiquetaDiv.appendChild(usernameEtiquetaLabel)
    usernameEtiquetaDiv.appendChild(usernameEtiquetaInput)
    
    //Password
    var passwordEtiquetaDiv= document.createElement('div')

    var passwordEtiquetaLabel=document.createElement('label')
    passwordEtiquetaLabel.htmlFor='password'
    var passwordEtiquetaLabelText= document.createTextNode('Password')
    passwordEtiquetaLabel.appendChild(passwordEtiquetaLabelText)

    var passwordEtiquetaInput= document.createElement('input')
    passwordEtiquetaInput.type='password'
    passwordEtiquetaInput.id='password'
    passwordEtiquetaInput.name='password'
    passwordEtiquetaInput.placeholder='your password'

    passwordEtiquetaDiv.appendChild(passwordEtiquetaLabel)
    passwordEtiquetaDiv.appendChild(passwordEtiquetaInput)

    //Metemos todo el contenido en el formulario (lo dejamos para el final para verlo mas claro)
    registerFormulario.appendChild(nameEtiquetaDiv)
    registerFormulario.appendChild(emailEtiquetaDiv)
    registerFormulario.appendChild(usernameEtiquetaDiv)
    registerFormulario.appendChild(passwordEtiquetaDiv)

    register.appendChild(registerFormulario)
    
    //Hipervinculo Login
    var loginLink= document.createElement('a')
    loginLink.href='#'
    var loginText= document.createTextNode('Login')
    loginLink.appendChild(loginText)
    register.appendChild(loginLink)

    //Boton Register
    var registerButton= document.createElement('button')
    registerButton.type='button'
    var registerButtonText= document.createTextNode('Register')
    registerButton.appendChild(registerButtonText)
    register.appendChild(registerButton)

    return register
 
}

 function construirLogin(){
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
            </form>
            <a href="">Register</a>
            <button type="button">Login</button>
        </div> 
    */
        var login= document.createElement('div')

        //Titulo Logo
        var loginLogo= document.createElement('i')    
        var loginLogoTexto= document.createTextNode('Logo')      
        loginLogo.appendChild(loginLogoTexto)               
        login.appendChild(loginLogo)  

        //Titulo de la pagina
        var loginTitulo=document.createElement('h1')
        var loginTituloText= document.createTextNode('Login')
        loginTitulo.appendChild(loginTituloText)               
        login.appendChild(loginTitulo)
    
        //Creo formulario
        var loginFormulario= document.createElement('form')
        
        //E-mail
        var emailEtiquetaDiv= document.createElement('div')
    
        var emailEtiquetaLabel=document.createElement('label')
        emailEtiquetaLabel.htmlFor='email'
        var emailEtiquetaLabelText= document.createTextNode('E-mail')
        emailEtiquetaLabel.appendChild(emailEtiquetaLabelText)
    
        var emailEtiquetaInput= document.createElement('input')
        emailEtiquetaInput.type='email'
        emailEtiquetaInput.id='email'
        emailEtiquetaInput.name='email'
        emailEtiquetaInput.placeholder='your e-mail'
    
        emailEtiquetaDiv.appendChild(emailEtiquetaLabel)
        emailEtiquetaDiv.appendChild(emailEtiquetaInput)
        
        //Password
        var passwordEtiquetaDiv= document.createElement('div')
    
        var passwordEtiquetaLabel=document.createElement('label')
        passwordEtiquetaLabel.htmlFor='password'
        var passwordEtiquetaLabelText= document.createTextNode('Password')
        passwordEtiquetaLabel.appendChild(passwordEtiquetaLabelText)
    
        var passwordEtiquetaInput= document.createElement('input')
        passwordEtiquetaInput.type='password'
        passwordEtiquetaInput.id='password'
        passwordEtiquetaInput.name='password'
        passwordEtiquetaInput.placeholder='your password'
    
        passwordEtiquetaDiv.appendChild(passwordEtiquetaLabel)
        passwordEtiquetaDiv.appendChild(passwordEtiquetaInput)
    
        //Metemos todo el contenido en el formulario 
        loginFormulario.appendChild(emailEtiquetaDiv)
        loginFormulario.appendChild(passwordEtiquetaDiv)
    
        login.appendChild(loginFormulario)
    
        //Hipervinculo Register
        var registerLink= document.createElement('a')
        registerLink.href='#'
        var registerText= document.createTextNode('Register')
        registerLink.appendChild(registerText)
        login.appendChild(registerLink)

        //Boton Login
        var loginButton= document.createElement('button')
        loginButton.type='submit' //botton y submit aparentemente actuan igual, consulto en internet: en button podria meter imagenes cosa en en submit no solo texto 
        var loginButtonText= document.createTextNode('Login')
        loginButton.appendChild(loginButtonText)
        login.appendChild(loginButton)
        
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
 
     var home= document.createElement('div')   //Crea el elemento div que es el contenedor de toda la pg
 
     //Logo
     var logoEncabezado= document.createElement('i')    
     var logoTexto= document.createTextNode('Logo')     
     logoEncabezado.appendChild(logoTexto)            
     home.appendChild(logoEncabezado)     
 
    //Contenido pg (h2)
     var contenido=document.createElement('h1')
     var contenidoText=document.createTextNode('Hello,World!')
     contenido.appendChild(contenidoText)
     home.appendChild(contenido) 
 
     return home
 }

//Segun la pg que queramos ver, habra que comentar o descomentar. En estas lineas estamos añadiendo las llamadas a las funciones, las cuales contienen el div principal de cada pagina
body.appendChild(construirAterrizaje())       
body.appendChild(construirRegister())
body.appendChild(construirLogin())
body.appendChild(construirHome())

