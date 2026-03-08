"use client"

import { useState } from "react"
import { Menu, X, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      {/* Top info bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between px-6 py-2 text-sm gap-1 sm:gap-0">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {"[Your Operating Hours]"}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {"[Your Clinic Address]"}
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center">
         [Your Clinic Name]
          
        </a>
        {/* <img></img> */ }

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a href="#reviews" className="hover:text-foreground transition-colors">
            Reviews
          </a>
          <a href="#offers" className="hover:text-foreground transition-colors">
            Offers
          </a>
        </div>

        <div className="hidden md:block">
          <Button asChild>
            <a href="#booking">Book Now</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-6 pb-6 pt-4 flex flex-col gap-4">
          <a
            href="#services"
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </a>
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            About
          </a>
          <a
            href="#reviews"
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Reviews
          </a>
          <a
            href="#offers"
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Offers
          </a>
          <Button asChild className="w-full">
            <a href="#booking" onClick={() => setMobileOpen(false)}>
              Book Now
            </a>
          </Button>
        </div>
      )}
    </header>
  )
}
