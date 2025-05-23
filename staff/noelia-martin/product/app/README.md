Finde 16/5/25- 17/5/25

Copiado del mismo fin de semana del README de api.1
Instalamos cors (manual en carpeta de instalacion 5º documento)
Modificamos el mensaje de bienvenida por otro mas correcto(en index.js)
Modificamos el modo de arranque, en package-json: dentro de scripts configuro un: start="start":"node index.js",

Creo todos los test de la api(carpeta test), todos los que faltaban

Continuo en esta nueva version(app.7)

1º Nos vamos a los test de la api e implementamos uno utilizando fetch. (para todas las logicas)
2º En app
    a. Borramos la logica anterior, excepto las validaciones ya que nos van a seguir sirviendo y gracias a ellas evitaremos llamadas a la api innecesarias
    b. Copiamos el test de fetch(api) en nuestra logica. 
        Excepto las dos ultimas lineas que son para mostrar en consola mensajes de verificacion o error.
        Esos mensajes los utilizabamos en el test de api ya que no teniamos componentes que lo gestionara.
        En app se gestiona con el componente react que le corresponda.
    c. En el fetch que hemos copiado trae directamente el texto json a utilizar. Este no nos interesa aqui, ya que app va a usar sus propios parametros, asi que los modificamos
        Ejemplo de Register: teniamos la variable body con el json (comentado) y ahora vamos a crear el objeto body con los parametros, los cuales vamos a convertir en JSON
             //body: '{"name":"Mercedes","email":"mercedes@pan.com","username":"mercedes","password":"123123123"}'
            body: JSON.stringify({ name, email, username, password })
    d. Modificamos el control de errores de la logica que tenia el componente que la está utilizando.(para introducir el trabajo que hacia las dos ultimas lineas del fetch copiado de api)
        El try / catch lo mantendremos, ya que es un control de errores sincronos (se producen en el momento), nos servirá para controlar las validaciones de la logica de app.
        Dentro del try, una vez se ha realizado la llamada a la logica tenemos que configurar dos metodos de nuestra promesa fetch: una si todo ha ido correcto "then" y otra si ha ido mal "catch". Este nuevo control de errores es asincrono(va a destiempo, usado para llamadas al servidor ya que este se toma el tiempo que necesite para responder)
        El contenido que tiene try, una vez llamada a la logica, lo meteremos en then
        En catch manejaremos el error: escribiremos por consola el error y asi nos ayudará a saber de que se trata para solucionarlo y tambien le mandaremos al usuario el mensaje de dicho error, para esté informado(SOLO el mensaje)
        Por último, en el catch del control de errores sincrono, lo configuramos igual que el de catch asincrono
    e. En data
        Borramos el fichero populate.js (recuerda que contenia varios usuarios y posts que se crearian los primeros en cada navegador utilizado; en index.html de app borramos el link a ese fichero). 
        En index.js borramos todos los metodos que necesiten a LocalStorage ya que no se van a utilizar mas.


Comentarios desarrollados con detalle solo en la logica y componente Register. 
Despues se hizo por este orden el resto de configuraciones: (tal como iba avanzando ponia menos comentarios, por no repetirlos....)
    2º loginUser, usa el componente Login
    3º getUserUsername, usa el componente Home
    4º createPost, usa el componente CreatePost
    5º getPosts , usa el componente Posts
    6º deletePosts, usa el componente Post, también utiliza el handlePostDeleted de Posts asi que este lo debemos modificar tambien(lo ponemos igual que el useEffect que modificamos en getPosts)