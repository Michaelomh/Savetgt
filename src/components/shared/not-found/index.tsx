import { Link } from 'react-router-dom'
import { HeartCrack } from 'lucide-react'
import Navigation from '../../../pages/home/navigation'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <>
      <Navigation isErrorPage />
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-green-900 space-y-8 pb-16">
        <HeartCrack size="300px" className="text-emerald-700 dark:text-emerald-200" />
        <div className="text-center space-y-4">
          <h1 className="text-4xl tracking-wide font-montserrat font-bold text-emerald-700 dark:text-emerald-200">
            Oops!
          </h1>
          <p className="text-lg font-inter text-gray-600 dark:text-gray-400">{`We can't seem to find the page you're looking for.`}</p>
        </div>
        <Button
          className="px-4 py-2 bg-emerald-700 dark:bg-emerald-200 border-emerald-700 dark:border-emerald-200"
          variant="default"
          asChild
        >
          <Link to="/">Back to Home</Link>
        </Button>
      </section>
    </>
  )
}
