# YourFitStyle [v0.0]

## Intro
This app will store your exercises and let you personalize your routine  

![Tu Entrenando](https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3emJyYXUwaTExdzhmamY4MnI2aTluM2w0Z2F3dHQ0bjcxbzhsM2dieSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hlh2xvhZOfzji/giphy.gif)

## Functional

### Use Cases

Regular (User)

-Build his own routine choosing different exercises
- Personalize different routine days
- record weights and series in each exercise
-combine a few exercises working in superseries

### UIUX Prototype 

[Figma](https://www.figma.com/proto/0WKEB0yGsWdkhByoobhfGj/YourFitStyle?node-id=11-68&t=62RGvAv6IqbO4s5y-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=11%3A68)

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
  |- Personalized
  |- New training
  |- Exercises [v0.1]
  |- Training window

  Home
   |- Personalized
   |- New
   |- Routine
   |- My Profile[v0.1]

  New Routine
   |- Routine title
   |- Add Routine description

  Exercises[v0.1]
   |- Search bar
   |- Select Exercises
   |- Add Exercises

  Training Window[v0.1]
   |- adding set button
   |- add Exercise
   |- Save button
   |- Name Edit Button

   ### Data Model

   User
    - id (UUID)
    - name (string, required)
    - email (string, required, unique)
    -username (string, required, unique)
    - password( string, required)

    Routine
    -id (UUID)
    -author (User.id, required)
    -title (string, required)
    -description (string, required)

    Exercise (v 0.1)
    - id (UUID)
    - Category (string, required)
    - Name (string, required)
    - Description (string)

### Technologies

- React
- Express
- Mongo
- Node
- Tailwind
- JWT
- Bcrypt

## Management

[Issues](https://github.com/b00tc4mp/eurofirms-bootcamp-202502/issues/86)