import { Home } from './view/Home';
import { Landing } from './view/Landing';
import { Login } from './view/Login';
import { Register } from './view/Register';
import { useState } from 'react';

export const App = () => {
  const [view, setView] = useState('landing');
  const handleRegisterClick = () => setView('register');
  const handleLoginClick = () => setView('login');
  const handleUserRegistered = () => setView('login');
  const handleLoginUser = () => setView('home');
  const handleLogout = () => setView('landing');
  console.log('App->render');
  return (
    <>
      {view === 'landing' && <Landing onRegisterClick={handleRegisterClick} onLoginClick={handleLoginClick} />}
      {view === 'register' && <Register onLoginClick={handleLoginClick} onRegisteredUser={handleUserRegistered} />}
      {view === 'login' && <Login onRegisterClick={handleRegisterClick} onLoginUser={handleLoginUser} />}
      {view === 'home' && <Home onUserLogout={handleLogout} />}
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
