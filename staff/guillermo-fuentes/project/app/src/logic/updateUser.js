import { validate } from "com";
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
      throw new Error("connection error");
    })
    .then((response) => {
      const { status } = response;
      if (status === 200) return;
      return response
        .json()
        .catch(() => {
          throw new Error("JSON parsing error");
        })
        .then((body) => {
          const { message } = body;
          throw new Error(message);
        });
    });
};
