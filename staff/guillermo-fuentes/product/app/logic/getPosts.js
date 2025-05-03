import { data } from '../data';
export const getPosts = () => {
  const posts = data.getPosts().toReversed();
  const users = data.getUsers();
  const userId = data.getUserId();
  posts.forEach((post) => {
    const authorId = post.author;

    const user = users.find((user) => user.id === authorId);

    const username = user.username;

    post.author = username;
    //En post.own se guarda el resultado de comparar authorId === userId; y el resultado de esa comparacion
    // sera un booleano true o false y esto sirve para mostrar o no cosas segun el usuario que seamos a esto recibe el nombre de propiedad calculada
    post.own = authorId === userId;
  });
  return posts;
};
