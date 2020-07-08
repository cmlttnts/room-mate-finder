import './ThemePicker.scss'

import React, { useContext } from 'react'
import { ThemeContext, ThemeTypes } from 'contexts/ThemeContext/ThemeContext'

const ThemePicker = () => {
  const { theme, changeTheme } = useContext(ThemeContext)

  return (
    <div className="ThemePicker">
      <label htmlFor="theme">Dark Mode</label>
      <input
        type="checkbox"
        name="theme"
        id="theme"
        onChange={() => {
          if (theme === ThemeTypes.dark) changeTheme(ThemeTypes.light)
          else changeTheme(ThemeTypes.dark)
        }}
      />
    </div>
  )
}

export default ThemePicker
