"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2, Info } from "lucide-react"

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <section id="booking" className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-xl px-6 text-center">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-12">
            <CheckCircle2 className="h-16 w-16 text-primary" />
            <h3 className="font-serif text-2xl text-foreground">Thank you!</h3>
            <p className="text-muted-foreground leading-relaxed">
              {"We\u2019ve received your booking request. Our team will be in touch shortly to confirm your appointment."}
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <div className="flex flex-col justify-center gap-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Schedule a Visit
            </p>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl text-balance">
              {"Book your visit and get 15% OFF"}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-lg">
              {"Give your smile the attention it truly deserves. Let us help you achieve a healthier & brighter smile with ease."}
            </p>

            <div className="mt-4 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-foreground">Hours</span>
                <span className="text-muted-foreground">
                  {"Tues-Sat 10 AM-6 PM | Sun 11 AM-7 PM"}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-foreground">Address</span>
                <span className="text-muted-foreground">
                  {"8871 Sampaloc St. Corner Santol St. Brgy. San Antonio, Makati City"}
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="flex flex-col gap-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" placeholder="Dela Cruz" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" placeholder="Juan" required />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="birthdate">Birthdate</Label>
                  <Input id="birthdate" type="date" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="sex">Sex</Label>
                  <Select>
                    <SelectTrigger id="sex">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Mobile number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+63 912 345 6789"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  placeholder="Street, City, Province"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="service">Service</Label>
                <Select>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Dentistry</SelectItem>
                    <SelectItem value="cosmetic">Cosmetic Dentistry</SelectItem>
                    <SelectItem value="orthodontics">Orthodontics</SelectItem>
                    <SelectItem value="tmj">TMJ Pain Management</SelectItem>
                    <SelectItem value="restorative">Restorative Dentistry</SelectItem>
                    <SelectItem value="oral-surgery">Oral Surgery</SelectItem>
                    <SelectItem value="endodontics">Endodontics</SelectItem>
                    <SelectItem value="prosthodontics">Prosthodontics</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-muted px-4 py-3 text-sm text-muted-foreground">
                <Info className="h-4 w-4 shrink-0 text-primary" />
                <span>No HMO</span>
              </div>

              <Button type="submit" size="lg" className="mt-2 w-full">
                Book My Visit
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                {"We\u2019ll get back to you within 24 hours to confirm."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
