import { useState, useEffect } from 'react' //añadimos useEffect

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'
import { logic } from './logic' //necesito logic para la funcion que me permite saber si hay algun loogeado

export const App = () => {
    const [view, setView] = useState('landing')

    const handleRegisterClicked = () => setView('register')
    const handleLoginClicked = () => setView('login')
    const handleUserRegistered = () => setView('login')
    const handleUserLoggedIn = () => setView('home')
    const handleUserLoggedOut = () => setView('login')

    //useEffect se dispara despues del primer render,es decir primero se pintara landing y una vez se dispare pintará lo que quiera
    useEffect(() => {
        //hay que consultar a la logica si hay usuarios conectados y de estarlo dejarlo en home
        try {
            const loggedIn = logic.isUserLoggedIn() //Utilizamos el metodo isUserLoggedIn para saber si hay alguien conectado
            if (loggedIn) setView('home')
        } catch (error) {
            alert(error.mensage)
        }
    }, []) //el array vacio significa que solo de ejecuta una vez

    console.log('App -> render')

    return <>
        {view === 'landing' &&
            <Landing
                onRegisterClicked={handleRegisterClicked}
                onLoginClicked={handleLoginClicked}
            />
        }

        {view === 'register' &&
            <Register
                onLoginClicked={handleLoginClicked}
                onUserRegistered={handleUserRegistered}// propiedad del form de la pg registro
            />}

        {view === 'login' &&
            <Login
                onRegisterClicked={handleRegisterClicked}
                onUserLoggedIn={handleUserLoggedIn}// propiedad del form de la pg Loggin

            />}

        {view === 'home' &&
            <Home
                onUserLoggedOut={handleUserLoggedOut} //propiedad del submit,configurado como click del home
            />}
    </>
}
