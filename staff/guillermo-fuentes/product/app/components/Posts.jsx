import { logic } from '../logic';
import { useEffect, useState } from 'react';
export const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    try {
      const posts = logic.getPosts();
      setPosts(posts);
    } catch (error) {
      alert(error.message);
    }
  }, []);
  console.log('Posts->render');
  return (
    <>
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <h3>{post.author}</h3>
            <img src={post.image} />
            <time>{post.date}</time>
          </article>
        );
      })}
    </>
  );
};
