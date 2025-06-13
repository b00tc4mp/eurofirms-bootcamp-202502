# Moto App [v0.0]

## Intro

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

![Cow on Moto](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWw4eW9wb2p2OTEweXl1cTVmcTBzM3Vrc3hpMGlzMDduZ2xsOWE0byZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/QIma0G0GMja3LrGVYL/giphy.gif)

## Functional

### Use Cases

Regular (User)
- search moto
- book moto
- chat with moto owner [v0.1]
- report moto
- report owner
- report consumer
- block owner
- block consumer
- share moto

Admin (User) [v0.1]
- view reports
- change repor status
- chat with moto owner
- chat with moto consumer
- block owner/consumer

### Prototype

[Figma](https://www.figma.com/design/gsNLHMODBJEGThNYekjEtY/App?t=AHRLm7bYiSsN8m0E-0)

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
 |- Posts
 |- CreatePost

Motos
 |- Search
 |- Moto

...
```

### Data Model

User
- id (UUID)
- name (string, required)
- email (string, required, unique)
- username (string, required, unique)
- password (string, required)
- role (string, values: regular | admin, required)

Moto
- id (UUID)
- owner (User.id, required)
- brand (string, required)
- model (string, required)
- year (number, required)
- description (string, required)
- price (number, required)
- status (string, values: free | busy, required)

Chat [v0.1]
- id (UUID)
- participants ([User.id], required)
- messages ([Message])

Message
- id (UUID)
- author (User.id, required)
- text (string, required)
- date (date, required)

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

[Issues](https://github.com/b00tc4mp/eurofirms-bootcamp-202502/issues/81)