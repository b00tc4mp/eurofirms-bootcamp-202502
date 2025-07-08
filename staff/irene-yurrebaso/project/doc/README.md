# Autism friendly travel app

## Intro

EN: Infinity Travel app is a collaborative portal where travellers on the autism spectrum can share their experiences, favourite spots, tips and useful information from the places they know or have visited. Travelling while being autistic can have its own challenges (sensory overload, change of routine, communication differences, anxiety about going to a new place...) so we want to make this as easy as possible leveraging the knowledge of the community around the world.

ES: La app Infinity Travel es un portal colaborativo en el que viajeros dentro del espectro autista pueden compartir sus experiencias, lugares favoritos, consejos e información útil de los sitios que conocen o han visitado. Viajar siendo autista puede presentar sus propios desafíos (sobrecarga sensorial, cambio de rutina, diferencias en la comunicación, ansiedad al ir a un sitio nuevo o desconocido...) así que queremos hacerlo un poco mas fácil a través del conocimiento compartido por la propia comunidad autista alrededor del mundo.

![Dog in a suitcase](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWRvZGZnY2kwamFldWU5eHpzZW83Y21rZDN5OGJib3Rna3k0bDJxYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/14wXMGbHjXK2k0/giphy.gif)

## Functional

### Use Cases

Regular (User)
- search by city, city and category, or place 
- add place
- add review
- edit review
- delete review
- geolocalization on map [v0.1]

Admin (User) [v0.1]
- approve place
- delete place
- delete review
- block owner

### Prototype

[Figma](https://www.figma.com/proto/CJLXOanjDKGflaRQcdJVKp/Autism-friendly-travel-App?node-id=3-36&p=f&t=90MKs1klT8m29D0D-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A36)

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
- Landing
- Register
- Login
- Home
- Add place
- Write review
- Show city, category and places
- Show place with reviews

Home
- Search
- Write review
- Add place

```

### Data Model

User
- id (UUID)
- username (string, required)
- email (string, required, unique)
- password (string, required)

Place
- id (UUID)
- name (string, required)
- category (i.e. hotels, restaurants, outdoors, transport, shops, museums, sports, other) (string, required)
- country (string, required)
- city (string, required)
- address (string, required)
- website (string)
- telephone (string)
- description (string, required)
- image (string)
- data creation (date)
- rating (number) [v0.1]
- location lat & lng on map (number) [v0.1]

Review
- id (UUID)
- title (string, required)
- comment (string, required)
- features (i.e. sensory friendly, low noise levels, flexible menu, quiet, clear information...) (boolean, required)
- date creation (ISODate, required)
- date visited (string, required)
- image (string)

### Technologies
- React
- Express
- Mongo / Mongoose
- Node
- Tailwind
- JWT
- Bcrypt

## Management

[Issues] (https://github.com/b00tc4mp/eurofirms-bootcamp-202502/issues/93)