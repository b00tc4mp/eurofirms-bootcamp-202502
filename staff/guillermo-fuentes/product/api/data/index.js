import fs from 'fs';

export const data = {
  /**Metodo que pasa de objeto a  JSON los usuarios y guarda el contenido de lo que reciba en un json recibe un parametro
   * @param users que es el usuario que se registra
   */
  setUsers(users) {
    const json = JSON.stringify(users, null, 2);
    //fs.mkdirSync('./data', { recursive: true });
    fs.writeFileSync('./data/users.json', json);
  },
  /**Metodo que obtiene los usuarios que estan almacenados en el json ademas de convertir el json a objeto */
  getUsers() {
    const json = fs.readFileSync('./data/users.json', 'utf-8');
    const users = JSON.parse(json);
    return users;
  },
  /**Metodo que pasa de objeto a  JSON el contador de usuarios y guarda el contenido de lo que reciba en un json recibe un parametro
   * @param usersCount que es el contador de usuarios
   */
  setUsersCount(usersCount) {
    const json = JSON.stringify(usersCount);
    fs.writeFileSync('./data/usersCount.json', json);
  },
  /**Metodo que obtiene el numero de usuarios que estan almacenados en el json ademas de convertir el json a objeto */
  getUsersCount() {
    const json = fs.readFileSync('./data/usersCount.json', 'utf-8');
    const count = JSON.parse(json);
    return count;
  },
  /**
   * Metodo que sirve para crear un post
   * @param {Array} posts  array de todos los posts que hay
   */
  setPosts(posts) {
    const json = JSON.stringify(posts);
    fs.writeFileSync('./data/posts.json', json);
  },
  /**
   * Obtiene los posts de la base de datos (archivo json)
   * @returns {Array} retorna el array de posts
   */
  getPosts() {
    const json = fs.readFileSync('./data/posts.json', 'utf-8');
    const posts = JSON.parse(json);
    return posts;
  },
  /**
   * Metodo que estable contador de post
   * @param {Int} postsCount constador de posts que hay en base de datos
   */
  setPostsCount(postsCount) {
    const json = JSON.stringify(postsCount);
    fs.writeFileSync('./data/postsCount.json', json);
  },
  /**
   * Obtiene el contador de todos los posts que hay en base de datos
   * @returns el contador de post
   */
  getPostsCount() {
    const json = fs.readFileSync('./data/postsCount.json', 'utf-8');
    const postsCount = JSON.parse(json);
    return postsCount;
  },
};
