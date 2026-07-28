import { PawPrint } from "lucide-react"

export function SiteFooter() {
  return (
    <footer id="about" className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <PawPrint className="size-4" aria-hidden="true" />
          </span>
          <span className="font-serif text-lg font-extrabold text-foreground">
            FindAPaw
          </span>
        </div>
        <p className="max-w-sm text-pretty text-sm text-muted-foreground">
          Helping loving families and pets find each other, one paw at a time.
        </p>
        <p className="text-xs text-muted-foreground">
          {"\u00A9"} {new Date().getFullYear()} FindAPaw. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
