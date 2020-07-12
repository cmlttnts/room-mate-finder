import { useEffect } from 'react'

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback()
      }
    }

    document.documentElement.addEventListener('click', handleOutsideClick)

    return () => {
      document.documentElement.removeEventListener('click', handleOutsideClick)
    }
  }, [ref, callback])
}

export default useOutsideClick
