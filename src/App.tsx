import React from 'react'
import 'main_lib.scss'
import 'App.scss'
import LanguagePicker from 'components/LanguagePicker/LanguagePicker'
import ThemePicker from 'components/ThemePicker/ThemePicker'
import SliderPanel from 'components/SliderPanel/SliderPanel'
import Home from 'pages/Home/Home'
import Header from 'components/Header/Header'

function App(): JSX.Element {
  return (
    <div className="App">
      <SliderPanel>
        <LanguagePicker />
        <ThemePicker />
      </SliderPanel>

      <Home>
        <Header />
      </Home>
    </div>
  )
}

export default App
