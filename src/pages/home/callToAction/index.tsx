import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function CallToActionSection() {
  return (
    <section
      className="w-screen h-[524px] justify-center flex flex-col items-center bg-[url('splash/cta-backdrop.svg')]
      bg-no-repeat bg-[length:100%] bg-[50%_100%] padding"
    >
      <h2 className="text-[36px] font-montserrat font-bold">Still unsure? No problem!</h2>
      <p className="text-[16px] font-inter font-normal text-neutral-500">
        Take our <b className="underlines">100% Anonymous quiz</b> and let us walk you through the magic.
      </p>
      <div className="p-8 space-x-4 mb-8">
        <Button asChild className="bg-[#1BAC21] text-[18px] font-inter font-semibold p-6">
          <Link to="/auth">Start for free</Link>
        </Button>
        <Button asChild className="bg-[#4c5e4c] text-[18px] font-inter font-semibold p-6">
          <Link to="/quiz">Take our quiz</Link>
        </Button>
      </div>
      <div className="w-full flex items-end justify-center h-full">
        <img src="/splash/cta-mockup-placeholder.png" alt="SaveTgt Dashboard images" className="h-full" />
      </div>
    </section>
  )
}
