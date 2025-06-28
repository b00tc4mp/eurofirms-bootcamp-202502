import { useState } from 'react'

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'

import { Counter } from './view/Counter'

export const App = () => {
    // const viewState = useState('landing')
    // const view = viewState[0]
    // const setView = viewState[1]
    const [view, setView] = useState('landing')


    console.log('App -> render')

    return <>
        {view === 'landing' && <Landing />}

        {view === 'register' && <Register />}

        {view === 'login' && <Login />}

        {view === 'home' && <Home />}

        <Counter />
    </>
}