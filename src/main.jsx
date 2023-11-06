import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './app/store'
import App from './App.jsx'
import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { AppProvider } from './contexts/DarkModeContext.jsx'
import { recipeSlice } from './features/recipe/recipeSlice'

ReactDOM.createRoot(document.getElementById('root')).render(
 
      <ApiProvider api={recipeSlice}>
        <Provider store={store}>
        <AppProvider>
          <App />
          </AppProvider>
        </Provider>
      </ApiProvider>

);