import { createContext, useContext, useState, useEffect } from "react";
import { logic } from "../logic";
import { data } from "../data";

const AuthContext = createContext();

const decodeUserFromToken = () => {
  try {
    const token = data.getToken();
    if (!token) return null;

    const payloadBase64 = token.split(".")[1];
    const payloadJson = atob(payloadBase64);
    const payload = JSON.parse(payloadJson);

    return {
      id: payload.sub,
      role: payload.role,
    };
  } catch (error) {
    console.error("Error al decodificar el token:", error);
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(logic.isUserLoggedIn());
  const [rol, setRol] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const login = () => {
    setLoggedIn(true);
    const user = decodeUserFromToken();
    if (user) {
      setRol(user.role);
      setCurrentUser(user);
    }
  };

  const logout = () => {
    setLoggedIn(false);
    setRol(null);
    setCurrentUser(null);
  };

  useEffect(() => {
    setLoggedIn(logic.isUserLoggedIn());
    const user = decodeUserFromToken();
    if (user) {
      setRol(user.role);
      setCurrentUser(user);
    }
    console.log("Context auth activado");
  }, []);

  const isAdmin = loggedIn && rol === import.meta.env.VITE_ROL_1;

  return (
    <AuthContext.Provider value={{ loggedIn, rol, isAdmin, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
