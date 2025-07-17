// react inside

var message

// function setMessage(_message) { message = _message } // compact declaracion
// var setMessage = function (_message) { message = _message } // extended declaration
// var setMessage = (_message) => { message = _message } // extended declaration with full arrow function (all symbols)
var setMessage = _message => message = _message // extended declaration with compact arrow function

// setMessage('hola mundo')

// console.log(message)

var useState = initialValue => {
    if (initialValue)
        message = initialValue

    return [message, setMessage]
}

// using react use-state

// var messageState = useState('hello world')
// var message = messageState[0]
// var setMessage = messageState[1]
var [message, setMessage] = useState('hello world')

console.log(message)
// hello world

setMessage('ciao mondo')

// var messageState = useState()
// var message = messageState[0]
// var setMessage = messageState[1]
var [message, setMessage] = useState()

console.log(message)
// ciao mondo

setMessage('buna lume')

// var messageState = useState()
// var message = messageState[0]
// var setMessage = messageState[1]
var [message, setMessage] = useState()

console.log(message)
// buna lume

setMessage('hola mundo')

// var messageState = useState()
// var message = messageState[0]
// var setMessage = messageState[1]
var [message, setMessage] = useState()

console.log(message)
// hola mundo

