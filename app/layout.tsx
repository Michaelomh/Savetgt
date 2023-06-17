import { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"

import "./globals.css"
import { NavbarHome, ThemeProvider } from "@components"

import { cn } from "@lib/utils"

export const metadata: Metadata = {
  title: "savetgt",
  description: "Save together description (temp)",
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          roboto_mono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavbarHome />
          <main className="app">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
