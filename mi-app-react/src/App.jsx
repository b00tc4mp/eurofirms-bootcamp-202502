import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
        <Link to='/'>Inicio</Link>
        <Link to='/about'>Acerca de</Link>
        <Link to='/services'>Servicios</Link>
        <Link to='/contact'>Contacto</Link>
      </nav>
   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
