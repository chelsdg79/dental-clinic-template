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
            {"We care about more than just your teeth."}
            <span className="relative inline-block">
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
                {"We started with one belief:"}
              </p>
              <p className="font-serif text-2xl lg:text-3xl text-primary italic leading-snug">
                {"Every patient deserves to feel heard, not rushed."}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {"Most people avoid the dentist — not because they don't care,"} <br />
                {"but because no one ever took the time to explain things clearly."}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {"We do things differently."}
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                {"We listen first. We explain everything."} <br />
                {"We move at your pace — not ours."} 
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {"Because a healthy smile starts with a clinic you actually trust."}
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
            <em>{"[Your Clinic Tagline]"}</em>
          </p>

          <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {"That's why every visit starts with listening. "} <br />
            {" We take time to understand your goals, explain "} <br />
            {" your options, and create a plan that fits your "} <br />
            {" life — not just your teeth."}
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
