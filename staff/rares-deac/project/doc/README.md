# YourFitStyle [v0.0]

## Intro
This app will store your exercises and let you personalize your routine  

![Tu Entrenando](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWtjODliNnpwcDcyeGR0dWtjZ2t1MWNpMjRuZHRpdWVjODhzOHRtbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DiiRCPwltHTLaHmF2E/giphy.gif)

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
  |- Exercises
  |- Training window

  Home
   |- Personalized
   |- My Profile

  Personalized
   |- Personalized
   |- My Profile
   |- New
   |- Routine

  New training
   |- Personalized name
   |- Add exercise

  Exercises
   |- Search bar
   |- Select Exercises
   |- Add Exercises

  Training Window
   |- adding set button
   |- add Exercise
   |- Save button
   |- Name Edit Button

   ...
   ```
   ### Data Model

   User
    - id (UUID)
    - name (string, required)
    - email (string, required, unique)
    -username (string, required, unique)
    - password( string, required)

    Exercise 
    - id (UUID)
    - Category (string, required)
    - Name (string, required)
    - Description (string)

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

[Issues](https://github.com/b00tc4mp/eurofirms-bootcamp-202502/issues/86)