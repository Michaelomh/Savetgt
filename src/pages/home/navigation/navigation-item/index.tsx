import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

type Props = {
  navigationName: string
  isErrorPage?: boolean
  handleScroll?: () => void
}

function NavigationItem({ navigationName, isErrorPage, handleScroll }: Props) {
  return isErrorPage ? (
    <Button asChild variant="link">
      <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
        {navigationName}
      </Link>
    </Button>
  ) : (
    <Button variant="link" onClick={handleScroll}>
      <p className="text-sm font-medium transition-colors hover:text-primary">{navigationName}</p>
    </Button>
  )
}

export default NavigationItem
