import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

import { NavItemTypes } from "./Topbar.types"

interface MainNavProps {
  navItems?: NavItemTypes[]
}

export function HomeNavigation({ navItems }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      {navItems?.length ? (
        <nav className="flex gap-6">
          {navItems?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "navItems-center flex text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
