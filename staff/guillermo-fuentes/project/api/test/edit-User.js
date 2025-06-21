fetch('http://localhost:8080/users', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODRiMTI4ZGNmYWMzNjhjYTI1NGM2NTAiLCJpYXQiOjE3NDk3OTc1NDJ9.fJz5iq3FfwutkrRKlXWcN4gsaTbiKgnJwtNMyq1k2WA',
  },
  body: JSON.stringify({
    nombreCompleto: 'Antonio Cliente',

    direccion: 'Calle Madrid',
  }),
})
  .catch((error) => {
    throw new Error('Error de conexión');
  })
  .then((response) => {
    const { status } = response;
    console.log('Estado de la respuesta:', status); // Depuración
    return response
      .text() // Inspeccionar la respuesta cruda
      .then((text) => {
        if (status === 200) {
          try {
            const user = JSON.parse(text);
            console.log('Usuario actualizado:', user);
            return user;
          } catch (error) {
            throw new Error('Error al parsear JSON');
          }
        }
        try {
          const body = JSON.parse(text);
          const { error, message } = body;
          throw new Error(message);
        } catch (error) {
          throw new Error('Error al parsear JSON de error');
        }
      });
  })
  .then(() => console.log('Usuario editado correctamente'))
  .catch((error) => console.error('Error:', error.message));
