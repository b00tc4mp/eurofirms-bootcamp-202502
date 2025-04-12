import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'

export const App = () => {
    console.log('App -> render')
    return (
        <Router>
            <Routes>

                <Route path='/' element={<Landing />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='home' element={<Home />} />

            </Routes>

        </Router>
    )
}