import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Reviews } from "@/components/reviews"
import { OfferBanner } from "@/components/offer-banner"
// import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <OfferBanner />
      {/* <BookingForm /> */}
      <Footer />
    </main>
  )
}
