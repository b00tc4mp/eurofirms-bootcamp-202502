# JavaScript

JavaScript is the programming language of the Web. JavaScript is easy to learn.

![JavaScript is essential for web development](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHc4OTI1Y2puNHFlMDN1azdvdXNxNHFia2s4ZmxoNzNqemhwa2EyNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FbDfeuy2aJHTADNXka/giphy.gif)

## Stack & Heap

**Stack**: datos primitivos (null, undefined, boolean, number, bigInt, string, symbol )- no son mutables, se pueden copiar. Memoria rapida que solo acepta datos inmutables primitivos.

**Heap**: objetos (incluye arrays y funciones) - son mutables. No se copian, se referencian. 

- :point_right: En memoria los objetos no se anidan, sino que se referencian (en lenguaje escrito de JavaScript parecen anidados, pero en memoria estan referenciados).

- :point_right: Cuando guardamos un objeto (heap) en una variable (stack), la zona de memoria del objeto en el heap (ej. 0x0005) pasa al valor del key de la variable en el stack. En el stack la variable pasa de tener el valor "undefined" a "0x0005" (se considera valor numerico).

## .length

.length es una propiedad de los objetos que existe predeterminadamente y se refiere al length de las propiedades numericas del objeto. Ejemplo:

| key | value |
| ----------- | ----------- |
| 0x0005 | Array [ ] {"0": 0x0001, "1": 0x0002, "2": 0x0003, **"length"**: 3} |
| 0x0006 | Array [ ] {"1": 0x0007, "3": 0x0009, **"length"**: 3} |

Si hay una propiedad "1" y luego otra propiedad "3", aunque haya dos propiedades lo contabiliza como 3, ya que va del 1 al 3.

El .length de una funcion es el numero de parametros. 

## Desarrollo Web

### SPA (Single-page application)

Loads in a single html document.

En una aplicacion programamos lo que va a aparecer en el html. Cada elemento del html es un objeto (almacenado en heap). El navegador crea una estructura de objetos en memoria, y cuando la ha montado, carga la pagina web.

### console.dir(document)
Comando de la consola que te muestra el objeto por dentro con todas sus propiedades. ej. la página web

### children
muestra los elementos html o etiquetas

### childNodes
más preciso, muestra todos los nodos que tiene una página web. ej. `<a>` es etiqueta y nodo, "www.google.com": es texto y nodo. Cada elemento en la página web es un nodo. Un salto de línea o espacios se considera texto (y nodo).
Un nodo puede tener varios nodos ej. el nodo `<body>` puede contener otros nodos (pueden ser hijos o padres de otros nodos). 

### document.querySelector('h1')
Permite seleccionar un objeto de la memoria que ya está cargado en la pantalla (ej. "h1").
Es un método/función del objeto document al que le pasas un parámetro y te devuelve un objeto. Es decir, el objeto document tiene una propiedad que es un método (ej. .querySelector). `document.querySelector('body')` trae body con todos los elementos que tiene dentro.

### document.querySelectorAll('a')
trae todos los anchor tags

### document.createElement('img')
crea un elemento html de tipo imagen

### body.appendChild(image)
ensambla un elemento (con el nombre de variable image) dentro de body

### Ejemplo: Crear una imagen:
`var image = document.createElement('img')` crea un objeto que es una etiqueta hmtl 'img', y lo guarda en una variable.

`image['src'] = 'img_girl.jpg'` El atributo html 'src' sirve para poner la direccion de la imagen. En js esto es una propiedad de un objeto, y se pone la direccion de la imagen en forma de string.

`document.querySelector('body')` para montar la imagen en el documento, hay que ponerla en el contenedor body.


`body.appendChild(image)` después se usa la propiedad .appendChild para insertarle la variable image (objeto con sus propiedades).
.appendChild es un método que tiene los elementos html en memoria y permite poner otros elementos más.

### Ejemplo: Crear una etiqueta html `<h1>Texto</h1>`:
`var logoHeading = document.createElement('h1')`
crea un objeto que es una etiqueta html

`var logoText = document.createTextNode('Logo')`
crea un nodo de texto

`logoHeading.appendChild(logoText)`
le añade el nodo de texto a la etiqueta


