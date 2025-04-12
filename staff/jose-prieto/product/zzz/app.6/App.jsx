import { Landing } from './view/Landing.js'
import { Register } from './view/Register.js'
import { Login } from './view/Login.js'
import { Home } from './view/Home.js'

export const App = () => {
    console.log('App -> render')

    return <>
        <Landing />

        <Register />

        <Login />

        <Home />
    </>
}