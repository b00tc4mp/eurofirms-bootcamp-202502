import { SystemError, validate } from "com";
import { data } from "../data";

export const addProduct = (name, description, price, stock, image, provider) => {
  validate.name(name);
  validate.description(description);
  validate.price(price);
  validate.stock(stock);
  validate.image(image);
  validate.providerId(provider);

  return fetch(`${import.meta.env.VITE_API_URL}products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.getToken()}`,
    },
    body: JSON.stringify({ name, description, price, stock, image, provider }),
  })
    .catch(() => {
      throw new SystemError("Connection error");
    })
    .then((response) => {
      const { status } = response;
      if (status === 201) return;
      return response
        .json()
        .catch(() => {
          throw new SystemError("JSON error");
        })
        .then((body) => {
          const { error, message } = body;
          const constructor = error[error] || SystemError;
          throw new constructor(message);
        });
    });
};
