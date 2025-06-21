fetch('http://localhost:8080/users/6856c8f8d0342abb0b9b3450', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODRiMTQzODlhZTg5ZjVjMWQ1Y2EwMTkiLCJyb2wiOiJhZG1pbmlzdHJhZG9yIiwiaWF0IjoxNzUwNTIyNTE3fQ.ypcIEOrggZ4Xv0ZMsyL-HY6IkKeuJrQMz96oYm6ZqBU',
  },
  body: JSON.stringify({
    nombreCompleto: 'Conchita Migue',
    direccion: 'Calle Madrid',
  }),
})
  .then((response) => {
    const { status } = response;
    console.log('Estado de la respuesta:', status); // Depuración

    return response
      .text() // Obtener la respuesta cruda para inspeccionarla
      .then((text) => {
        try {
          const body = JSON.parse(text); // Intentar parsear como JSON

          if (status === 200) {
            console.log('Respuesta del servidor:', body.mensaje); // Mostrar el mensaje
            return body; // Retornar el objeto con el mensaje
          }

          // Manejar errores del servidor (status !== 200)
          const { message } = body;
          throw new Error(message || 'Error desconocido del servidor');
        } catch (error) {
          throw new Error(`Error al parsear la respuesta: ${text}`);
        }
      });
  })
  .then(() => console.log('Usuario editado correctamente'))
  .catch((error) => {
    console.error('Error:', error.message);
    throw error; // Re-lanzar el error si necesitas manejarlo más arriba
  });
