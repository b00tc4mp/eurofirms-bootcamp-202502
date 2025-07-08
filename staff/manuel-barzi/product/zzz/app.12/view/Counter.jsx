import { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const handleCounterClick = () => setCount(count + 1)

    console.log('Counter -> render')

    return <button
        className="border px-5 bg-blue-500 text-white cursor-pointer"
        onClick={handleCounterClick}
    >
        {count}
    </button>
}