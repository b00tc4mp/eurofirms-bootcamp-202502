import { logic } from "../../logic";
import { useState } from "react";
import { EditUser } from "../EditUser";
import { useContext } from "../../context/context";

export const User = ({ user, onUserDeleted, onReloadUser }) => {
  const [editUser, setEditUser] = useState(false);
  const { alert, confirm } = useContext();
  const handleEditedUser = () => {
    setEditUser(false);
    onReloadUser();
  };

  const handleDeleteClick = () => {
    confirm("¿Delete user?").then((result) => {
      if (result) {
        try {
          logic
            .deleteUser(user.id)
            .then(() => {
              console.log("user delete");
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
    });
  };

  return (
    <div className="max-w-sm w-full bg-white border border-gray-200 rounded-2xl shadow-md p-6 m-4 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{user.fullName}</h2>

      <div className="space-y-2 text-sm text-gray-700">
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">Address:</span> {user.address}
        </p>
        <p>
          <span className="font-semibold">Role:</span> {user.role}
        </p>
        <p>
          <span className="font-semibold">Register Date:</span> {new Date(user.registerDate).toLocaleString()}
        </p>
      </div>

      <div className="mt-4 space-y-2">
        <button
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          onClick={() => setEditUser(true)}
        >
          Update User
        </button>
        <button
          onClick={handleDeleteClick}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Delete User
        </button>
      </div>

      {editUser && <EditUser user={user} onEditedUser={handleEditedUser} />}
    </div>
  );
};
