curl -X POST -H 'Content-Type: application/json' -d '{"name":"Peter Pan","email":"peter@pan.com","username":"peterpan","password":"123123123"}' http://localhost:8080/users -v

# para ejecutar este test, hay que usar el comando bash seguido de la ruta del fichero

# El cliente curl se comunicara con el servidor, utilizara el metodo post(para enviar datos), indico que será un contenido Json y le pasara el dato. El -v es para que nos muestre todo lo ocurrido