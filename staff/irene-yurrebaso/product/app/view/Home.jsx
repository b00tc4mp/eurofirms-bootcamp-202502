import { useEffect, useState } from 'react'

import { logic } from '../logic'

export const Home = props => {
    const onUserLoggedOut = props.onUserLoggedOut
    
    //definir un useState para username, permite guardar y pintar username
    const [username, setUsername] = useState('World')

    //el array vacio en useEffect indica q solo se ejecute al cargar el componente
    useEffect(() => {

        //llamar a la logica, por seguridad siempre llamar a la logica dentro de un try/catch
        try {
            const userName = logic.getUserUsername()

            setUsername(userName)

        } catch(error) {
            alert(error.message)
        }

    }, [])

    const handleLogoutClick = () => onUserLoggedOut()

    console.log('Home -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>
        <h1 className="text-2xl my-3">Home</h1>
        <h2 className="flex justify-center my-5 font-semibold">Hello, {username}!</h2>
        <button 
            className="bg-black text-white py-2 px-4" 
            type="button"
            onClick={handleLogoutClick}
        >Log out</button>
    </div>
}