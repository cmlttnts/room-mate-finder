import React, { useState, createContext, useCallback } from 'react'

export const ThemeTypes = {
  light: 'light',
  dark: 'dark',
}

// Initial Context Object
const initContext = {
  theme: ThemeTypes.light,
  changeTheme: () => undefined,
}

export const ThemeContext = createContext(initContext)

// Set up HTML document
const HTML = document.documentElement
const attrName = 'theme'
HTML.setAttribute(attrName, initContext.theme)

// Provider Component
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initContext.theme)

  const changeTheme = useCallback((themeIn) => {
    if (themeIn === ThemeTypes.light || themeIn === ThemeTypes.dark) {
      HTML.setAttribute(attrName, themeIn)
      setTheme(themeIn)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
