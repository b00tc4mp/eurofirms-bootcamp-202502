app.4

(Podría haberla dejado en la versión 3 pero como meto muchos comentarios he preferido separarlas)

Versión React con completa navegación (realizado en app.3) y con una home más completa, la cuál tiene un mensaje de bienvenida personalizado y varios post de diferentes usuarios
Para crear todo esto hemos tenido que almacenar todos los usuarios, tanto los que están en la base de datos(data.js) como los nuevos registrados(que se siguen eliminando al refrescar la pg). Se han almacenado para saber que usuario es el conectado y darle la bienvenida

También hemos creado el componente Posts con varios post que mostrar una vez se han logueado los usuarios (independientemente de que usuario sea)
Se ha necesitado crear un identificador único, con un contador, para cada usuario y cada post, esto ha conllevado varios cambiamos en nuestra lógica y en nuestro data
En data hemos implementado el contenido de nuestros posts

Ficheros modificados: (no recuerdo orden)
-	View de Home y Posts (documentados en el código)
-	Data, almacenaremos más objetos
    •	Un contador para users el cual incrementará según se vayan registrando nuevos usuarios.
    •	Cambiamos la forma de registrar los dos usuarios que teníamos en la versión anterior (Noelia y David), ahora utilizaremos push
    •	Idem pero con posts, creamos el objeto posts y postsCount y misma mecánica
    •	Por último creamos userId que comenzará con un contenido null, el cual la lógica cambiará según el usuario que esté conectado en ese momento. (sirve para almacenar el userId del usuario conectado) 
-	Logic, creamos tres nuevas funciones. 
    •	getUserUsername: devuelve el username del usuario conectado sabiendo el userId (para utilizarlo en el mensaje de bienvenida)
    •	logoutUser: borra el contenido de userId, utilizado cuando el usuario cierre sesión
    •	getPost: devuelve todos los posts, de manera inversa ya que normalmente son los últimos posts los que deben aparecer primero
