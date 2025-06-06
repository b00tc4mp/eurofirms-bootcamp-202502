// official errors //todo hereda de Error

const error = new Error('hola error')

const typeError = new TypeError('invalid name type')

const rangeError = new RangeError('invalid age value')

// ...

// custom errors

class ValidationError extends Error {
    constructor(message) {
        super(message) //lo enviaremos a la constructora Error
    }
}

const validationError = new ValidationError('invalid name type')

class DuplicityError extends Error {
    constructor(message) {
        super(message)
    }
}

const duplicityError = new DuplicityError('user already exists')

class NotFoundError extends Error {
    constructor(message) {
        super(message)
    }
}

const notFoundError = new NotFoundError('user not found')


class CredentialsError extends Error {
    constructor(message) {
        super(message)
    }
}

const credentialsError = new CredentialsError('wrong password')


class SystemError extends Error { //este lo usariamos para todos los casos que no pueden usar los anteriores
    constructor(message) {
        super(message)
    }
}

const systemError = new SystemError('mongo error')