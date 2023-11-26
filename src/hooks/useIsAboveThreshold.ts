import { useEffect, useState } from 'react'

/**
 * UNTESTED
 * Custom React hook to return boolean if current scroll position is beyond a threshold
 *
 * @returns boolean
 *
 * @example
 *  const isAboveThreshold = useIsAboveThreshold(900)
 */
const useIsAboveThreshold = (threshold: number) => {
  const [isAboveThreshold, setIsAboveThreshold] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop
      setIsAboveThreshold(scrollPosition > threshold)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isAboveThreshold
}

export default useIsAboveThreshold
