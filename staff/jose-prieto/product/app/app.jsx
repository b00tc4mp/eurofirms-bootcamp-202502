import { Landing } from './view/Landing.jsx'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'

export const App = () => {
    console.log('App -> render')

    return <>
        <Landing />

        <Register /> 

        <Login />

        <Home />
    </>
}