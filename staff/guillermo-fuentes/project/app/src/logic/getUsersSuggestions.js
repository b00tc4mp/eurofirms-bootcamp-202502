import { SystemError, validate } from "com";
import { data } from "../data";

export const getUsersSuggestions = (userId, query) => {
  validate.userId(userId);
  validate.query(query);
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
