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
      const posts = logic.getPosts();
      setPosts(posts);
      console.log('useEffect');
      console.log(posts);
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const handlePostDeleted = () => {
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
        <Post post={post} onPostDeleted={handlePostDeleted} />
      ))}
    </>
  );
};
