import { SystemError } from "com";
import { data } from "../data";

export const getProviders = () => {
  return fetch(`${import.meta.env.VITE_API_URL}providers`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${data.getToken()}`,
    },
  })
    .catch(() => {
      throw new SystemError("Connection error");
    })
    .then((response) => {
      const { status } = response;
      if (status === 200)
        return response
          .json()
          .catch(() => {
            throw new SystemError("json error");
          })
          .then((providers) => {
            console.debug("Providers recived", providers);
            return providers;
          });
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
