import React, { useState } from 'react'
import HowItWorksImage from './hiw-container'
import HowItWorksAccordion from './accordion-container'

type Props = React.HTMLProps<HTMLDivElement>

function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1
}

const HowItWorksSection = React.forwardRef<HTMLDivElement, Props>((_, ref) => {
  const [random, setRandom] = useState<number>(0)

  const randomize = () => {
    setRandom(getRandomNumber())
  }

  return (
    <section className="h-full max-w-[1280px] px-16 w-full" ref={ref}>
      <div className="top-0 left-0 w-full h-full flex flex-col items-center">
        <h2 className="text-[36px] font-montserrat font-bold">How does SaveTgt Work?</h2>
      </div>
      <div className="w-full flex pt-8 min-h-[480px] items-center">
        <HowItWorksImage random={random} />
        <HowItWorksAccordion temp={randomize} />
      </div>
    </section>
  )
})

export default HowItWorksSection
