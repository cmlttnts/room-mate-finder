import './ThemePicker.scss'

import React, { useContext } from 'react'
import { ThemeContext, ThemeTypes } from 'contexts/ThemeContext/ThemeContext'
import getLocalText from 'textContent/content'
import { LangContext } from 'contexts/LangContext/LangContext'

const ThemePicker = () => {
  const { theme, changeTheme } = useContext(ThemeContext)
  const { lang } = useContext(LangContext)

  return (
    <div className="ThemePicker">
      <label htmlFor="dark-mode">
        {getLocalText(lang, 'darkMode')}
        <input
          type="checkbox"
          name="dark-mode"
          id="dark-mode"
          onChange={() => {
            if (theme === ThemeTypes.dark) changeTheme(ThemeTypes.light)
            else changeTheme(ThemeTypes.dark)
          }}
        />
        <span className="asdf"></span>
      </label>
    </div>
  )
}

export default ThemePicker
