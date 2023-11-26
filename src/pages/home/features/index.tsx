import React from 'react'
import { Badge } from '@/components/ui/badge'

type Props = React.HTMLProps<HTMLDivElement>

const TEMP_FEATURES = [
  'goal setting and tracking',
  'shared expense tracking',
  'individual expense tracking',
  'scheduled income and payments',
  'tailored quiz',
  'customizable dashboard',
  'account linking',
  'real time spending tracking',
  'month end consolidation',
  'secure data encryption',
  'seemless expense input',
  'exportable reports (csv, pdf)',
  'exportable expense sheet (csv, pdf)',
  'separate and combined bank account support',
]

const FeaturesSection = React.forwardRef<HTMLDivElement, Props>((_, ref) => {
  return (
    <section className="h-full max-w-[1280px] w-full" ref={ref}>
      <div className="top-0 left-0 w-full h-full flex flex-col items-center">
        <h2 className="text-[36px] font-montserrat font-bold">What is a couple financial tracking app?</h2>
        <p className="text-[16px] font-inter font-normal text-[#434343]">
          {`Savetgt is designed to focus on the personal tracking for couples. It's goals is very different where`}
        </p>
        <p className="text-[16px] font-inter font-normal text-[#434343]">
          {`it's focus is to help couples with understanding their Financial health`}
        </p>
      </div>
      <div className="pt-8 flex justify-center gap-2 flex-wrap">
        {TEMP_FEATURES.map((feature) => {
          return (
            <Badge className="bg-green-500" key={feature}>
              {feature}
            </Badge>
          )
        })}
      </div>
    </section>
  )
})

export default FeaturesSection
