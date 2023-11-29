import Navigation from '../shared/navigation'
import ContactUsSection from './contact'
import FaqSection from './faq'

function SupportPage() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden gap-32">
      <Navigation />
      <FaqSection />
      <ContactUsSection />
    </div>
  )
}

export default SupportPage
