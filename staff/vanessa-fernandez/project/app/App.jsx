import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router'

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Context } from './context'

import { logic } from './logic'

export const App = () => {
    const navigate = useNavigate()

    const [alertMessage, setAlertMessage] = useState('')
    const [confirmMessage, setConfirmMessage] = useState('')

    const [confirmAction, setConfirmAction] = useState(null)

    const handleRegisterClicked = () => navigate('/register')

    const handleLoginClicked = () => navigate('/login')

    const handleUserRegistered = () => navigate('/login')

    const handleUserLoggedIn = () => navigate('/')

    const handleUserLoggedOut = () => navigate('/login')

    let loggedIn

    try {
        loggedIn = logic.isUserLoggeIn()

    } catch (error) {
        console.error(error)

        alert(error.message)
    }

    const handleAlertAccepted = () => setAlertMessage('')

    const handleAcceptConfirm = () => {
        setConfirmMessage('')

        confirmAction.resolve(true)
    }

    const handleCancelConfirm = () => {
        setConfirmMessage('')

        confirmAction.resolve(false)
    }

    const handleShowConfirm = message => {
        setConfirmMessage(message)

        return new
        Promise((resolve, reject) => {
            setConfirmAction({
                resolve
            })
        })
    }

    console.log('App -> render')

    return <Context.Provider value= {{
        alert: setAlertMessage,
        confirm: handleShowConfirm
    }}>
        {alertMessage && <Alert message={alertMessage} onAccepted={handleAlertAccepted} />}

        {confirmMessage && <Confirm message={confirmMessage} onCancelled={handleCancelConfirm} onAccepted={handleAcceptConfirm} />}

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
        </Routes>

    </Context.Provider>
}