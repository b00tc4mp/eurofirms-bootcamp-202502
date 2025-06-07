export const data = {
    

    setUserId(userId) { // usamos un setter para setear(modificar) userId en sessionStorage y no perder datos al recargar
        sessionStorage.userId = userId
    },

    getUserId() { // usamos un getter para retornar el dato que almacena sessionStorage en userId
        return sessionStorage.userId
    },

    removeUserId() { // metodo para eliminar un userId, lo usamos en el metodo logout para volver a null el userId
        delete sessionStorage.userId
    }
}

