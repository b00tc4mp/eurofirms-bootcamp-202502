import { logic } from '../logic';
import { useEffect, useState } from 'react';
import { Posts } from './components/Posts';
import { CreatePost } from './components/CreatePost';

export const Home = ({ onUserLoggedOut }) => {
  const [username, setUsername] = useState('world');

  const [view, setView] = useState('posts');

  const [postId, setPostId] = useState(null);

  console.log('Post ID: ' + postId);

  const handleCreatePostClick = () => setView('create-post');

  const handleCancelCreatePostClicked = () => setView('posts');

  const handlePostCreated = () => setView('posts');

  const handleLogoutClick = () => onUserLoggedOut();

  useEffect(() => {
    try {
      logic
        .getUserUsername()
        .then((username) => {
          setUsername(username);
        })
        .catch((error) => {
          console.error(error);
          alert(error);
        });
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }, []);

  return (
    <div className="p-5">
      <i className="text-2xl">Logo</i>

      <div className="mt-2">
        <h1 className="text-xl mb-2 text-blue-600">Hello, {username}!</h1>
        <div className="  flex justify-center gap-55">
          <button className="bg-black text-white px-2" type="button" onClick={handleCreatePostClick}>
            Create Post
          </button>
          <button className="bg-black text-white px-2" type="button" onClick={handleLogoutClick}>
            Logout
          </button>
        </div>
      </div>

      {view === 'posts' && <Posts postId={postId} />}
      {view === 'create-post' && (
        <CreatePost onCancelClicked={handleCancelCreatePostClicked} onPostCreated={handlePostCreated} />
      )}
    </div>
  );
};
