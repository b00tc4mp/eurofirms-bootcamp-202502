7/6/26

Cambiamos el index de data para que los metodos no sean para userId sino para token
En las logicas, modificamos todas las que utilizaban los metodos antiguos para usar los nuevos y las cabeceras de autorización para que trabaje con Bearer en vez de Basic. Recuerda que se realiza asi por convenio

Variables de entorno: creo el fichero .env que tendrá de momento una sola variable de entorno, el enlace a la api.
Configuro todas las logicas que contienen una llamada a la api con esta variable
Configuro vite para que tenga en cuenta este nuevo fichero, en vite.config.js, añado envPrefix: 'VITE_',
(reiniciamos visual para que se ejecute la configuración)