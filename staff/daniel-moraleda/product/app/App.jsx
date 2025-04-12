import { useState } from 'react'

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'

export const App = () => {
    const [view, setView] = useState('landing')

    const handleRegisterClicked = () => setView('register')

    const handleLoginClicked = () => setView('login')

    const handleUserRegistered = () => setView('login')

    const handleUserLoggedIn = () => setView('home')

    const handleUserLoggedOut = () => setView('login')

    console.log('App -> render')

    return <>
        {view === 'landing' &&
            <Landing
                onRegisterClicked={handleRegisterClicked}
                onLoginClicked={handleLoginClicked}
            />}

        {view === 'register' &&
            <Register
                onLoginClick={handleLoginClicked}
                onUserRegistered={handleUserRegistered}

            />
        }
        {view === 'login' &&
            <Login
                onRegisterClicked={handleRegisterClicked}
                onUserLoggedIn={handleUserLoggedIn}
            />
        }

        {view === 'home' && <Home />}
    </>
}