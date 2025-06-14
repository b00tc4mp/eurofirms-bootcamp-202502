# Admin panel [v0.0]

## Intro

Este proyecto trata de un panel de administracion donde un administrador podra crear, borrar y eliminar usuarios, este
proyecto pretende facilitar la administracion de usuarios de manera que sea facil he intuitiva

## Functional

### Use Cases

Regular (User)

- Modificar su propia informacion
- Eliminar su usuario

Admin (User) [v0.1]

- Ver informacion de otros usuarios
- Eliminar otros usuarios
- crear nuevos usuarios
- editar informacion de los usuarios

### Prototype

[Figma](https://www.figma.com/design/EjU8SGVRY9sQEqBjH275GE/Admin-panel?node-id=0-1&t=GJ2UQFWQQ5Uz51C9-1)

## Technical

### Architecture

[App] -> [API] -> [DB]

App

- components
- logic
- data

API

- routes
- logic
- data

### UI Components

```
App

 |- Register
 |- Login
 |- Home
 |- Users
 |- User

...
```

### Data Model

User

- id (UUID)
- nombreCompleto (string, required)
- email (string, required, unique)
- password (string, required)
- direccion (string, required)
- role (string, values: administrador | cliente| empleado, required)

### Technologies

- React
- Express
- Mongo
- Node
- Tailwind
- JWT
- Bcrypt

## Management

[Issues](https://github.com/b00tc4mp/eurofirms-bootcamp-202502/issues/81)
