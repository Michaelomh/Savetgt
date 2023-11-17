import React from 'react'

type Props = React.HTMLProps<HTMLDivElement>

const HowItWorksSection = React.forwardRef<HTMLDivElement, Props>((_, ref) => {
  return (
    <div className="h-[500px]" ref={ref}>
      <h1 className="text-4xl tracking-wide font-bold">How it works!</h1>
    </div>
  )
})

export default HowItWorksSection
