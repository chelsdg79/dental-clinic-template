import {
  Stethoscope,
  Sparkles,
  SmilePlus,
  BrainCircuit,
  Wrench,
  Scissors,
  ShieldCheck,
  Component,
} from "lucide-react"
// Replace services with your own
const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    items: [
      "Comprehensive Dental Check-Up",
      "Oral Prophylaxis for Kids & Adults",
      "Deep Cleaning / Periodontal Therapy",
      "Dental Fillings (Tooth-Colored)",
      "X-rays & Digital Diagnostics",
      "Fluoride Treatment",
    ],
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    items: [
      "Teeth Whitening",
      "Veneers (Composite / Porcelain)",
      "Smile Makeovers",
    ],
  },
  {
    icon: SmilePlus,
    title: "Orthodontics",
    items: [
      "Early Orthodontics for Kids",
      "Metal Braces",
      "Ceramic / Sapphire Braces",
      "Self-Ligating Braces",
      "Clear Aligners",
    ],
  },
  {
    icon: BrainCircuit,
    title: "TMJ Pain Management",
    items: [
      "TMJ & Airway Assessment",
      "Orthotic Splint",
      "Orthopedic Appliances",
      "Sleep Appliances",
    ],
  },
  {
    icon: Wrench,
    title: "Restorative Dentistry",
    items: [
      "Dental Crowns (Porcelain, Emax, Zirconia)",
      "Bridges",
      "Inlays & Onlays",
      "Tooth Bonding",
    ],
  },
  {
    icon: Scissors,
    title: "Oral Surgery",
    items: [
      "Tooth Extraction",
      "Wisdom Tooth Removal (Odontectomy)",
      "Minor Oral Surgery",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Endodontics",
    items: [
      "Root Canal Treatment",
      "Retreatment & Post Placement",
    ],
  },
  {
    icon: Component,
    title: "Prosthodontics",
    items: [
      "Complete & Partial Dentures",
      "Flexible Dentures",
      "Fixed Bridge",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Our Services
          </p>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl text-balance">
            {"Comprehensive dental care for the whole family"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            {"From routine check-ups to advanced treatments, we offer a full range of dental services to keep your smile healthy and beautiful."}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all hover:shadow-lg hover:border-primary/30"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <ul className="flex flex-col gap-1.5">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
