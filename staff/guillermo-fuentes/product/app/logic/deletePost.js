import { data } from '../data';
//Recoger el identificador de cada post
export const deletePost = (idPost) => {
  const posts = data.getPosts();
  const indice = posts.findIndex((post) => post.id === idPost);
  if (indice !== -1) {
    posts.splice(indice, 1);

    data.setPosts(posts);
  }
};
