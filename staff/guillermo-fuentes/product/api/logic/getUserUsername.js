import { data } from '../data/index.js';
/**
 * retorna el nombre de usuario del usuario ha encontrar por su id
 * @param {string} userId el id de usuario
 */
export const getUserUsername = (userId) => {
  if (typeof userId !== 'string') throw Error('User id invalid');
  if (userId.length < 6) throw Error('Invalid userId length');

  const users = data.getUsers();
  //Busca al usuario en base de datos
  const user = users.find((user) => user.id === userId);

  if (!user) throw new Error('user not found');

  return user.username;
};
