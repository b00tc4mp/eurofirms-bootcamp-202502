# ACONPP [v0.0]

## INTRO

This app will be a place where any parents with a child with achondroplasia will be able to get the best feedback possible about: Clinic, doctors, surgeries, treatments...

![The people with achondroplasia can also have success](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajAwZGxtcWxmM3IyenFyZWhyNW13dWkwNnBpYWk4YXdtb3ZheDBldyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l41lMys544EV5mTUk/giphy.gif)

## FUNCTIONAL

### Use Cases

Regular (User)
- Search information
- Share any experience
- Value trearments and doctors
- Request information to the Post's Owner
- Report any false post
- Block users

Admin (User) [v0.1]
- Lock and Unlock to any user
- View reports

## UIUX

[Figma1](https://www.figma.com/design/z2chCjxbk9iY3b5jPFm1L2/eurofirms-bootcamp-202502-product?node-id=63-18&p=f&t=t8orqf6YL3ncIASp-0)

[Figma2](https://www.figma.com/proto/z2chCjxbk9iY3b5jPFm1L2/eurofirms-bootcamp-202502-product?node-id=63-46&p=f&t=t8orqf6YL3ncIASp-0&scaling=scale-down&content-scaling=fixed&page-id=63%3A18&starting-point-node-id=63%3A46)

## TECHNICAL

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
 - Landing
 - Register
 - Login
 - Home

Home
 - Posts
 - CreatePost

Posts
 - Post
 - CreatePost

```
### Data Model

User
* id (UUID)
* name (string, required)
* email  (string, required, unique)
* username  (string, required, unique)
* password (string, required)
* role (string, values: regular | admin, required  )

Review
* id (UUID)
* author (User.id)
* date (string, required)
* doctor (string, required)
* clinic (string, required)
* surgery (string, required)
* treatment (string, required)

### Technologies

* React
* Mongo
* Node
* Express
* Tailwind
* JWT
* Bcrypt

## MANAGEMENT

[Issues](https://github.com/b00tc4mp/eurofirms-bootcamp-202502/issues/89)