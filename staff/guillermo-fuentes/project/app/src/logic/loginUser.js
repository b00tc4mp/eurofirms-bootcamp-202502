import { SystemError, validate } from "com";
import { data } from "../data";

export const loginUser = (email, password) => {
  validate.email(email);
  validate.password(password);
  return fetch(`${import.meta.env.VITE_API_URL}users/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .catch(() => {
      throw new SystemError("connection error");
    })
    .then((response) => {
      const { status } = response;
      if (status === 200) {
        return response
          .json()
          .catch(() => {
            throw new SystemError("json error");
          })
          .then(({ token, role }) => {
            data.setToken(token);

            return { token, role };
          });
      }
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
