export const data = {
  /**Inserta los usuarios en el localstorage como json */
  setUsers(users) {
    localStorage.users = JSON.stringify(users);
  },
  /**Obtiene los usuarios y los convierte a objeto */
  getUsers() {
    const users = JSON.parse(localStorage.users);
    return users;
  },
  /**Establece el contador de usuarios registrado y se almacena coo json en localstorage */
  setUsersCount(usersCount) {
    localStorage.usersCount = JSON.stringify(usersCount);
  },
  /**Obtiene el contador de usuarios del localstorage y lo convierte a objeto */
  getUsersCount() {
    return JSON.parse(localStorage.usersCount);
  },
  /**Establece los posts y los almacena en el localstorage en forma de json */
  setPosts(posts) {
    localStorage.posts = JSON.stringify(posts);
  },
  /**Obtiene los posts y los convierte de json a objeto */
  getPosts() {
    const posts = JSON.parse(localStorage.posts);
    return posts;
  },
  /**Establece el contador de post y lo guarda como numero en localstorage */
  setPostCount(postsCount) {
    localStorage.postsCount = JSON.stringify(postsCount);
  },
  /**Obtiene el contador de post del local storage y lo convierte a objeto */
  getPostCount() {
    return JSON.parse(localStorage.postsCount);
  },
  /**Establece el id del usuario y lo amacena en session storage */
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
