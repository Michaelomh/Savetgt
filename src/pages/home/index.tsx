import CallToAction from './callToAction'
import Features from './features'
import Hero from './hero'
import HowItWorks from './howItWorks'
import Navigation from './navigation'
import Testimonials from './testimonials'

function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

export default Home
