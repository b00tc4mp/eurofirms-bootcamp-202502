fetch(' http://localhost:8080/posts/6848700b76fa0f33ce163653', {
  method: 'DELETE',
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
    if (status === 204) return;
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
  .then(() => console.log('post deleted'))
  .catch((error) => console.error(error));
