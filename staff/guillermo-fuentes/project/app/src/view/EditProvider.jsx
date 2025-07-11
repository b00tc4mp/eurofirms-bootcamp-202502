import { logic } from "../logic";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { SearchUsers } from "./components/SearchUsers";
import { useContext } from "../context/context";

export const EditProvider = ({ provider, onEditedProvider }) => {
  const { loggedIn, rol: userRol } = useAuth();
  const [name, setName] = useState(provider.name);
  const [contact, setContact] = useState(provider.contact);
  const [address, setAddress] = useState(provider.address);
  const [userFullName, setUserFullName] = useState(provider.user.fullName);
  const [selectedUserId, setSelectedUserId] = useState(provider.user.id);
  const [error, setError] = useState("");

  const isAdmin = loggedIn && userRol === import.meta.env.VITE_ROL_1;
  const handleEditProvider = () => onEditedProvider();
  const { alert } = useContext();

  const handleEditSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const contact = form.contact.value;
    const address = form.address.value;

    if (isAdmin && !selectedUserId) {
      setError("Please select a user");
      alert("Please select a user");
      return;
    }
    try {
      logic
        .updateProvider(provider.id, name, contact, address, selectedUserId)
        .then(() => {
          form.reset();

          setError("");
          handleEditProvider();
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
    <div
      className="w-screen h-screen flex items-center justify-center  bg-opacity-25
 px-4 fixed inset-0  z-50"
    >
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex justify-center mb-6 text-4xl text-blue-500">
          <i className="fas fa-user-plus"></i>
        </div>
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Update provider</h1>
        <form className="space-y-4" onSubmit={handleEditSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="El nombre de tu empresa"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
              Contact
            </label>
            <input
              type="text"
              name="contact"
              id="contact"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
              placeholder="El contacto de tu empresa"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              placeholder="La direccion de tu empresa"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="userFullName" className="block text-sm font-medium text-gray-700 mb-1">
              User full name
            </label>
            <input
              type="text"
              name="userFullName"
              id="userFullName"
              value={userFullName}
              onChange={(event) => setUserFullName(event.target.value)}
              placeholder="El nombre de el proveedor"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              readOnly
            />
          </div>
          {isAdmin && <SearchUsers onSelectUserId={setSelectedUserId} setError={setError} />}

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex justify-between gap-2 pt-2">
            <button
              type="submit"
              className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition"
            >
              Update provider
            </button>

            <button
              type="submit"
              className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition"
              onClick={() => handleEditProvider()}
            >
              Cancel update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
