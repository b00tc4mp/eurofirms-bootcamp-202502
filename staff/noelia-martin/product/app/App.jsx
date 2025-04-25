import { useState } from 'react'

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'


export const App = () => {
    const [view, setView] = useState('landing')

    const handleRegisterClicked = () => setView('register')
    const handleLoginClicked = () => setView('login')
    //añado todos los handle necesarios para los submit y el click de Home para que procesa al cambio de estado(vista)
    const handleUserRegistered = () => setView('login')
    const handleUserLoggedIn = () => setView('home')
    const handleUserLoggedOut = () => setView('login')

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
