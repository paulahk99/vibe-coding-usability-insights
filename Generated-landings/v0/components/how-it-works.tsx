import { Search, FileHeart, Home } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Browse pets",
    description:
      "Explore adoptable dogs, cats, and small companions from trusted shelters near you.",
  },
  {
    icon: FileHeart,
    title: "Apply to adopt",
    description:
      "Fill out a quick application so we can match you with the perfect furry family member.",
  },
  {
    icon: Home,
    title: "Welcome them home",
    description:
      "Meet your match, finalize the adoption, and start making memories together.",
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 bg-secondary/50 py-12 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            How adoption works
          </h2>
          <p className="mt-3 max-w-lg text-pretty text-muted-foreground">
            Three simple steps between you and your new best friend.
          </p>
        </div>

        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative flex flex-col items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <step.icon className="size-6" aria-hidden="true" />
              </span>
              <span className="absolute right-6 top-6 font-serif text-4xl font-extrabold text-border">
                {index + 1}
              </span>
              <h3 className="font-serif text-xl font-extrabold text-foreground">
                {step.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
