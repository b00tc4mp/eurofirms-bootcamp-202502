// importamos el hook useState, lo utilizaremos para encender y apagar vistas; useState es una funcion que devuelve un array y crea un estado sobre un dato
import { useState } from 'react'

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'

export const App = () => {
    const [view, setView] = useState('landing') //formato "desestructuracion"

    const handleRegisterClicked = () => setView('register')

    const handleLoginClicked = () => setView('login')

    const handleUserRegistered = () => setView('login')

    const handleUserLoggedIn = () => setView('home')

    const handleUserLoggedOut = () => setView('login')

    console.log('App -> render')

    //vite esta convirtiendo estos componentes html a javascript DOM y mostrandolos en el div root
    return <>
        {/* muestrame este componente Landing si view es 'landing' */}
        {/* onRegisterClick (nombre semantico que nos inventamos) es una propiedad (prop) */}
        {view === 'landing' && 
            <Landing 
                onRegisterClicked={handleRegisterClicked} 
                onLoginClicked={handleLoginClicked}
        />}

        {view === 'register' && 
            <Register 
                onLoginClicked={handleLoginClicked}
                onUserRegistered={handleUserRegistered}
            />}

        {view === 'login' && 
            <Login 
                onRegisterClicked={handleRegisterClicked}
                onUserLoggedIn={handleUserLoggedIn}
            />}

        {view === 'home' && 
        <Home 
            onUserLoggedOut={handleUserLoggedOut}
        />}
    </>
}