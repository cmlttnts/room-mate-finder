import './SliderPanel.scss'

import React, { useState, useRef, useCallback } from 'react'
import Text from 'components/Text/Text'
import useOutsideClick from 'utils/useOutsideClick'

interface PropTypes {
  children: React.ReactNode
}

const SliderPanel = ({ children }: PropTypes): JSX.Element => {
  const [activeSlider, setActiveSlider] = useState('')
  const sliderRef = useRef(null)
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
      {/* TODO: extract the middle button from slide panel */}
      <button className="sideB" type="button" onClick={openSlider}>
        <Text tid="menu" />
      </button>
    </div>
  )
}

export default SliderPanel
