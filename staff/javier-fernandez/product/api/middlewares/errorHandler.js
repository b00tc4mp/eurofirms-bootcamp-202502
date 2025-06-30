import { AuthorshipError, CredentialsError, DuplicityError, NotFoundError, SystemError, ValidationError, AuthorizationError } from 'com'
import jwt from 'jsonwebtoken'

const { JsonWebTokenError } = jwt

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