# Gym Planner App 🏃‍♂️‍➡️

## Intro
Gym Planner es una aplicación diseñada para ayudarte a organizar y visualizar tus entrenamientos semanales personalizados de forma simple y estructurada.
Esta app permite a cualquier persona que entrene en el gimnasio o desde casa.

- Registrarse y crear un perfil básico.
- Visualizar su semana de entrenamiento dividida por días.
- Consultar qué ejercicios tiene asignados cada día.
- Marcar los ejercicios como realizados y mantener un seguimiento diario.
- Comentar problemas que puedan surgir cuando se realiza el ejercicio.

La idea principal es ofrecer una herramienta sencilla para gestionar la rutina semanal sin complicaciones. Gym Planner se enfoca en entrenamientos adaptados a cada persona, teniendo en cuenta posibles limitaciones o necesidades especiales relacionadas con la salud del usuario.

![Again and Again](https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3azkzcGV0OTdsNXN3cWFwc3Q0NnpxMjU4OGk4bGZkOG0zMTRzbTR1YSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zZapPN7vQZYJRDvMOO/giphy.gif)

## Functional
### Use Cases
Regular (User)

- Registrarse e iniciar sesión.
- Completar su perfil con datos básicos (peso, altura, sexo).
- Acceder a página de inicio personalizada.
- Visualizar su planificación semanal de ejercicios.
- Consultar la rutina diaria de cada día de la semana.
- Ver los ejercicios asignados por día.
- Marcar ejercicios como realizados.[V0.1]
- Añadir comentarios sobre el ejercicio.[V0.1]
- Probabilidad de editar perfil.[v0.1]
- Ver progreso histórico.[v0.1]

Admin (User) [v0.1]

- Crear, editar y eliminar ejercicos disponibles.
- Asignar rutinas semanales a cada usuario.
- Consultar el estado o progreso de los usuarios.
- Revisar comentarios o problemas reportados por los usuarios sobre los ejercicios.
- Gestionar perfiles de usuarios activos.

### Prototype
[Figma] (https://www.figma.com/proto/rz7a6DNNaBTvh83KI0KOud/eurofirms-bootcamp-202502-product?node-id=69-138&p=f&t=nSlbKVTsAPPqgbap-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A25) 

## Technical
### Architecture
[App] -> [API] -> [DB]

App
- Components
- Logic
- Data

Api
- Routes
- Logic
- Data

### UI Components

App

- Landing
- Register
- Login
- Home

Home

- Edit Profile
- Workout plan

Workout plan

- Ejercicios

...

### Data Model

User

- id (UUID)
- name (string, required)
- username (string, required, unique)
- email (string, required, unique)
- password (string, required)
- género (string, required)
- peso (number, required)
- altura (number, required)
- role (string, values: regular | admin, required) [v0.1]

Exercise
- id (UUID)
- name (string, required)
- description (string, required)
- image (string)
- dificultad (string, values: easy | medium | hard) [v0.1]
- grupo muscular (string, values: hombros | piernas | espalda | brazos | full-body) [v0.1]

Entrenamiento
- id (UUID)
- userId (UserId, required)
- day (string, required, enum (L-D) )
- ejercicios (array of objects)

     [
        {

            -ejercicioId (UUID)
            -series (number, required)
            -repeticiones (number, required)
            -descanso (number, required)

    }]

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



    

