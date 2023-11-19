import HeroImage from './heroImage'
import HeroText from './heroText'

export default function HeroSection() {
  return (
    <section className=" w-full h-screen max-h-[600px] flex justify-center bg-[url('splash/hero-backdrop.svg')] bg-repeat bg-[length:100%] pt-16">
      <div className=" h-full max-w-[1280px] flex gap-4">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  )
}
