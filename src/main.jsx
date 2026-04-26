import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode> {/* Envolver la aplicación en StrictMode para activar comprobaciones adicionales en desarrollo */}
        <App /> {/* Renderiza el componente App como el componente raíz de la aplicación */}
    </StrictMode>,
);

