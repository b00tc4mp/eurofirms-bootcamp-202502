import { data } from '../data';

/**Logica que obtiene el nombre de usuario para mostrar ese nombre en la interfaz, esta logica contiene un bucle que recorre el array usuarios y va comprobando usuario por usuario y ver si coincide la id del usuario si hay coincidencia muestra el nombre de usuario de ese usuario */
export const getUserUsername = () => {
  const users = data.getUsers();
  let user;

  for (let i = 0; i < users.length; i++) {
    const _user = users[i];

    if (_user.id === data.getUserId()) {
      user = _user;

      break;
    }
  }

  if (user === undefined) throw new Error('user not found');

  return user.username;
};
