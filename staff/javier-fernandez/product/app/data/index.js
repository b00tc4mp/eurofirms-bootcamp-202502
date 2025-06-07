export const data = {
    settoken(token) {
        sessionStorage.token = token 
    }, 

    getToken() {
        return sessionStorage.token 
    },

    removeToken() {
        delete sessionStorage.token 
    }
}