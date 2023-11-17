import React from 'react'

type Props = React.HTMLProps<HTMLDivElement>

const TestimonialsSection = React.forwardRef<HTMLDivElement, Props>((_, ref) => {
  return (
    <div className="h-[500px]" ref={ref}>
      <h1 className="text-4xl tracking-wide font-bold">Testimonials</h1>
    </div>
  )
})

export default TestimonialsSection
