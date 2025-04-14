// importamos el hook useState, lo utilizaremos para encender y apagar vistas; useState es una funcion que devuelve un array y crea un estado sobre un dato
import { useState } from 'react'

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'

export const App = () => {
    //inicialmente al useState le damos el valor 'landing'
    const viewState = useState('landing')
    //viewState va a devolver un array con 2 posiciones, el 1ro tiene el valor actual, y el 2do tiene una funcion que permite cambiar estado:
    const view = viewState[0]
    const setView = viewState[1]

    console.log('App -> render')

    //vite esta convirtiendo estos componentes html a javascript DOM y mostrandolos en el div root
    return <>
        {/* muestrame este componente Landing si view es 'landing' */}
        {view === 'landing' && <Landing />}

        {view === 'register' && <Register />}

        {view === 'login' && <Login />}

        {view === 'home' && <Home />}
    </>
}