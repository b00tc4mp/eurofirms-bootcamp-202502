import { Routes, Route, useNavigate, Navigate } from 'react-router'
import { useState } from 'react'

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'
//importamos los nuevos componentes que contienen las cajitas
import { Alert } from './view/components/Alert'
import { Confirm } from './view/components/Confirm'

import { logic } from './logic'

export const App = () => {
    const [alertMessage, setAlertMessage] = useState('')

    const [confirmMessage, setConfirmMessage] = useState('')
    const [confirmAction, setConfirmAction] = useState(null)

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
        alert(error.mensage)
    }
    //Lo nombro en pasado
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

        return new Promise((resolve, reject) => {
            setConfirmAction({ resolve })
        })
    }


    console.log('App -> render')

    return <>
        {/* llamamos a las cajitas que estan en sus nuevos componetes, a cada una le pasamos las props que necesitan */}
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
                        alert={setAlertMessage}
                        confirm={handleShowConfirm}
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
        </Routes >
    </>
}
//App.1 añado la configuración de alert propio con explicaciones.
//App.2 añado la configuración de confirm y dejo solo explicaciones de confirm
//App cojo las cajitas y las meto en nuevos componentes y desde aqui las llamaremos, para un mejor orden.