import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { BrowserRouter as Router } from 'react-router' //nuevo, renombramos a Router para hacerlo mas corto

const root = createRoot(document.getElementById('root'))
//root.render(<App />)
root.render(<Router><App /></Router>)


//envolvemos la aplicación en el Router que lo va a utilizar