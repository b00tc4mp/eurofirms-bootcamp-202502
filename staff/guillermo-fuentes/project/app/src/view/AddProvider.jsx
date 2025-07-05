
import  { useState } from 'react';
import { logic } from '../logic';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Search } from './components/Search';

export const AddProvider = () => {
  const navigate = useNavigate();
  const { loggedIn, rol: userRol } = useAuth();
  const [selectedUserId, setSelectedUserId] = useState('');
  const [error, setError] = useState('');

  const isAdmin = loggedIn && userRol === import.meta.env.VITE_ROL_1;

  // Redirigir si no es admin
  if (!isAdmin) {
    navigate('/unauthorized');
    return null;
  }

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const taxId = form.taxId.value;
    const name = form.name.value;
    const address = form.address.value;
    const contact = form.contact.value;

    if (!selectedUserId) {
      const msg = 'Please select a user';
      setError(msg);
      return;
    }

    logic
      .addProvider(taxId, name, contact, address, selectedUserId)
      .then(() => {
        form.reset();
        setSelectedUserId('');
        setError('');
        navigate('/providers');
      })
      .catch((error) => {
        const msg = error.message || 'Error creating provider';
        setError(msg);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex justify-center mb-6 text-4xl text-blue-500">
          <i className="fas fa-user-plus"></i>
        </div>
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add Provider</h1>
        <form className="space-y-4" onSubmit={handleRegisterSubmit}>
          <Search
            onSelectUserId={setSelectedUserId}
            setError={setError}
          />
          <div>
            <label htmlFor="taxId" className="block text-sm font-medium text-gray-700 mb-1">
              Tax Id
            </label>
            <input
              type="text"
              name="taxId"
              id="taxId"
              placeholder="Insert taxId enterprise"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Insert name enterprise"
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
              placeholder="Your direction"
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
              placeholder="Your contact"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex justify-between gap-2 pt-2">
            <button
              type="submit"
              className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition"
              disabled={!selectedUserId}
            >
              Add provider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};