import { Routes, Route, useNavigate, Navigate } from 'react-router' //nos traemos todos estos hook y componentes

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'

import { logic } from './logic'

export const App = () => {
    //dejamos de utilizar setView para poner useNavigate con la ruta correspondiente
    const navigate = useNavigate()

    const handleRegisterClicked = () => navigate('/register')
    const handleLoginClicked = () => navigate('/login')
    const handleUserRegistered = () => navigate('/login')
    const handleUserLoggedIn = () => navigate('/') //home y landing lo ponemos en la ruta raiz (en este caso es para home)
    const handleUserLoggedOut = () => navigate('/login')

    let loggedIn //nuevo, necesitamos declarar esta variable para que la utilice el control de errores. Si la declaramos dentro se queda como variable local
    //Antiguo, quitamos el useEffect para que directamente cuando cargue este componente, se modifique la variable loggedIn. 
    try {
        loggedIn = logic.isUserLoggedIn()
    } catch (error) {
        console.error(error)//nuevo, pintamos el error en consola para mayor control
        alert(error.mensage)
    }

    console.log('App -> render')

    //aprovechamos que disponemos de un contenedor vacio y metemos todo en Routes
    return <Routes>
        {/* Cambiamos view por Ruta e indicamos la url y el contenido que se debe mostrar */}
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
    </Routes >

}
//Quitamos la ruta home para configurarla en la ruta raiz. Esta ruta raiz mostrará tanto El componente Landing como la Home según si hay algún usuario conectado
//Para configurarlo utilizaremos la variable loggedIn que nos proporciona la lógica de isUserLoggedIn y configuramos un ternario: si NO está logueado mostrará Landing y si SI muestra Home

//Navigate es un componente, el cuál se usa principalmente para redirecciones automáticas durante el renderizado
//useNavigate es un hook, que contiene una función que permite la navegación programatica. Se usa para redirecciones basadas en acciones de usuario o lógica dentro de un componente.

//En las rutas configuradas para Login y Register vamos a utilizar el componente Navigate (no confundir con la constante navigate que creamos para los handler, recuerda que contiene el hook useNavegate).
//En estas rutas creamos un ternario que SI hay algun usuario conectado nos mandará al componente Navigate(este nos redireccionará a la ruta raiz(a Home)) y si NO hay usuario conectado entonces nos mandará al componente Login o Register.
//Esta configuración la realizamos por seguridad para que si hay algun usuario conectado no pueda cambiar de ruta a su antojo. (Le obligamos a permanecer en Home)