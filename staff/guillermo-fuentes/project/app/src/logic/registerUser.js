import { validate } from "com";

export const registerUser = (fullName, email, password, address, role) => {
  validate.name(fullName);
  validate.email(email);
  validate.password(password);
  validate.address(address);
  validate.role(role);
  return fetch(`${import.meta.env.VITE_API_URL}users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fullName, email, password, address, role }),
  })
    .catch(() => {
      throw new Error("Conection error");
    })
    .then((response) => {
      const { status } = response;
      if (status === 201) return;
      return response
        .json()
        .catch(() => {
          throw new Error("json error");
        })
        .then((body) => {
          const { message } = body;
          throw new Error(message);
        });
    });
};
