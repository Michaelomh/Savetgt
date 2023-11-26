import clsx from 'clsx'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export type AccordionProps = {
  accordionTrigger: React.ReactNode
  accordionContent: React.ReactNode
  accordionValue: string
  isActive?: boolean
}

export function HowItWorksAccordion({
  accordionValue,
  accordionTrigger,
  accordionContent,
  isActive = false,
}: AccordionProps) {
  return (
    <AccordionItem value={accordionValue} className="no-underline">
      <AccordionTrigger
        className={clsx(
          'text-[24px] font-montserrat font-bold hover:no-underline',
          isActive ? 'text-[#1BAC21]' : 'text-[#434343]'
        )}
      >
        {accordionTrigger}
      </AccordionTrigger>
      <AccordionContent>{accordionContent}</AccordionContent>
    </AccordionItem>
  )
}
