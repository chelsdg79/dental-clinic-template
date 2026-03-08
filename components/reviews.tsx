"use client"

import { useRef } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const reviews = [
  {
    name: "[Client Name]",
    text: "[Client Review]",
  },
  {
    name: "[Client Name]",
    text: "[Client Review]",
  },
  {
    name: "[Client Name]",
    text: "[Client Review]",
  },
  {
    name: "[Client Name]",
    text: "[Client Review]",
  },
  {
    name: "[Client Name]",
    text: "[Client Review]",
  },
  {
    name: "[Client Name]",
    text: "[Client Review]",
  },
]

export function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const cardWidth = scrollRef.current.offsetWidth / 3
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    })
  }

  return (
    <section id="reviews" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Reviews
            </p>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl text-balance">
              What our patients say
            </h2>
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-[calc(33.333%-14px)] snap-start rounded-xl border border-border bg-card px-6 py-5 shadow-sm transition-shadow hover:shadow-md flex-shrink-0"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {review.text}
              </p>
              <div className="flex items-center gap-2.5 border-t border-border pt-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-semibold text-primary">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <span className="font-medium text-foreground text-sm">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
