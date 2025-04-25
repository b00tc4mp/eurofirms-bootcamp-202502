version react con completa navegacion y con una home mas completa, la cuál tiene un mensaje de bienvenida personalizado y varios post de diferentes usuarios

Para crear todo esto hemos tenido que almacenar todos los usuarios, tanto los que estan en la base de datos(data.js) como los nuevos registrados(que se siguen eliminando al refrescar la pg)
Se han almacenado para saber que usuario es el conectado y darle la bienvenida

También hemos creado el componente Posts con varios post que mostrar una vez se han logeado los usuarios( independientemente de que usuario sea)

Se ha necesitado crear un identificador unico, con un contador, para cada usuario y cada post, esto ha conllevado varios cambiamos en nuestra logica y en nuestro data
En data hemos implementado el contenido de nuestros posts