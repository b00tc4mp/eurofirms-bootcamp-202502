import { Routes, Route, useNavigate, Navigate } from 'react-router'
import { useState } from 'react'

import { Welcome } from './view/Welcome'

import { LandingFamily } from './view/family/LandingFamily'
import { RegisterFamily } from './view/family/RegisterFamily'
import { LoginFamily } from './view/family/LoginFamily'
import { HomeFamily } from './view/family/HomeFamily'

import { LoginDoctor } from './view/doctor/LoginDoctor'
import { ChooseChild } from './view/doctor/ChooseChild'

import { Alert } from './view/components/Alert'
import { Confirm } from './view/components/Confirm'
import { Context } from './context'

import { logic } from './logic'

export const App = () => {
    const [alertMessage, setAlertMessage] = useState('')

    const [confirmMessage, setConfirmMessage] = useState('')
    const [confirmAction, setConfirmAction] = useState(null)

    const navigate = useNavigate()

    const handleLandingFamilyClicked = () => navigate('/landingFamily')
    const handleLoginDoctorClicked = () => navigate('/loginDoctor')
    const handleLogoutClicked = () => navigate('/')

    const handleLoginFamilyClicked = () => navigate('/loginFamily')
    const handleRegisterFamilyClicked = () => navigate('/registerfamily')

    const handleReturnClicked = () => navigate('/')
    const handleUserDoctorLoggedIn = () => navigate('/chooseChild') //sin implementar

    const handleUserFamilyRegistered = () => navigate('/loginFamily')
    const handleUserFamilyLoggedIn = () => navigate('/')


    let loggedInFamily
    try {
        loggedInFamily = logic.isUserLoggedInFamily()
    } catch (error) {
        console.error(error)
        alert(error.mensage)
    }

    let loggedInDoctor
    try {
        loggedInDoctor = logic.isUserLoggedInDoctor()
    } catch (error) {
        console.error(error)
        alert(error.mensage)
    }

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
                !loggedIn ? (
                    <Welcome
                        onLandingFamilyClicked={handleLandingFamilyClicked}
                        onLoginDoctorClicked={handleLoginDoctorClicked}
                    />
                ) : loggedInFamily ? (
                    <HomeFamily onUserLoggedOut={handleLogoutClicked} />
                ) : loggedInDoctor ? (
                    <HomeDoctor onUserLoggedOut={handleLogoutClicked} />
                ) : null
            }
            />

            <Route path='/landingFamily' element={
                !loggedIn ?
                    <LandingFamily
                        onLoginFamilyClicked={handleLoginFamilyClicked}
                        onUserFamilyRegistered={handleRegisterFamilyClicked}
                    />
                    :
                    <Navigate to='/' />
            } />

            <Route path='/loginDoctor' element={
                !loggedIn ?
                    <LoginDoctor
                        onReturnClicked={handleReturnClicked}
                        onUserDoctorLoggedIn={handleUserDoctorLoggedIn}
                    />
                    :
                    <Navigate to='/' />
            } />

            <Route path='/registerFamily' element={
                !loggedIn ?
                    <RegisterFamily
                        onLoginFamilyClicked={handleLoginFamilyClicked}
                        onUserFamilyRegistered={handleUserFamilyRegistered}
                    />
                    :
                    <Navigate to='/' />
            } />

            <Route path='/loginFamily' element={
                !loggedIn ?
                    <LoginFamily
                        onRegisterFamilyClicked={handleRegisterFamilyClicked}
                        onUserFamilyLoggedIn={handleUserFamilyLoggedIn}
                    />
                    :
                    <Navigate to='/' />
            } />
            {/* <Route path='/chooseChild' element={
                !loggedIn ?
                    <ChooseChild

                    />
                    :
                    <Navigate to='/' />
            } /> */}
        </Routes >
    </Context.Provider>
}
