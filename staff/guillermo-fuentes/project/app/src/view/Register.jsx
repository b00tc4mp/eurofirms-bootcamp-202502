import { logic } from '../logic';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
export const Register = () => {
  const navigate = useNavigate();
  const { loggedIn, rol: userRol } = useAuth();
  const isAdmin = loggedIn && userRol === 'administrador';

  const handleLoginClick = (event) => {
    event.preventDefault();
    navigate('/login');
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const nombreCompleto = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const direccion = form.direccion.value;
    const rol = form.rol.value;

    try {
      logic
        .registerUser(nombreCompleto, email, password, direccion, rol)
        .then(() => {
          form.reset();
          navigate('/home');
        })
        .catch((error) => {
          console.error(error);
          alert(error.message);
        });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex justify-center mb-6 text-4xl text-blue-500">
          <i className="fas fa-user-plus"></i> {/* Font Awesome icon optional */}
        </div>
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Registro</h1>
        <form className="space-y-4" onSubmit={handleRegisterSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Tu nombre"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Tu email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Tu contraseña"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="direccion" className="block text-sm font-medium text-gray-700 mb-1">
              Dirección
            </label>
            <input
              type="text"
              name="direccion"
              id="direccion"
              placeholder="Tu dirección"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/*En react cuando es necesario que un campo se muestre o no en base a una condicion la sintaxis que se emplea es la que se ve a continuacion
          que lo que esta haciendo aqui es que si el usuario tiene el rol de administrador pues se le muestra el primer select y en caso contrario se pone un input oculto
          con el valor por defecto cliente
          */}
          <div>
            {isAdmin ? (
              <>
                <label htmlFor="rol" className="block text-sm font-medium text-gray-700 mb-1">
                  Rol
                </label>
                <select
                  name="rol"
                  id="rol"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  defaultValue="cliente"
                  required
                >
                  <option value="cliente">Cliente</option>
                  <option value="administrador">Administrador</option>
                </select>
              </>
            ) : (
              <input type="text" name="rol" id="rol" value="cliente" readOnly hidden className="w-full" />
            )}
          </div>

          <div className="flex justify-between gap-2 pt-2">
            <button
              onClick={handleLoginClick}
              className="w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 rounded-lg transition"
            >
              Login
            </button>
            <button
              type="submit"
              className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
