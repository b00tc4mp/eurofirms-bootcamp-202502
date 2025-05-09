import express from 'express';
import { logic } from './logic/index.js';
//Convertir en modulo node: node --yes
//Instalar express npm i express

const server = express();
//Convierte el json a objeto
const jsonBodyParser = express.json();
//Manejador de ruta get hello
server.get('/hello', (request, response) => {
  response.send('hello');
});
//manejador de ruta get color
server.get('/color', (request, response) => {
  const q = request.query.q;
  let code;
  if (q === 'red') code = '#FF0000';
  else if (q === 'gree') code = '#00FF00';
  else if (q === 'blue') code = '#0000F';
  response.send(code);
});
//manejador de ruta  post
server.post('/users', jsonBodyParser, (request, response) => {
  try {
    const { name, email, username, password } = request.body;
    logic.registerUser(name, email, username, password);
  } catch (error) {
    console.error(error.message);
  }

  response.send('user received!');
});
server.listen(8080, () => console.log('server escucha'));
