import { Button } from "@/components/ui/button"

export function OfferBanner() {
  return (
    <section id="offers" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
          Limited Time Offer
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-balance">
          {"[Your Offer Headline]"}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90 text-lg leading-relaxed">
          {"[Your Offer Subtext] \uD83E\uDDB7"}
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            variant="secondary"
            asChild
          >
            <a href="#booking">Book Your Visit</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
