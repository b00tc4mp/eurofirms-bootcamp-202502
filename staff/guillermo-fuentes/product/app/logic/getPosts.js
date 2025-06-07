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
  // posts.forEach((post) => {
  //   const authorId = post.author;
  //   /*
  //   Esta linea lo que hace es que toma el array de usuarios y con el metodo find()... busca al usuario y
  //   lo relaciona con su post esto permite saber de quien es el post
  //    */
  //   const user = users.find((user) => user.id === authorId);

  //   const username = user.username;

  //   post.author = username;

  //   /*
  //   Propiedad calculada que comprueba si un post es tuyo, esto se consigue de esta forma:
  //   la variable authorId contiene el valor de una propiedad que tiene cada post esa propiedad es author
  //   la variable userId hace referencia a un metodo que obtiene el id de usuario actual este id se establece
  //   en el momento que un usuario realiza el login y dentro de login se llama a setUserId para estabacer el
  //   id de usuario y luego trabajar con el y como hay una relacion entre el array de posts y users pues se puede
  //   hacer esta asociacion esto permite entre otras cosas que un usuario no pueda eliminar un post de otro
  //   */

  //   post.own = authorId === userId;
  // });
  // return posts;
  return fetch('http://localhost:8080/posts', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${data.getToken()}`,
    },
  })
    .catch((error) => {
      throw new Error('connection error');
    })
    .then((response) => {
      const { status } = response;
      if (status === 200)
        return response
          .json()
          .catch((error) => {
            throw new Error('json error');
          })
          .then((posts) => {
            console.log('Post recibidos', posts);

            return posts;
          });

      return response
        .json()
        .catch(() => {
          throw new Error('json error');
        })
        .then((body) => {
          const { error, message } = body;
          throw new Error(message);
        });
    });
};
