import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              {"Aesthetic \u2022 Clear Aligners \u2022 TMJ-Orthodontics"}
            </div>

            <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              {"Discover your smile\u2019s potential"}
            </h1>

            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              {"[Your Clinic Address]"}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" asChild>
                <a href="#booking">{"[Your CTA Button Text]"}</a>
              </Button>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/hero-smile.jpg"
              alt="Welcoming modern dental clinic with a patient smiling"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
