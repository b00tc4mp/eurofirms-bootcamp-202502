3/5/25
Instalo la libreria express (guia en mi documentacion)
1. Creo un index.js, dentro de la carpeta de instalacion(api, dentro de product)
2. Se escribe codigo en index, el cual se puede probar tanto en un navegador como en la terminal con el cliente curl (los comandos utilizados de curl los dejamos en una nueva carpeta dentro de api, llamada test)
Tambien se puede trabajar modo global(red externa) abriendo un puerto y haciendolo publico: junto a console, a la izquierda

9/5/25 (continuo en la misma version )
Guardo copia de index y del test que ya no utilizaré en la misma ruta que estaba, pero modificando el nombre indicando que es version1 ( .1 )

1. Creo en data ficheros para almacenar los JSON, para users y posts lo configuro como array vacio => [] y tambien creo ficheros para usersCount y postsCount los pongo en 0
1.1 Creo un index con los metodos que tenia en app pero cambiando el modo de almacenaje a los nuevos ficheros que tengo. Los metodos setUserID, getUserid y removeUserId NO, ya que las apis no guardan el estado de sesion

2. Creo la logica de registerUsers, igual que la que teniamos en app. Hago un pequeño test dentro del mismo directorio, que será el primer tests que usaremos (a nivel interno, no requiere que el servidor este activo, a nivel de capa logica) y otro test en la carpeta test con el cliente curl (a nivel de aplicacion, es decir de API, este si requiere que el servidor este activo)
2.1. En index.js de la interfaz creamos el post /users

En cada logica que se cree habra esos dos tests, uno a nivel logica(primero en utilizar, será un fichero js a ejecutar con node) y otro nivel API(segundo en utilizar, será un fichero sh a ejecutar con bash)

Recuerda que estamos trabajando con la misma estructura de la app: Interfaz(API, en la APP eran las view que eran manejadas por App.jsx) => logica => datos

3. Creo la logica de authenticate, igual que en logic de la app pero no se guarda el estado (de ahi el cambio de nombre) sino que lo retorna. Creamos los dos test que le corresponden
3.1. En index.js de la interfaz creamos el post /users/auth

2.2 y 3.2 lo que cambia respecto a la APP es que utilizabamos una vista de formulario y ahora tenemos que pasar el contenido a registrar/autenticar con un json en los test y la base de datos de api sera en ficheros JSON (punto 1)

4. Creo la logica getUserUsername: creamos el test de la logica antes de la logica y tambien el test de la api antes de la api(users/self/username). La logica la creamos desde 0.
4.1 Lo que cambia respecto a la APP que utilizabamos esta logica para el mensaje de bienvenida de la home y ahora simplemente preguntamos por el contenido de username y nos responden

5. Creo la logica CreatePost: primero el test, luego la logica. El único cambio respecto al app es que hay que meter mas validaciones ya que tenemos un nuevo parametro de entrada: userID (ya que no hay almacenamiento para ese dato). Sin retorno.
5.1 Creo el tests y configuro la api (users/posts)

6. Creo la logica getPost: test de logica, logica, test de api y api (users/posts). Logica igual que la de app pero le ponemos validaciones, entre ellas la que comprueba si existe el userId pasado como parametro

7. Creo la logica removePosts: test de logica, logica, test de api y api (users/posts). Lógica parecida a app, pero hay que verificar parametros de entrada(userId y postId), si el post pertenece a ese usuario y ya borraría el post. En api y test de api usamos el metodo delete(explicado en el codigo)

Recuerda: la propiedad own de los post que nos devuelve la logica getPost se usa solo para visualizar la ruta(en app para que salga el icono de la papelera), en api como trabajamos solo con backend no lo usamos

8. Creamos otro tipo de test de la api: desde debugger o desde la carpeta test, con extension js. authenticate-user y register-user. (no he comentado nada, se dio en el ultimo momento y Manu dijo que el siguiente finde entrariamos en detalles)



RECUERDA cada logica hay que indexarla
Todas las logica necesitaran de parametro de entrada el idUser, excepto registro(obviamente no existe aun) y login(que nos identificamos con otras propiedades y no es necesario)


La logica de logoutUser es una logica del fronted solo(recuerda que era para deslogearse en la home)
La logica de isUserLoggin tampoco se implementará ya que esta logica preguntaba si un usuario estaba logeado, pero como no sabemos quien está logeado, fuera