# YourFitStyle [v0.0]

## Intro

Explicar que hace la aplicacion

![Tu Entrenando](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWtjODliNnpwcDcyeGR0dWtjZ2t1MWNpMjRuZHRpdWVjODhzOHRtbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DiiRCPwltHTLaHmF2E/giphy.gif)

## Functional

### Use Cases

Regular (User)

-Build his own routine choosing different exercises
- Personalize different routine days
- record weights and series in each exercise
-combine a few exercises working in superseries
-report issues 

Admin (User)
-view reports
-

### UIUX Prototype 

[Figma](https://www.figma.com)

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
  |- Landing
  |- Register
  |- Login
  |- Home

  Home
   |- Routine
   |- 

   ...
   ```
   ### Data Model

   User
    - id (UUID)
    - name (string, required)
    - email (string, required, unique)
    -username (string, required, unique)
    - password( string, required)
    -role (string, enum: regular | admin, required)

    Exercise 
    - id (UUID)
    - Category (string, required)
    - Name (string, required)
    - Descripcion (string)

    Routine
    -id (UUID)
    -name (string, required)
    -Author (UserId, required)


### Technologies

- React
- Express
- Mongo
- Node
- Tailwind
- JWT
- Bcrypt

## Management