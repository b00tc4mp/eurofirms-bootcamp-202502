// frontend/src/view/AddProvider.jsx
import React, { useState, useEffect } from 'react';
import { logic } from '../logic';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { useContext } from '../context/context';

export const AddProvider = () => {
  const navigate = useNavigate();
  const { loggedIn, rol: userRol } = useAuth();
  const { alert } = useContext();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [error, setError] = useState('');

  const isAdmin = loggedIn && userRol === import.meta.env.VITE_ROL_1;

  useEffect(() => {
    if (isAdmin) {
      logic.fetchSuggestions(query, setSuggestions, setError);
    }
    return () => logic.fetchSuggestions.cancel();
  }, [query]);

  const handleSelectUser = (user) => {
    setQuery(user.fullName);
    setSelectedUserId(user._id); 
    setSuggestions([]);
    setError('');
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const taxId = form.taxId.value;
    const name = form.name.value;
    const address = form.address.value;
    const contact = form.contact.value;

    if (isAdmin && !selectedUserId) {
      const msg = 'Please select a user';
      setError(msg);
      alert(msg);
      return;
    }

    logic
      .addProvider(taxId,name, contact, address, isAdmin ? selectedUserId : undefined)
      .then(() => {
        form.reset();
        setQuery('');
        setSelectedUserId('');
        setError('');
        navigate('/providers');
      })
      .catch((error) => {
        console.error(error);
        const msg = error.message || 'Error creating provider';
        setError(msg);
        alert(msg);
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
          {isAdmin && (
            <div>
              <label htmlFor="userSearch" className="block text-sm font-medium text-gray-700 mb-1">
                User
              </label>
              <input
                type="text"
                id="userSearch"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedUserId('');
                }}
                placeholder="Search user by name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                autoComplete="off"
              />
              {suggestions.length > 0 && (
                <ul className="border border-gray-300 rounded-lg mt-1 max-h-40 overflow-y-auto bg-white">
                  {suggestions.map((user) => (
                    <li
                      key={user._id}
                      onClick={() => handleSelectUser(user)}
                      className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                    >
                      {user.fullName}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
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
              disabled={isAdmin && !selectedUserId}
            >
              Add provider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};