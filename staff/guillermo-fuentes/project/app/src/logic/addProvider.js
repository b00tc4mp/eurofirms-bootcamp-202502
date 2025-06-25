// frontend/src/services/addProvider.js
import { validate } from 'com';
import { data } from '../data';

export const addProvider = (name, contact, direction, userFullName) => {
  validate.name(name, 'provider name');
  validate.contact(contact);
  validate.direction(direction);
  validate.name(userFullName, 'user fullName'); // Validar userFullName

  return fetch(`${import.meta.env.VITE_API_URL}providers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data.getToken()}`,
    },
    body: JSON.stringify({ name, contact, direction, userFullName }),
  })
    .catch(() => {
      throw new Error('Connection error');
    })
    .then((response) => {
      const { status } = response;
      if (status === 201) return;
      return response
        .json()
        .catch(() => {
          throw new Error('JSON error');
        })
        .then((body) => {
          const { message } = body;
          throw new Error(message);
        });
    });
};
