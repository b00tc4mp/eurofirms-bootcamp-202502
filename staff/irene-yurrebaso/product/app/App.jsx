// importamos el hook useState, lo utilizaremos para encender y apagar vistas; useState es una funcion que devuelve un array y crea un estado sobre un dato
import { useState } from 'react'

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'

export const App = () => {
    const [view, setView] = useState('landing') //formato "desestructuracion"

    const handleRegisterClick = () => setView('register')

    const handleLoginClick = () => setView('login')

    console.log('App -> render')

    //vite esta convirtiendo estos componentes html a javascript DOM y mostrandolos en el div root
    return <>
        {/* muestrame este componente Landing si view es 'landing' */}
        {/* onRegisterClick (nombre semantico que nos inventamos) es una propiedad (prop) */}
        {view === 'landing' && 
            <Landing 
                onRegisterClick={handleRegisterClick} 
                onLoginClick={handleLoginClick}
        />}

        {view === 'register' && 
            <Register 
                onLoginClick={handleLoginClick}
            />}

        {view === 'login' && 
            <Login 
                onRegisterClick={handleRegisterClick}
            />}

        {view === 'home' && <Home />}
    </>
}