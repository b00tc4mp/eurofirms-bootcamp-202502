import { useState, useEffect, useMemo } from "react";
import { logic } from "../../logic";
import debounce from "lodash/debounce";

export const SearchUsers = ({ onSelectUserId, setError = () => {} }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [userSelected, setUserSelected] = useState(false);

/*UseMemo es un hook de react que sirve para memorizar el resultado de una operacion costosa esto evita
 que se vuelva a ejecutar innecesariamente en cada renderizado, a menos que sus dependencias cambien.
*/


const debouncedFetchSuggestions = useMemo(() =>
  debounce((query) => {
    logic.getUsersSuggestions(query)
      .then((users) => {
        setSuggestions(users);
      })
      .catch((error) => {
        setError(error);
        alert(error.message);
      });
  }, 300),
[]); 

  const handleSelectUser = (user) => {
    setQuery(user.fullName);
    onSelectUserId(user._id);
    setSuggestions([]);
    setError("");
    setUserSelected(true);
  };

  useEffect(() => {
    if (query && !userSelected) {
      debouncedFetchSuggestions(query);
    } else {
      setSuggestions([]);
      setError("");
    }

    return () => {
      debouncedFetchSuggestions.cancel(); // limpia debounce
    };
  }, [query]);

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
          setUserSelected(false);
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
  );
};
