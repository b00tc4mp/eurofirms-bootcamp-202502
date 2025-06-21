export const data = {
  setToken(token) {
    sessionStorage.token = token;
  },

  getToken() {
    return sessionStorage.token;
  },
  setRol(rol) {
    sessionStorage.rol = rol;
  },

  getRol() {
    return sessionStorage.rol;
  },

  removeToken() {
    delete sessionStorage.token;
  },
};
