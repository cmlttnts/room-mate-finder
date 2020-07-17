import './DropSearchList.scss'

import React, { useState, useRef, useCallback } from 'react'
import useOutsideClick from 'utils/useOutsideClick'
import includesStr from 'utils/stringLib'

interface PropTypes {
  sortedItems: string[]
  nameId: string
  disabled: boolean
}

const DropSearchList = ({
  sortedItems,
  nameId,
  disabled,
}: PropTypes): JSX.Element => {
  const searchRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [dropList, setDropList] = useState(sortedItems)
  const [dropActive, setDropActive] = useState('')
  const handleFocus = () => {
    setDropActive(' Active')
    if (contentRef) {
      setTimeout(() => {
        if (contentRef?.current) contentRef.current.scrollTop = 0
      }, 100)
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDropList(sortedItems.filter((item) => includesStr(item, e.target.value)))
  }

  const deActivateDrop = useCallback(() => {
    setDropActive('')
  }, [])

  useOutsideClick(searchRef, deActivateDrop)

  return (
    <div className="DropSearchList" ref={searchRef}>
      <input
        disabled={disabled}
        type="text"
        name={nameId}
        id={nameId}
        onFocus={handleFocus}
        onChange={handleSearchChange}
      />
      <div className={`DropSearchContent${dropActive}`} ref={contentRef}>
        {dropList.map((item, index) => (
          <div key={`div-${item}`}>
            <label htmlFor={`city${index}`}>{item}</label>
            <input type="checkbox" name="city" id={`city${index}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DropSearchList
