fetch('http://localhost:8080/users/6857ec79cbc738953c373ae6', {
  method: 'DELETE',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODRiMTQzODlhZTg5ZjVjMWQ1Y2EwMTkiLCJpYXQiOjE3NDk3NTE2MDZ9.HBEux5n29YSCsUTH10SVcvndlBmzgJrcwedddrAp4gM',
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
  .then(() => console.log('user deleted'))
  .catch((error) => console.error(error));
