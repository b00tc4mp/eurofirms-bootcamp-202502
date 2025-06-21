fetch('http://localhost:8080/proveedor', {
  method: 'POST',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODRiMTQzODlhZTg5ZjVjMWQ1Y2EwMTkiLCJyb2wiOiJhZG1pbmlzdHJhZG9yIiwiaWF0IjoxNzUwMjcxNDM0fQ.yeMBF6woW0MnZdO_6dtD2AhViv8T1AfTMjxNz-rXvkM',
    'Content-Type': 'application/json',
  },
  body: '{"nombre":"Julio Ramirez SA","contacto":"pepe@ramirez.com","direccion":"Calle Zafiro 3","idUsuario":"684c2d049fb56b0c5069c685"}',
})
  .catch((error) => {
    throw new Error('connection error');
  })
  .then((response) => {
    const { status } = response;
    if (status === 201) return;
    return response
      .json()
      .catch((error) => {
        throw new Error('json error');
      })
      .then((body) => {
        const { error, message } = body;
        throw new Error(message);
      });
  })
  .then(() => console.log('Proveedor created'))
  .catch((error) => console.error(error));
