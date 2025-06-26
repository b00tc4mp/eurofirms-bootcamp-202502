fetch('http://localhost:8080/provider', {
  method: 'POST',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODU3MGQ1M2M4ZTQ3MWYyNzcwZDI0ZGMiLCJyb2xlIjoiYWRtaW5pc3RyYXRvciIsImlhdCI6MTc1MDU5MjU0NH0.KAvNVuVQ1QBpdXr3PMuGE6PJjHKMRqf46M0ERgj5qjk',
    'Content-Type': 'application/json',
  },
  body: '{"name":"Test","contact":"test@ramirez.com","direction":"Calle Zafiro 3","adminId":"685d7e3cf3767021029121e0"}',
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
