import { SystemError } from "com";
import { data } from "../data";
/** La libreria **debounce** nos permite limitar la frecuencia con la que se ejecuta una peticion que se llama repetidamente en un corto periodo de tiempo.
 * debounce envuelve la función que hace la petición fetch a la API.
 * El 300 al final indica que la función espera 300 milisegundos después de la última llamada antes de ejecutarse.
 *
 */

export const getUsersSuggestions = (query) => {
  return fetch(`${import.meta.env.VITE_API_URL}users/search/${encodeURIComponent(query)}`, {
    headers: {
      Authorization: `Bearer ${data.getToken()}`,
    },
  })
    .catch(() => {
      throw new SystemError("connection error");
    })
    .then((response) => {
      const { status } = response;
      if (status === 200)
        return response
          .json()
          .catch(() => {
            throw new SystemError("json error");
          })
          .then((users) => users);

      return response
        .json()
        .catch(() => {
          throw new SystemError("json error");
        })
        .then((body) => {
          const { error, message } = body;
          const constructor = error[error] || SystemError;
          throw new constructor(message);
        });
    });
};
