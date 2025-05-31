fetch(' http://localhost:8080/posts/68374696eb034244ce3b884c', {
  method: 'DELETE',
  headers: {
    Authorization: 'Basic 6831d3e9e716e2e3bda270cc',
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
