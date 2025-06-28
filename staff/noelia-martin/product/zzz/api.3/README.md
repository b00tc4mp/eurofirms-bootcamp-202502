api.3
7/6/25

#JWT (explico teoría a final de este readme)
Tal como lo tenemos hasta esta versión, cualquier usuario logueado puede entrar en los mensajes de respuesta del servidor y ver el contenido de todos los posts.
En este contenido está idPost, idUser, imagen, texto, like y fecha. Es muy peligroso que pueda tener acceso a cualquier idUser.
Puede copiar el idUser de cualquier usuario y en SessionStore modificar el suyo por ese nuevo. Automáticamente la sesión se cambiaría al del usuario que corresponde ese id, sin necesidad de loguearse... es un fallo de seguridad muy grave.
Lo solucionaremos cambiando el contenido de los idUser a token de texto usando JSON Web Token

Instalamos (en api): npm i jsonwebtoken

Modificamos en API (actualmente versión 3)
    error.js en api: Creamos constructoras propias para manejar errores desde la Api (no desde lógica). De momento solo creamos AuthorizationError

    index en api : 
        1. Importamos JWT y sacamos la constante JsonWebTokenError que contiene su controlador de errores
        2. Modificamos el código para que en vez de usar userId utilicen token (explicado detalladamente en el código)
            En autenticación creamos el token indicando que queremos que su payload contenga el userId y lo firme
            En el resto de lógicas que necesita una cabecera con el userId, modificamos:
                El slice: en vez de recibir Basic..., recibiremos Bearer...
                Obtenemos variable userId: ahora no vamos a recibir directamente un userId sino un token, así que verificamos con la firma digital que sabemos que es correcto y sacamos del payload, el userId
        3. Modificamos el handler de errores
            Añadimos dos condiciones a las que teníamos para controlar el token
                Primera, si se produce un error en la cabecera o en la firma digital, JWT nos devolverá sus propios errores. Los usaremos pero vamos a cambiar la constructora que va a utilizar, que será la creada en error.js => AuthorizationError
                Segundo, si el error se produce en el payload no lo controla JWT sino SyntaxError y devuelve un mensaje difícil de entender, así que los filtramos y modificamos por nuestra constructora (AuthorizationError) y un mensaje personalizamos (invalid payload)

App.8 (README)
    Cambiamos el index de data para que los métodos no sean para userId sino para token
    En las lógicas, modificamos todas las que utilizaban los métodos antiguos para usar los nuevos y las cabeceras de autenticación para que trabaje con Bearer en vez de Basic. Recuerda que se realiza así por convenio


#Bcrypt.js
Tal como lo tenemos hasta esta versión, si alguien consigue acceder a mi BD puede robar todas las contraseñas ya que no están cifradas, procedemos a hacerlo utilizando el algoritmo de hash bcrypt

Instalamos (en api): npm bcryptjs

Borramos nuestra base de datos: db.dropDatabase()

Modificamos dos lógicas:
    register: retornamos la conversión de la contraseña a una cifrada, hacemos un control asíncrono: 
        .catch si ha fallado la conversión
        .then si ha ido bien, en él recibimos de parámetro de entrada un hash (la contraseña cifrada, nos lo ha devuelvo el return anterior) y en la función metemos el contenido que teníamos en la versión anterior indicando que ahora password será el hash recibido
        Por lo tanto en la base de datos vamos a guardar ese hash en vez del password original
    authenticate: borramos el ultimo if, ya que este creaba un error si la password recibida no coincidía con la password de la BD. Ahora no guardamos en la base de datos la password sino un hash (una password cifrada).
    Así que creamos un return(en el lugar del if) que devuelva la comparación entre password recibida y la de la base de datos (esta comparación la hace bcrypt internamente no nos metemos en saber cómo es). Este return tendrá un control de errores:
        .catch si hay algún error en la realización de la comparación
        .then si se compara bien, en él recibimos un booleano del return de comparación y configuramos que si es falso cree un error de credenciales y si es verdadero devuelva el id (tal como estaba configurado en la versión anterior)


#Variables de entorno
Vamos a implementarlo en nuestro proyecto para no tener que tocar los ficheros de configuración con cada cambio que tengamos que hacer. Por ejemplo si quiero cambiar el puerto que utiliza Mongo habría que tocar muchos ficheros, de esta manera solo uno, el que contiene la variable de entorno PORT

En los SO, en Mac las podemos ver con el comando printenv o set, en Windows con set
En node con process.env
    Podemos crear una nueva variable con el comando: process.env.NombreNuevaVariable='Contenido de texto'
    También podemos crear nuevas variables utilizando un fichero externo, como haremos en nuestro proyecto (recuerda que para esta configuración necesitamos las ultima versión de mongo)

Creamos .env en la carpeta raíz de la api y en él creamos las variables que queremos utilizar
Modificamos el index de api: cambiamos el contenido para que utilicen esas variables
Modificamos la configuración de api para que arranque con el fichero de configuración env y así suma esas variables a las que ya tiene ("start": "node --env-file .env index.js",)
(Reiniciamos visual para que se ejecute la configuración)

Para ejecutar un comando para el arranque del servidor diferente a start, hay que utilizar la palabra run. Ejemplo (modo observador) npm run start-watch , con este comando activamos api e indicamos que se reinicie automáticamente con cada cambio realizado en su configuración (vite lo tiene configurado internamente)

Ahora vamos a app y hacemos el mismo proceso pero con vite

App.8 (README)
Variables de entorno: creo el fichero .env que tendrá de momento una sola variable de entorno, el enlace a la api.
Configuro todas las lógicas que contienen una llamada a la api con esta variable
Configuro vite para que tenga en cuenta este nuevo fichero, en vite.config.js, añado envPrefix: 'VITE_',
(Reiniciamos visual para que se ejecute la configuración)


##TEORIA JWT (utiliza base64)

jwt.sign({sub: contenido}, firma)
    Es una función utilizada para crear y firmar un JWT (JSON Web Token). Generalmente, se utiliza para generar un token que representa la identidad de un usuario o entidad y contiene información de autorización. 
    Toma los siguientes parámetros: 
        Payload: Un objeto JSON que contiene los datos que deseas incluir en el token. (en este caso sub:userId).
        Secret o Key: Una clave secreta que se utiliza para firmar el token y garantizar su autenticidad.
        Opcional: Parámetros adicionales: Pueden incluir opciones como el algoritmo de firma, el tiempo de vida del token, etc. (de momento no implementado)

    Una vez se ha creado el token tendrá la siguiente estructura: A.B.C
        A: Header => será una cadena de caracteres que contendrá el algoritmo utilizado
        B: Payload => será una cadena de caracteres que contendrá sub (contenido introducido por nosotros, normalmente sub se usa para credenciales, en este caso userId) y iat (fecha de la creación del token, segundos transcurridos desde el 1/1/1970 hasta ese momento)
        C: SecretOrPrivateKey(secreto,clave privada,firma digital) => será una cadena de caracteres que se ha generado gracias al secreto utilizamos en la creación del token y este será único para cada Payload. Es el que decide si el token es seguro o lo han modificado

La pg que se utilizo en la explicación fue la siguiente: https://jwt.io/

Comando para cambiar de base: 
    atob('código base64') => te lo pasa a JSON (hay que poner código sin puntos)
    btoa('JSON') => te lo pasa a código base64

jwt.verify( token , firma)
     Es un método utilizado para verificar la integridad y autenticidad de un JSON Web Token (JWT). En otras palabras, comprueba si el JWT es válido y no ha sido manipulado.
     Si es correcto devuelve el payload (en un objeto), pero si falla devuelve un error

Las comprobaciones realizadas han sido:
- En autenticación cambiar un digito de cada parte, probar antes de configurar los errores cuales eran los que devolvían. Una vez configurado nuestros errores comprobar que efectivamente habían cambiado
- En la interfaz de api, en vite, en el navegador, probar si la vulnerabilidad había sido subsanada.
En los posts copio el token completo de algún compañero.
Me quedo con la parte del payload y con el comando atob averiguo el idUser.
Me voy a mi token y en la parte del payload repito procedimiento
Modifico en SessionStorage la parte de mi idUser y pongo el de mi compañero.
WARN!!! me salta el error de invalid signature, error que indica que la firma no es válida. Ya que efectivamente no es. Cada firma que se crea con cada JSON(payload) es única. Esta firma actualmente no tiene caducidad, la configuraremos más adelante.