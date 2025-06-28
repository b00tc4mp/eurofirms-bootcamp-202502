// frontend/src/services/fetchSuggestions.js
import debounce from 'lodash/debounce';
import { data } from '../data';
/** La libreria **debounce** nos permite limitar la frecuencia con la que se ejecuta una peticion que se llama repetidamente en un corto periodo de tiempo.
 * debounce envuelve la función que hace la petición fetch a la API.
 * El 300 al final indica que la función espera 300 milisegundos después de la última llamada antes de ejecutarse.
 *
 */
export const fetchSuggestions = debounce((query, setSuggestions, setError) => {
  if (query.length < 2) {
    setSuggestions([]);
    setError('');
    return;
  }
  fetch(`${import.meta.env.VITE_API_URL}users/search/${encodeURIComponent(query)}`, {
    headers: {
      Authorization: `Bearer ${data.getToken()}`,
    },
  })
    .catch(() => {
      setError('Connection error');
      setSuggestions([]);
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching users');
      }
      return response.json();
    })
    .then((data) => {
      setSuggestions(data);
      setError('');
    })
    .catch((err) => {
      setError(err.message || 'Error fetching users');
      setSuggestions([]);
    });
}, 300);
