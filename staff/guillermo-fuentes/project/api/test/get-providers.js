fetch('http://localhost:8080/providers', {
  method: 'GET',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODRhOTc4OGZkYzFlYWYxMmUxYzA1YTUiLCJpYXQiOjE3NDk3MjQ3MjZ9.z07EibNKPtVCEZFm9skNarqqGXhNuKoAlCFE2ULUvgI',
  },
})
  .catch((error) => {
    throw new Error('connection error');
  })
  .then((response) => {
    const { status } = response;
    if (status === 200)
      return response
        .json()
        .catch((error) => {
          throw new Error('json error');
        })
        .then((users) => {
          console.log('Users recibidos', users);
          return users;
        });

    return response
      .json()
      .catch(() => {
        throw new Error('json error');
      })
      .then((body) => {
        const { error, message } = body;
        throw new Error(message);
      });
  })
  .then(() => console.log('Providers obtained'))
  .catch((error) => console.error(error));
