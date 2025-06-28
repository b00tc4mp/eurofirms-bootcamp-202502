app.2
Anterior al día 11 y 11/4/25 - 12/4/25

Anterior al día 11
    (comenzamos con React)

    1º Instalamos React y hacemos un breve ejemplo para ver su funcionamiento (manual en carpeta de instalación 3º documento)

    2º Creamos la carpeta view, dentro creamos archivos para las vistas del figma(Home, Register, Login y Landing)
        (Todo con extensión en los ficheros por jsx, que utiliza React)
        Exportamos una constante con una función cuyo nombre es el mismo que el componente.  
            Dentro hacemos un console.log para tener un control de que vista se ha pintado.
            Acto seguido hacemos el return: 
                Copiamos el html que nos proporciona el modo desarrollador del navegador (El navegador coge el código javascript del main de app.1 y lo traduce a html normal)
                Lo pondremos según corresponda en los nuevos componentes que hemos creado. 
                Hay que hacerle unas breves modificaciones: 
                    -	Los imput hay que cerrarlos con una barra: se cerraban asi > y ahora los vamos a cerrar asi />
                    -	Hay que cambiar los class por className y los for por htmlFor

    3º Modificamos el fichero app para que sea el encargado de manejar las vistas
        Borramos el contenido html que teníamos e indicamos que pinte los componentes
        (Dentro del return, recuerda que previamente habría que haber importado ese componente)
                <Landing/>
    (Main no lo tocamos, ya que pintará App tal como configuramos en el primer paso de app.2)


11/4/25 - 12/4/25
    Añadimos componentes y navegación de enlaces entre ellos
    4º Usamos la view de count para entender funcionamiento de useState (explicado en el código)

    5º Dejamos en comentarios el código que creamos en los pasos anteriores (2º y 3º) y procedemos a configurar navegación entre enlaces (explicado en el código)

    6º Cambiamos CSS a tailwindsCss () (manual en carpeta de instalación 4º documento)

    7º Creo yo, Manu lo hizo en stuff, destructuring-arrays.js para comprender funcionamiento de useState y formas de crear variables con destructuring

    Data y logic no se toca