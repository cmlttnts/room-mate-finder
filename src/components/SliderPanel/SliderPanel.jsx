import './SliderPanel.scss'

import React, { useState, useRef, useCallback } from 'react'
import Text from 'components/Text/Text'
import useOutsideClick from 'utils/useOutsideClick'

const SliderPanel = ({ children }) => {
  const [activeSlider, setActiveSlider] = useState('')
  const sliderRef = useRef()
  const openSlider = () => {
    if (!activeSlider) setActiveSlider(' Active')
    else setActiveSlider('')
  }

  const closeSlider = useCallback(() => {
    setActiveSlider('')
  }, [])

  useOutsideClick(sliderRef, closeSlider)

  return (
    <div className="SliderPanel" ref={sliderRef}>
      <div className={`SliderContent${activeSlider}`}>{children}</div>
      <button className="sideB" type="button" onClick={openSlider}>
        <Text tid="menu" />
      </button>
    </div>
  )
}

export default SliderPanel
