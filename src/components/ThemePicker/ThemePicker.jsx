import './ThemePicker.scss'

import React, { useContext } from 'react'
import Text from 'components/Text/Text'
import { ThemeContext, ThemeTypes } from 'contexts/ThemeContext/ThemeContext'

const ThemePicker = () => {
  const { theme, changeTheme } = useContext(ThemeContext)

  return (
    <div className="ThemePicker">
      <label htmlFor="dark-mode">
        <Text tid="darkMode" />
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
