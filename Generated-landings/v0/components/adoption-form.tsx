"use client"

import type React from "react"
import { useState } from "react"
import { PawPrint, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function AdoptionForm() {
  const [submitted, setSubmitted] = useState(false)
  const [homeType, setHomeType] = useState("house")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // In a real app this would send the data to a server.
    setSubmitted(true)
  }

  return (
    <section id="apply" className="scroll-mt-20 py-12 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <PawPrint className="size-6" aria-hidden="true" />
          </span>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Adoption application
          </h2>
          <p className="mt-3 max-w-lg text-pretty text-muted-foreground">
            Tell us a little about yourself and why you&apos;d love to adopt.
            We&apos;ll be in touch within 48 hours.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <CheckCircle2 className="size-14 text-accent" aria-hidden="true" />
              <h3 className="font-serif text-2xl font-extrabold text-foreground">
                Application received!
              </h3>
              <p className="max-w-sm text-pretty text-muted-foreground">
                Thank you for opening your home to a pet in need. Our adoption
                team will reach out to you very soon.
              </p>
              <Button
                type="button"
                variant="outline"
                className="rounded-full font-bold"
                onClick={() => setSubmitted(false)}
              >
                Submit another application
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="fullName">Full name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@example.com"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
              </div>

              <fieldset className="flex flex-col gap-3">
                <legend className="mb-1 text-sm font-medium text-foreground">
                  Home type
                </legend>
                <RadioGroup
                  name="homeType"
                  value={homeType}
                  onValueChange={setHomeType}
                  className="grid gap-3 sm:grid-cols-2"
                >
                  <Label
                    htmlFor="home-house"
                    className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border p-4 font-normal transition-colors hover:bg-secondary/60 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5"
                  >
                    <RadioGroupItem value="house" id="home-house" />
                    <span className="font-semibold text-foreground">House</span>
                  </Label>
                  <Label
                    htmlFor="home-apartment"
                    className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border p-4 font-normal transition-colors hover:bg-secondary/60 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5"
                  >
                    <RadioGroupItem value="apartment" id="home-apartment" />
                    <span className="font-semibold text-foreground">
                      Apartment
                    </span>
                  </Label>
                </RadioGroup>
              </fieldset>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Why do you want to adopt?</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your home, lifestyle, and why you'd love to welcome a pet into your family."
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full font-bold"
              >
                Submit application
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
