3/5/25
Instalo la libreria express (guia en mi documentacion)
1. Creo un index.js, dentro de la carpeta de instalacion(api, dentro de product)
2. Para que funcione los import y export modificamos package.json: debajo de versión 
"type":"module",
3. Se escribe codigo en index, el cual se puede probar tanto en un navegador como en la terminal con el cliente curl (los comandos utilizados de curl los dejamos en la carpeta test)
También se puede trabajar modo global abriendo un puerto y haciéndolo publico: junto a console, a la izquierda


9/5/25 (Misma versión api, implementamos backend, lógicas, API (index.js) y tres tipos de tests para comprobar funcionamiento)
Guardo copia de index y del test que ya no utilizaré en la misma ruta que estaba, pero modificando el nombre indicando que es version1 (.1)

1. Creo en data ficheros para almacenar los JSON, para users y posts lo configuro como array vacio => [] y también creo ficheros para usersCount y postsCount los pongo en 0
1.1 Creo un index con los métodos que tenia en app pero cambiando el modo de almacenaje a los nuevos ficheros que tengo. Los metodos setUserID, getUserid y removeUserId NO, ya que las apis no guardan el estado de sesión

2. Creo la lógica de registerUsers, igual que la que teníamos en app. Hago un pequeño test dentro del mismo directorio, que será el primer tests que usaremos (a nivel interno, no requiere que el servidor este activo, a nivel de capa lógica) y otro test en la carpeta test con el cliente curl (a nivel de aplicación, es decir de API, este si requiere que el servidor este activo)
2.1. En index.js de la interfaz creamos el post /users

En cada lógica que se cree habrá esos dos tests, uno a nivel lógica (primero en utilizar, será un fichero js a ejecutar con node) y otro nivel API (segundo en utilizar, será un fichero sh a ejecutar con bash)

Recuerda que estamos trabajando con la misma estructura de la app: Interfaz (API, en la APP eran las view que eran manejadas por App.jsx) => lógica => datos

3. Creo la lógica de authenticate, igual que en logic de la app pero no se guarda el estado (de ahí el cambio de nombre) sino que lo retorna. Creamos los dos test que le corresponden
3.1. En index.js de la interfaz creamos el post /users/auth

2.2 y 3.2 lo que cambia respecto a la APP es que utilizábamos una vista de formulario y ahora tenemos que pasar el contenido a registrar/autenticar con un json en los test y la base de datos de api será en ficheros JSON (punto 1)

4. Creo la lógica getUserUsername: creamos el test de la lógica antes de la lógica y también el test de la api antes de la api(users/self/username). La lógica la creamos desde 0.
4.1 Lo que cambia respecto a la APP que utilizabamos esta lógica para el mensaje de bienvenida de la home y ahora simplemente preguntamos por el contenido de username y nos responden

5. Creo la lógica CreatePost: primero el test, luego la lógica. El único cambio respecto al app es que hay que meter más validaciones ya que tenemos un nuevo parámetro de entrada: userID (ya que no hay almacenamiento para ese dato). Sin retorno.
5.1 Creo el tests y configuro la api (users/posts)

6. Creo la lógica getPost: test de lógica, lógica, test de api y api (users/posts). Lógica igual que la de app pero le ponemos validaciones, entre ellas la que comprueba si existe el userId pasado como parámetro

7. Creo la lógica removePosts: test de lógica, lógica, test de api y api (users/posts). Lógica parecida a app, pero hay que verificar parámetros de entrada (userId y postId), si el post pertenece a ese usuario y ya borraría el post. En api y test de api usamos el método delete (explicado en el código)

Recuerda: la propiedad own de los post que nos devuelve la lógica getPost se usa solo para visualizar la ruta(en app para que salga el icono de la papelera), en api como trabajamos solo con backend no lo usamos

8. Creamos otro tipo de test de la api utilizando fetch: desde debugger o desde la carpeta test, con extension js =  authenticate-user y register-user. (No he comentado nada, se dio en el último momento y Manu dijo que el siguiente finde entraríamos en detalles)

RECUERDA cada lógica hay que indexarla
Todas las lógica necesitaran de parámetro de entrada el idUser, excepto registro (obviamente no existe aun) y login (que nos identificamos con otras propiedades y no es necesario)

La lógica de logoutUser es una logica del fronted solo (recuerda que era para desloguearse en la home)
La lógica de isUserLoggin tampoco se implementará ya que esta lógica preguntaba si un usuario estaba logueado, pero como no sabemos quién está logueado, fuera


Finde 16/5/25- 17/5/25
Instalamos cors en nuestra api  (manual en carpeta de instalación 5º documento)
Modificamos el mensaje de bienvenida por otro más correcto (en index.js)
Modificamos el modo de arranque, en package-json, dentro de scripts configuro un: "start":"node index.js",

Creo todos los test de la api (carpeta test), todos los que faltaban (comentarios en app.7)

En este mismo fin de semana trabajo con app.7, redacto un readme comenzando con el ultimo contenido añadido en este.


Con esto cierro version 1.