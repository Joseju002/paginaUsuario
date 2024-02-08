import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './componentes/Header.jsx'
import './bootstrap/css/bootstrap.min.css'
import './css/index1.css'
import { ModoProvider } from './componentes/Global.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModoProvider>
    <React.StrictMode>
      <Header />
    </React.StrictMode>
  </ModoProvider>
)
