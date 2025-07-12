# Admin panel [v0.0]

## Intro

Este proyecto trata de un panel de administracion donde un administrador podra crear, borrar y eliminar usuarios, este
proyecto pretende facilitar la administracion de usuarios de manera que sea facil he intuitiva

## Functional

### Use Cases

Regular (User)

- Modificar su propia informacion
- Ver Productos 🎆
- Ver Proveedores 🎆
  Admin (User) [v0.1]

- Ver informacion de otros usuarios 🎆
- Eliminar otros usuarios 🎆
- crear nuevos usuarios 🎆
- editar informacion de los usuarios 🎆
- Crear proveedor 🎆
- Eliminar proveedor 🎆
- Editar proveedor 🎆
- Crear productos 🎆
- Eliminar productos 🎆
- Editar productos 🎆

  Provider

- Crear productos 🎆
- Eliminar productos 🎆
- Editar productos 🎆

### Prototype

[Figma](https://www.figma.com/design/EjU8SGVRY9sQEqBjH275GE/Admin-panel?node-id=0-1&t=GJ2UQFWQQ5Uz51C9-1)

## Technical

### Architecture

[App] -> [API] -> [DB]

App

- components
- logic
- data
- assets
- context
- view
  API

- routes
- logic
- data
- middlewares
- routes
- test

### UI Components

```
App

 |- Register
 |- Login
 |- Home
 |- Users
 |- User
 |- Provider
 |- Providers
 |- AddProvider
 |- EditProvider
 |- Product
 |- Products
 |- AddProduct
 |- EditProduct
 |- SearchProviders
 |- SerachUsers
 |- Navbar
 |- Alert
 |- Confirm

...
```

### Data Model

User

- id (UUID)
- fullName (string, required)
- email (string, required, unique)
- password (string, required)
- address (string, required)
- role (string, values: administrator | client| employee| provider required)

Provider

- id (UUID)
- name (string, required, unique)
- address(string required)
- user(referencia al id usuario, ObjectId)

Product

- id(UUID)
- name (string, required, unique)
- description(string, required)
- price(number, required)
- stock(number, required)
- image(string,required)
- dateCreation(date, required, default: date.now)
- dateModification(date, required, default:null)
- provider(referencia al id del provider)

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
