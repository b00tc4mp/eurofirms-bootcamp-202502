curl -X GET -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODQ0NGQ3NThiODY0OTY0N2E5ZDk1YmIiLCJpYXQiOjE3NDkzMjE3OTd9.xyJOo20yW_8BwGjAEMlIRpS7j_V37kzP50weiU8DWmg' http://localhost:8080/users/self/username -v

#recuerda que esa cadena jwt nos da el test authenticate-user.sh y ésta en cada autenticacion cambia el token, pero todos son validos

#en las cabeceras ahora en vez de Basic pondre Bearer y en vez del id que teniamos ahora pondremos el JWT