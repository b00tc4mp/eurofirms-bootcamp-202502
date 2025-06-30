import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router'

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
//import { Home } from './view/Home'
import { Alert } from './view/components/Alert'
import { Confirm } from './view/components/Confirm'
import { Context } from './context'

import { logic } from './logic'

export const App = () => {
    const navigate = useNavigate()

    const [alertMessage, setAlertMessage] = useState('')
    //const [confirmMessage, setConfirmMessage] = useState('')
    //const [confirmAction, setConfirmAction] = useState(null)

    const handleRegisterClicked = () => navigate('/register')

    const handleLoginClicked = () => navigate('/login')

    let loggedIn

    try {
        loggedIn = logic.isUserLoggedIn()
    } catch (error) {
        console.error(error)

        alert(error.message)
    }

    const handleAlertAccepted = () => setAlertMessage('')

    

    console.log('App -> render')

    return <Context.Provider value={{
        alert: setAlertMessage,
        //confirm: handleShowConfirm
    }}>
        {alertMessage && <Alert message={alertMessage} onAccepted={handleAlertAccepted} />}


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
                <Register 
                    onLoginClicked={handleLoginClicked}
                />
                
            } />
            <Route path='/login' element={
                <Login />
                
            } />
            
        </Routes>
    </Context.Provider>

}
