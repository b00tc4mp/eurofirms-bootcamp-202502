14/06/25
 
Api.4 y App.9

Para estas versiones voy a crear un componente COM que almacena los manejos de errores.

1º Creo la carpeta COM en product e indico que actúe de paquete node (situados dentro: npm init --yes  )
En el package-json que se ha creado indico que será “type”:”module” y usará la versión 0.0.0

2º Creo el fichero errors para almacenar todas las constructoras de errores que tenemos, tanto de lógica de api y de api (carpeta raíz de api)
(app utiliza los mismos errores, no hay ninguno nuevo que añadir) 

3º Creo el fichero validate para almacenar todos los errores síncronos, es decir, los errores de validación de campos. Estos errores se configuraron en la versión anterior para que utilizara la constructora propia validationError, asi que necesitamos importar el nuevo fichero que contiene esa constructora (el del paso anterior) 

4º Exportaciones e importaciones
    Exportación de validate.js: creo y exporto el objeto validate con todos los métodos
    Exportación de errors.js: creo y exporto el objeto errors con todas las constructoras
    Index.js: 
        Hay varias maneras de configurarlo, explicados en el código. 
        La que he dejado consiste en la exportación de validate, errors y todas las constructoras utilizando destructuring

5º Tanto en api como en app indico que utilice el paquete com : npm i ../com

6º Breve modificación en las lógicas 
Para errores síncronos: importo validate y modifico todos los if por el método que le corresponde
Ejemplo: 
   // if (typeof username !== 'string') throw new ValidationError('invalid username type')
   // if (username.length < 3) throw new ValidationError('invalid username min length')
   // if (username.length > 20) throw new ValidationError('invalid username max length')
    validate.username(username)

Para errores asíncronos, ya se configuro en la anterior versión, la única diferencia que ahora exportaremos desde com 
    En API: modificamos importación en todas las lógicas y en el index
    En APP: modificamos importación en todas las lógicas y además hacemos una breve modificación en el último catch del control de errores asíncrono, éste lanzará cualquier constructora según sea el error. En el caso de que no exista en nuestros errores propios lanzará un SystemError


Solo en app: 

Tocamos view de login la parte de las alertas para dar un WARN o un ERROR según la constructora que corresponda. 
Modifiqué register y createPost por mi cuenta

React Route
Es una librería de JavaScript para React que permite implementar la navegación entre diferentes vistas (componentes) dentro de una aplicación web de una sola página

1º Lo instalamos: npm i react-router
2º Modificamos el main.jsx y el index.html:
    Renombramos el fichero para que se llame index que es lo más habitual y en el html modificamos la src para que sepa el cambio de nombre.
    Importamos el componente BrowserRouter, el cuál se utiliza para habilitar el enrutamiento del lado del cliente y envolvemos la aplicación en él.
3º Configuramos la app para que utilice React Route
    Dejamos de utilizar los estados para poner useNavigate
    Eliminamos el useEffect que nos cambiaba a la vista Home si habia un usuario conectado, lo dejamos directamente en el código para que se ejecute durante el renderizado. (NO ES UNA BUENA PRACTICA)
    Metemos el contenido del return en el contenedor Routes (este agrupará múltiples Route y gestionará la logica de enrutamiento)
    Cambio view por Route y configuramos ternarios que controlen las rutas a mostrar segun si hay algún usuario conectado
    (Todo bien detallado en el código)