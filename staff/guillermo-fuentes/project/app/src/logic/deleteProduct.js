import { data } from "../data";
import { SystemError, validate } from "com";

export const deleteProduct = (userId, productId) => {
  validate.userId(userId);
  validate.productId(productId);

  return fetch(`${import.meta.env.VITE_API_URL}products/${productId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${data.getToken()}`,
    },
  })
    .catch(() => {
      throw new SystemError("connection error");
    })
    .then((response) => {
      const { status } = response;
      if (status === 204) return;
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
