import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Accordion } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { HowItWorksAccordionProps, HowItWorksAccordion } from './hiw-accordion'

const HOW_IT_WORKS_CONTENT: HowItWorksAccordionProps[] = [
  {
    accordionValue: 'step-1',
    accordionTrigger: '1. Tailor your experience',
    accordionContent: (
      <div>
        <p className="text-[16px] font-inter font-normal text-[#4B4B4B] leading-6">{`First, you will take a quiz to understand how you best manage your joint expenses. Don't worry if you are not sure, our expert guidance will help you make the best choice`}</p>
        <Button asChild className="bg-[#1BAC21] text-[14px] font-inter font-semibold mt-4" size="sm">
          <Link to="/">Learn more</Link>
        </Button>
      </div>
    ),
  },
  {
    accordionValue: 'step-2',
    accordionTrigger: `2. Connect your partner's account`,
    accordionContent: (
      <div>
        <p className="text-[16px] font-inter font-normal text-[#4B4B4B] leading-6">{`First, you will take a quiz to understand how you best manage your joint expenses. Don't worry if you are not sure, our expert guidance will help you make the best choice`}</p>
        <Button asChild className="bg-[#1BAC21] text-[14px] font-inter font-semibold mt-4" size="sm">
          <Link to="/">Learn more</Link>
        </Button>
      </div>
    ),
  },
  {
    accordionValue: 'step-3',
    accordionTrigger: '3. Track joint finances effortlessly',
    accordionContent: (
      <div>
        <p className="text-[16px] font-inter font-normal text-[#4B4B4B] leading-6">{`First, you will take a quiz to understand how you best manage your joint expenses. Don't worry if you are not sure, our expert guidance will help you make the best choice`}</p>
        <Button asChild className="bg-[#1BAC21] text-[14px] font-inter font-semibold mt-4" size="sm">
          <Link to="/">Learn more</Link>
        </Button>
      </div>
    ),
  },
  {
    accordionValue: 'step-4',
    accordionTrigger: '4. Monthly consolidation',
    accordionContent: (
      <div>
        <p className="text-[16px] font-inter font-normal text-[#4B4B4B] leading-6">{`First, you will take a quiz to understand how you best manage your joint expenses. Don't worry if you are not sure, our expert guidance will help you make the best choice`}</p>
        <Button asChild className="bg-[#1BAC21] text-[14px] font-inter font-semibold mt-4" size="sm">
          <Link to="/">Learn more</Link>
        </Button>
      </div>
    ),
  },
]

function HowItWorksAccordionContainer({ temp }: { temp: () => void }) {
  const [activeAccordion, setActiveAccordion] = useState(HOW_IT_WORKS_CONTENT[0].accordionValue)

  return (
    <div className="w-full">
      <Accordion
        type="single"
        collapsible
        onValueChange={(val: string) => {
          temp()
          setActiveAccordion(val)
        }}
        defaultValue={HOW_IT_WORKS_CONTENT[0].accordionValue}
      >
        {HOW_IT_WORKS_CONTENT.map((content) => {
          return (
            <HowItWorksAccordion
              accordionTrigger={content.accordionTrigger}
              accordionContent={content.accordionContent}
              accordionValue={content.accordionValue}
              key={content.accordionValue}
              isActive={content.accordionValue === activeAccordion}
            />
          )
        })}
      </Accordion>
    </div>
  )
}

export default HowItWorksAccordionContainer
