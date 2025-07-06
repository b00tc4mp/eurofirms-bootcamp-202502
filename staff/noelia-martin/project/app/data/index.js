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
    idPacient: null //almacenará en memoria volatil el id del paciente con el que el doctor está trabajando
}