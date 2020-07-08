import './Text.scss'

import { useContext } from 'react'
import getLocalText from 'textContent/content'
import { LangContext } from 'contexts/LangContext/LangContext'

const Text = ({ tid }) => {
  const { lang } = useContext(LangContext)

  return getLocalText(lang, tid)
}

export default Text
