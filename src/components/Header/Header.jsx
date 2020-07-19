import './Header.scss'

import React, { useContext } from 'react'

import getLocalText from 'textContent/content'
import { LangContext } from 'contexts/LangContext/LangContext'

const Header = () => {
  const { lang } = useContext(LangContext)

  return (
    <header className="Header">
      <h1>{getLocalText(lang, 'title')}</h1>
    </header>
  )
}

export default Header
