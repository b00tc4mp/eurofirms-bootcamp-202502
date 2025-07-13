# Admin panel [v0.0]

## Intro

Este proyecto consiste en un panel de administración en el que un administrador podrá crear, modificar y eliminar usuarios.  
Su objetivo es facilitar la gestión de usuarios de forma clara, sencilla e intuitiva.

![Minions](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHMwNmE5eXNyN3FzdnBmd3M4MnVodnE5NWE2bDRpZDlrbTM5bmp5cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GliOid0Gx3T3O/giphy.gif)

## Functional

### Use Cases

Regular (User)

- Modify own information 🎆
- View products 🎆
- View own user 🎆

Admin (User)

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

Provider (User)

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

- Register
- Login
- Home
- Users
    - User
      - EditUser
- Providers
  - Provider
    - EditProvider
- AddProvider
  - SearchUsers
- Products
  - Product
    - EditProduct
- AddProduct
  - SearchProviders
- Navbar
- Alert
- Confirm
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
- address (string required)
- user (User.id, UUID)

Product

- id(UUID)
- name (string, required, unique)
- description (string, required)
- price (number, required)
- stock (number, required)
- image (string,required)
- dateCreation (date, required, default: date.now)
- dateModification (date, required, default:null)
- provider (Provider.id, UUID)

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
