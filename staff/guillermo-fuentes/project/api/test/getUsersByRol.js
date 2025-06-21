fetch('http://localhost:8080/users/cliente', {
  method: 'GET',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODRhOTc4OGZkYzFlYWYxMmUxYzA1YTUiLCJpYXQiOjE3NDk3MjQ3MjZ9.z07EibNKPtVCEZFm9skNarqqGXhNuKoAlCFE2ULUvgI',
  },
})
  .then((response) => {
    if (!response.ok) {
      return response
        .json()
        .then((body) => {
          throw new Error(body.message || 'Error en la solicitud');
        })
        .catch(() => {
          throw new Error('Error al parsear la respuesta');
        });
    }
    return response.json();
  })
  .then((users) => {
    console.log('Usuarios con rol admin:', users);
    return users;
  })
  .then(() => console.log('Usuarios obtenidos correctamente'))
  .catch((error) => console.error('Error:', error.message));
