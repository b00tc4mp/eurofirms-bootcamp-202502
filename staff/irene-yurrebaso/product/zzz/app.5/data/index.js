export const data = {
    //método para guardar en sessionStorage quién se ha conectado para que el dato permanezca
    setUserId(userId) {
        sessionStorage.userId = userId
    },

    //método para recuperar Id de usuario
    getUserId() {
        return sessionStorage.userId
    },

    //método para eliminar Id de usuario
    removeUserId() {
        delete sessionStorage.userId
    }
}
