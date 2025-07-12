import { logic } from "../logic";
import { useEffect, useState } from "react";
import { User } from "./components/User";
import { useNavigate } from "react-router";
import { useContext } from "../context/context";
import { useRole } from "../hooks/useRole";
import { data } from "../data";
import { getPayloadFromToken } from "../logic/helper/getPayloadFromToken";
export const Users = () => {
  const [users, setUsers] = useState([]);
  const [role, setRol] = useState("All users");
  const navigate = useNavigate();
  const roles = ["All users", "Administrators", "Clients", "Providers"];
  const { alert } = useContext();
  const { isAdmin } = useRole();
  const token = data.getToken();
  const currentUser = getPayloadFromToken(token);
  useEffect(() => {
    if (isAdmin) {
      if (role === "All users") {
        logic
          .getUsers()
          .then((users) => {
            setUsers(users);
          })
          .catch((error) => {
            console.error(error);
            alert(error.message);
          });
      } else {
        let roleToSend;
        if (role === "Administrators") {
          roleToSend = "administrator";
        } else if (role === "Clients") {
          roleToSend = "client";
        } else if (role === "Providers") {
          roleToSend = "provider";
        }

        logic
          .getUsersByRol(roleToSend)
          .then((users) => {
            setUsers(users);
          })
          .catch((error) => {
            console.error(error);
            alert(error.message);
          });
      }
    } else if (currentUser) {
      // Usuario normal: solo ve su usuario
      logic
        .getUserById(currentUser.sub)
        .then((user) => setUsers([user]))
        .catch((error) => {
          console.error(error);
          alert(error.message);
        });
    }
  }, [role, isAdmin, currentUser]);

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
          value={role}
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
          onClick={() => navigate("/register")}
        >
          <i className="fa fa-plus"></i>
          Register
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
