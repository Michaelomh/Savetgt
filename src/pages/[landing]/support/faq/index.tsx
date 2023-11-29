import { Accordion } from '@/components/ui/accordion'
import { FaqAccordion, FaqAccordionProps } from './accordion'

const FAQ_QUESTIONS: FaqAccordionProps[] = [
  {
    accordionValue: 'question-1',
    accordionTrigger: 'Is SaveTgt free? Do I have to pay?',
    accordionContent: 'Yes',
  },
  {
    accordionValue: 'question-2',
    accordionTrigger: 'How is it different from other personal finance tracking apps?',
    accordionContent: 'Very Different',
  },
  {
    accordionValue: 'question-3',
    accordionTrigger: 'How does it work?',
    accordionContent: 'Power of friendship',
  },
  {
    accordionValue: 'question-4',
    accordionTrigger: 'Can I export data out?',
    accordionContent: 'Yes',
  },
  {
    accordionValue: 'question-5',
    accordionTrigger: 'Can I import data in?',
    accordionContent: 'Yes',
  },
]

function FaqSection() {
  return (
    <section className="w-full flex gap-8 justify-center pt-[128px]">
      <div className=" h-full max-w-[1280px] px-16 flex flex-col gap-4 ">
        <div className="flex flex-col items-center">
          <h2 className="text-[36px] font-montserrat font-bold">Got questions? We got answers</h2>
          <p className="text-[16px] font-inter font-normal text-neutral-500">
            If you have any other questions or concerns about SaveTgt, please email us at contact@savetgt.com
          </p>
        </div>
        <Accordion type="single" collapsible>
          {FAQ_QUESTIONS.map((questions) => {
            return (
              <FaqAccordion
                accordionTrigger={questions.accordionTrigger}
                accordionContent={questions.accordionContent}
                accordionValue={questions.accordionValue}
                key={questions.accordionValue}
              />
            )
          })}
        </Accordion>
      </div>
    </section>
  )
}

export default FaqSection
