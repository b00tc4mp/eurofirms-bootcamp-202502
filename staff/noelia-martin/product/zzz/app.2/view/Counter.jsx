//Ejemplo para entender funcionamiento de useState

import { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0) //el estado inicial será 0

    const handleCounterClick = () => setCount(count + 1) //creamos esta funcion que incrementa en uno cada vez que se clica

    console.log('Counter -> render')

    return <button
        className="border px-5 bg-blue-500 text-white cursor-pointer"
        onClick={handleCounterClick} //configuramos el evento click para que cuando se producta, se ejecute esa funcion creada anteriormente
    >
        {count}
    </button>
}

