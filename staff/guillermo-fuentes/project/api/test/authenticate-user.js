fetch('http://localhost:8080/users/auth', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email: 'admin@admin.com', password: '12345678' }), // Usar JSON.stringify para el body
})
  .catch((error) => {
    throw new Error('connection error');
  })
  .then((response) => {
    const { status } = response;

    if (status === 200) {
      return response
        .json()
        .catch((error) => {
          throw new Error('json error');
        })
        .then(({ token, rol }) => ({ token, rol })); // Desestructurar token y rol
    }

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
  .then(({ token, rol }) => {
    console.log('User authenticated', { token, rol });
    return { token, rol };
  })
  .catch((error) => console.error('Error:', error.message));
