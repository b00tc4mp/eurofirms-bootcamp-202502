import { Routes, Route, useNavigate, Navigate } from 'react-router'
import { useState } from 'react'

import { Welcome } from './view/Welcome'
import { Landing } from './view/Landing'
import { Login } from './view/Login'
import { Register } from './view/Register'
import { ChoosePacient } from './view/ChoosePacient'
import { Home } from './view/Home'

import { Alert } from './view/components/Alert'
import { Confirm } from './view/components/Confirm'
import { Context } from './context'

import { logic } from './logic'

export const App = () => {
    const [alertMessage, setAlertMessage] = useState('')

    const [confirmMessage, setConfirmMessage] = useState('')
    const [confirmAction, setConfirmAction] = useState(null)

    const navigate = useNavigate()

    const handleLandingRegularClicked = () => navigate('/landing')
    const handleLoginDoctorClicked = () => navigate('/login')
    const handleLogoutUserClicked = () => navigate('/')

    const handleLoginClicked = () => navigate('/login')
    const handleRegisterClicked = () => navigate('/register')

    const handleReturnClicked = () => navigate('/')
    const handleLogginSubmitedRegular = () => navigate('/')
    const handleLogginSubmitedDoctor = () => navigate('/choosePacient')

    const handleRegisterSubmited = () => navigate('/login')

    const handlePacientElectedSubmited = () => navigate('/')

    let loggedIn
    try {
        loggedIn = logic.isUserLoggedIn()
    } catch (error) {
        console.error(error)
        alert(error.mensage)
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

        return new Promise((resolve, reject) => {
            setConfirmAction({ resolve })
        })
    }


    console.log('App -> render')


    return <Context.Provider value={{
        alert: setAlertMessage,
        confirm: handleShowConfirm
    }}>
        {alertMessage && <Alert message={alertMessage} onAccepted={handleAlertAccepted} />}

        {confirmMessage && <Confirm message={confirmMessage} onCancelled={handleCancelConfirm} onAccepted={handleAcceptConfirm} />}

        <Routes>
            <Route path='/' element={
                !loggedIn ?
                    <Welcome
                        onLandingRegularClicked={handleLandingRegularClicked}
                        onLoginDoctorClicked={handleLoginDoctorClicked}
                    />
                    :
                    <Home onLogoutUser={handleLogoutUserClicked} />
            }
            />

            <Route path='/landing' element={
                !loggedIn ?
                    <Landing
                        onLoginClicked={handleLoginClicked}
                        onUserRegistered={handleRegisterClicked}
                    />
                    :
                    <Navigate to='/' />
            } />

            <Route path='/login' element={
                !loggedIn ?
                    <Login
                        onReturnClicked={handleReturnClicked}
                        onUserLoggedInRegular={handleLogginSubmitedRegular}
                        onUserLoggedInDoctor={handleLogginSubmitedDoctor}

                    />
                    :
                    <Navigate to='/' />
            } />

            <Route path='/register' element={
                !loggedIn ?
                    <Register
                        onLoginClicked={handleLoginClicked}
                        onUserRegistered={handleRegisterSubmited}
                    />
                    :
                    <Navigate to='/' />
            } />

            <Route path='/choosePacient' element={
                <ChoosePacient
                    onPacientElected={handlePacientElectedSubmited}
                />
            } />
        </Routes >
    </Context.Provider>
}