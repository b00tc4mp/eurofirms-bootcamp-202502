export const data = {
    setToken(token) {
        sessionStorage.token = token
    },
    getToken() {
        return sessionStorage.token
    },

    removeToken() {
        delete sessionStorage.token
    },
    setTokenFamily(tokenFamily) {
        sessionStorage.tokenFamily = tokenFamily
    },
    getTokenFamily() {
        return sessionStorage.tokenFamily
    },

    removeTokenFamily() {
        delete sessionStorage.tokenFamily
    },
    setIsDoctor(isDoctor) {
        sessionStorage.isDoctor = JSON.stringify(isDoctor);
    },
    getIsDoctor() {
        return sessionStorage.isDoctor
    },
    removeIsDoctor() {
        delete sessionStorage.isDoctor
    }
}