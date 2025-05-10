import { registerUser } from './registerUser.js';

try {
  registerUser('Pepe', 'pepe@pepe.com', 'pepe123', '12345678');

  console.log('usuario registrado');
} catch (error) {
  console.error(error);
}
