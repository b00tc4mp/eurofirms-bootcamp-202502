fetch('http://localhost:8080/posts', {
  method: 'GET',
  headers: {
    Authorization: 'Basic 6830cb9b22525f24e06c4bd1',
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
        .then((posts) => {
          console.log('Post recibidos', posts);
          return posts;
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
  .then(() => console.log('posts obtenidos'))
  .catch((error) => console.error(error));
