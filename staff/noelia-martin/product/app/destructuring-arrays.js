//Manu lo hizo en stuff pero yo lo voy a dejar aqui
//ejemplo para entender el funcionamiento interno de los estados de react
//este codigo lo hacemos nosotros, useState lo hace react 

let message

//function setMessage(_message) { message = _message} //compact declaracion
//const setMessage = function (_message) { message = _message} //extended declaration
//const setMessage = (_message) => { message = _message} //declaracion flecha con todos los simbolos
const setMessage = _message => message = _message//declaracion flecha ahorrando simbolos

const useStateOcualquierOtroNombre = initialvalue => {
    if (initialvalue)
        message = initialvalue

    return [message, setMessage] //devuelve el mensaje inicial y la referencia a la funcion que cambiar el mensaje

}
const messageState = useStateOcualquierOtroNombre('Hello world')

const value = messageState[0] //corresponde al return de mensaje
const setValue = messageState[1] //corresponde al return de la referencia al cambio del mensaje

console.log(value)

setMessage('ciao mundo') //cambio de mensaje
//ahora es el mismo procedimiento pero con variables nuevas
const messageState2 = useStateOcualquierOtroNombre() //esta vez no indico un valor inicial
const [value2, setValue2] = messageState2 //forma de crear variables con destructuring
console.log(value2)

setMessage('Hola mundo')
const [value3] = useStateOcualquierOtroNombre()
console.log(value3)

setMessage('prueba')
const [value4,] = useStateOcualquierOtroNombre() //Si es lo primero que retorna no hace falta usar comas para indicar si hay mas contenido
console.log(value4)

setMessage('prueba2')
const [, setValue5] = useStateOcualquierOtroNombre() //Si no es lo primero que retorna si hay que usar comas para indicar la posicion que quiero quedarme
console.log(setValue5) //devuelve la referencia a la funcion setMessage

//en este ultimo cambio el initialValue
const [value6] = useStateOcualquierOtroNombre('Nuevo estado inicial')
console.log(value6)