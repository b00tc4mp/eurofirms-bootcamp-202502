import { useEffect, useState } from "react";
import { logic } from "./logic";
import { Routes, Route, useNavigate, useLocation } from "react-router";
import { Home } from "./view/Home";
import { Register } from "./view/Register";
import { Login } from "./view/Login";
import { Users } from "./view/Users";
import { Providers } from "./view/Providers";
import { ProtectedRoute } from "./context/ProtectedRoute";
import { Navbar } from "./view/components/Navbar";
import { Alert } from "./view/components/Alert";
import { Confirm } from "./view/components/Confirm";
import { Context } from "./context/context";
import { AddProvider } from "./view/AddProvider";
import { Products } from "./view/Products";
import { AddProduct } from "./view/AddProduct";
import { useAuth } from "./context/AuthContext";
export const App = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");
  const [confirmAction, setConfirmAction] = useState(null);
  const { loggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (!loggedIn) {
    navigate("/login");
  }
  useEffect(() => {
    if (location.pathname !== "/") return;
    try {
      const loggedIn = logic.isUserLoggedIn();
      console.log("the login is " + loggedIn);
      if (loggedIn) {
        navigate("/users", { replace: true });
      } else {
        navigate("/home", { replace: true });
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }, [navigate, location.pathname]);
  const handleAlertAccepted = () => setAlertMessage("");

  const handleAcceptConfirm = () => {
    setConfirmMessage("");

    confirmAction.resolve(true);
  };

  const handleCancelConfirm = () => {
    setConfirmMessage("");

    confirmAction.resolve(false);
  };

  const handleShowConfirm = (message) => {
    setConfirmMessage(message);

    return new Promise((resolve) => {
      setConfirmAction({ resolve });
    });
  };
  return (
    <Context.Provider
      value={{
        alert: setAlertMessage,
        confirm: handleShowConfirm,
      }}
    >
      {alertMessage && <Alert message={alertMessage} onAccepted={handleAlertAccepted} />}

      {confirmMessage && (
        <Confirm message={confirmMessage} onCancelled={handleCancelConfirm} onAccepted={handleAcceptConfirm} />
      )}
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addProvider" element={<AddProvider />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Context.Provider>
  );
};

export default App;
