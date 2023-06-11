import { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: "savetgt",
  description: "Save together description (temp)"
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const RootLayout = ( {children}: {children: React.ReactNode}) => {
  return (
    <html lang="en"  className={`${inter.variable} ${roboto_mono.variable}`}>
      <body>
        <main className='app'>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout;