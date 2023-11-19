import CallToAction from './callToAction'
import Features from './features'
import Hero from './hero'
import HowItWorks from './howItWorks'
import Navigation from './navigation'
import Testimonials from './testimonials'
import useScroll from '@/hooks/useScrollToElement'

function Home() {
  const { targetRef: featuresRef, scrollToElement: scrollToFeatures } = useScroll()
  const { targetRef: testimonialsRef, scrollToElement: scrollToTestimonials } = useScroll()
  const { targetRef: howItWorksRef, scrollToElement: scrollToHowItWorks } = useScroll()

  return (
    <div className="flex flex-col items-center overflow-x-hidden gap-16">
      <Navigation handleScrolls={[scrollToFeatures, scrollToTestimonials, scrollToHowItWorks]} />
      <Hero />
      <Features ref={featuresRef} />
      <HowItWorks ref={howItWorksRef} />
      <Testimonials ref={testimonialsRef} />
      <CallToAction />
    </div>
  )
}

export default Home
