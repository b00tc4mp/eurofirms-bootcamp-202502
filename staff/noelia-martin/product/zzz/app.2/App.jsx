import { useState } from 'react'

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'


export const App = () => {
    // const viewState = useState('landing')
    // const view = viewState[0]
    // const setView = viewState[1]
    const [view, setView] = useState('landing') //Si es la primera vez que se usa, devuelve en view el primer estado es decir landing y en setview la llamada a la funcion que se encarga de cambiar a futuros estados
    //esta funcion es un hook de react (son funciones que te permiten “enganchar” el estado de React y el ciclo de vida desde componentes de función)

    const handleRegisterClick = () => setView('register') //funcion para manejar(handle) el click de register; en ella llamamos a setview, que es una llamada a la funcion que cambia el estado y le indicamos por cual cambiar
    const handleLoginClick = () => setView('login')


    console.log('App -> render')

    return <>
        {/* hay que usar propiedades; recuerda que el a&&b solo comprueba b si a es cierto */}
        {view === 'landing' &&
            <Landing
                // se le debe llamar asi, comenzando por on. Esta llama a ese handle que es una funcion que en este caso, cambia el estado segun cliques
                onRegisterClick={handleRegisterClick}
                onLoginClick={handleLoginClick}
            />
        }

        {view === 'register' &&
            <Register
                onLoginClick={handleLoginClick}
            />}

        {view === 'login' &&
            <Login
                onRegisterClick={handleRegisterClick}
            />}

        {view === 'home' && <Home />}
    </>
}
//en react los valores se ponen en llaves



//Version sin navegación
//importamos todos los archivos a utilizar
// import { Landing } from './view/Landing'
// import { Register } from './view/Register'
// import { Login } from './view/Login'
// import { Home } from './view/Home'
// import { Counter } from './view/Counter'


// export const App = () => {
//     console.log('App -> render')

//     return <>
//         {/* llamamos al contenido del fichero nombrado */}

//         {/* <Landing /> */}
//         {/* <Register /> */}
//         {/* <Login /> */}
//         {/* <Home /> */}
//         <Counter />
//     </>
// }
// Devolvemos un codigo html y react se encarga de traducirlo a javascript