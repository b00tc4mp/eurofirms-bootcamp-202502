fetch('http://localhost:8080/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: '{"nombreCompleto":"Javi perez", "email":"javi@perez.com","password":"12345678", "direccion":"calle zafiro","rol":"administrador"}',
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
  .then(() => console.log('user registered'))
  .catch((error) => console.error(error));
