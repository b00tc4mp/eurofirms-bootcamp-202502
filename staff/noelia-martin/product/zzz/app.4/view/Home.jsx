//necesito utilizar los componente logic y post
import { logic } from '../logic'
import { Posts } from './components/Posts'

//necesito de react los hook( es una función que te permite "enganchar" el estado, el ciclo de vida y otras características de React a componentes funcionales) de: 
// UseState
// UseEffect: hay que pasarle una función flecha y un array vacio (es otra forma de manejar el ciclo de vida de un componente)
import { useEffect, useState } from 'react'


export const Home = (props) => {
    const onUserLoggedOut = props.onUserLoggedOut

    //utilizo useState, configuro de estado inicial a mundo
    const [username, setUsername] = useState('World')

    //Se ejecutará solo en el primer pintado de esta vista
    //Recuerda, siempre que llamemos a logica habra que usar try-catch
    useEffect(() => {
        try {
            const username = logic.getUserUsername() //creamos y asignamos en username el nombre del usuario actualmente conectado

            setUsername(username) //cambiamos el estado para que escriba al usuario conectado (recuerda que aparece en la siguiente pintada)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    //nuevo handle, en él llamamos a la logica de logoutuser para que borre el usuario actual conectado y llamamos a la constante onUserLoggedOut para que con la props que contiene volvamos a App y nos cambie a la vista de Landing
    const handleLogoutClick = () => {
        try {
            logic.logoutUser()

            onUserLoggedOut() //antiguo, llamada a la propiedad que cambia la vista a landing
        } catch (error) {
            alert(error.message)
        }
    }

    console.log('Home -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>

        <div className="mt-2">
            <h1 className="text-xl">Hello, {username}</h1> {/* el estado inicial será hola mundo, pero cuando tengamos contenido en username se cambiará a hola valorUsername */}

            <button className="bg-black text-white px-2" type='button' onClick={handleLogoutClick}>Logout</button>
        </div>
        <Posts /> {/* pintamos la vista Posts */}
    </div>
}
//configuro el boton de Logout con el funcionamiento de un onclick(como un enlace)

