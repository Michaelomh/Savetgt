import { Link } from 'react-router-dom'
import { HardHat } from 'lucide-react'
import Navigation from '../../../pages/home/navigation'
import { Button } from '@/components/ui/button'

export default function WorkInProgressPage() {
  return (
    <>
      <Navigation isErrorPage />
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-green-900 space-y-8 pb-16">
        <HardHat size="300px" className="text-emerald-700 dark:text-emerald-200" />
        <div className="text-center space-y-4">
          <h1 className="text-4xl tracking-wide font-bold font-montserrat uppercase text-emerald-700 dark:text-emerald-200">
            Work in progress!
          </h1>
          <p className="text-lg font-inter text-gray-600 dark:text-gray-400">
            This page is still being worked on, please stay tune!
          </p>
        </div>
        <Button
          className="px-4 py-2 bg-emerald-700 dark:bg-emerald-200 border-emerald-700 dark:border-emerald-200"
          variant="default"
          size="lg"
          asChild
        >
          <Link to="/">Back to Home</Link>
        </Button>
      </section>
    </>
  )
}
