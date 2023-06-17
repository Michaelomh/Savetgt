import Link from "next/link"

import { HomeNavigation } from "./HomeNavigation"
import { ThemeToggle } from "./ThemeToggle"
import { navItems } from "./Topbar.constants"

const NavbarHome = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <HomeNavigation navItems={navItems} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default NavbarHome
