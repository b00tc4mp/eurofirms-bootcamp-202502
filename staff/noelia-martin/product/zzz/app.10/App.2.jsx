import { Routes, Route, useNavigate, Navigate } from 'react-router'
import { useState } from 'react'

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'

import { logic } from './logic'

export const App = () => {
    const [alertMessage, setAlertMessage] = useState('')
    //  Utilizamos dos nuevos estados: 
    // confirmMessage encenderá o apagará la cajita confirm según si tiene algun mensaje que mostrar
    // confirmAction almanecerá la respuesta de la promesa, true o false según el boton clicado 
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

    const handleAcceptAlert = () => setAlertMessage('')

    //Al haber doble botón los configuramos por separado
    //Primero indicamos que una vez se haya clicado borre el contenido del mensaje de confirm y asi se apague la cajita
    //Segundo utilizamos confirmAction que contiene el resolve de la promesa que retorna el handleShowConfirm, llamamos a la promesa e indicamos el valor booleano correspondiente al boton clicado.
    //Una vez resuelta la promesa el handleShowConfirm hará su trabajo y retornará el valor booleano que utilizará el componente Post. (con la variable result, sirve cualquier nombre)

    const handleAcceptConfirm = () => {
        setConfirmMessage('')

        confirmAction.resolve(true)
    }

    const handleCancelConfirm = () => {
        setConfirmMessage('')

        confirmAction.resolve(false)
    }

    // Configuramos este handle para mostrar la cajita de confirm.
    // Con el parametro recibido, message, encenderá la cajita de confirm y retornará una promesa (trás haberla ejecutado los handle anteriores) 
    const handleShowConfirm = message => {
        setConfirmMessage(message)

        return new Promise((resolve, reject) => {
            setConfirmAction({ resolve })
        })
    }


    console.log('App -> render')

    return <>
        {alertMessage && <div className="p-10 bg-gray-500/70  absolute w-full h-full flex flex-col justify-center">
            <div className="bg-white border-2 border-black p-2 flex flex-col gap-2">
                <p>{alertMessage}</p>

                <button className="bg-black text-white px-2 self-end" type="button" onClick={handleAcceptAlert}>Accept</button>
            </div>
        </div>}

        {/* Manu crea este botón para explicarnos el código. Cuando clicaba en él se encendía la cajita de confirm*/}
        {/* <button type="button" onClick={() => {
            handleShowConfirm('hello, confirm?')
                .then(result => console.log(result ? 'Accept' : 'Cancel'))

        }}>show confirm</button> */}

        {/* Creamos la cajita de confirm muy parecia a la de alert, pero esta vez tiene doble botón, aceptar y cancelar 
        Arriba configuramos los handle de cada botón, utilizamos promesas*/}
        {confirmMessage && <div className="p-10 bg-gray-500/70  absolute w-full h-full flex flex-col justify-center">
            <div className="bg-white border-2 border-black p-2 flex flex-col gap-2">
                <p>{confirmMessage}</p>

                <div className="self-end flex gap-2">
                    <button className="text-black border-black border-2 px-2" type="button" onClick={handleCancelConfirm}>Cancel</button>

                    <button className="bg-black text-white px-2" type="button" onClick={handleAcceptConfirm}>Accept</button>
                </div>
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
                        confirm={handleShowConfirm} //pasamos la props a home
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