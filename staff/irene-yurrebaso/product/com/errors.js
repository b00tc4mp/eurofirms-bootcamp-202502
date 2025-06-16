export class ValidationError extends Error {
    constructor(message) {
        super(message)
    }
}

export class DuplicityError extends Error {
    constructor(message) {
        super(message)
    }
}

export class NotFoundError extends Error {
    constructor(message) {
        super(message)
    }
}

export class CredentialsError extends Error {
    constructor(message) {
        super(message)
    }
}

export class AuthorshipError extends Error {
    constructor(message) {
        super(message)
    }
}

export class SystemError extends Error {
    constructor(message) {
        super(message)
    }
}

export class AuthorizationError extends Error {
    constructor(message) {
        super(message)
    }
}

//en el objeto errors, metemos todas las constructoras de errores propios que tenemos hasta el momento, tanto de lógica, como el último q se creo para api (AuthorizationError)
const errors = {
    ValidationError,
    DuplicityError,
    NotFoundError,
    CredentialsError,
    AuthorshipError,
    SystemError,
    AuthorizationError
}

export default errors