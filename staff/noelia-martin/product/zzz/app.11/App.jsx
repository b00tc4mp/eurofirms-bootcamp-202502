import { Routes, Route, useNavigate, Navigate } from 'react-router'
import { useState } from 'react'

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'
import { Alert } from './view/components/Alert'
import { Confirm } from './view/components/Confirm'
//importo el componente de react para proveer contexto
import { Context } from './context'

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

    //Aprovechamos que disponemos de un contenedor vacio y metemos todo en Context.Provider
    //Este permite proveer un valor, en este caso un objeto con las funciones encargadas de despertar las cajitas alert y confirm
    return <Context.Provider value={{
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
                    //alert={setAlertMessage}
                    //confirm={handleShowConfirm}
                    />
            } />

            <Route path='/register' element={
                !loggedIn ?
                    <Register
                        onLoginClicked={handleLoginClicked}
                        onUserRegistered={handleUserRegistered}
                    //alert={setAlertMessage}
                    />
                    :
                    <Navigate to='/' />
            } />

            <Route path='/login' element={
                !loggedIn ?
                    <Login
                        onRegisterClicked={handleRegisterClicked}
                        onUserLoggedIn={handleUserLoggedIn}
                    //alert={setAlertMessage}
                    />
                    :
                    <Navigate to='/' />
            } />
        </Routes >
    </Context.Provider>
}
//Borramos en las rutas los envios de alert y confirm 