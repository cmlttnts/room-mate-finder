import React, { useState, createContext, useCallback } from 'react'
import { Languages } from 'textContent/content'
interface LangContextInterface {
  lang: Languages
  changeLang: (lang: Languages) => void
}

const initContext: LangContextInterface = {
  lang: 'tr',
  changeLang: (lang: Languages) => {
    console.log(lang)
  },
}

export const LangContext = createContext(initContext)

interface PropTypes {
  children: React.ReactNode
}

export const LangContextProvider = ({ children }: PropTypes): JSX.Element => {
  const [lang, setLang] = useState<Languages>('tr')

  const changeLang = useCallback((langIn: Languages) => {
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
