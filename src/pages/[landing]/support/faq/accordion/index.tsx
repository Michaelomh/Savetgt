import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export type FaqAccordionProps = {
  accordionTrigger: React.ReactNode
  accordionContent: React.ReactNode
  accordionValue: string
}

export function FaqAccordion({ accordionValue, accordionTrigger, accordionContent }: FaqAccordionProps) {
  return (
    <AccordionItem value={accordionValue}>
      <AccordionTrigger className="text-[24px] font-montserrat font-bold hover:no-underline">
        {accordionTrigger}
      </AccordionTrigger>
      <AccordionContent>{accordionContent}</AccordionContent>
    </AccordionItem>
  )
}
