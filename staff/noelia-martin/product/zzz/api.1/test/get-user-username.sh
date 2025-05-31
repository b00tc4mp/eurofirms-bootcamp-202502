curl -X GET -H 'Authorization: Basic user-1' http://localhost:8080/users/self/username -v

# para configurar la api correspondiente a la logica de userUsername, hacemos como con dicha logica, comenzamos creando el test

# Utilizaremos el metodo GET, ya que no tenemos que enviar ningun body(JSON) y le vamos a pedir un dato (el username correspondiente al id indicado)

#Como tenemos que enviar un dato, que es una credencial, lo haremos a traves de una cabecera con nombre Authorization y contenido Basic seguido del id (se realiza asi por convenio)