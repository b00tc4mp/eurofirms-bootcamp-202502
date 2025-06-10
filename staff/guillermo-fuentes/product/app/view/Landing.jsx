import { useNavigate } from 'react-router-dom';

export const Landing = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    console.log('Navegando a /register');
    navigate('/register');
  };

  const handleLoginClick = () => {
    console.log('Navegando a /login');
    navigate('/login');
  };

  console.log('Landing->render');

  return (
    <div>
      <i>Logo</i>
      <h1 className="text-red-600">Bienvenido a la App</h1>
      <button className="underline" onClick={handleRegisterClick}>
        Registrar
      </button>{' '}
      o{' '}
      <button className="underline" onClick={handleLoginClick}>
        Login
      </button>
    </div>
  );
};
