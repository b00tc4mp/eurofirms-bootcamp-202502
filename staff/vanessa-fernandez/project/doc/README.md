# Gym Planner App 🏃‍♂️‍➡️

## Intro
Gym Planner is a web application designed to help you organize and visualize your personalized weekly workout routines in a simple and structured way.

This app is built for anyone who trains at the gym or from home.

- Register and create a basic account.
- View your weekly training schedule divided by days.
- Check which exercises are assigned each day.
- Mark exercises as completed and track progress.
- Leave comments about problems encountered during exercises.

The main idea is to provide a straightforward tool to manage your weekly workout plan without complications. Gym Planner focuses on personalized training tailored to each user’s specific needs or health conditions.

![Again and Again](https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3azkzcGV0OTdsNXN3cWFwc3Q0NnpxMjU4OGk4bGZkOG0zMTRzbTR1YSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zZapPN7vQZYJRDvMOO/giphy.gif)

## Functional

### Use Cases

Regular (User)

- Register and log in.
- Complete personal profile with gender, weight, and height.
- Access a personalized home page.
- View weekly workout schedule.
- See daily exercises.
- Mark exercises as completed. [v0.1]
- Add comments about exercises. [v0.1]
- Possibly edit profile. [v0.1]
- View workout history. [v0.1]

Admin (User) [v0.1]

- Create, edit, and delete available exercises.
- Assign workout plans to users.
- View users’ progress and performance.
- Review comments or problems reported by users.
- Manage user profiles.

---

### Prototype

[Figma] (https://www.figma.com/proto/rz7a6DNNaBTvh83KI0KOud/eurofirms-bootcamp-202502-product?node-id=69-138&p=f&t=nSlbKVTsAPPqgbap-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A25) 

---

## Technical

### Architecture

`[App] -> [API] -> [DB]`

**App**
- Components
- Logic
- Data

**Api**
- Routes
- Logic
- Data
- Middlewares
- Test

---

### UI Components

**App Views**

- Landing
- Register
- Login
- Home

**Home Subviews**

- Edit Profile
- Workout plan

**Workout plan**

- Exercises

---

### Data Model

**User**

- id (UUID)
- name (string, required)
- username (string, required, unique)
- email (string, required, unique)
- password (string, required)
- gender (string, optional)
- weight (number, optional)
- height (number, optional)
- profileCompleted (boolean, default: false)
- role (string, values: regular | admin, required) [v0.1]

**Exercise**

- id (UUID)
- name (string, required)
- description (string, required)
- image (string)
- difficulty (string, values: easy | medium | hard) [v0.1]
- muscleGroup (string, values: hombros | piernas | espalda | brazos | full-body) [v0.1]

**Workout**

- id (UUID)
- userId (UserId, required)
- day (string, required, enum (L-D) )
- exercises (array of objects) :

```json

     [{

            -exerciceId (UUID)
            -sets (number, required)
            -repetitions (number, required)
            -restTime (number, required)

    }]

 ```   
    

---    

### Technologies

- React
- Express
- Mongo
- Node
- Tailwind
- JWT
- Bcrypt
- ...

## Managment

[Issues]
(https://github.com/b00tc4mp/eurofirms-bootcamp-202502/issues/94)


