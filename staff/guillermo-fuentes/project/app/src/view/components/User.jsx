import { logic } from "../../logic";
import { useState } from "react";
import { EditUser } from "../EditUser";
import { useContext } from "../../context/context";
import { useRole } from "../../hooks/useRole";

export const User = ({ user, onUserDeleted, onReloadUser }) => {
  const [editUser, setEditUser] = useState(false);
  const { alert, confirm } = useContext();
  const { isAdmin } = useRole();
  const currentUser = logic.isCurrentUser();
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
    <div className="max-w-sm w-full bg-white border border-gray-300 rounded-2xl shadow-md p-6 m-4 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-900 mb-5">{user.fullName}</h2>

      <div className="space-y-3 text-base text-gray-800">
        <p>
          <span className="font-semibold">Email:</span>{" "}
          <a href={`mailto:${user.email}`} className="text-blue-600 hover:underline">
            {user.email}
          </a>
        </p>
        <p>
          <span className="font-semibold">Address:</span> {user.address}
        </p>
        <p>
          <span className="font-semibold">Role:</span> <span className="capitalize">{user.role}</span>
        </p>
        <p>
          <span className="font-semibold">Register Date:</span>{" "}
          {new Date(user.registerDate).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {currentUser && (
          <button
            className="w-full bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 text-white font-semibold py-3 rounded-lg transition duration-200"
            onClick={() => setEditUser(true)}
          >
            Update User
          </button>
        )}
        {isAdmin && (
          <button
            onClick={handleDeleteClick}
            className="w-full bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Delete User
          </button>
        )}

        {editUser && <EditUser user={user} onEditedUser={handleEditedUser} />}
      </div>
    </div>
  );
};
