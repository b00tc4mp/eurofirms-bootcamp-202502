# Vite with React (example)

pasos para convertir app en un paquete de node

```sh
🍰 cd staff/manuel-barzi/product/app
🍰 pwd
/Users/manuelbarzi/workspace/eurofirms-bootcamp-202502/staff/manuel-barzi/product/app
🍰 npm init --yes
Wrote to /Users/manuelbarzi/workspace/eurofirms-bootcamp-202502/staff/manuel-barzi/product/app/package.json:
```

pasos para instalar vite y arrancar el servidor web con él

```sh
🍰 pwd
/Users/manuelbarzi/workspace/eurofirms-bootcamp-202502/staff/manuel-barzi/product/app
🍰 pwd npm i -D vite
```

// poner el script start en package.json

```json
    "scripts": {
        "start": "vite --host",
        "test": "echo \"Error: no test specified\" && exit 1"
    }
```

arrancar el servidor web http de vite para la app

```sh
🍰 npm start

> app@0.0.0 start
> vite --host


  VITE v6.2.5  ready in 73 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://127.0.2.2:5173/
  ➜  Network: http://127.0.2.3:5173/
  ➜  Network: http://192.168.1.214:5173/
  ➜  Network: http://172.16.0.2:5173/
  ➜  press h + enter to show help
```

para trabajar con react, instalamos el plugin de react para vite

```sh
🍰 npm i -D @vitejs/plugin-react

up to date, audited 59 packages in 970ms

7 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

instalar las dependencias (paquetes) de ejecución de react

```sh
🍰 npm i react react-dom

up to date, audited 62 packages in 1s

7 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

crear fichero de configuracion de vite

```sh
🍰 pwd
/Users/manuelbarzi/workspace/eurofirms-bootcamp-202502/staff/manuel-barzi/product/app
🍰 touch vite.config.js
```

dentro de ese fichero, preparar la configuración de vite en javascript

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()]
})
```

en el package.json definir que sea de tipo `module`

```json
  "type": "module",
```

renombrar `main.js` a `main.jsx`

eliminar todo el contenido dentro de ese fichero (empezaremos de nuevo con la interfaz)

creamos el componente principal `App.jsx` (mirar pull request manu)

importamos `createRoot` en el `main.jsx` y montamos la app en el root element de react (mirar pull request)

en el `index.html` poner `main.jsx` y `type="module"`

