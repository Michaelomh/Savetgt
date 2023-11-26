import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function HeroText() {
  return (
    <div className="h-full max-w-[50%] flex flex-col justify-center items-start pr-8 pb-24">
      <Badge className="bg-green-500 mb-4">Alpha</Badge>
      <h1 className="text-[56px] font-montserrat font-bold leading-[4.5rem]">Simplifying saving for couples</h1>
      <p className="text-[16px] font-inter font-normal text-[#4B4B4B] pt-6 pb-12 leading-6">
        SaveTgt is designed to liberate couples from the stress of managing finances, offering a unified platform for
        couples to effortlessly track their shared expense. Enabling couples to prioritize what truly matters - each
        other.
      </p>
      <div className="flex justify-between w-full">
        <Button asChild className="bg-[#1BAC21] text-[18px] font-inter font-semibold p-6">
          <Link to="/auth">Start for free</Link>
        </Button>
        <div className="flex justify-between">
          <img src="avatars/avatar-1.png" alt="avatar" className="h-[48px] pr-1 -mr-3" />
          <img src="avatars/avatar-2.png" alt="avatar" className="h-[48px] pr-1 -mr-3" />
          <img src="avatars/avatar-3.png" alt="avatar" className="h-[48px] pr-1" />
          <div>
            <h3 className="text-[24px] font-montserrat font-semibold leading-0">5,209+</h3>
            <p className="text-[16px] font-inter font-normal text-[#4B4B4B] -mt-2">couples</p>
          </div>
        </div>
      </div>
    </div>
  )
}
