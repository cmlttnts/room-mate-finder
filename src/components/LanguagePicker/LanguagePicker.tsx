import './LanguagePicker.scss'

import React, { useContext } from 'react'
import { LangContext } from 'contexts/LangContext/LangContext'
import getLocalText, { Languages } from 'textContent/content'

const LanguagePicker = (): JSX.Element => {
  const { lang, changeLang } = useContext(LangContext)
  const handleLangChange = (langIn: Languages) => {
    if (lang !== langIn) changeLang(langIn)
  }
  return (
    <div className="LanguagePicker">
      <span>{getLocalText(lang, 'lang')}</span>
      <div>
        <button
          type="button"
          onClick={() => {
            handleLangChange('tr')
          }}
        >
          {getLocalText(lang, 'tr')}
        </button>
        <button
          type="button"
          onClick={() => {
            handleLangChange('eng')
          }}
        >
          {getLocalText(lang, 'eng')}
        </button>
      </div>
    </div>
  )
}

export default LanguagePicker
