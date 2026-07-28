import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedPets } from "@/components/featured-pets"
import { HowItWorks } from "@/components/how-it-works"
import { AdoptionForm } from "@/components/adoption-form"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturedPets />
        <HowItWorks />
        <AdoptionForm />
      </main>
      <SiteFooter />
    </div>
  )
}
