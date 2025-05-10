import { authenticateUser } from './authenticateUser.js';

try {
  const userId = authenticateUser('pepe123', '12345678');

  console.log('user authenticated', userId);
} catch (error) {
  console.error(error);
}
