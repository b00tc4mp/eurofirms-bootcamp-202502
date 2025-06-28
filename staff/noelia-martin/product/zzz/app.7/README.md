app.7
16/5/25- 17/5/25 y 30/5/25

16/5/25- 17/5/25
    Copiado del mismo fin de semana del README de api.1
    Instalamos cors en nuestra api  (manual en carpeta de instalación 5º documento)
    Modificamos el mensaje de bienvenida por otro más correcto (en index.js)
    Modificamos el modo de arranque, en package-json, dentro de scripts configuro un: "start":"node index.js",

    Continúo en esta nueva versión (app.7)
    1º Nos vamos a los test de la api e implementamos uno utilizando fetch. (Para todas las lógicas)

    2º En app
    a. Borramos la lógica anterior, excepto las validaciones ya que nos van a seguir sirviendo y gracias a ellas evitaremos llamadas a la api innecesarias

    b. Copiamos el test de fetch(api) en nuestra lógica. 
    Excepto las dos últimas líneas que son para mostrar en consola mensajes de verificación o error.
    Esos mensajes los utilizábamos en el test de api ya que no teníamos componentes que lo gestionara.
    En app se gestiona con el componente react que le corresponda.

    c. En el fetch que hemos copiado trae directamente el texto json a utilizar. Este no nos interesa aqui, ya que app va a usar sus propios parámetros, asi que los modificamos
    Ejemplo de Register: teníamos la variable body con el json (comentado) y ahora vamos a crear el objeto body con los parámetros, los cuales vamos a convertir en JSON
    /*body: '{"name":"Mercedes","email":"mercedes@pan.com","username":"mercedes","password":"123123123"}' */
    body: JSON.stringify({ name, email, username, password })

    d. Modificamos el control de errores de la lógica que tenía el componente que la está utilizando. (Para introducir el trabajo que hacia las dos últimas líneas del fetch copiado de api)
    El try / catch lo mantendremos, ya que es un control de errores síncronos (se producen en el momento), nos servirá para controlar las validaciones de la lógica de app.
    Dentro del try, una vez se ha realizado la llamada a la lógica tenemos que configurar dos métodos de nuestra promesa fetch: una si todo ha ido correcto "then" y otra si ha ido mal "catch". Este nuevo control de errores es asíncrono (va a destiempo, usado para llamadas al servidor ya que este se toma el tiempo que necesite para responder)
    El contenido que tiene try, una vez llamada a la lógica, lo meteremos en then
    En catch manejaremos el error: escribiremos por consola el error y así nos ayudará a saber de que se trata para solucionarlo y también le mandaremos al usuario el mensaje de dicho error, para esté informado (SOLO el mensaje)
    Por último, en el catch del control de errores síncrono, lo configuramos igual que el de catch asíncrono

    e. En data
    Borramos el fichero populate.js (recuerda que contenía varios usuarios y posts que se crearían los primeros en cada navegador utilizado; en index.html de app borramos el link a ese fichero). 
    En index.js borramos todos los métodos que necesiten a LocalStorage ya que no se van a utilizar más.

    Comentarios desarrollados con detalle solo en la lógica y componente Register. 
    Después se hizo por este orden el resto de configuraciones: (tal como iba avanzando ponía menos comentarios, por no repetirlos....)
        2º loginUser, usa el componente Login
        3º getUserUsername, usa el componente Home
        4º createPost, usa el componente CreatePost
        5º getPosts , usa el componente Posts
        6º deletePosts, usa el componente Post, también utiliza el handlePostDeleted de Posts así que este lo debemos modificar también (lo ponemos igual que el useEffect que modificamos en getPosts)

30/05/25 
    (Copio del readme de api.2)
    Finalmente, fuimos a la app a hacer un breve cambio
    En el componente Post, indicamos que hemos cambiado en la lógica getPost que en author ahora incluimos username y ese es el dato que necesitamos que muestre
    Teníamos esta línea dentro de article : <h3 className="font-bold">{post.author}</h3> y ahora la hemos cambiado a esta otra: <h3 className="font-bold">{post.author.username}</h3>
