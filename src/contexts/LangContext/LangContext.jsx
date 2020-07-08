import React, { useState, createContext, useCallback } from 'react'

const initContext = {
  lang: 'tr',
  changeLang: () => undefined,
}

export const LangContext = createContext(initContext)

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState('tr')

  const changeLang = useCallback((langIn) => {
    setLang(langIn)
  }, [])

  const provided = {
    lang,
    changeLang,
  }

  return (
    <LangContext.Provider value={provided}>{children}</LangContext.Provider>
  )
}
