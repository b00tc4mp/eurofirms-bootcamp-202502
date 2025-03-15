# JavaScript

JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript.
![Coding person](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHVsbjIwbzE3czJ4YnA3Z2cxa24xYnNsNWI2enQyM3AzcDd5M3IyMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f4ztZcdm9Fi90vL4Zd/giphy.gif)

```js
// Pila (stack)
let saludo = 'hola'; // 'hola' es un valor primitivo, almacenado en la pila
saludo = 'Hola Mundo'; // Reemplazo el valor de saludo en la pila

let edad = 30; // 'edad' es un valor numérico, guardado en la pila
let estaActivo = false; // 'estaActivo' es un booleano, almacenado en la pila

// Montón (heap)
let usuario = {
  // 'usuario' es un objeto, almacenado en el montón
  nombre: 'Alicia',
  edad: edad,
};

// Arrays en el heap
let cosas = ['manzana', 'plátano', 'cereza']; // 'cosas' es un array, guardado en el montón
cosas[3] = 'dátil'; // Agregar nuevo elemento al array 'cosas'

// Función (stack)
let multiplicar = function (a, b) {
  return a * b;
}; // 'multiplicar' es una función, almacenada en la pila
let resultado = multiplicar(5, 6); // 'resultado' es el resultado de la multiplicación, almacenado en la pila

// Referencias de objetos en el heap
let personas = []; // 'personas' es un array, almacenado en el montón
personas[0] = usuario; // Se añade una referencia al objeto 'usuario' dentro de 'personas'
personas[0].ubicacion = 'París'; // Modificación de las propiedades de 'usuario'

usuario.ciudad = 'Londres'; // Se añade una nueva propiedad al objeto 'usuario'

// Añadir más cosas al array
let frutas = ['manzana', 'naranja', 'plátano'];
personas[1] = frutas; // 'frutas' es un array, y se guarda la referencia de este array

// Eliminar elementos del array 'frutas'
delete frutas[2]; // Eliminar el valor en el índice 2
frutas.length = 2; // Cambiar la longitud del array

// Carrito de compras (heap)
let carrito = [
  {
    idProducto: 'xyz-123',
    marca: 'Apple',
    modelo: 'MacBook Pro',
    precio: 2500,
    cantidad: 1,
  },
  {
    idProducto: 'mno-456',
    marca: 'Samsung',
    modelo: 'Galaxy S22',
    precio: 1000,
    cantidad: 2,
  },
];

// Cálculo del total (stack)
let montoTotal = 0; // 'montoTotal' es un valor primitivo, almacenado en la pila

for (let i = 0; i < carrito.length; i++) {
  // Iteración sobre el array 'carrito' (almacenado en el montón)
  let producto = carrito[i]; // 'producto' es una referencia al objeto dentro del array
  montoTotal += producto.precio * producto.cantidad; // Se calcula el total utilizando propiedades del objeto
}

// Mostrar el total calculado
console.log(montoTotal);
```
