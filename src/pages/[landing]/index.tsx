import CallToAction from './landing/callToAction'
import Features from './landing/features'
import Hero from './landing/hero'
import HowItWorks from './landing/howItWorks'
import Navigation from './shared/navigation'
import Testimonials from './landing/testimonials'
import useScroll from '@/hooks/useScrollToElement'

function Home() {
  const { targetRef: featuresRef, scrollToElement: scrollToFeatures } = useScroll()
  const { targetRef: testimonialsRef, scrollToElement: scrollToTestimonials } = useScroll()
  const { targetRef: howItWorksRef, scrollToElement: scrollToHowItWorks } = useScroll()

  return (
    <div className="flex flex-col items-center overflow-x-hidden gap-32">
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
