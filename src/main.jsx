import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppContext from './Helper/AppContext.jsx'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import ShopContextProvider from './Context/ShopContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   <ShopContextProvider>
      <AppContext>
        <MantineProvider>
          
          <App />
         
        </MantineProvider>
      </AppContext>
      </ShopContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)