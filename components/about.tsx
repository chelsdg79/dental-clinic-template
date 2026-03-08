import Image from "next/image"

export function About() {
  return (
    <section id="about" className="overflow-hidden bg-[#faf8f3]">
      {/* Headline */}
      <div className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/60 mb-6">
            About Us
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight text-balance">
            {"Every smile has a story. Here\u2019s "}
            <span className="relative inline-block">
              ours
              <svg
                className="absolute -inset-x-3 -inset-y-2 w-[calc(100%+1.5rem)] h-[calc(100%+1rem)]"
                viewBox="0 0 120 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <ellipse
                  cx="60"
                  cy="30"
                  rx="55"
                  ry="24"
                  stroke="#21345E"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  className="opacity-50"
                  strokeDasharray="4 3"
                />
              </svg>
            </span>
          </h2>
        </div>
      </div>

      {/* Two-column: image left, text right */}
      <div className="mx-auto max-w-6xl px-6 pb-20 lg:pb-28">
        <div className="grid items-stretch gap-12 lg:gap-20 lg:grid-cols-2">
          {/* Left column - Image */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none flex items-center justify-center h-full">
            <div className="relative w-full h-full min-h-[300px] lg:min-h-0">
              <Image
                src="/images/teeth-nobg.png"
                alt="Vintage anatomical illustration of dental molars in a jawbone"
                fill
                sizes="(max-width: 1024px) 80vw, 45vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right column - Text */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-xl lg:text-2xl leading-relaxed text-foreground">
                {"We started with one simple idea:"}
              </p>
              <p className="font-serif text-2xl lg:text-3xl text-primary italic leading-snug">
                {"Dental visits shouldn\u2019t feel intimidating."}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {"They should feel calm, clear, and personal."}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {"Most patients think everything is fine \u2014 not because they don\u2019t care, but because dental issues often start silently."}
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                {"Tiny cavities, early gum changes, bite shifts. They grow quietly, long before you ever feel them."}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {"That\u2019s why we take time to show you what\u2019s happening: gentle explanations, clear photos, and guidance without judgment."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Closing statement */}
      <div className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-primary leading-snug">
            {"At [Your Clinic Name], "}
            <em>{"clarity replaces fear."}</em>
          </p>

          <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {"That\u2019s why we\u2019re meticulous about planning, detail, and personalized care. So you don\u2019t just get a quick result, you get a smile built to last."}
          </p>

          <svg
            className="mx-auto mt-6 w-40 h-4"
            viewBox="0 0 160 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 8 C30 4, 50 14, 80 8 C110 2, 130 14, 156 8"
              stroke="#21345E"
              strokeWidth="2"
              strokeLinecap="round"
              className="opacity-40"
            />
            <path
              d="M8 11 C35 6, 55 16, 82 10 C108 4, 128 15, 152 10"
              stroke="#21345E"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="opacity-25"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
