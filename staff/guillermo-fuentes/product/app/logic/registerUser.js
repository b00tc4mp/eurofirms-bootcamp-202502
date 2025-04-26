import { data } from '../data';
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

  for (let i = 0; i < data.users.length; i++) {
    var user = data.users[i];
    if (user.email === email || user.username === username) throw new Error('email or username already exists');
  }
  data.usersCount++;
  data.users.push({
    id: 'user-' + data.usersCount,
    name: name,
    email: email,
    username: username,
    password: password,
  });
};
