import './SliderPanel.scss'

import React, { useState } from 'react'
import Text from 'components/Text/Text'

const SliderPanel = ({ children }) => {
  const [activeSlider, setActiveSlider] = useState('')
  const openSlider = () => {
    if (!activeSlider) setActiveSlider(' Active')
    else setActiveSlider('')
    console.log('hello')
  }
  return (
    <div className="SliderPanel">
      <div className={`SliderContent${activeSlider}`}>{children}</div>
      <button className="sideB" type="button" onClick={openSlider}>
        <Text tid="menu" />
      </button>
    </div>
  )
}

export default SliderPanel
