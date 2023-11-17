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
    <section className="flex flex-col items-center space-y-8">
      <Navigation handleScrolls={[scrollToFeatures, scrollToTestimonials, scrollToHowItWorks]} />
      <Hero />
      <Features ref={featuresRef} />
      <HowItWorks ref={howItWorksRef} />
      <Testimonials ref={testimonialsRef} />
      <CallToAction />
    </section>
  )
}

export default Home
