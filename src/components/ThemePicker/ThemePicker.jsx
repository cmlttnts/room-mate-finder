import './ThemePicker.scss'

import React, { useContext } from 'react'
import { ThemeContext, ThemeTypes } from 'contexts/ThemeContext/ThemeContext'
import Text from 'components/Text/Text'

const ThemePicker = () => {
  const { theme, changeTheme } = useContext(ThemeContext)

  return (
    <div className="ThemePicker">
      <label htmlFor="theme">
        <Text tid="darkMode" />
        <input
          type="checkbox"
          name="theme"
          id="theme"
          onChange={() => {
            if (theme === ThemeTypes.dark) changeTheme(ThemeTypes.light)
            else changeTheme(ThemeTypes.dark)
          }}
        />
        <span className="slider-round"></span>
      </label>
    </div>
  )
}

export default ThemePicker
