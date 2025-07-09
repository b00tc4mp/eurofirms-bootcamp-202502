import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import { logic } from '../../logic';

export const Navbar = () => {
  const navigate = useNavigate();
  const { loggedIn, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(true);

  const handleLogoutClick = () => {
    try {
      logic.logoutUser();
      logout();
    } catch (error) {
      alert(error.message);
    }
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Botón para abrir/cerrar menú */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-4  z-50 bg-gray-200 text-gray-800 px-3 py-2 rounded-md shadow hover:bg-gray-300 transition ${
          isOpen ? 'left-50' : 'left-4'
        }`}
      >
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Sidebar */}
      <nav
        className={`bg-white shadow-md h-screen w-64 fixed top-0 left-0 p-6 flex flex-col justify-between transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div>
          <div
            className="text-3xl font-bold text-red-600 mb-10 cursor-pointer hover:opacity-80 transition"
            onClick={() => navigate('/home')}
          >
            🌟 App
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            {loggedIn && (
              <>
                <button
                  className="text-gray-700 text-left hover:text-blue-600 transition font-medium"
                  onClick={() => navigate('/users')}
                >
                  👤 Users
                </button>
                <button
                  className="text-gray-700 text-left hover:text-blue-600 transition font-medium"
                  onClick={() => navigate('/providers')}
                >
                  🏢 Providers
                </button>
                <button
                  className="text-gray-700 text-left hover:text-blue-600 transition font-medium"
                  onClick={() => navigate('/products')}
                >
                  📦 Products
                </button>
              </>
            )}
          </div>
        </div>

        {/* Auth buttons */}
        <div className="flex flex-col gap-3">
          {loggedIn ? (
            <button
              className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300 mb-4"
              onClick={handleLogoutClick}
            >
              Logout
            </button>
          ) : (
            <>
              <button
                className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                onClick={() => navigate('/register')}
              >
                Register
              </button>
              <button
                className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};
