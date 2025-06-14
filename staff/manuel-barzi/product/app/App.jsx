import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router'

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'

import { logic } from './logic'

export const App = () => {
    const navigate = useNavigate()

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

    console.log('App -> render')

    return <Routes>
        <Route path='/' element={
            !loggedIn ?
                <Landing
                    onRegisterClicked={handleRegisterClicked}
                    onLoginClicked={handleLoginClicked}
                />
                :
                <Home
                    onUserLoggedOut={handleUserLoggedOut}
                />
        } />

        <Route path='/register' element={
            !loggedIn ?
                <Register
                    onLoginClicked={handleLoginClicked}
                    onUserRegistered={handleUserRegistered}
                />
                :
                <Navigate to='/' />
        } />

        <Route path='/login' element={
            !loggedIn ?
                <Login
                    onRegisterClicked={handleRegisterClicked}
                    onUserLoggedIn={handleUserLoggedIn}
                />
                :
                <Navigate to='/' />
        } />
    </Routes>
}