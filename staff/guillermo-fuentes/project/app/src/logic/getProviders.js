import { data } from '../data';
export const getProviders = () => {
  return fetch(`${import.meta.env.VITE_API_URL}providers`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${data.getToken()}`,
    },
  })
    .catch(() => {
      throw new Error('Connection error');
    })
    .then((response) => {
      const { status } = response;
      if (status === 200)
        return response
          .json()
          .catch(() => {
            throw new Error('json error');
          })
          .then((providers) => {
            console.log('Providers recived', providers);
            return providers;
          });
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
