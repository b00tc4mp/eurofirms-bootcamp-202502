import { AuthorshipError, CredentialsError, DuplicityError, NotFoundError, SystemError, ValidationError, AuthorizationError } from 'com'

import jwt from 'jsonwebtoken'
const { JsonWebTokenError } = jwt

//Creamos y exportamos la constante errorHandler que contiene el manejador de errores
/*
Refactorizamos el código para mejorar su lectura
export const errorHandler = (error, request, response, next) => {
    if (error instanceof ValidationError)
        response.status(400).json({ error: error.constructor.name, message: error.message })
    else if (error instanceof Error)
        response.status(404).json({ error: error.constructor.name, message: error.message })
    else if (error instanceof NotFoundError)
        response.status(404).json({ error: error.constructor.name, message: error.message })
    else if (error instanceof CredentialsError)
        response.status(401).json({ error: error.constructor.name, message: error.message })
    else if (error instanceof AuthorshipError)
        response.status(403).json({ error: error.constructor.name, message: error.message })
    else if (error instanceof DuplicityError)
        response.status(409).json({ error: error.constructor.name, message: error.message })
    else if (error instanceof JsonWebTokenError)
        response.status(401).json({ error: AuthorizationError.name, message: error.message })
    else if (error instanceof SyntaxError && error.message.includes('JSON'))
        response.status(401).json({ error: AuthorizationError.name, message: 'invalid payload' })
    else
        response.status(500).json({ error: SystemError.name, message: error.message })
}
*/
export const errorHandler = (error, request, response, next) => {
    let status = 500, errorName = error.constructor.name, message = error.message

    if (error instanceof ValidationError)
        status = 400
    else if (error instanceof NotFoundError)
        status = 404
    else if (error instanceof CredentialsError)
        status = 401
    else if (error instanceof AuthorshipError)
        status = 403
    else if (error instanceof DuplicityError)
        status = 409
    else if (error instanceof JsonWebTokenError) {
        status = 401
        errorName = AuthorizationError.name
    } else if (error instanceof SyntaxError && error.message.includes('JSON')) {
        status = 401
        errorName = AuthorizationError.name
        message = 'invalid payload'
    } else
        errorName = SystemError.name

    response.status(status).json({ error: errorName, message })
}