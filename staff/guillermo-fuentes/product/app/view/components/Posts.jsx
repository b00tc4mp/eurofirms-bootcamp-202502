import { logic } from '../../logic';
import { useEffect, useState } from 'react';
import { Post } from './Post';
export const Posts = () => {
  const [posts, setPosts] = useState([]);

  console.log('useState');
  console.log(posts);

  //useEffect siempre  se ejecuta al menos 1 vez cuando carga el componente y tambien se ejecutara cuando hay un cambio
  //dentro del array

  useEffect(() => {
    try {
      logic
        .getPosts()
        .then((posts) => {
          console.log('posts obtenidos');
          setPosts(posts);
        })
        .catch((error) => {
          console.error(error);
          alert(error.message);
        });

      console.log('useEffect');
      console.log(posts);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }, []);

  const handlePostDeleted = () => {
    try {
      logic
        .getPosts()
        .then((posts) => {
          setPosts(posts);
        })
        .catch((error) => {
          console.error(error);
          alert(error.message);
        });
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
  const handlePostEdited = () => {
    try {
      const posts = logic.getPosts();

      setPosts(posts);
    } catch (error) {
      alert(error.message);
    }
  };
  console.log('Posts->render');

  return (
    <>
      {posts.map((post) => (
        <Post post={post} onPostDeleted={handlePostDeleted} onPostEdited={handlePostEdited} />
      ))}
    </>
  );
};
