// frontend/src/services/addProvider.js
import { validate } from "com";
import { data } from "../data";

export const addProvider = (taxId, name, contact, address, userId) => {
  validate.taxId(taxId);
  validate.name(name);
  validate.contact(contact);
  validate.address(address);

  return fetch(`${import.meta.env.VITE_API_URL}providers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.getToken()}`,
    },
    body: JSON.stringify({ taxId, name, contact, address, userId }),
  })
    .catch(() => {
      throw new Error("Connection error");
    })
    .then((response) => {
      const { status } = response;
      if (status === 201) return;
      return response
        .json()
        .catch(() => {
          throw new Error("JSON error");
        })
        .then((body) => {
          const { message } = body;
          throw new Error(message);
        });
    });
};
