//ahora trabajamos con el token en sessionStorage (en vez de userId)
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
