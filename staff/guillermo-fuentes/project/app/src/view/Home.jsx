export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center px-6 py-12 text-gray-800">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">Bienvenido al Panel de Administración</h1>
        <p className="text-lg md:text-xl">
          Esta aplicación permite a administradores gestionar usuarios, proveedores y productos de forma intuitiva y
          eficiente.
        </p>
        <ul className="text-left text-base md:text-lg space-y-2">
          <li>✅ Crear, editar y eliminar usuarios</li>
          <li>✅ Gestionar proveedores vinculados</li>
          <li>✅ Administrar productos fácilmente</li>
          <li>✅ Acceso según roles: Admin, Cliente y Proveedor</li>
        </ul>
        <p className="text-sm text-gray-500">Proyecto full stack desarrollado con React, Express y MongoDB.</p>
        <a
          href="https://www.figma.com/design/EjU8SGVRY9sQEqBjH275GE/Admin-panel?node-id=0-1&t=GJ2UQFWQQ5Uz51C9-1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
        >
          Ver prototipo en Figma
        </a>
      </div>
    </div>
  );
};
