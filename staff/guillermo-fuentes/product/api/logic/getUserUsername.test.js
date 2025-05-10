import { getUserUsername } from './getUserUsername.js';
try {
  const username = getUserUsername('user-10');
  console.log('Nombre de usuario obtenido', username);
} catch (error) {
  console.error(error);
}
