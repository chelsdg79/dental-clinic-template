"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from "lucide-react"

export function Waitlist() {
  const [joined, setJoined] = useState(false)

  return (
    <section id="waitlist" className="bg-secondary py-20 lg:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          Grand Opening
        </p>
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl text-balance">
          {"Join our waitlist and GET 15% OFF!"}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
          {"Opening in December 9! \u2728 Be the first to know and receive an exclusive 15% discount on your first visit."}
        </p>

        {joined ? (
          <div className="mx-auto mt-8 flex max-w-md items-center gap-3 rounded-xl bg-accent p-5">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
            <p className="text-foreground text-sm">
              {"You\u2019re on the list! We\u2019ll notify you when we open."}
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setJoined(true)
            }}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 bg-card"
            />
            <Button type="submit" size="lg">
              Join Waitlist
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
