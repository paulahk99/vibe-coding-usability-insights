import Image from "next/image"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const pets = [
  {
    name: "Biscuit",
    type: "Beagle · 1 yr",
    location: "Portland, OR",
    image: "/pet-dog.png",
    tag: "Playful",
  },
  {
    name: "Luna",
    type: "Domestic Shorthair · 8 mo",
    location: "Austin, TX",
    image: "/pet-cat.png",
    tag: "Cuddly",
  },
  {
    name: "Clover",
    type: "Lop Rabbit · 2 yr",
    location: "Denver, CO",
    image: "/pet-rabbit.png",
    tag: "Gentle",
  },
]

export function FeaturedPets() {
  return (
    <section id="featured" className="scroll-mt-20 py-12 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Pets looking for a home
          </h2>
          <p className="mt-3 max-w-lg text-pretty text-muted-foreground">
            These sweet friends are ready to meet you. Fall in love, then send
            in your application below.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pets.map((pet) => (
            <li
              key={pet.name}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={pet.image || "/placeholder.svg"}
                  alt={`${pet.name}, a ${pet.type}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  {pet.tag}
                </span>
              </div>
              <div className="flex flex-col gap-2 p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-xl font-extrabold text-foreground">
                    {pet.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">{pet.type}</p>
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-primary" aria-hidden="true" />
                  {pet.location}
                </p>
                <Button
                  asChild
                  variant="secondary"
                  className="mt-3 rounded-full font-bold"
                >
                  <a href="#apply">Meet {pet.name}</a>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
