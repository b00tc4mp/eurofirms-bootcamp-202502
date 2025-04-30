import { data } from '../data';
//Recoger el identificador de cada post
export const editPost = (idPost, text) => {
  const posts = data.getPosts();
  const indice = posts.findIndex((post) => post.id === idPost);
  posts[indice].text = text;
  data.setPosts(posts);
};
