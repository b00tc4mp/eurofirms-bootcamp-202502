import { useNavigate } from 'react-router-dom';
import { logic } from '../logic';

export const Login = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => navigate('/register');

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    try {
      logic
        .loginUser(username, password)
        .then(() => {
          form.reset();
          navigate('/posts');
        })
        .catch((error) => {
          console.error(error);
          alert(error.message);
        });
    } catch (error) {
      alert(error.message);
    }
  };

  console.log('Login->render');

  return (
    <div>
      <h1 className="text-3xl text-center">Login</h1>
      <form className="flex flex-col gap-2" onSubmit={handleLoginSubmit}>
        <div className="flex flex-col">
          <label htmlFor="username">Usuario</label>
          <input type="text" name="username" placeholder="tu usuario" className="border-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" placeholder="tu contraseña" className="border-2" />
        </div>
        <div className="flex justify-between">
          <button type="button" className="bg-blue-200 text-black rounded-full p-2" onClick={handleRegisterClick}>
            Registrar
          </button>
          <button className="bg-blue-200 text-black rounded-full p-2">Login</button>
        </div>
      </form>
    </div>
  );
};
