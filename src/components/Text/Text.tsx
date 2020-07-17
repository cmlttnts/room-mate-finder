import './Text.scss'

import React, { useContext } from 'react'
import getLocalText from 'textContent/content'
import { LangContext } from 'contexts/LangContext/LangContext'

interface PropTypes {
  tid: string
}

const Text = ({ tid }: PropTypes): JSX.Element => {
  const { lang } = useContext(LangContext)

  return <>{getLocalText(lang, tid)}</>
}

export default Text
