import { SystemError } from "com";
import { data } from "../data";

export const getUserById = (userId) => {
  return fetch(`${import.meta.env.VITE_API_URL}users/user/${userId}`, {
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
          .then((user) => {
            console.debug("Users received ", user);
            return user;
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
