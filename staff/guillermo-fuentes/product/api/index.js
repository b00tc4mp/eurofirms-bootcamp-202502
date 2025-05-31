import express from 'express';
import { logic } from './logic/index.js';

import cors from 'cors';
import { connect } from './data/index.js';
import { AuthorshipError, CredentialsError, DuplicityError, NotFoundError, ValidationError } from './logic/errors.js';
//Convertir en modulo node: node --yes
//Instalar express npm i express

connect('mongodb://localhost:27017/test')
  .then(() => {
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
    server.post('/users', jsonBodyParser, (request, response, next) => {
      try {
        const { name, email, username, password } = request.body;

        logic
          .registerUser(name, email, username, password)
          .then(() => response.status(201).send())
          .catch((error) => next(error));
      } catch (error) {
        next(error);
      }
    });

    server.post('/users/auth', jsonBodyParser, (request, response, next) => {
      try {
        const { username, password } = request.body;

        logic
          .authenticateUser(username, password)
          .then((userId) => response.status(200).json(userId))
          .catch((error) => next(error));
      } catch (error) {
        next(error);
      }
    });

    server.get('/users/self/username', (request, response, next) => {
      try {
        const authorization = request.headers.authorization;
        const userId = authorization.slice(6);
        logic
          .getUserUsername(userId)
          .then((username) => response.status(200).json(username))
          .catch((error) => next(error));
      } catch (error) {
        next(error);
      }
    });

    server.post('/posts', jsonBodyParser, (request, response, next) => {
      try {
        const authorization = request.headers.authorization;
        const userId = authorization.slice(6);
        const { image, text } = request.body;
        logic
          .createPost(userId, image, text)
          .then(() => response.status(201).send())
          .catch((error) => next(error));
      } catch (error) {
        next(error);
      }
    });

    server.get('/posts', (request, response, next) => {
      try {
        const authorization = request.headers.authorization;
        const userId = authorization.slice(6);
        logic
          .getPosts(userId)
          .then((posts) => response.status(200).json(posts))
          .catch((error) => next(error));
      } catch (error) {
        next(error);
      }
    });

    server.delete('/posts/:postId', (request, response, next) => {
      try {
        const authorization = request.headers.authorization;
        const userId = authorization.slice(6);
        // const postId = request.params.postId;
        const { postId } = request.params;
        logic
          .removePost(userId, postId)
          .then(() => response.status(204).send())
          .catch((error) => next(error));
      } catch (error) {
        next(error);
      }
    });
    server.use((error, request, response, next) => {
      if (error instanceof ValidationError)
        response.status(400).json({ error: error.constructor.name, message: error.message });
      else if (error instanceof NotFoundError)
        response.status(404).json({ error: error.constructor.name, message: error.message });
      else if (error instanceof CredentialsError)
        response.status(401).json({ error: error.constructor.name, message: error.message });
      else if (error instanceof AuthorshipError)
        response.status(403).json({ error: error.constructor.name, message: error.message });
      else if (error instanceof DuplicityError)
        response.status(409).json({ error: error.constructor.name, message: error.message });
      else response.status(500).json({ error: error.constructor.name, message: error.message });
    });
    server.listen(8080, () => console.log('server escucha'));
  })
  .catch((error) => console.error(error));
