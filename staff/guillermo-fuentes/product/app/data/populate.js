import { data } from './index';

/*
Este archivo es como nuestra base de datos estatica, esta primera parte representa los usuario registrados 
*/

const users = [];
let usersCount = 0;
usersCount++;

users.push({
  id: 'user-' + usersCount,
  name: 'wendy darling',
  email: 'wendy@darling.com',
  username: 'wendydarling',
  password: '12345678',
});

usersCount++;
users.push({
  id: 'user-' + usersCount,
  name: 'Peter pan',
  email: 'peter@pan.com',
  username: 'peterpan',
  password: '12345678',
});
data.setUsers(users);
data.setUsersCount(usersCount);

/*
Aqui representan los posts y estos post estan vinculados a un usuario por su id, cada post tiene un id y para vincularlos a un usuario hacemos esto: author: users[0].id, aqui lo que hacemos es coger el array usuarios y de ese array obtener la propiedad id, esta propiedad esta vinculada con el id de cada usuario y se indica en esta linea: id: 'user-' + usersCount, y si hacemos una relacion podemos averiguar a quien pertenece cada post  
*/

const posts = [];
let postsCount = 0;
postsCount++;

posts.push({
  id: 'post-' + postsCount,
  author: users[0].id,
  image:
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnMxMG50c3FneXkxZ2tneGQzNjNsODd2ZmFkbGJiYXNqbWsyYXZjeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11NU4BxIpTYNGw/giphy.gif',
  text: 'I feel very happy',
  date: new Date().toISOString(),
  likes: [],
});
postsCount++;

posts.push({
  id: 'post-' + postsCount,
  author: users[1].id,
  image:
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXNobWlleGdwdGE2bG4ya2thc2R2bzNpeGpyN2RtMWh4emV3aXc5MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lDR0wnXboVr8c/giphy.gif',
  text: 'Flying',
  date: new Date(2024, 0, 11, 10, 0).toISOString(),
  likes: [],
});

data.setPosts(posts);
data.setPostCount(postsCount);
