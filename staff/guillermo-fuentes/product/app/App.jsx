import { Home } from './view/Home';
import { Landing } from './view/Landing';
import { Login } from './view/Login';
import { Register } from './view/Register';
import { useState, useEffect } from 'react';
import { logic } from './logic';
export const App = () => {
  //View es el valor, y setView es la funcion para modificar el valor de view. Luego pones useState() y ha esto se le proporciona un valor inicial
  const [view, setView] = useState('landing');
  //Aqui es donde modificamos el valor de la variable view haciendo uso de setView
  const handleRegisterClick = () => setView('register');
  const handleLoginClick = () => setView('login');
  const handleUserRegistered = () => setView('login');
  const handleLoginUser = () => setView('home');
  const handleLogout = () => setView('landing');
  useEffect(() => {
    try {
      const loggedIn = logic.isUserLoggedIn();
      console.log('el logedin es' + loggedIn);
      if (loggedIn) {
        setView('home');
      }
    } catch (error) {
      alert(error.message);
    }
  }, []);
  console.log('App->render');
  return (
    <>
      {view === 'landing' && <Landing onRegisterClick={handleRegisterClick} onLoginClick={handleLoginClick} />}
      {view === 'register' && <Register onLoginClick={handleLoginClick} onRegisteredUser={handleUserRegistered} />}
      {view === 'login' && <Login onRegisterClick={handleRegisterClick} onLoginUser={handleLoginUser} />}
      {view === 'home' && <Home onUserLoggedOut={handleLogout} />}
      {/* <Router>
      
        <Routes>
        
          <Route path="/" element={<Landing />} />
       
          <Route path="/register" element={<Register />} />
        
          <Route path="/login" element={<Login />} />
        
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router> */}
      {}
    </>
  );
};
