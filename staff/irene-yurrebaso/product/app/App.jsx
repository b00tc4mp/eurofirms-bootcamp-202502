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

    console.log('App -> render')

    //vite esta convirtiendo estos componentes html a javascript DOM y mostrandolos en el div root
    return <Routes>
        {/* onRegisterClick (nombre semantico que nos inventamos) es una propiedad (prop) */}
        <Route path='/' element={
            !loggedIn ?
                <Landing
                    onRegisterClicked={handleRegisterClicked}
                    onLoginClicked={handleLoginClicked}
                />
                :
                <Home
                    onUserLoggedOut={handleUserLoggedOut} />
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
}