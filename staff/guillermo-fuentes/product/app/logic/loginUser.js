import { data } from '../data';
export const loginUser = (username, password) => {
  if (typeof username !== 'string') throw new Error('invalid username type');
  if (username.length < 3) throw new Error('invalid username min length');
  if (username.length > 20) throw new Error('invalid username max length');

  if (typeof password !== 'string') throw new Error('invalid password type');
  if (password.length < 8) throw new Error('invalid password min length');
  if (password.length > 20) throw new Error('invalid password max length');

  let user;

  for (let i = 0; i < data.users.length; i++) {
    const _user = data.users[i];

    if (_user.username === username) {
      user = _user;

      break;
    }
  }

  if (user === undefined) throw new Error('user not found');

  if (user.password !== password) throw new Error('wrong credentials');

  data.setUserId(user.id);
};
