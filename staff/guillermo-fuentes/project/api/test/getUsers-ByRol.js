fetch('http://localhost:8080/users/client', {
  method: 'GET',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODRhOTc4OGZkYzFlYWYxMmUxYzA1YTUiLCJpYXQiOjE3NDk3MjQ3MjZ9.z07EibNKPtVCEZFm9skNarqqGXhNuKoAlCFE2ULUvgI',
  },
})
  .then((response) => {
    if (!response.ok) {
      return response
        .json()
        .then((body) => {
          throw new Error(body.message || 'Application error');
        })
        .catch(() => {
          throw new Error('Error parsing response');
        });
    }
    return response.json();
  })
  .then((users) => {
    console.log('Users with role :', users);
    return users;
  })
  .then(() => console.log('Users obtained correctly'))
  .catch((error) => console.error('Error:', error.message));
