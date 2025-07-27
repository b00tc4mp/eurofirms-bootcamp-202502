import { SystemError, validate } from "com";
import { data } from "../data";

export const updateProduct = (targetId, name, description, price, stock, image, providerId) => {
  validate.productId(targetId);
  validate.name(name);
  validate.description(description);
  validate.price(price);
  validate.stock(stock);
  validate.image(image);
  validate.providerId(providerId);

  return fetch(`${import.meta.env.VITE_API_URL}products/${targetId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${data.getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, description, price, stock, image, providerId }),
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
