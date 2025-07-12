# Admin panel [v0.0]

## Intro

Este proyecto trata de un panel de administracion donde un administrador podra crear, borrar y eliminar usuarios, este
proyecto pretende facilitar la administracion de usuarios de manera que sea facil he intuitiva

## Functional

### Use Cases

Regular (User) [v0.1]

- Modify own information 🎆

- View products 🎆

- View own user 🎆
  Admin (User) [v0.1]

- View information of other users 🎆

- Delete other users 🎆

- Create new users 🎆

- Edit user information 🎆

- Create supplier 🎆

- Delete supplier 🎆

- Edit supplier 🎆

- Create products 🎆

- Delete products 🎆

- Edit products 🎆

  Provider [v0.1]

- Create products 🎆

- Delete products 🎆

- Edit products 🎆

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

[Issues](https://github.com/b00tc4mp/eurofirms-bootcamp-202502/issues/87)
