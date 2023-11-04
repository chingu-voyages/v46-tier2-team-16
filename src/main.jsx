import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './app/store'
import App from './App.jsx'
import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { recipeSlice } from './features/recipe/recipeSlice'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App dark-theme='dark' />
    </Provider>
  </React.StrictMode>
)
