"use client"

import { useRef, useEffect, useCallback } from "react"
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

const GAP = 20

function getVisibleCount() {
  if (typeof window === "undefined") return 3
  if (window.innerWidth < 640) return 1
  if (window.innerWidth < 1024) return 2
  return 3
}

export function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const isScrolling = useRef(false)

  // Set card widths and initial scroll position
  const setup = useCallback(() => {
    const el = scrollRef.current
    if (!el) return

    const count = getVisibleCount()
    const containerWidth = el.offsetWidth
    const cardWidth = (containerWidth - GAP * (count - 1)) / count

    // Set each card's width directly via CSS variable
    el.style.setProperty("--card-width", `${cardWidth}px`)

    // Jump to middle set (index 6 = reviews.length)
    el.scrollLeft = (cardWidth + GAP) * reviews.length
  }, [])

  useEffect(() => {
    setup()
    window.addEventListener("resize", setup)
    return () => window.removeEventListener("resize", setup)
  }, [setup])

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el || isScrolling.current) return
    isScrolling.current = true

    const count = getVisibleCount()
    const cardWidth = (el.offsetWidth - GAP * (count - 1)) / count
    const scrollAmount = cardWidth + GAP

    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })

    setTimeout(() => {
      const totalOneSet = scrollAmount * reviews.length
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
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground">
            What our patients say
          </h2>
        </div>

        {/* Carousel: arrow | cards | arrow */}
        <div className="flex items-center gap-3 sm:gap-4">

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="flex-none h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-border bg-card flex items-center justify-center shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Cards container */}
          <div className="flex-1 overflow-hidden">
            <div
              ref={scrollRef}
              className="flex overflow-x-hidden"
              style={{ gap: `${GAP}px`, scrollbarWidth: "none" }}
            >
              {infiniteReviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-none rounded-xl border border-border bg-card px-5 py-5 shadow-sm hover:shadow-md transition-shadow"
                  style={{ width: "var(--card-width, calc((100% - 40px) / 3))" }}
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
            className="flex-none h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-border bg-card flex items-center justify-center shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

        </div>
      </div>
    </section>
  )
}
