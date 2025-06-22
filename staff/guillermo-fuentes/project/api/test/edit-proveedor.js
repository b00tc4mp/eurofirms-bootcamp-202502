fetch('http://localhost:8080/provider/685811b2b1963a12ccecde0b', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODU3MGQ1M2M4ZTQ3MWYyNzcwZDI0ZGMiLCJyb2xlIjoiYWRtaW5pc3RyYXRvciIsImlhdCI6MTc1MDYwMTc5MH0.Z6MATQEVJ75XTpouTKIop94f_QXwETb-2TOH9zTlRlM',
  },
  body: JSON.stringify({
    name: 'Conchita migue 2',
    direction: 'Calle Madrid',
    contact: 'conchita@migue.com',
    userId: '6857e3c3c94ecaebfb3d947a',
  }),
})
  .then((response) => {
    const { status } = response;
    console.log('Estado de la respuesta:', status);
    return response.text().then((text) => {
      if (status === 200) {
        try {
          const proveedor = JSON.parse(text);
          console.log('Proveedor actualizado:', proveedor);
          return proveedor;
        } catch (error) {
          throw new Error('Error al parsear JSON');
        }
      }
      try {
        const body = JSON.parse(text);
        const { error, message } = body;
        throw new Error(message);
      } catch (error) {
        throw new Error('Error al parsear JSON de error');
      }
    });
  })
  .then(() => console.log('Proveedor editado correctamente')) // Changed 'Usuario' to 'Proveedor'
  .catch((error) => console.error('Error:', error.message));
