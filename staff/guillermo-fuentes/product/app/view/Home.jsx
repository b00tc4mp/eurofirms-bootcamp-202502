import { useEffect, useState } from 'react';
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import { logic } from '../logic';
import { Posts } from './components/Posts';
import { CreatePost } from './components/CreatePost';

export const Home = () => {
  const [username, setUsername] = useState('world');
  const [postId, setPostId] = useState(null);
  const navigate = useNavigate();

  console.log('Post ID: ' + postId);

  const handleCreatePostClick = () => navigate('/create-post'); // Navega a subruta
  const handleCancelCreatePostClicked = () => navigate('/posts'); // Vuelve a posts
  const handlePostCreated = () => navigate('/posts'); // Vuelve a posts tras crear
  const handleLogoutClick = () => {
    logic.logoutUser(); // Limpia la autenticación
    navigate('/landing');
  };

  useEffect(() => {
    try {
      logic
        .getUserUsername()
        .then((username) => {
          setUsername(username);
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

  console.log('Home->render');

  return (
    <div className="p-5">
      <i className="text-2xl">Logo</i>
      <div className="mt-2">
        <h1 className="text-xl mb-2 text-blue-600">¡Hola, {username}!</h1>
        <div className="flex justify-center gap-5">
          <button className="bg-black text-white px-2" type="button" onClick={handleCreatePostClick}>
            Crear Post
          </button>
          <button className="bg-black text-white px-2" type="button" onClick={handleLogoutClick}>
            Cerrar Sesión
          </button>
        </div>
      </div>
      <Routes>
        {/* <Route path="/" element={<Navigate to="posts" replace />} /> Redirige /home a /home/posts */}
        <Route path="/posts" element={<Posts postId={postId} />} />
        <Route
          path="/create-post"
          element={<CreatePost onCancelClicked={handleCancelCreatePostClicked} onPostCreated={handlePostCreated} />}
        />
      </Routes>
    </div>
  );
};
