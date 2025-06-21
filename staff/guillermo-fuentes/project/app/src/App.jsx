import { useEffect } from 'react';
import { logic } from './logic';
import { Routes, Route, useNavigate, useLocation } from 'react-router';
import { Home } from './view/Home';
import { Register } from './view/Register';
import { Login } from './view/Login';
import { Users } from './view/Users';
import { ProtectedRoute } from './context/ProtectedRoute';
import { Navbar } from './view/Navbar';
export const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') return;
    try {
      const loggedIn = logic.isUserLoggedIn();
      console.log('el login es ' + loggedIn);
      if (loggedIn) {
        navigate('/users', { replace: true });
      } else {
        navigate('/home', { replace: true });
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }, [navigate, location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
