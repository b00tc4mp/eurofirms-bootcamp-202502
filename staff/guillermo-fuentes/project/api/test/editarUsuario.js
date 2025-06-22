fetch('http://localhost:8080/users/68570c3e11cb0b356fedc67d', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODRiMTQzODlhZTg5ZjVjMWQ1Y2EwMTkiLCJyb2wiOiJhZG1pbmlzdHJhZG9yIiwiaWF0IjoxNzQ5OTk1NzIyfQ.W6s14JLc68PHYMYWu-lSx5CWJTC5PlRnClohVcyaKMQ',
  },
  body: JSON.stringify({
    nombreCompleto: 'Concepción García',
    direccion: 'Calle Sevilla 45',
    email: 'concepcion.garcia@example.com',
    password: 'nuevaPassword123',
    rol: 'empleado', // Puedes probar también con 'cliente' o 'administrador'
  }),
})
  .then((response) => {
    const { status } = response;
    return response.text().then((text) => {
      try {
        const data = JSON.parse(text);

        if (status === 200) {
          console.log('✅ Mensaje del servidor:', data.mensaje);
        } else {
          const mensaje = data.message || 'Error desconocido';
          throw new Error(mensaje);
        }
      } catch (error) {
        throw new Error('Respuesta no válida del servidor');
      }
    });
  })
  .catch((error) => {
    console.error('❌ Error:', error.message);
  });
