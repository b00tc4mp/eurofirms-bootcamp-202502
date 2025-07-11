import { SystemError, validate } from "com";
import { data } from "../data";

export const getUsersByRol = (role) => {
  validate.role(role);

  return fetch(`${import.meta.env.VITE_API_URL}users/${role}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${data.getToken()}`,
    },
  })
    .catch(() => {
      throw new SystemError("Conection error");
    })
    .then((response) => {
      const { status } = response;
      if (status === 200)
        return response
          .json()
          .catch(() => {
            throw new SystemError("json error");
          })
          .then((users) => {
            console.log("Usuarios recibidor ", users);
            return users;
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
