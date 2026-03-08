import { Star } from "lucide-react"

const reviews = [
  {
    name: "Angelo M.",
    text: "Skilled, welcoming doctors and a clinic with great ambiance. Your comfort truly comes first!",
  },
  {
    name: "Liana F.",
    text: "The dentists really took time to assess my case and I did not feel rushed with my procedures. I am excited for my future visits as they help treat my case!",
  },
  {
    name: "Lester Umali",
    text: "Tried a new clinic for my oral prophylaxis this year, and I'm glad I did! From the get-go, booking an appointment was easy, with little to no waiting time. During the procedure, Doc Ira was very careful and thorough\u2014light-handed and always checking in for any discomfort. He even took extra steps to ensure the cleaning was done thoroughly, which I haven't experienced with other clinics. A free professional consultation was also provided after the cleaning, so I'm now aware of the current gaps in my dental health and can take action moving forward. I'll definitely be coming back for my next oral prophylaxis and other procedures!",
  },
  {
    name: "Hanling You",
    text: "The staff were very patient and attentive, and the clinic environment was fantastic. The atmosphere was great, and most importantly, the staff were very professional. Thank you so much!",
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
