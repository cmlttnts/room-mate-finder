import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { LangContextProvider } from 'contexts/LangContext/LangContext'
import { ThemeContextProvider } from 'contexts/ThemeContext/ThemeContext'
import { UserContextProvider } from 'contexts/UserContext/UserContext'
import App from 'App'

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <LangContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </LangContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
