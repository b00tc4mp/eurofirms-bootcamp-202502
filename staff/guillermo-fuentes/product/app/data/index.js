export const data = {
  /**Establece el id del usuario y lo amacena en session storage, recibe 1 parametro
   * @param userId que representa el id de usuario
   */
  setUserId(userId) {
    sessionStorage.userId = userId;
  },

  /**Obtiene del session storage el id del usuario logueado */
  getUserId() {
    return sessionStorage.userId;
  },

  removeUserId() {
    delete sessionStorage.userId;
  },
};
