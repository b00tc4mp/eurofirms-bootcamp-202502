export const data = {
    setUserId(value) { //establece el userId en el sessionStorage
        sessionStorage.userId = value 
    }, 

    getUserId() { //obtiene el userId del sessionStorage
        return sessionStorage.userId 
    },

    removeUserId() { //elimina el userId del sessionStorage
        delete sessionStorage.userId 
    }
}