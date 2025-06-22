import { createContext, useContext, useState, useEffect } from 'react';
import { logic } from '../logic';
import { data } from '../data';
const AuthContext = createContext();
const decodeRoleFromToken = () => {
  try {
    const token = data.getToken();
    if (!token) return null;

    const payloadBase64 = token.split('.')[1];
    const payloadJson = atob(payloadBase64);
    const payload = JSON.parse(payloadJson);

    return payload.role || payload.rol || null; // Adaptar según el nombre exacto del campo
  } catch (error) {
    console.error('Error al decodificar el token:', error);
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  //Hacemos uso de el useState para inicializar un estado el primer useState indica si el usuario esta logueado o no, y el segundo indica que rol tiene
  const [loggedIn, setLoggedIn] = useState(logic.isUserLoggedIn());
  const [rol, setRol] = useState();
  //Al hacer login se marca el primer useState a true y se obtiene el rol indicando que esta logueado y tiene un rol
  const login = () => {
    setLoggedIn(true);
    const role = decodeRoleFromToken();
    setRol(role);
  };
  // Al hacer logout establecemos el primer useState a false y el rol lo ponemos en nulo
  const logout = () => {
    setLoggedIn(false);
    setRol(null);
  };

  useEffect(() => {
    setLoggedIn(logic.isUserLoggedIn());
    setRol(decodeRoleFromToken());
  }, []);

  // devuelve true si el usuario está logueado y su rol es 'admin'
  const isAdmin = loggedIn && rol === 'administrator';
  //Llegados a este punto se le pasa los valores adecuados y puede usarse para sellar rutas
  return <AuthContext.Provider value={{ loggedIn, rol, isAdmin, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
