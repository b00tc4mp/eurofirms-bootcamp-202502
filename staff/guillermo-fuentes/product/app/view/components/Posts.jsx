import { useEffect, useState } from 'react';

import { logic } from '../../logic';

import { Post } from './Post';
import { useContext } from '../../context';

export const Posts = () => {
  const { alert } = useContext();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
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
      console.error(error);

      alert(error.message);
    }
  };

  console.log('Posts -> render');

  return (
    <div className="flex flex-col items-center gap-6 p-4 max-w-xl mx-auto">
      {posts.map((post) => (
        <Post key={post.id} post={post} onPostDeleted={handlePostDeleted} />
      ))}
    </div>
  );
};
