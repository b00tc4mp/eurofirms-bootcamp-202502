export const registerUser = (nombreCompleto, email, password, direccion, rol) => {
  // Validaciones de entrada
  if (typeof nombreCompleto !== 'string' || !nombreCompleto.trim()) {
    throw new Error('nombre completo inválido o vacío');
  }
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('formato de email inválido');
  }
  if (email.length < 6 || email.length > 30) {
    throw new Error('la longitud del email debe estar entre 6 y 30 caracteres');
  }
  if (typeof password !== 'string' || password.length < 8) {
    throw new Error('contraseña debe ser un string de al menos 8 caracteres');
  }
  if (typeof direccion !== 'string' || !direccion.trim()) {
    throw new Error('dirección inválida o vacía');
  }
  const roles = ['administrador', 'cliente', 'empleado'];
  if (typeof rol !== 'string' || !roles.includes(rol)) throw new Error('rol invalido');
  return fetch(`${import.meta.env.VITE_API_URL}users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nombreCompleto, email, password, direccion, rol }),
  })
    .catch(() => {
      throw new Error('error de conexion');
    })
    .then((response) => {
      const { status } = response;
      if (status === 201) return;
      return response
        .json()
        .catch(() => {
          throw new Error('json error');
        })
        .then((body) => {
          const { message } = body;
          throw new Error(message);
        });
    });
};
