// src/view/Navbar.jsx
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { logic } from '../logic';
export const Navbar = () => {
  const navigate = useNavigate();
  const { loggedIn } = useAuth();
  const { logout } = useAuth();
  const handleLogoutClick = () => {
    try {
      logic.logoutUser();

      logout();
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <div
          className="text-2xl font-bold text-red-600 cursor-pointer hover:opacity-80 transition"
          onClick={() => navigate('/home')}
        >
          🌟 App
        </div>

        {loggedIn && (
          <button
            className="text-gray-700 hover:text-blue-600 transition font-medium"
            onClick={() => navigate('/users')}
          >
            Usuarios
          </button>
        )}
      </div>

      <div className="flex gap-3">
        {loggedIn ? (
          <>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              onClick={handleLogoutClick}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              onClick={() => navigate('/register')}
            >
              Registrar
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
