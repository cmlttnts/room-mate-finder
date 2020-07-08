import React from 'react'
import 'main_lib.scss'
import 'App.scss'
import LanguagePicker from 'components/LanguagePicker/LanguagePicker'
import ThemePicker from 'components/ThemePicker/ThemePicker'

function App() {
  return (
    <div className="App">
      <LanguagePicker />
      <ThemePicker />
    </div>
  )
}

export default App
