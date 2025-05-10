import { data } from '../data/index.js';
/**Registra a un usuario en el sistema recibe cuatro parametros
 * @param name el nombre del usuario
 * @param email el email del usuario
 * @param username el nombre de usuario (nick)
 * @param password la constraseña de un usuario
 */
export const registerUser = (name, email, username, password) => {
  if (typeof name !== 'string') throw new Error('invalid name type');
  if (name.length < 1) throw new Error('Invalid lenght name');
  if (name.length > 20) throw new Error('Invalid lenght name');
  if (typeof email !== 'string') throw new Error('invalid email type');
  if (email.length < 6) throw new Error('Invalid lenght email');
  if (email.length > 30) throw new Error('Invalid lenght email');
  if (typeof username !== 'string') throw new Error('invalid username type');
  if (username.length < 1) throw new Error('Invalid lenght username');
  if (username.length > 20) throw new Error('Invalid lenght username');
  if (typeof password !== 'string') throw new Error('invalid password type');
  if (password.length < 8) throw new Error('Invalid lenght password');

  const users = data.getUsers();

  const user = users.find((user) => user.email === email || user.username === username);
  if (user) throw new Error('User alredy exist');
  let usersCount = data.getUsersCount();
  usersCount++;

  users.push({
    id: 'user-' + usersCount,
    name: name,
    email: email,
    username: username,
    password: password,
  });

  data.setUsersCount(usersCount);
  data.setUsers(users);
};
