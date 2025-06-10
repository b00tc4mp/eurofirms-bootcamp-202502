import { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Home } from './view/Home';
import { Landing } from './view/Landing';
import { Login } from './view/Login';
import { Register } from './view/Register';
import { logic } from './logic';

export const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // No redirigir si estamos en /login o /register
    if (location.pathname === '/login' || location.pathname === '/register') {
      return;
    }

    try {
      const loggedIn = logic.isUserLoggedIn();
      console.log('el logedin es ' + loggedIn);
      if (loggedIn) {
        navigate('/posts', { replace: true });
      } else {
        navigate('/landing', { replace: true });
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }, []); // Array vacío para ejecutar solo al montar

  console.log('App->render');

  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Home />} /> {/* Soporta subrutas */}
    </Routes>
  );
};
