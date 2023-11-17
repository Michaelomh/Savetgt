import React from 'react'

type Props = React.HTMLProps<HTMLDivElement>

const FeaturesSection = React.forwardRef<HTMLDivElement, Props>((_, ref) => {
  return (
    <div id="features" className="h-[500px]" ref={ref}>
      <h1 className="text-4xl tracking-wide font-bold">Features Section</h1>
    </div>
  )
})

export default FeaturesSection
