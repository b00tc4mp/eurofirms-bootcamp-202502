import { useState, useEffect } from 'react'
//usaremos react-router para manejar navegacion y url visibles para usuario
//Navigate para navegacion automatica o condicional durante el renderizado VS useNavigate para navegacion en respuesta a un evento del usuario (ej. click)
import { Routes, Route, useNavigate, Navigate } from 'react-router'

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'

import { logic } from './logic'

export const App = () => {
    //usamos el hook useNavigate de React Router para cambiar vistas
    const navigate = useNavigate()

    //usamos useState para manejar el pintado de los popup 'alert' y 'confirm'
    const [alertMessage, setAlertMessage] = useState('')

    const handleRegisterClicked = () => navigate('/register')

    const handleLoginClicked = () => navigate('/login')

    const handleUserRegistered = () => navigate('/login')

    const handleUserLoggedIn = () => navigate('/')

    const handleUserLoggedOut = () => navigate('/login')

    //comprobamos primero si user esta loginado, ya que segun esto cargaremos una vista u otra en las Routes mas abajo
    let loggedIn

    try {
        loggedIn = logic.isUserLoggedIn()
    } catch (error) {
        //mensaje error para developer
        console.error(error)

        //mensaje error para usuario
        alert(error.message)
    }
    //cuando clico en el boton Accept, el handle cambia el set a vacio
    const handleAcceptAlert = () => setAlertMessage('')

    console.log('App -> render')

    //vite esta convirtiendo estos componentes html a javascript DOM y mostrandolos en el div root
    return <>
        {/*este componente solo se va a mostrar si alertMessage existe, se maneja desde el useState*/}
        {alertMessage && <div className="p-10 bg-yellow-500/70 absolute w-full h-full flex flex-col justify-center">
            <div className="bg-white border-2 border-black p-2 flex flex-col">
                <p>{alertMessage}</p>
                <button className="bg-black text-white py-1 px-4 self-end" type="button" onClick={handleAcceptAlert}>Accept</button>
            </div>
        </div>}
        <Routes>
            {/* onRegisterClick (nombre semantico que nos inventamos) es una propiedad (prop) */}
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

                        //prop o funcion llamada alert, q permite cambiar estado para mostrar el popup de alerta
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

                        //paso la prop 'alert' (q es una funcion) a login
                        alert={setAlertMessage}
                    />
                    :
                    <Navigate to='/' />
            } />
        </Routes>
    </>
}