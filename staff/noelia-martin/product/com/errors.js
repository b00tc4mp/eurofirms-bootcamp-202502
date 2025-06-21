class ValidationError extends Error {
    constructor(message) {
        super(message)
    }
}

class DuplicityError extends Error {
    constructor(message) {
        super(message)
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super(message)
    }
}

class CredentialsError extends Error {
    constructor(message) {
        super(message)
    }
}

class AuthorshipError extends Error {
    constructor(message) {
        super(message)
    }
}

class SystemError extends Error {
    constructor(message) {
        super(message)
    }
}

class AuthorizationError extends Error {
    constructor(message) {
        super(message)
    }
}
//En este fichero ponemos todas las constructoras de errores propios que tenemos hasta el momento, tanto de logica, como el último de se creo para api(AuthorizationError)

//exportamos todas las constructoras a través del objeto errors
//Podríamos haberlas exportado una a una pero he preferido desestructurarlo en el index y exportarlas individualmente allí (Manu lo hizo aqui)
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
//manu exportó este objeto por defecto. Esto se realiza cuando se desea exportar un único valor desde un módulo.
// La única diferencia respecto a como lo hemos hecho hasta ahora es que cuando otros módulos lo importen pueden hacerlo sin utilizar llaves y podríamos nombrarlo como quisieran

//No es obligatorio exportarlo por defecto, podríamos exportarlo normal. Lo dejo por defecto para probar su funcionamiento