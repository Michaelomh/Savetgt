import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import NavigationItem from './navigation-item'

type Props = {
  isErrorPage?: boolean
  handleScrolls?: { (): void }[]
}

const NAVIGATION_ITEMS = ['Features', 'How it works', 'Testimonials']

function Navigation({ isErrorPage = false, handleScrolls }: Props) {
  return (
    <div className="flex h-16 items-center px-4 max-w-[1280px] w-screen">
      <nav className="flex items-center lg:space-x-6 w-screen justify-between">
        <div className="flex flex-row items-center space-x-4 ">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            <img src="/Logo.png" alt="SaveTgt logo" className="w-auto h-12 mr-8" />
          </Link>
          {NAVIGATION_ITEMS.map((item, i) => {
            return (
              <NavigationItem
                key={item}
                navigationName={item}
                isErrorPage={isErrorPage}
                handleScroll={handleScrolls && handleScrolls[i]}
              />
            )
          })}
        </div>

        <div>
          <Button asChild variant="link">
            <Link to="/auth" className="text-sm font-medium transition-colors hover:text-primary">
              Login
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/auth" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Try for free
            </Link>
          </Button>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
