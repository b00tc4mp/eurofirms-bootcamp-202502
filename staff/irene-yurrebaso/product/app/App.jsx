import { useState, useEffect } from 'react'
//usaremos react-router para manejar navegacion y url visibles para usuario
//Navigate para navegacion automatica o condicional durante el renderizado VS useNavigate para navegacion en respuesta a un evento del usuario (ej. click)
import { Routes, Route, useNavigate, Navigate } from 'react-router'

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'
import { Alert } from './view/components/Alert'
import { Confirm } from './view/components/Confirm'
import { Context } from './context'

import { logic } from './logic'

export const App = () => {
    //usamos el hook useNavigate de React Router para cambiar vistas
    const navigate = useNavigate()

    //usamos useState para manejar el pintado de la ventana 'alert'
    const [alertMessage, setAlertMessage] = useState('')
    //pintado ventana 'confirm'
    const [confirmMessage, setConfirmMessage] = useState('')
    //este estado me permite guardar el true o false del resolve de la promesa del 'confirm delete post'
    const [confirmAction, setConfirmAction] = useState(null)

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

    //handle para la ventana de 'Alert: Accept'
    //cuando clico en el boton Accept, el handle cambia el set a vacio
    const handleAlertAccepted = () => setAlertMessage('')

    //3 handles para la ventana de 'Confirm: Cancel-Accept'
    const handleAcceptConfirm = () => {
        setConfirmMessage('')

        confirmAction.resolve(true)
    }

    const handleCancelConfirm = () => {
        setConfirmMessage('')

        confirmAction.resolve(false)
    }

    //con esta funcion hacemos llegar el confirm con props a Post.jsx, pasando por la cadena Home > Posts > Post, ya que uno esta dentro de otro
    const handleShowConfirm = (message) => {
        setConfirmMessage(message)

        //cuando construyo la promesa, el resolve lo guardo en un objeto en el state de React setConfirmAction. Al guardar un objeto, consigo q la respuesta se resuelva en confirmAction.resolve arriba con un true o un false.
        //la resolucion de la promesa se producirá al clicar en uno de los dos botones de Cancel o Accept, ahi es cuando llamamos al resolve
        return new Promise((resolve, reject) => { 
            setConfirmAction({ resolve })
        })
    }

    console.log('App -> render')

    //vite esta convirtiendo estos componentes html a javascript DOM y mostrandolos en el div root
    //Provider permite proveer un valor, en nuestro caso le damos el valor de un objeto ya que este nos permite agrupar varios handles, como propiedades de ese objeto.
    return <Context.Provider value={{
        alert: setAlertMessage,
        confirm: handleShowConfirm
    }}>
        {alertMessage && <Alert message={alertMessage} onAccepted={handleAlertAccepted} />}

        {confirmMessage && <Confirm message={confirmMessage} onCancelled={handleCancelConfirm} onAccepted={handleAcceptConfirm} />}

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
                    />
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
    </Context.Provider>
}