app.6
2/5/25 - 3/5/25

Trabajamos con los posts
1. Cambiamos en la lógica de getPost.js que en vez de aparecer el id del usuario de cada post, aparezca su username. También creamos una propiedad llamada own que nos dirá su ese ese post es del usuario conectado en ese momento
2. En la vista Posts.jsx creamos el botón papelera: este se activara solo si own es true. Creamos su configuración, al clicarlo se llamara a un handle que llamara a la lógica de borrado de posts y a un handle de refrescado de posts
3. Creamos la lógica de removePost.js para que elimine de la base de datos el post del id recibido en su llamada y actualice la BD (importamos en él data y en index esta nueva lógica)
4. Separamos en dos ficheros: Posts(en plural) que será el mismo que antes, exceptuando el return que lo vamos a situar en Post(singular)
(En Posts importamos a Post y en Post importamos a logic)
(la versión anterior a la separación lo dejo en Posts.1.jsx)
Esta separación optimiza mi código ya que en posts plural es para el array posts y post en singular es para cada post

Creo la carpeta Stuff con dos carpetas:
destructuring
1. Creo los ficheros objects.js y arrays-n-objects.js con ejemplos para comprender destructuring con objetos
2. Lo aplicamos a nuestras view, dejo comentados todos las formas posibles que podria ponerse (todas las view excepto Posts que no trabaja con props)
methods_arrays
Creo los archivos en el siguiente orden (en todos, excepto en splice, creamos un for similar para comprender su funcionamiento)
1. forEach.js, 2.finds.js, 3.findIndex.js y 4.splice