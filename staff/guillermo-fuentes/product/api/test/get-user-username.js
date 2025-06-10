fetch('http://localhost:8080/users/self/username', {
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
        .then((username) => username);

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
  .then((username) => console.log('user username gotten', username))
  .catch((error) => console.error(error));
