import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './app/store'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './contexts/DarkModeContext'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
    <Provider store={store}>
      <App/>
    </Provider>
    </AppProvider>
  </React.StrictMode>
)
