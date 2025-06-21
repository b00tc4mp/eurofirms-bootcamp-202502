fetch('http://localhost:8080/proveedor/6854667eb66c3316552a90b2', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODRiMTQzODlhZTg5ZjVjMWQ1Y2EwMTkiLCJyb2wiOiJhZG1pbmlzdHJhZG9yIiwiaWF0IjoxNzUwMzU3MjcxfQ.pN0lDGH7a3FDenIjPfs56I5bTNEHW6p4Xqnlca46clQ',
  },
  body: JSON.stringify({
    nombre: 'Conchita migue',
    direccion: 'Calle Madrid',
    contacto: 'conchita@migue.com',
    usuario: '684b14389ae89f5c1d5ca019',
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
