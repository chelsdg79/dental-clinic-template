import { MapPin, Clock, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg">Arco Dental Studio</span>
            </div>
            <p className="text-background/70 leading-relaxed text-sm">
              {"Discover your smile\u2019s potential with our expert dental care in the heart of Makati City."}
            </p>
          </div>

          {/* Location & Hours */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">
              Visit Us
            </h4>
            <div className="flex items-start gap-3 text-sm text-background/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-background" />
              <span>
                {"8871 Sampaloc St. Corner Santol St. Brgy. San Antonio, Makati City"}
              </span>
            </div>
            <div className="flex items-start gap-3 text-sm text-background/70">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-background" />
              <span>{"Tues-Sat 10 AM-6 PM | Sun 11 AM-7 PM"}</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2 text-sm text-background/70">
              <a href="#services" className="hover:text-background transition-colors">
                Services
              </a>
              <a href="#about" className="hover:text-background transition-colors">
                About Us
              </a>
              <a href="#reviews" className="hover:text-background transition-colors">
                Reviews
              </a>
              <a href="#offers" className="hover:text-background transition-colors">
                Offers
              </a>
              <a href="#booking" className="hover:text-background transition-colors">
                Book a Visit
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 text-center text-xs text-background/50">
          <p>{"© 2025 Arco Dental Studio. All rights reserved."}</p>
        </div>
      </div>
    </footer>
  )
}
