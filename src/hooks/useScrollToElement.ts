import { useRef } from 'react'

/**
 * Custom React hook for scrolling to a specific element on the webpage.
 *
 * @returns {{
 *   targetRef: React.MutableRefObject<?HTMLDivElement>,
 *   scrollToElement: () => void
 * }}
 *
 * @example
 *  const { targetRef, scrollToElement } = useScroll()
 *  <Button onClick={scrollToElement}>Scroll</Button>
 *  <div style={{ height: '500px' }}></div>
 *  <h1 elRef={targetRef} >Scroll to here</h1>
 */
const useScrollToElement = () => {
  const targetRef = useRef<null | HTMLDivElement>(null)
  const scrollToElement = () => {
    targetRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return { targetRef, scrollToElement }
}

export default useScrollToElement
