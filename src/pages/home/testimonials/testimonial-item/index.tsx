import formatDate from '@/utils/formatDate'
import { TestimonialType } from '../types'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

type Props = {
  testimonial: TestimonialType
}

function TestimonialItem({ testimonial }: Props) {
  return (
    <Card>
      <CardHeader>
        <div className="flex">
          <img src={testimonial.image} alt="avatar" className="h-[48px] pr-2" />
          <div>
            <p className="text-[18px] font-inter font-bold text-black">{testimonial.name}</p>
            <p className="text-[16px] font-inter font-medium text-neutral-400">@{testimonial.username}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-[14px] font-inter font-normal">{testimonial.testimonial}</p>
      </CardContent>
      <CardFooter>
        <p className="text-[16px] font-inter font-medium text-neutral-400">
          {formatDate(testimonial.date, 'splash-testimonial')}
        </p>
      </CardFooter>
    </Card>
  )
}

export default TestimonialItem
