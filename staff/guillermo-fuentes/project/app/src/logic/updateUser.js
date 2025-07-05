import { SystemError, validate } from "com";
import { data } from "../data";

export const updateUser = (targetId, fullName, email, password, address, role) => {
  validate.userId(targetId);
  validate.name(fullName);
  validate.email(email);
  validate.password(password);
  validate.address(address);
  validate.role(role);

  return fetch(`${import.meta.env.VITE_API_URL}users/${targetId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${data.getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fullName, email, password, address, role }),
  })
    .catch(() => {
      throw new SystemError("connection error");
    })
    .then((response) => {
      const { status } = response;
      if (status === 200) return;
      return response
        .json()
        .catch(() => {
          throw new SystemError("JSON parsing error");
        })
        .then((body) => {
          const { error, message } = body;

          const constructor = error[error] || SystemError;

          throw new constructor(message);
        });
    });
};
