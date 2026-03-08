import { Star } from "lucide-react"

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
]

export function Reviews() {
  return (
    <section id="reviews" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Reviews
          </p>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl text-balance">
            What our patients say
          </h2>
        </div>

        <div className="columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="break-inside-avoid rounded-xl border border-border bg-card px-6 py-5 shadow-sm transition-shadow hover:shadow-md"
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
