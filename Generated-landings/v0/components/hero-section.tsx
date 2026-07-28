import Image from "next/image"
import { Heart, PawPrint } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "12k+", label: "Pets adopted" },
  { value: "500+", label: "Partner shelters" },
  { value: "98%", label: "Happy homes" },
]

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
            <PawPrint className="size-4 text-primary" aria-hidden="true" />
            Meet your new best friend
          </span>
          <h1 className="text-balance font-serif text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Every paw deserves a loving home
          </h1>
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            FindAPaw connects families with dogs, cats, and cuddly companions
            waiting for a second chance. Start your adoption journey in minutes.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full font-bold">
              <a href="#apply">
                <Heart className="size-5" aria-hidden="true" />
                Start your application
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full font-bold"
            >
              <a href="#featured">Browse pets</a>
            </Button>
          </div>

          <dl className="mt-4 grid w-full max-w-md grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-2xl font-extrabold text-foreground sm:text-3xl">
                  {stat.value}
                </dd>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 hidden size-24 rounded-full bg-accent/40 blur-2xl lg:block" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl">
            <Image
              src="/hero-pets.png"
              alt="A happy golden retriever and orange tabby cat sitting together"
              width={720}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
