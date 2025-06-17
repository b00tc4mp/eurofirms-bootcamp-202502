import { createRoot } from 'react-dom/client'
import { app } from '/app.jsx'
import { BrowserRouter as Router} from 'react-router'

const root = createRoot(document.getElementById('root'))
root.render (<router><app /></router>)