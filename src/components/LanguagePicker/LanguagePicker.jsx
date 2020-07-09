import './LanguagePicker.scss'

import React, { useContext } from 'react'

import { LangContext } from 'contexts/LangContext/LangContext'
import Text from 'components/Text/Text'

const LanguagePicker = () => {
  const { lang, changeLang } = useContext(LangContext)
  const handleLangChange = (langIn) => {
    if (lang !== langIn) changeLang(langIn)
  }
  return (
    <div className="LanguagePicker">
      <span>
        <Text tid="lang" />
      </span>
      <button
        type="button"
        onClick={() => {
          handleLangChange('tr')
        }}
      >
        <Text tid="tr" />
      </button>
      <button
        type="button"
        onClick={() => {
          handleLangChange('eng')
        }}
      >
        <Text tid="eng" />
      </button>
    </div>
  )
}

export default LanguagePicker
