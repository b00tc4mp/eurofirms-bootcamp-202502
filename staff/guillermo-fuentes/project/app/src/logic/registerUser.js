import { validate } from 'com';

export const registerUser = (nombreCompleto, email, password, direccion, role) => {
  validate.name(nombreCompleto);
  validate.email(email);
  validate.password(password);
  validate.direction(direccion);
  validate.role(role);
  return fetch(`${import.meta.env.VITE_API_URL}users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nombreCompleto, email, password, direccion, role }),
  })
    .catch(() => {
      throw new Error('error de conexion');
    })
    .then((response) => {
      const { status } = response;
      if (status === 201) return;
      return response
        .json()
        .catch(() => {
          throw new Error('json error');
        })
        .then((body) => {
          const { message } = body;
          throw new Error(message);
        });
    });
};
