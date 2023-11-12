import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

function Navigation() {
  return (
    <div className="flex h-16 items-center px-4">
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <div>
          <Link to="/examples/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </Link>
          <Link
            to="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            How it works
          </Link>
          <Link
            to="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Testimonials
          </Link>
          <Link
            to="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Settings
          </Link>
        </div>

        <div>
          <Link to="/auth" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Login
          </Link>
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
