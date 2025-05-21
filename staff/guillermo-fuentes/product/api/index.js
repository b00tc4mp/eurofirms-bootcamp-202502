import express from 'express';
import { logic } from './logic/index.js';
import { data } from './data/index.js';
import cors from 'cors';
//Convertir en modulo node: node --yes
//Instalar express npm i express

const server = express();
//Convierte el json a objeto
const jsonBodyParser = express.json();
server.use(cors());
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

    response.status(201).send();
  } catch (error) {
    response.status(500).json({ error: error.constructor.name, message: error.message });
  }
});
server.post('/users/auth', jsonBodyParser, (request, response) => {
  try {
    const { username, password } = request.body;

    const userId = logic.authenticateUser(username, password);

    response.status(200).json(userId);
  } catch (error) {
    response.status(500).json({ error: error.constructor.name, message: error.message });
  }
});
server.get('/users/self/username', (request, response) => {
  try {
    const authorization = request.headers.authorization;
    const userId = authorization.slice(6);
    const username = logic.getUserUsername(userId);
    response.status(200).json(username);
  } catch (error) {
    response.status(500).json({ error: error.constructor.name, message: error.message });
  }
});

server.post('/posts', jsonBodyParser, (request, response) => {
  try {
    const authorization = request.headers.authorization;
    const userId = authorization.slice(6);
    const { image, text } = request.body;
    logic.createPost(userId, image, text);
    response.status(201).send();
  } catch (error) {
    response.status(500).json({ error: error.constructor.name, message: error.message });
  }
});
server.get('/posts', (request, response) => {
  try {
    const authorization = request.headers.authorization;
    const userId = authorization.slice(6);
    const posts = logic.getPosts(userId);
    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json({ error: error.constructor.name, message: error.message });
  }
});
server.delete('/posts/:postId', (request, response) => {
  try {
    const authorization = request.headers.authorization;
    const userId = authorization.slice(6);
    // const postId = request.params.postId;
    const { postId } = request.params;
    logic.removePost(userId, postId);
    response.status(204).send();
  } catch (error) {
    response.status(500).json({ error: error.constructor.name, message: error.message });
  }
});
server.listen(8080, () => console.log('server escucha'));
