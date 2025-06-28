app.11
21/06/25

Contextos
    Permite el paso de parámetros desde un componente principal a cualquier otro sin necesidad de usar props
    (Independientemente que sean hijos, nietos...)

    Creamos un fichero en app, context.js, en él creamos el componente Context y una función llamada useContext que utilizará ese componente

    En app.jsx importamos el componente Context y en el return le proveemos de un objeto(a Context) con las funciones encargadas de despertar las cajitas alert y confirm

    En todos los componentes, dejamos de usar las props de alert y/o confirm para utilizar el objeto de Context(hay que importarlo), que desestructurandolo contiene alert y confirm

    En todos los componentes (incluido app) dejamos de pasar a nuestros hijos las props alert y/o confirm

Comentarios detallados en context.js, App.jsx, Post.jsx y Posts.jsx, en el resto de componentes son muy breves