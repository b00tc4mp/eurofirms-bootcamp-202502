import { validate } from "com";
import { data } from "../data";

export const updateProvider = (targetId, name, contact, address, providerId) => {
  validate.userId(targetId);
  validate.name(name);
  validate.address(address);
  validate.contact(contact);
  validate.providerId(providerId);
  return fetch(`${import.meta.env.VITE_API_URL}providers/${targetId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${data.getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, address, contact, providerId }),
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
