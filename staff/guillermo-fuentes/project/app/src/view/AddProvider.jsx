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
  const [query, setQuery] = useState(''); //este useState guarda la consulta
  const [suggestions, setSuggestions] = useState([]); //este useState guarda las palabras sugeridas
  const [selectedUserName, setSelectedUserName] = useState(''); //este useState guarda el usuario seleccionado
  const [error, setError] = useState('');

  // Verificar si el usuario es administrador
  const isAdmin = loggedIn && userRol === import.meta.env.VITE_ROL_1;

  useEffect(() => {
    if (isAdmin) {
      logic.fetchSuggestions(query, setSuggestions, setError);
    }
    return () => logic.fetchSuggestions.cancel();
  }, [query]);

  // Seleccionar un usuario de las sugerencias
  const handleSelectUser = (user) => {
    setQuery(user.fullName);
    setSelectedUserName(user.fullName);
    setSuggestions([]);
    setError('');
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const direction = form.direction.value;
    const contact = form.contact.value;

    // Validar que se haya seleccionado un usuario si es administrador
    if (isAdmin && !selectedUserName) {
      setError('Please select a user');
      alert('Please select a user');
      return;
    }

    logic
      .addProvider(name, contact, direction, isAdmin ? selectedUserName : undefined)
      .then(() => {
        form.reset();
        setQuery('');
        setSelectedUserName('');
        setError('');
        navigate('/providers');
      })
      .catch((error) => {
        console.error(error);
        setError(error.message || 'Error creating provider');
        alert(error.message || 'Error creating provider');
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
              <label htmlFor="userFullName" className="block text-sm font-medium text-gray-700 mb-1">
                User
              </label>
              <input
                type="text"
                name="userFullName"
                id="userFullName"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedUserName(''); // Resetear al cambiar el texto
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
            <label htmlFor="direction" className="block text-sm font-medium text-gray-700 mb-1">
              Direction
            </label>
            <input
              type="text"
              name="direction"
              id="direction"
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
              disabled={isAdmin && !selectedUserName}
            >
              Add provider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
