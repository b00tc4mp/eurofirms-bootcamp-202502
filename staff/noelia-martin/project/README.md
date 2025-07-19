# Documento de Salud Infantil Junta de Andalucía

 # Intro

 Una herramienta para ayudaros a madres, padres y profesionales a compartir información importante sobre la salud, el crecimiento y el desarrollo de vuestro hijo o hija.

 ## Functional

 ### Use Cases

 Regular (User)
 - Registrar y loguear una vez por menor
 - Leer, editar y eliminar formularios reservados para madres, padres o tutores
 - Leer formularios reservados para el personal sanitario.

 Doctor (User)
 - No registrar, se le proporciona datos de acceso para poder loguearse.
 - Leer, editar y eliminar formularios reservados para personal sanitario.
 - Leer formularios reservados para madres, padres o tutores.

 ### Prototype
 [figma](https://www.figma.com/proto/zK3AsY7a7Vf8M0jt721H5a/Proyecto?node-id=5-41&t=PlzesSSVCMkHcFAF-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A41)
 
 [Documento de Salud Infantil (Original)](https://juntadeandalucia.es/export/drupaljda/csafa_documentoSaludInfantil_SE1740-2019v2.pdf)

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
 |- Welcome
 |- Landing
 |- Register
 |- Login
 |- Home
 |- ChooseChild


Home
 |- forms ...

...
```

### Data Model

User
- id (UUID)
- username (string, required, unique)
- password (string, required)
- name (string, required)
- healthCareNumber (string, required, unique)
- dateOfBirth (date, required)
- role (string, required, enum: [regular, doctor], default: regular)

Child
- parents (objectId, ref: User, required)
- name (string)
- surnames (string)
- birthdate (string)
- address (string)
...


### Technologies

- React
- Express
- Mongo
- Node
- Tailwind
- JWT
- Bcrypt
- ...

## Management

[Issues](https://github.com/b00tc4mp/eurofirms-bootcamp-202502/issues/82)