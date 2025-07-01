
import { useState, useEffect } from "react";
import { logic } from "../../logic"; 

/**
 * Componente reutilizable para buscar usuarios. Muestra una lista de sugerencias basadas en la consulta del usuario.
 * @param {function} onSelectUser - Función para manejar el ID del usuario seleccionado.
 * @param {function} setError - Función para establecer mensajes de error (opcional).
 * @returns {JSX.Element} Input de búsqueda con lista de sugerencias.
 */
export const Search = ({ onSelectUserId, setError = () => {} }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [userSelected, setUserSelected] = useState(false)

  const handleSelectUser = (user) => {
    setQuery(user.fullName);
    onSelectUserId(user._id);
    setSuggestions([]);
    setError("");
    setUserSelected(true);
  };

  useEffect(() => {
    if (query && !userSelected) {
      logic.fetchSuggestions(query, setSuggestions, setError);
    } else {
      setSuggestions([]);
      setError("");
    }
    return () => logic.fetchSuggestions.cancel();
  }, [query, setError]);

  return (
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
              onClick={ () => handleSelectUser(user)}                
              className="px-4 py-2 cursor-pointer hover:bg-blue-100"
            >
              {user.fullName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};