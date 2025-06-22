import { useAuth } from './AuthContext';
import { Navigate } from 'react-router';
// Redirige a login si no está logueado
export const ProtectedRoute = ({ children }) => {
  const { loggedIn, rol } = useAuth();

  if (!loggedIn || rol !== import.meta.env.VITE_ROL_1) {
    return <Navigate to="/home" replace />;
  }

  return children;
};
