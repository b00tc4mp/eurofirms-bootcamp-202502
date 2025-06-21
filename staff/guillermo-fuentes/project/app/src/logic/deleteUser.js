import { data } from '../data';

export const deleteUser = (idUser) => {
  return fetch(`${import.meta.env.VITE_API_URL}users/${idUser}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${data.getToken()}`,
    },
  })
    .catch(() => {
      throw new Error('connection error');
    })
    .then((response) => {
      const { status } = response;
      if (status === 204) return;
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
