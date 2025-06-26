import { AuthorshipError, CredentialsError, DuplicityError, NotFoundError, SystemError, ValidationError, AuthorizationError } from 'com'
import jwt from 'jsonwebtoken'

const { JsonWebTokenError } = jwt

//middleware o handle de express para manejar errores
//el parametro next permite llamar al siguiente manejador de ruta
export const errorHandler = (error, request, response, next) => {
    //por defecto ponemos el error mas 'feo', y tambien por defecto el nombre y mensaje de la constructora 'error' (q se pasa por parámetro), salvo q se indique lo contrario en los 'if'
    let status = 500, errorName = error.constructor.name, message = error.message

    if (error instanceof ValidationError)
        status = 400

    else if (error instanceof CredentialsError)
        status = 401
    else if (error instanceof AuthorshipError)
        status = 403
    else if (error instanceof NotFoundError)
        status = 404
    else if (error instanceof DuplicityError)
        status = 409
    else if (error instanceof JsonWebTokenError) {
        //antes: response.status(401).json({ error: AuthorizationError.name, message: error.message })
        status = 401
        error = AuthorizationError.name
    } else if (error instanceof SyntaxError && error.message.includes('JSON')) {
        //antes: response.status(401).json({ error: AuthorizationError.name, message: 'invalid payload' })
        status = 401
        errorName = AuthorizationError.name
        message = 'invalid payload'
    } else
        //para evitar q nos ponga un nombre de constructora q no conocemos, por defecto ponemos SystemError
        errorName = SystemError.name

    //antes: response.status(500).json({ error: SystemError.name, message: error.message })
    //ahora sintetizamos con las variables
    response.status(status).json({ error: errorName, message })
}