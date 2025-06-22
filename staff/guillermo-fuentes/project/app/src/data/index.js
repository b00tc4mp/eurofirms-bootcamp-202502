export const data = {
  setToken(token) {
    sessionStorage.token = token;
  },

  getToken() {
    return sessionStorage.token;
  },

  removeRol() {
    delete sessionStorage.token;
  },
  removeToken() {
    delete sessionStorage.token;
  },
};
