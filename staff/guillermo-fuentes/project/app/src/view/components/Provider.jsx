import { useState } from 'react';
import { EditProvider } from '../EditProvider';
export const Provider = ({ provider, onReloadProvider }) => {
  const [editProvider, setEditProvider] = useState(false);

  const handleEditedProvider = () => {
    setEditProvider(false);
    onReloadProvider();
  };
  return (
    <>
      <div className="max-w-sm w-full bg-white border border-gray-300 rounded-x1 shadow-lg p-6 m-4 hover:shadow-x1 transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-red-600 mb-3">{provider.name}</h2>
        <p className="text-gray-700 mb-1">
          <span className="font-semibold">Name: </span>
          {provider.name}
        </p>
        <p className="text-gray-700 mb-1">
          <span className="font-semibold">Contact: </span>
          {provider.contact}
        </p>
        <p className="text-gray-700 mb-1">
          <span className="font-semibold">Direction: </span>
          {provider.direction}
        </p>
        <p className="text-gray-700 mb-1">
          <span className="font-semibold">User: </span>
          {provider.user.fullName}
        </p>
        <button
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200 mb-4"
          onClick={() => setEditProvider(true)}
        >
          Update provider
        </button>
      </div>

      {editProvider && <EditProvider provider={provider} onEditedProvider={handleEditedProvider} />}
    </>
  );
};
