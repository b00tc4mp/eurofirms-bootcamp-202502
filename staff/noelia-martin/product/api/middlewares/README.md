Los middleware son funciones que se ejecutan entre la solicitud y la respuesta del servidor.
Estas funciones tienen acceso al objeto de solicitud (req), al objeto de respuesta (res) y a la función next() que permite pasar el control al siguiente middleware en la cadena. 

(utilizamos next para el middleware de errores)