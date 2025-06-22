fetch(' http://localhost:8080/provider/6857ec79cbc738953c373ae6', {
  method: 'DELETE',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODU3MGQ1M2M4ZTQ3MWYyNzcwZDI0ZGMiLCJyb2xlIjoiYWRtaW5pc3RyYXRvciIsImlhdCI6MTc1MDU5MjU0NH0.KAvNVuVQ1QBpdXr3PMuGE6PJjHKMRqf46M0ERgj5qjk',
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
  .then(() => console.log('proveedor deleted'))
  .catch((error) => console.error(error));
