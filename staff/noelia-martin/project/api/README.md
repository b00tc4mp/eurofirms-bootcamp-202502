Versión 1 de API

1º Instalo y preparo todo lo necesario para hacer funcionar com y api
    Fuera de API: 
        - com -> en la carpeta de project creo com, indico que sea un paquete y lo configuro con todos los controladores de errores que voy a necesitar.

    En API:
        - Indico que sea un paquete. 
        - Instalo express, mongoose, bcryptjs, jwt, cors y com
        - Modifico el fichero package-json para que utilice la versión 0.0.0 e indico que es type:module.
        - Creo la base de datos test-ChildHealthDocument.
        - Creo la carpeta data con models y populate para comprobar que funciona correctamente.

2º Configuro la primera parte de api (sin posibilidad de integrar en app los input de child)
    - Creo dos modelos en data: 
        User: almacena los usuarios de la aplicaciones usando roles regular y doctor
        Child: almacena los input de la aplicación (todos, los de regular y doctor)

    La idea a implementar es: 
        - Un User Regular es un usuario controlado por un adulto creado para un niño en concreto (para un paciente). 
            Un User Regular tendrá asignado un Child, el cuál es un modelo con los input que contiene información del niño. 
            Los input se rellenarán entre el usuario regular y el usuario doctor.
        - Un user Doctor es un usuario para el doctor, el cuál a través del NUHSA del paciente accederá a su Child y rellenará los input que le corresponda.

    - Role Doctor
        Los doctores no se podrán registrar.
        En data creo set-roles que coge un usuario ya registrado y modifica su role a doctor. Esto SOLO lo hará el administrador de la aplicación. (Ejecutando con node ese fichero)

    - Creo lógicas:
        -registerUser: Registra un usuario para el paciente (el role lo configura por defecto models como regular)
        -authenticateUser: Autentica independientemente del role que tenga el usuario y devuelve un token con su user.id y user.role
        -getChoosePacient: Utilizada solo por el doctor. Se introduce un NUHSA (id.healthCareNumber) y devuelve un token con su user.id correspondiente
        -getNamePacient: Se introduce un user.id y devuelve user.name
        En cada lógica implemento un pequeño test js, dentro de la misma carpeta de lógica.

    - Creo rutas y todos los test sh en la carpeta test

    - Creo y configuro .env con las variables MONGO_URL, PORT y JWT_SECRET.

    - Creo y configuro la carpeta middlewares con errorHandler(controlador de errores de index de api) y jsonBodyParser.

    
Me voy a app y la configuro hasta llegar a la home con un mensaje de bienvenida personalizado utilizando lógicas de api.


3º Configuro la segunda parte de api (configuración completa, en app se podrá crear los formularios de cada tipo de usuario y sus input se almacenarán en Child)
......