api.2
23/5/2025 - 24/5/2025

Instalación en nuestro PC de mongoDB y mongoSH (manual en carpeta de instalación 6º documento)
Trabajamos brevemente en mongoSH: (idem con posts)
    db.users.insertOne({name:`'Pepito Grillo',email: ....})
    db.users.insertMany([ {name: ...}, {name: ...}, ... ])
    db.users.find()
    db.users.deleteOne({_id:ObjectId('codigo id del usuario que quiero borrar')})
    d.users.findOne({_id:ObjectId('codigo id del usuario que quiero encontrar')})
    db.users.updateOne({_id:ObjectId('codigo id del usuario que quiero modificar')}, {$set: {password:'contraseña nueva que quiero guardar'}}) //con esta linea modificamos la contraseña del usuario que indicamos con ese id
    db.users.updateMany({name: /P/}, {$set:{password:'contraseña nueva'}}) //con esta línea modifico la contraseña a todos los usuarios que sus nombres comiencen por una P

Instalamos en API mongoDB y trabajamos con el cliente en el fichero populate1
    Hacemos los mismos ejercicios que hicimos en mongoSH, pero con algunas breves modificaciones. (Explicado en el código)
    Como estamos trabajando con llamadas al servidor, necesitamos crear control de errores asíncronos. 
    .then: return ...
        Creamos, modificación, actualizamos, borramos o buscamos un user o post.
        Si hay error creamos un Error('mongo error') y si todo ha ido bien un mensaje de consola para poder visualizar un breve mensaje de confirmación.

    .catch: 
        Si ha habido algun error: si ha entrado en then que muestre el error personalizado que hemos creado (el que hemos lanzado); sino ha entrado en then que muestre el error que crea nuestra api (que recuerda que es un poco inteligible por eso el empeño de ir creandolos personalizados)

    .finally
        En el control de errores hay que añadir un .finally, el cual SIEMPRE se ejecutará independientemente si ha entrado en .cath o .then. En él cerramos conexion 

    Por culpa de .finally, el trabajo a realizar en .then lo metemos en un return. Ya que el servidor tardará lo que necesite. Con esto impedimos al finally ejecutarse hasta recibir respuesta del servidor (con el return encadenamos las promesas con el catch y el finally)

Desinstalamos en API mongoDB que acto seguido instalará mongoose. (Instalamos mongoose)
    Models.js
        Creamos este fichero para configurar el esquema que utilizara users y posts y los exportamos (POCO COMENTADO)
    Populate.js
        Importamos los esquemas de models, creamos conexion con la base de datos y hacemos ejercicios como anteriormente.( creación, eliminacion, actualización, busqueda de usuarios y posts)
        En los métodos hay breves modificaciones respecto a como trabájabamos con mongodb (explicado en el código)
        En el finally en vez de cerrar con close(), se cierra con disconnect()

Aplicamos a nuestras lógicas las modificaciones necesarias para que utilice la base de datos MongoDB
    registerUser.test: creamos una conexión a la base de datos con la que estamos trabajando y configuramos un control de errores asíncronos: .then introducimos el control de error sincronos que teníamos modificado brevemente, .catch para capturar errores de conexión y .finally para cerrar conexión
    (mejor explicado en el codigo y al final de este readme de la semana)
    registerUser: borramos todo menos las validaciones y retornamos la creación de un User como practicamos en el fichero populate, pero sin escribir nada en consola(ya que se escribirá en el control de errores de quien utilice la lógica)

    authenticateUser.test: parecido a registerUser.test pero como en el control síncrono que teníamos devolviamos userId, aqui lo meteremos de el .then de la llamada a la lógica (explicado mejor en el código)
    authenticateUser: parecido a la lógica de registerUser pero utilizamos findOne
        -primer return: utilizamos findOne, dentro del then lanzamos errores si el usuario y/o la contraseña introducido no son validas y además...
        -segundo return: dentro del primer return, dentro del .then, retornamos el user.id

    getUsername.test: nada nuevo que comentar.
    getUsername: lo hice primero sola utilizando findOne pero en el interior indicaba que se trataba de un _id. Manu lo hizo con findById.
        -return igual que authenticateUser pero devuelvo en el segundo return username

    createPost.test y createPost lo intenté, pero me daba error en author, me decía algo parecido a que no reconocía el formato


Comprensión de la creación de errores: 
    La sentencia throw se usa para lanzar una excepción (en el codigo donde se ha producido el error) y esta ser capturada por algun catch de cualquier pila de llamada.
    Pero en el caso del control de error de conexion (connect), del test de logic, no es necesario, ya que con tenerlo en la página con la que trabajo (donde se ha producido el error de conexión) es suficiente, ningún catch fuera lo va a necesitar. Por eso con un console.error para ver en el momento el error es suficiente.
        Este console.error, en el caso de no tener configurado ningún .catch en la promesa del .then de la conexion, capturaría ambos errores: el de conexión y el producido en el then

    Pero en el caso de crear un segundo .catch en la conexión para personalizar un mensaje de error de conexión, ya no habría ningun catch para capturar el error del .then de connection y tendría solo mi error personalizado (el cuál daría lugar a confusión porque me haría creer que es error de conexión cuando no lo es)

Copio y pego de versión test con .catch en .then y con doble .catch de connect para tener un mensaje personalizado en caso de error de conexion
    connect('mongodb://localhost:27017/test')
        .then(() => {
            try {
                return registerUser('Mos Quito', 'mos@quito', 'mosquito', '123123123')
                    .then(() => console.log('user registered'))
                    .catch(error => console.error(error))
            } catch (error) {
                console.error(error) 
            }
        })
        .catch(error => { throw new Error('Se ha producido un error de conexion!!!!') })
        .catch(error => { console.error(error.message) })
        .finally(() => disconnect())

Si no pongo la captura del error de .then de connect, habría que quitar el lanzamiento del error personalizado y simplemente deja el console.error, para que este tenga el posible error de conexión (Con el texto de error) y el posible error del registro del usuario
El código sería así
    connect('mongodb://localhost:27017/test')
        .then(() => {
            try {
                return registerUser('Mos Quito', 'mos@quito', 'mosquito', '123123123')
                    .then(() => console.log('user registered'))
            } catch (error) {
                console.error(error) 
            }
        })
        .catch(error => { console.error(error.message) })
        .finally(() => disconnect())

Si en el .catch de la lógica no hubiera creado un lanzamiento de error, el .then de connect entraría dentro de su .then y el control de errores no funcionaría
(lo he dejado comentado en el código)

La única diferencia que veo entre lanzar y no lanzar, es que lanzando te da más datos del error, se suele dar la línea donde se ha producido y lo puede capturar un .catch de cualquier página de código. Y si no lanzo escribo en consola cuando estoy en la pg que lo contiene y ya esa información se pierde si otra pg lo quiere

30/05/2025

Terminamos con todas las lógicas para que utilice la base de datos de Mongo
    createPost.test: nada nuevo que comentar. 
    createPost : 
        -primer return: creamos una validación de existencia de usuario, el cual lanzará un error y nos sacará del código si el usuario que quiere crear el post no existe
        -segundo return: dentro del primer return, creamos otro return, el que devolveremos con la creación de Posts(como hicimos en populate)

    getPosts.test: nada nuevo que comentar. 
    getPost: 
        -primer return: igual que createPost 
        -segundo return: dentro del primer return, dentro del .then, buscamos con find los posts correspondientes a ese usuario. Este find lo vamos a toquetear un poco:
            .select('-__v) indicamos que quite(por el menos) la propiedad v, que recuerda que la creaba automáticamente mongoose
            .populate('author','username') indicamos que en la propiedad author nos incluya la propiedad username
            .sort('-date') indicamos que ordene descendientemente(por el menos) a través de las fechas
            .lean() indicamos que nos traiga el objeto tal cual está en la BD, este será mutable
            Una vez hecho el find, en su control asíncrono, configuramos un catch que lance un error y en .then vamos a modificar como quiero que lo muestre.
                Creo un forEach que iterará en cada posts
                    Dentro creo la propiedad id que sustituirá a _id, la convierto a string y la borro
                    Si el post tiene un author_id entonces igual que antes, hago que se muestre author.id, sin el _ y lo borro
                    Creo la propiedad own, si el post con el que itero es del usario le saldrá true sino false
        -tercer return: dentro de segundo return, dentro del .then, justo debajo del forEach, devuelvo los postsFinalmente devuelvo los posts

        (si no funciona mirar si he borrado algun usuario que tenía creado algun post)

    removePost.test: nada nuevo que comentar. 
    removePost:
        -primer return: como los anteriores
        -segundo return: dentro del primer return, dentro del .then, vamos buscar si existe el post que queremos borrar (misma mecánica que hacemos con userId) pero además creamos un nuevo filtro que nos lance una excepción y nos saque del código si el userId no es dueño del postId. 
        -tercer return: dentro del segundo return, dentro del .then, creamos el borrado del post metiendo como parámetro el postId (recuerda que el userId se pasa como cabecera, no como parámetro)

Modificamos el fichero index.js de api
    Importamos connect para utilizarlo para conectarnos a la BD, esta conexión tendrá el .then con TODO el contenido que tenia este archivo y un catch con un console.error
    El contenido antiguo lo modifico brevemente solo en las llamadas a lógicas. Las cuales hay que crearles un control de errores asíncronos, con el mismo mecanismo que los test que creamos en la lógica (mejor comentado en el código)

Pasamos los tests curl a la api, modificando solo los userId y postId que necesitábamos


Finalmente, fuimos a la app.7 a hacer un breve cambio
    En el componente Post, indicamos que hemos cambiado en la logica getPost que en author ahora incluimos username y ese es el dato que necesitamos que muestre
    Teniamos esta linea dentro de article : <h3 className="font-bold">{post.author}</h3>
    y ahora la hemos cambiado a esta otra: <h3 className="font-bold">{post.author.username}</h3>

31/05/2025

Creamos carpeta stuff con código que explica la creación de constructoras y su uso (orden: demo, demo_continuacion y por ultimo error)

Creamos constructoras de errores en el fichero errors dentro de lógica. Los exportamos para importarlos en cada lógica.
Los utilizamos en todas las lógicas, modificamos la constructora que teníamos: Error, por la que mejor convenga
(Orden: register, authentication, getUserUsername, createPost, getPosts y deletePost)
En el index de la api manejamos todos los errores que tienen estado 500 y los controlamos con un handler
    En todos los middleware, añadimos next
    En este handler aprovechamos para modificar el estado a uno más correcto 
    (Explicaciones detalladas en el código)