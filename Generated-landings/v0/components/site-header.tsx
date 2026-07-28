"use client"

import { PawPrint } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Adopt", href: "#featured" },
  { label: "How it works", href: "#how-it-works" },
  { label: "About", href: "#about" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <PawPrint className="size-5" aria-hidden="true" />
          </span>
          <span className="font-serif text-xl font-extrabold tracking-tight text-foreground">
            FindAPaw
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button asChild className="rounded-full font-bold">
          <a href="#apply">Adopt now</a>
        </Button>
      </div>
    </header>
  )
}
