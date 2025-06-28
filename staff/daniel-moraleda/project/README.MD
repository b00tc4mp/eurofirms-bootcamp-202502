# Heaven App

## Intro   

This is an idle game based on paradise and adding huge amounts of light through upgrades and prestige system well known in this kind of games

## Functional

### Use Cases

User
- Play game
- Save progress
- Interact between users [v0.1]

### UI Components

App
App
 - Landing
 - Register
 - Login
 - Home (game)

###
Data Model

User
* id (UUID)
* name (string, required)
* email  (string, required, unique)
* username  (string, required, unique)
* password (string, required)
* role (string, values: regular | admin, required  )

### Technologies

* React
* Mongo
* Node
* Express
* Tailwind
* JWT
* Bcrypt

Management

[Issues](https://github.com/b00tc4mp/eurofirms-bootcamp-202502/issues/91)