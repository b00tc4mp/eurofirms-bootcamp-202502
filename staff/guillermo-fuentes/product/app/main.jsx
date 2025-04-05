import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Register } from './view/Register';
import { Landing } from './view/Landing';
import { Login } from './view/Login';
import { Home } from './view/Home';
const root = createRoot(document.getElementById('root'));
root.render(<Register />);
