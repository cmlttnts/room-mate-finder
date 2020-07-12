import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { LangContextProvider } from 'contexts/LangContext/LangContext'
import { ThemeContextProvider } from 'contexts/ThemeContext/ThemeContext'
import { UserContextProvider } from 'contexts/UserContext/UserContext'
import App from './App'
import * as serviceWorker from './serviceWorker'

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
