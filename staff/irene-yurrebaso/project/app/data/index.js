export const data = {
    setToken(token) {
        sessionStorage.token = token
    },
    
    getToken() {
        return sessionStorage.token
    },

    removeToken() {
        delete sessionStorage.token
    }
}