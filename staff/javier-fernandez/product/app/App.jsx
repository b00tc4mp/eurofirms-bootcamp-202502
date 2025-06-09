import { useState, useEffect } from 'react'

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'

import { logic } from './logic' 

export const App = () => {
    const [view, setView] = useState('landing')

    const handleRegisterClicked = () => setView('register')

    const handleLoginClicked = () => setView('login')

    const handleUserRegistered = () => setView('login')

    const handleUserLoggedIn =() => setView('home')

    const handleUserLoggedOut = () => setView('login')

    useEffect(() => {
        try {
            const loggedIn = logic.isUserLoggedIn()
            
            if (loggedIn)
                setView('home')
        } catch (error) {
            alert(error.message)
        }
    }, [])

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
             onUserRegistered={handleUserRegistered}
             />

        }

        {view === 'login' &&
            <Login
             onRegisterClicked={handleRegisterClicked}
             onUserLoggedIn={handleUserLoggedIn} />
        }

        {view === 'home' && <Home
        onUserLoggedOut={handleUserLoggedOut}
         />}
    </>
}