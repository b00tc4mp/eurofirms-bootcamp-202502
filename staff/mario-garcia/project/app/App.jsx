import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router'//NAVIGATE inside Libreria REACT-ROUTER is = FUNCIONALIDAD

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'
import { Alert } from './view/components/Alert'
import { Confirm } from './view/components/Confirm'
import { Context } from './context'

import { logic } from './logic'

export const App = () => {

    const navigate = useNavigate()

    //useState is linked with ALERT MESSAGEs
    const [alertMessage, setAlertMessage] = useState('')//With setAlertMessage I am going to MODIFY alertMessage
    const [confirmMessage, setConfirmMessage] = useState('')//With setConfirmMessage I am going to MODIFY confirmMessage
    const [confirmAction, setConfirmAction] = useState(null)//With setConfirmAction I am going to MODIFY confirmAction

    const handleRegisterClicked = () => navigate('/register') //It is LINKED with ROUTES LANDING = Line 84 and ROUTES LOGIN = Line 104

    const handleLoginClicked = () => navigate('/login') //It is LINKED with ROUTES LANDING = Line 85 and ROUTES REGISTER = Line 94

    const handleUserRegistered = () => navigate('/login') //It is LINKED with ROUTES REGISTER = Line 95

    const handleUserLoggedIn = () => navigate('/') //It is LINKED with ROUTES LOGIN = Line 105

    const handleUserLoggedOut = () => navigate('/login') //It is LINKED with ROUTES HOME = Line 88

    let loggedIn

    try {
        loggedIn = logic.isUserLoggedIn()//Here I'm bringing the Token Connected
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

    const handleShowConfirm = message => {//Delete post? = I am ACTIVATING the Function
        setConfirmMessage(message)//CARGO EL CONTENIDO QUE VA A TENER MI USESTATE

        return new Promise((resolve, reject) => {
            setConfirmAction({ resolve })
        })
    }

    console.log('App -> render')//I am using a CONTEXT = TOOL which let me to have COMPONENTS ACTIVE // To access Information 

    //CONTEXT I am passing "mensajitos" in all app
    return <Context.Provider value={{
        alert: setAlertMessage,
        confirm: handleShowConfirm
    }}>
        {/*alertMessage IF I HAVE ANY DATA the Component alertMessage will be PRINTED */}
        {alertMessage && <Alert message={alertMessage} onAccepted={handleAlertAccepted} />}

        {/*confirmMessage IF I HAVE ANY DATA the Component confirmMessage will be PRINTED */}
        {confirmMessage && <Confirm message={confirmMessage}

            onCancelled={handleCancelConfirm} onAccepted={handleAcceptConfirm} />}

        <div className="p-5 flex justify-center">
            <div className="w-full min-w-100 max-w-[1024px]">
                <Routes>
                    <Route path='/*' element={
                        !loggedIn ?
                            <Landing
                                onRegisterClicked={handleRegisterClicked}
                                onLoginClicked={handleLoginClicked}
                            />
                            :
                            <Home onUserLoggedOut={handleUserLoggedOut} />
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
            </div>
        </div>
    </Context.Provider>
}