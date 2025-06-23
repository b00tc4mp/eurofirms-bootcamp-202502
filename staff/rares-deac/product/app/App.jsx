import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router'

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'

import { logic } from './logic'


export const App = () => {
    const navigate = useNavigate()

    const [alertMessage, setAlertMessage] = useState('loquesea')

    const handleRegisterClicked = () => navigate('/register')

    const handleLoginClicked = () => navigate('/login')

    const handleUserRegistered = () => navigate('/login')

    const handleUserLoggedIn = () => navigate('/')

    const handleUserLoggedOut = () => navigate('/login')

    let loggedIn

    try {
        loggedIn = logic.isUserLoggedIn()
    } catch (error) {
        console.error(error)

        alert(error.message)
    }

    const handleAcceptAlert = () => setAlertMessage('')

    console.log('App -> render')


    return <>
        {alertMessage && <div className='p-10 bg-gray-500/70 absolute w-full h-full flex flex-col justify-center'>
            <div className="bg-white border-2 border-black p-2 flex flex-col">
                <p>{alertMessage}</p>

                <button className="bg-black text-white px-2 self-end" type="button" onClick={handleAcceptAlert}>Accept</button>
            </div>
        </div>}
        <Routes>
            <Route path='/' element={
                !loggedIn ?
                    <Landing
                        onRegisterClicked={handleRegisterClicked}
                        onLoginClicked={handleLoginClicked}
                    />
                    :
                    <Home
                        onUserLoggedOut={handleUserLoggedOut}
                        alert={setAlertMessage}
                    />

            } />

            <Route path='/register' element={
                !loggedIn ?
                    <Register
                        onLoginClicked={handleLoginClicked}
                        onUserRegistered={handleUserRegistered}
                        alert={setAlertMessage}
                    />
                    :
                    <Navigate to='/' />
            } />

            <Route path='/login' element={
                !loggedIn ?
                    <Login
                        onRegisterClicked={handleRegisterClicked}
                        onUserLoggedIn={handleUserLoggedIn}
                        alert={setAlertMessage}
                    />
                    :
                    <Navigate to='/' />
            } />
        </Routes>
    </>
}