fetch('http://localhost:8080/posts', {
  method: 'GET',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODQzZWU3MjZhYTJjZDQ0NTJkNjljNzEiLCJpYXQiOjE3NDk1Nzc2NTN9.X2JKPC5ty6jfTZGuPPztHTvqfcvkn0xldOKtUk_LtmM',
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
