import React, { useState, createContext, useCallback } from 'react'

interface Themes {
  light: 'light'
  dark: 'dark'
}

export const ThemeTypes: Themes = {
  light: 'light',
  dark: 'dark',
}

interface ContextType {
  theme: keyof Themes
  changeTheme: (theme: keyof Themes) => void
}

// Initial Context Object
const initContext: ContextType = {
  theme: ThemeTypes.light,
  changeTheme: () => undefined,
}

export const ThemeContext = createContext(initContext)

// Set up HTML document
const HTML = document.documentElement
const attrName = 'theme'
HTML.setAttribute(attrName, initContext.theme)

interface PropTypes {
  children: React.ReactNode
}

// Provider Component
export const ThemeContextProvider = ({ children }: PropTypes): JSX.Element => {
  const [theme, setTheme] = useState(initContext.theme)

  const changeTheme = useCallback((themeIn: keyof Themes) => {
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
