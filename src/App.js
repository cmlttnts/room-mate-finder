import React from 'react'
import 'main_lib.scss'
import 'App.scss'
import LanguagePicker from 'components/LanguagePicker/LanguagePicker'
import ThemePicker from 'components/ThemePicker/ThemePicker'
import SliderPanel from 'components/SliderPanel/SliderPanel'

function App() {
  return (
    <div className="App">
      <SliderPanel>
        <LanguagePicker />
        <ThemePicker />
      </SliderPanel>
    </div>
  )
}

export default App
