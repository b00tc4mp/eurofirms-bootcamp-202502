export const data = {
    setToken(userId) {
        sessionStorage.userId = userId
    },
    getToken() {
        return sessionStorage.userId
    },

    removeToken() {
        delete sessionStorage.userId
    }
}
//modificamos palabra UserId por Token