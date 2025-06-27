import { Routes, Route, useNavigate, Navigate } from 'react-router'
import { useState } from 'react'

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'

import { logic } from './logic'

export const App = () => {
    //utilizamos estados para controlar el mensaje de alerta
    const [alertMessage, setAlertMessage] = useState('')




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
    //Cuando se clica en el botón aceptar de una alerta, la función setAlertMessage modifica el mensaje que contenía alertMessage y lo deja vacio para que así desaparezca la cajita
    const handleAcceptAlert = () => setAlertMessage('')

    console.log('App -> render')

    //Creamos un nuevo contenedor vacio para trabajar fuera de Routes
    return <>
        {/* Creamos una cajita en html que se utilizará para las alertas a mostrar al usuario. 
        El mensaje de la alerta lo rellenará el estado alertMessage y este también nos servirá para condicionar su aparición (Si no hay contenido en el alertMessage no aparecera esta cajita) 
        También creamos un botón de aceptar cuya configuración se realiza en el handler indicado*/}
        {alertMessage && <div className="p-10 bg-gray-500/70  absolute w-full h-full flex flex-col justify-center">
            <div className="bg-white border-2 border-black p-2 flex flex-col gap-2">
                <p>{alertMessage}</p>

                <button className="bg-black text-white px-2 self-end" type="button" onClick={handleAcceptAlert}>Accept</button>
            </div>
        </div>}

        {/* Para poder cambiar el estado del mensaje de alerta según el producido en cada componente, vamos a pasar la función setAlertMessage como una props (se lo pasamos a Login, Register y Home, que a su vez estos se lo pasarán a sus hijos) 
        Llamamos a la props alert, aposta, para poder pisar el alert del navegador y asi no tener que modificar codigo de cada componente*/}
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
        </Routes >
    </>
}
//App.1 añado la configuración de alert propio con explicaciones.