import { useLoggedIn } from "../hooks/useLoggedIn";
import { Navigate } from "react-router";
import { useRole } from "../hooks/useRole";
// Redirige a login si no está logueado
export const ProtectedRoute = ({ children }) => {
  const loggedIn = useLoggedIn();

  const { isAdmin } = useRole();

  if (!loggedIn || !isAdmin) {
    return <Navigate to="/home" replace />;
  }

  return children;
};
