import { useEffect, useState } from 'react'
import { logic } from '../logic'
import { Posts } from './components/Posts'
//necesito utilizar los componente logic y post
//tambien de react los hook( es una función que te permite "enganchar" el estado, el ciclo de vida y otras características de React a componentes funcionales) de: 
//useState y UseEffect: hay que pasarle una función flecha y un array vacio (es otra forma de manejar el ciclo de vida de un componente)

export const Home = (props) => {
    const onUserLoggedOut = props.onUserLoggedOut

    //utilizo useState, configuro de estado inicial a mundo
    const [username, setUsername] = useState('World')

    //Recuerda, siempre que llamemos a logica habra que usar try-catch
    useEffect(() => {
        try {
            const username = logic.getUserUsername() //creamos y asignamos en username el nombre del usuario actualmente conectado

            setUsername(username) //cambiamos el estado para que escriba al usuario conectado (recuerda que aparece en la siguiente pintada)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    //ampliamos el handle de nuestrop click para que vacie la variable que contenia el usuario actual conectado, esta configuración de hizo en una funcion de app asi que tiramos de ella(gracias a que entra por nuestro objeto props)
    const handleLogoutClick = () => {
        try {
            logic.logoutUser()

            onUserLoggedOut() //antiguo, llamada a la propiedad que cambia la vista a login
        } catch (error) {
            alert(error.message)
        }
    }

    console.log('Home -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>

        <div className="mt-2">
            <h1 className="text-xl">Hello, {username}</h1> {/* cambiamos el mundo antiguo, que será el estado inicial, por el estado actual es decir por la variable username */}

            <button className="bg-black text-white px-2" type='button' onClick={handleLogoutClick}>Logout</button>
        </div>
        <Posts /> {/* pintamos la vista Posts */}
    </div>
}
//configuro el boton de Logout con el funcionamiento de un onclick(como un enlace)

