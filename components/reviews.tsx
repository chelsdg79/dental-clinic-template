"use client"

import { useRef } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const reviews = [
  { name: "[Client Name]", text: "[Client Review]" },
  { name: "[Client Name]", text: "[Client Review]" },
  { name: "[Client Name]", text: "[Client Review]" },
  { name: "[Client Name]", text: "[Client Review]" },
  { name: "[Client Name]", text: "[Client Review]" },
  { name: "[Client Name]", text: "[Client Review]" },
]

const infiniteReviews = [...reviews, ...reviews, ...reviews]

export function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const getCardWidth = () => {
    if (!scrollRef.current) return 0
    return scrollRef.current.offsetWidth / 3 + 20
  }

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = getCardWidth()
    el.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" })
    setTimeout(() => {
      const totalWidth = el.scrollWidth / 3
      if (el.scrollLeft < totalWidth * 0.2) {
        el.scrollLeft += totalWidth
      } else if (el.scrollLeft > totalWidth * 1.8) {
        el.scrollLeft -= totalWidth
      }
    }, 400)
  }

  const initScroll = (el: HTMLDivElement | null) => {
    if (!el) return
    ;(scrollRef as React.MutableRefObject<HTMLDivElement>).current = el
    el.scrollLeft = el.scrollWidth / 3
  }

  return (
    <section id="reviews" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Centered Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Reviews
          </p>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl text-balance">
            What our patients say
          </h2>
        </div>

        {/* Carousel with side arrows */}
        <div className="relative flex items-center gap-3">

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="flex-shrink-0 h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Cards */}
          <div
            ref={initScroll}
            className="flex gap-5 overflow-x-hidden flex-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {infiniteReviews.map((review, index) => (
              <div
                key={index}
                className="min-w-[calc(33.333%-14px)] rounded-xl border border-border bg-card px-6 py-5 shadow-sm transition-shadow hover:shadow-md flex-shrink-0"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {review.text}
                </p>
                <div className="flex items-center gap-2.5 border-t border-border pt-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-xs font-semibold text-primary">
                      {review.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <span className="font-medium text-foreground text-sm">{review.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="flex-shrink-0 h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all z-10"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

        </div>
      </div>
    </section>
  )
}
