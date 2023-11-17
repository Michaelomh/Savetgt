import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function CallToActionSection() {
  return (
    <div id="call-to-action" className="h-[400px]">
      <h2 className="text-4xl tracking-wide font-bold">Ready to sve as one? Join Savetgt today!</h2>
      <p className="">
        Still hesitant? No problem! Take our 100% anonymous quiz and let Savetgt walk you through the magic.
      </p>
      <div>
        <Button asChild>
          <Link to="/auth">Start for free</Link>
        </Button>
        <Button asChild>
          <Link to="/quiz">Take our quiz</Link>
        </Button>
      </div>
    </div>
  )
}
