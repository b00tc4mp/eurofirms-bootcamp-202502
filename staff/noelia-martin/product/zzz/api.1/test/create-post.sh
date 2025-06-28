curl -X POST -H 'Authorization: Basic user-2' -H 'Content-Type: application/json' -d '{"image":"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2V6cWJlZnYzcXY4ODU0NnV1bjN1ZGxlcHVlajRqenh6b2gxN3pqbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GSgWBrpHeRdWE/giphy.gif","text":"pin8 dancing"}' http://localhost:8080/posts -v

#Creamos este archivo antes de la configuracion en la api y despues de la logica

#metodo get ya que le vamos a enviar datos, en forma de JSON. También pasaremos una credencial(recuerda que para ello es indiferente metodo get o post) 

#Como tenemos que enviar un dato, que es una credencial, lo haremos a traves de una cabecera con nombre Authorization y contenido Basic seguido del id (se realiza asi por convenio)