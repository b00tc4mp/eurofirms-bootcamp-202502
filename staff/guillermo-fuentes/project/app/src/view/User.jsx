import { logic } from '../logic';
import { useState } from 'react';
import { EditUser } from './EditUser';

export const User = ({ user, onUserDeleted, onReloadUser }) => {
  const [editUser, setEditUser] = useState(false);

  const handleEditedUser = () => {
    setEditUser(false);
    onReloadUser();
  };

  const handleDeleteClick = () => {
    if (confirm('¿Eliminar usuario?')) {
      try {
        logic
          .deleteUser(user.id)
          .then(() => {
            console.log('usuario eliminado');
            onUserDeleted();
          })
          .catch((error) => {
            console.error(error);
            alert(error.message);
          });
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    }
  };

  return (
    <div className="max-w-sm w-full bg-white border border-gray-300 rounded-xl shadow-lg p-6 m-4 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-red-600 mb-3">{user.nombreCompleto}</h2>

      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Dirección:</span> {user.direccion}
      </p>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Rol:</span> {user.rol}
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Fecha registro:</span> {new Date(user.fechaRegistro).toLocaleString()}
      </p>
      <button
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200 mb-4"
        onClick={() => setEditUser(true)}
      >
        Editar usuario
      </button>
      <button
        onClick={handleDeleteClick}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition duration-200"
      >
        Eliminar usuario
      </button>
      {editUser && <EditUser user={user} onEditedUser={handleEditedUser} />}
    </div>
  );
};
