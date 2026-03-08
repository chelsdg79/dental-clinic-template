"use client"

import { useRef, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const reviews = [
  { name: "[Client Name]", text: "[Client Review]" },
  { name: "[Client Name]", text: "[Client Review]" },
  { name: "[Client Name]", text: "[Client Review]" },
  { name: "[Client Name]", text: "[Client Review]" },
  { name: "[Client Name]", text: "[Client Review]" },
  { name: "[Client Name]", text: "[Client Review]" },
]

// Triple for infinite loop
const infiniteReviews = [...reviews, ...reviews, ...reviews]

export function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isScrolling = useRef(false)

  // Start in the middle set
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    // Each card = 1/3 of container, gap = 20px
    // Middle set starts at index 6 (reviews.length)
    const cardWidth = (el.offsetWidth - 40) / 3 // 40 = 2 gaps of 20px
    el.scrollLeft = (cardWidth + 20) * reviews.length
  }, [])

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el || isScrolling.current) return
    isScrolling.current = true

    const cardWidth = (el.offsetWidth - 40) / 3
    const scrollAmount = cardWidth + 20

    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })

    // After animation, silently reset to middle set if at edges
    setTimeout(() => {
      const totalOneSet = (cardWidth + 20) * reviews.length
      if (el.scrollLeft < totalOneSet * 0.5) {
        el.scrollLeft += totalOneSet
      } else if (el.scrollLeft > totalOneSet * 2.2) {
        el.scrollLeft -= totalOneSet
      }
      isScrolling.current = false
    }, 350)
  }

  return (
    <section id="reviews" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Centered Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Reviews
          </p>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            What our patients say
          </h2>
        </div>

        {/* Carousel row: arrow | cards | arrow */}
        <div className="flex items-center gap-4">

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="flex-none h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Card container — overflow hidden, flex-1 fills remaining space */}
          <div className="flex-1 overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-hidden"
              style={{ scrollbarWidth: "none" }}
            >
              {infiniteReviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-none w-[calc((100%-40px)/3)] rounded-xl border border-border bg-card px-6 py-5 shadow-sm hover:shadow-md transition-shadow"
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
                    <span className="font-medium text-foreground text-sm">
                      {review.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="flex-none h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

        </div>
      </div>
    </section>
  )
}
