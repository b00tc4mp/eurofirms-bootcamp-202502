//Importo el objeto errors y lo desestructuro
import errors from './errors.js'
const { ValidationError, DuplicityError, NotFoundError, CredentialsError, AuthorshipError, SystemError, AuthorizationError } = errors
/*
Funcionaría igual renombrando directamente el objeto, sin necesidad de la palabra clave as
import erroreschulos from './errors.js'
const { ValidationError, DuplicityError, NotFoundError, CredentialsError, AuthorshipError, SystemError, AuthorizationError } = erroreschulos

Como ves se llama al objeto sin llaves, en las exportaciones por defecto son opcionales
*/

//importo el objeto validate
import { validate } from './validate.js'

//Una vez tengo en este index el objeto validate, errors y todas las constructoras, puedo procedo a exportarlas
export { errors, validate, ValidationError, DuplicityError, NotFoundError, CredentialsError, AuthorshipError, SystemError, AuthorizationError }
/*
El objeto errors voy a utilizarlo en el control de errores de las lógicas de app, asi que voy incluirlo en mi exportación.
Podría crear la variable errors directamente en cada pagina de codigo con el contenido de las constructoras (habría que importar previamente TODAS las constructoras existentes), pero exportandolo directamente desde aqui es mas corto. Sería de la siguiente manera:
'''
import { validate, ValidationError, DuplicityError, NotFoundError, CredentialsError, AuthorshipError, SystemError, AuthorizationError } from 'com'
const errors = { ValidationError, DuplicityError, NotFoundError, CredentialsError, AuthorshipError, SystemError, AuthorizationError }
'''
*/


//Otras manera de hacerlo
/*
Como lo hizo Manu: 
Recuerda Manu en el fichero errors.js exportó una a una cada constructora y además hizo una exportación por defecto del objeto errors
'''
export * from './errors.js'
export * from './validate.js'

import errors from './errors.js'
export { errors }
'''
Las últimas dos líneas son necesarias ya que es una exportación por defecto. Si hubiera exportado errors normal, no sería necesario, estarían incluido en el asterisco
*/

/*
También funcionaría asi:
Exportamos directamente el fichero validate.js (utilizando los asteriscos exportamos TODO el contenido de esos ficheros)
Hay dos maneras que funcionan exactamente igual
export * from './validate.js' ||||  export {validate} from './validate.js'
*/