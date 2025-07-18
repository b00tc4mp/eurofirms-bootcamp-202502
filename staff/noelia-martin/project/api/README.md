Versión 1 de API

1º Creo dos modelos: 
    User : almacena los usuarios de la aplicaciones usando roles (regular si es Paciente y doctor si es Doctor)
    Child: almacena los input de la aplicación (todos, los de paciente y doctor)

La idea a implementar es: 
    - Un User Regular es un usuario controlado por un adulto creado para un niño en concreto.
    Gracias a ese usuario tendrá acceso a un Child, el cuál es un modelo con los input que contiene información del niño. Unos input se rellenará entre el adulto(el padre) y un doctor.
    - Un user Doctor es un usuario para el doctor el cuál a través del NUHSA del paciente accederá al Child de es paciente y rellenará los input que le corresponda.


2º Role Doctor
    Los doctores no se podrán registrar, en data creo set-roles que coge un usuario ya registrado y lo hace doctor. Esto SOLO lo hará el administrador de la aplicación. (ejecutando con node ese fichero)


3º Creo lógicas:
    -registerUser: Registra un usuario para el paciente (el role lo configura por defecto models como regular)
    -authenticateUser: Autentica independientemente del role que tenga el usuario y devuelve un token con su id
    -getChoosePacient: Utilizada solo por el doctor. Se introduce un NUHSA y devuelve un token con su id correspondiente
    -getNamePacient: Se introduce un id y devuelve name


4º Creo rutas y todos los test


Esta versión se crea modificando la anterior, todas las pequeñas configuraciones ya están implementadas
(middlewares, routes, token, errores con componente com, env ...)