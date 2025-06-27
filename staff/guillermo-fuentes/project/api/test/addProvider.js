fetch('http://localhost:8080/providers', {
  method: 'POST',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODVlZDgwMzIwNzJjZTE3YThhOGU1YjgiLCJyb2xlIjoiYWRtaW5pc3RyYXRvciIsImlhdCI6MTc1MTA0NjU5OH0.sXmACpEKSUK0PXabkkFKaU7De9yvv7Cy0nATwS3jxnA',
    'Content-Type': 'application/json',
  },
  body: '{"name":"Julio Ramirez SA","contact":"pepe@ramirez.com","direction":"Calle Zafiro 3","userId":"685ed7b5cc250d208b96432e"}',
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
  .then(() => console.log('Provider created'))
  .catch((error) => console.error(error));
