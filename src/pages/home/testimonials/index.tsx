import React from 'react'
import TestimonialItem from './testimonial-item'
import { TestimonialType } from './types'

type Props = React.HTMLProps<HTMLDivElement>

const testimonials: TestimonialType[] = [
  {
    name: 'Jordan Mitchell',
    username: 'JordanNomad',
    testimonial: `SaveTgt is more than an app; it's a lifeline for our financial journey. The tailored quiz helped us define our goals, and linking accounts made sure we're always on the same page. Real-time spending tracking and analytics are game-changers, offering a clear roadmap to financial freedom. Consolidating at month-end is the icing on the cake, giving us a comprehensive view that keeps us accountable. SaveTgt is our ticket to a stress-free and prosperous financial future! 📈`,
    date: new Date(2023, 10, 4, 14, 30, 13),
    image: '/avatars/avatar-1.png',
  },
  {
    name: 'Marcus Cheng',
    username: 'mma__cuss',
    testimonial: `SaveTgt has transformed our financial journey as a couple. With its intuitive features, we can easily track and manage our joint expenses, fostering better communication and understanding. Real-time analytics and clear visualizations make it a joy to navigate our shared finances. We've achieved our savings goals faster and with less stress, thanks to SaveTgt!`,
    date: new Date(2022, 1, 15, 18, 0, 41),
    image: '/avatars/avatar-6.png',
  },
  {
    name: 'Alex Zhang Chen Wei',
    username: 'AlexZhangCW487',
    testimonial: `SaveTgt has been a game-changer for me and my wife. Linking our accounts seamlessly unified our views on shared finances. Consolidating at the end of the month has become a stress-free ritual, highly recommend it to every couple!`,
    date: new Date(2022, 7, 22, 20, 15, 25),
    image: '/avatars/avatar-3.png',
  },
  {
    name: 'Michelle Turner',
    username: 'Mich.Turn.Art',
    testimonial:
      'SaveTgt turned what used to be a source of tension into a shared accomplishment. The tailored quiz helped us set up the app according to our unique preferences. There is truly no other app out there! 🔥🔥🔥',
    date: new Date(2023, 4, 7, 15, 1, 56),
    image: '/avatars/avatar-4.png',
  },
  {
    name: 'Mia Li ',
    username: 'miainmiami',
    testimonial:
      "SaveTgt has seamlessly integrated efficiency into our financial planning. The tailored quiz ensured that the app caters to our unique needs. Linking accounts provided a unified view, making collaborative decisions a breeze. Tracking spending in real-time with descriptive graphs allowed us to stay on top of our shared financial goals. Consolidating at the end of the month is now a ritual that brings order and clarity to our finances. We're in control, thanks to SaveTgt!",
    date: new Date(2023, 3, 3, 8, 7, 11),
    image: '/avatars/avatar-5.png',
  },
]

const TestimonialsSection = React.forwardRef<HTMLDivElement, Props>((_, ref) => {
  return (
    <section className="h-full max-w-[1280px]" ref={ref}>
      <div className="top-0 left-0 w-full h-full flex flex-col items-center">
        <h2 className="text-[36px] font-montserrat font-bold">Real stories, Real Success with SaveTgt</h2>
        <p className="text-[16px] font-inter font-normal text-[#434343]">
          {`At SaveTgt, we take pride in the positive impact our app has on couples' financial lives.`}
        </p>
        <p className="text-[16px] font-inter font-normal text-[#434343]">
          {`But don't take our word for it - hear from our users!`}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 pt-8">
        <div>
          <TestimonialItem testimonial={testimonials[0]} />
        </div>
        <div>
          <TestimonialItem testimonial={testimonials[1]} />
        </div>
        <div>
          <TestimonialItem testimonial={testimonials[3]} />
          <div className="pt-4" />
          <TestimonialItem testimonial={testimonials[2]} />
        </div>
        <div>
          <TestimonialItem testimonial={testimonials[4]} />
        </div>
      </div>
    </section>
  )
})

export default TestimonialsSection
