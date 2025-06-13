Previo a meternos en configuración, Manu explico dos métodos interesantes: map y toReversed. Lo he dejado en nuevos archivos independientes dentro de la carpeta app.

En esta versión hay que dar muchas vueltas, por eso lo he documentado mas detalladamente

Recuerda que la arquitectura que estamos trabajando es la siguiente: Interfaz <== ==> Lógica <== ==> Memoria

1. He creado la carpeta logic y he separado cada función en una pg diferente

2. Usamos SessionStorage: no volatil, pero solo funciona en una pestaña
Creamos en data dos metodos: setUserId y getUserId
Utilizamos setUserId en la función de loginUser; para sustituir la variable userId que se guardaba en memoria volatil y ahora lo vamos a guardar en SessionStorage
Utilizamos getUserId en la función de getUserUsername; para sustituir dentro de la condición if la propiedad userId por el método getUserId; ya que este devuelve el valor que contiene en Sessiontorage
Por último creamos un tercer método que borra el contenido de Storage, removeUserId; este se utiliza en la función de logoutUser
Son métodos de creación, recuperación y destrucción (CRD, para que sea un CRUD(operaciones de datos) nos falta el actualizado pero ese trabajo lo hace nuestro setUserId )

3. Hay que modificar código en la aplicación, para si el usuario ya está conectado se quede en home
Creamos una nueva función: isUserLoggedIn, la cual es un booleano de Storage, true si tiene dato, false si no lo tiene. Si tiene datos nos deja en la home(a Manu le mandaba previo a esta configuración a la Landding, a mi no yo me quedaba en la home no se el por qué)
Recuerda importar isUserLoggedIn en el index de logic

4. Usamos Local Storage: los datos no se borran si se cierra el navegador ni si reinicia el portátil. Es un almacenamiento persistente, que solo almacena string
Necesitamos convertir nuestros datos en JSON
Antiguamente se utilizaba XML. Ejemplo: 
'''
var cinquecento= { brand:'Fiat', model:'500', year:2001}
var xml= '<car><brand>"Fiat"</brand><model>"500"</model><year>2001</year></car>'
'''
    4.1. En data creamos dos métodos para users. Uno que guarda los usuarios en LocalStorage: setUsers() y otro que los lee: getUsers (para guardar cambia a formato JSON y para leer y pasar a mi app, los cambia al formato original)
    4.2. Idem pero con Count: setUsersCount() y getUsersCount()
    4.3. Modificamos la lógica
        4.3.1. Comenzamos con registerUser: modifico las antiguas variables users y countUsers por los métodos creados y los nuevos valores los guardo en LocalStorage
        4.3.2. LoginUsers: parecido a lo que hicimos en RegisterUsers, cambiamos data.users por data.getUsers()
        4.3.3. getUserUsername idem loginUser
        4.3.4. Modifico ahora data.js idem anteriores, la parte de populateUser y populatePost
    4.4. Hago lo mismo que anteriormente pero con Post
        4.4.1. Modificamos en data y creamos 4 métodos: setPosts, getPost, setPostCount, getPostCount
        4.4.2. En la misma data modificamos igual que se hizo con user, para crear variables, almacenar varios posts y guardarlo en localStorage haciendo uso de los métodos
        4.4.3. Me voy a la logica de getPost y cambio data.post por data.getPosts()

5. Reestructuramos data, creamos carpetas y separamos (explico cómo ejecuto populate una sola vez, diferente a como lo explico manu)
Configuramos en index varios or en los objetos de leer el localStorage (todos los get) para que si no hubiera dato lo interprete como que no hay nada y no pete.

6. Nota: En userId podríamos haber usado JSON pero como trabajamos con string no ha sido necesario

---
/*Ultima Configuración de App.5, creación de Posts*/

1. Hay que crear una view de creación de post

2. En la home, que es en la view que nos interesa que se pueda hacer, en vez de mostrar post directamente, hacemos como hicimos en app, configuramos una view con posts

3. Creamos un formulario en components: CreatePost, con la configuración de enlace Cancelar y boton submit(de momento sin configurar)

4. En la home, creamos la vista createPost (previamente hay que importarlo) con las propiedades que necesitara createPost. Todo igual que la semana pasada (app.4)
También creamos un botón "+" el cual nos pintara createPost y se borrará Post

5. Configuramos submit, igual que hicimos en vistas en app.4. Guardamos valores y llamamos a la lógica, llamamos a funciones aunque aun no exista.

6. Creamos la lógica de creación de post (igual que hicimos anteriormente con la creación de usuarios) y la inyectamos en index

7. Por último configuramos la propiedad onPostCreated para que una vez se haya creado el post, cierre CreatePost y vuelva a poner Post (recuerda que esto está en el mismo botón submit)¡