import { logic } from '../logic';
import { useEffect, useState } from 'react';
import { User } from './User';
import { useNavigate } from 'react-router';

export const Users = () => {
  const [users, setUsers] = useState([]);
  //Usar useState para saber que valor está seleccionado en el desplegable
  const [rol, setRol] = useState('Todos los usuarios');
  const navigate = useNavigate();
  const roles = ['Todos los usuarios', 'administrador', 'cliente'];

  useEffect(() => {
    if (rol === 'Todos los usuarios') {
      try {
        logic
          .getUsers()
          .then((users) => {
            console.log('users obtenidos');
            setUsers(users);
          })
          .catch((error) => {
            console.error(error);
            alert(error.message);
          });
        console.log(users);
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    } else {
      try {
        logic
          .getUsersByRol(rol)
          .then((users) => {
            console.log('users obtenidos');
            setUsers(users);
          })
          .catch((error) => {
            console.error(error);
            alert(error.message);
          });
        console.log(users);
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    }
  }, [rol]);

  const handleUpadateUser = () => {
    try {
      logic
        .getUsers()
        .then((users) => {
          setUsers(users);
        })
        .catch((error) => {
          console.error(error);
          alert(error.message);
        });
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };
  const handleRoleChange = (event) => {
    setRol(event.target.value);
  };
  return (
    <div className="flex flex-col items-center mt-8 px-4">
      {/* Desplegable */}
      <div className="mb-8 flex gapt-4 items-center ">
        <select
          value={rol}
          onChange={handleRoleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
        >
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>

        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={() => navigate('/register')}
        >
          <i className="fa fa-plus"></i>
          Registrar
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {users.map((user) => (
          <User key={user.id} user={user} onUserDeleted={handleUpadateUser} onReloadUser={handleUpadateUser} />
        ))}
      </div>
    </div>
  );
};
