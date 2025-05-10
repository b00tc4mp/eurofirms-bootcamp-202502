import { data } from '../data';
/**
 * Obtiene todos los posts de los usuarios en el sistema
 *
 * @returns {[{
 * id: string,
 * author: string,
 * image: string,
 * text: string,
 * date: Date
 * }]}
 */
export const getPosts = () => {
  const posts = data.getPosts().toReversed();
  const users = data.getUsers();
  const userId = data.getUserId();
  posts.forEach((post) => {
    const authorId = post.author;
    /**Esta linea lo que hace es que toma el array de usuarios y con el metodo find()... busca al usuario y
     * lo relaciona con su post esto permite saber de quien es el post
     */
    const user = users.find((user) => user.id === authorId);

    const username = user.username;

    post.author = username;
    /**Propiedad calculada que comprueba si el authorId es igual al userId si esto se cumple indica que es dueño del post. El authorId es obtenido de cada post ya que en cada post tiene un author y esta propiedad tiene el valor del id de usuario. El userId representa a un usuario logueado y como cada usuario tiene una propiedad id pues al ser iguales es el propietario del post */
    post.own = authorId === userId;
  });
  return posts;
};
