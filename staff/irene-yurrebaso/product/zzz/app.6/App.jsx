// importamos el hook useState, lo utilizaremos para encender y apagar vistas; useState es una funcion que devuelve un array y crea un estado sobre un dato
import { useState, useEffect } from 'react'

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'

import { logic } from './logic'

export const App = () => {
    const [view, setView] = useState('landing') //formato "desestructuracion"

    const handleRegisterClicked = () => setView('register')

    const handleLoginClicked = () => setView('login')

    const handleUserRegistered = () => setView('login')

    const handleUserLoggedIn = () => setView('home')

    const handleUserLoggedOut = () => setView('login')

    //en la interfaz de usuario que al recargar la pagina se muestre Home si el usuario esta conectado (en vez de volver a Landing)
    //array vacio en useEffect() significa q se ejecuta solo una vez cuando carga la aplicacion
    useEffect(() => {
        try {
            const loggedIn = logic.isUserLoggedIn()

            if(loggedIn) 
                setView('home')
        } catch (error) {
            alert(error.message)
        }
    }, [])

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