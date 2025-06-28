api.4
14/06/25 y 21/06/25
 
Mismo contenido README para Api.4 y App.9
14/06/25

    Para estas versiones voy a crear un componente COM que almacena los manejos de errores.

    1º Creo la carpeta COM en product e indico que actúe de paquete node (situados dentro: npm init --yes  )
    En el package-json que se ha creado indico que será “type”:”module” y usará la versión 0.0.0

    2º Creo el fichero errors para almacenar todas las constructoras de errores que tenemos, tanto de lógica de api y de api (carpeta raíz de api)
    (app utiliza los mismos errores, no hay ninguno nuevo que añadir) 

    3º Creo el fichero validate para almacenar todos los errores síncronos, es decir, los errores de validación de campos. Estos errores se configuraron en la versión anterior para que utilizara la constructora propia validationError, así que necesitamos importar el nuevo fichero que contiene esa constructora (el del paso anterior) 

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

Contenido README solo para esta api 
21/06/25

    Creo index1.js para guardar el código de la semana pasada

    Trabajaremos sobre el fichero index.js y crearemos varias carpetas y archivos: vamos para separar las rutas de users y posts y los middleware de jsonBodyParser y errorHandler, para reducir el tamaño de index
    Creamos la carpeta middlewares que almacenará jsonBodyParser y errorHandler (refactorizado)
    Creamos la carpeta routes que almacenará las rutas de users y posts
    (Explicaciones en el código)