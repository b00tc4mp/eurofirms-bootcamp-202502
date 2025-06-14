curl -X GET -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODQ3NWQ2ZGI3MTMxY2E5Y2U3MGY3OWIiLCJpYXQiOjE3NDk5MDA1MzF9.zcOp8UGU1Gx_IPUvih0HjF4C0X8udYO2DCvW_CAZ1PQ' http://localhost:8080/users/self/username -v

#recuerda que esa cadena jwt nos da el test authenticate-user.sh y ésta en cada autenticacion cambia el token, pero todos son validos

#en las cabeceras ahora en vez de Basic pondre Bearer y en vez del id que teniamos ahora pondremos el JWT