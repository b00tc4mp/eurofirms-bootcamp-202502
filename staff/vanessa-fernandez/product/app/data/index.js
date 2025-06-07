export const data = {
    

    setToken(token) { 
        sessionStorage.token = token
    },

    getToken() { 
        return sessionStorage.token
    },

    removeToken() { // metodo para eliminar un userId, lo usamos en el metodo logout para volver a null el userId
        delete sessionStorage.token
    }
}

