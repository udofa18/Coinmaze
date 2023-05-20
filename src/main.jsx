import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import * as React from 'react'
import CryptoContext from './CryptoContext'
import 'react-alice-carousel/lib/alice-carousel.css';
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
  <BrowserRouter>
  
  <CryptoContext>
    <App />
    </CryptoContext>
    </BrowserRouter>
  </React.StrictMode>
)
