import { useState } from "react";
import { EditProvider } from "../EditProvider";
import { logic } from "../../logic";
import { useContext } from "../../context/context";
import { useLoggedIn } from "../../hooks/useLoggedIn";
export const Provider = ({ provider, onReloadProvider, onEditedProvider }) => {
  const [editProvider, setEditProvider] = useState(false);
  const { alert, confirm } = useContext();
  const loggedIn = useLoggedIn();

  const handleEditedProvider = () => {
    setEditProvider(false);
    onReloadProvider();
  };

  const handleDeleteClick = () => {
    confirm("Delete product?").then((result) => {
      if (result)
        try {
          logic
            .deleteProvider(provider.id)
            .then(() => onEditedProvider())
            .catch((error) => {
              console.error(error);
              alert(error.message);
            });
        } catch (error) {
          console.error(error);
          alert(error.message);
        }
    });
  };
  return (
    <>
      <div className="max-w-sm w-full bg-white border border-gray-200 rounded-2xl shadow-md p-6 m-4 hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{provider.name}</h2>

        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Name:</span> {provider.name}
          </p>
          <p>
            <span className="font-semibold">Contact:</span> {provider.contact}
          </p>
          <p>
            <span className="font-semibold">Address:</span> {provider.address}
          </p>
          <p>
            <span className="font-semibold">User:</span> {provider.user.fullName}
          </p>
        </div>
        {loggedIn && (
          <div className="mt-4 space-y-2">
            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200"
              onClick={() => setEditProvider(true)}
            >
              Update Provider
            </button>
            <button
              onClick={handleDeleteClick}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              Delete Provider
            </button>
            {editProvider && <EditProvider provider={provider} onEditedProvider={handleEditedProvider} />}
          </div>
        )}
      </div>
    </>
  );
};
