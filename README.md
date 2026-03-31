## Dental Clinic Landing Page Template

A clean, conversion-focused landing page template designed for **dental clinics and health professionals**. This guide will walk you through what's included, what you need, how to deploy in minutes, and exactly where to customize the template for your clinic.

---
⭐ NOT TECHNICAL? NO PROBLEM.

If any of this feels overwhelming, 
just reply to your receipt and I'll 
set it up for you — for free.

Most people are live in 10 minutes. 
If you get stuck, I've got you. 😊

## 1. What's Included

- **Landing page template for dental clinics and health professionals**  
  Modern, trust-building layout with hero section, services, about, social proof (reviews), offers, and a booking section.

- **Built with Next.js and Tailwind CSS**  
  Fast, SEO-friendly, and easy to deploy on Vercel with zero backend setup.

- **Fully responsive**  
  Looks great on mobile, tablet, and desktop out of the box.

- **Easy to customize**  
  Clinic name, address, services, colors, logo, and booking form are all editable in a few clearly labeled files.

---

## 2. What You Need

To use this template, you'll need a few free accounts:

- **A free GitHub account**  
  To host the code and connect it to Vercel.

- **A free Vercel account**  
  To deploy the site live with one click.

- **A free Tally.so or Calendly account**  
  To collect real appointment requests via a hosted form or booking calendar.

---

## 3. How to Deploy in 5 Steps

You can have your site live in under 10 minutes:

1. **Fork this repository**  
   - Open this repo on GitHub.  
   - Click **"Fork"** (top-right) to copy it into your own GitHub account.

2. **Go to `vercel.com` and log in**  
   - Sign up with GitHub so Vercel can access your forked repo.

3. **Click "Add New Project"**  
   - In your Vercel dashboard, click **"Add New…" → "Project"**.

4. **Import your forked repo**  
   - Select the forked repository.  
   - Accept the default settings — no special config needed.

5. **Click Deploy — your site is live**  
   - Vercel builds and deploys automatically.  
   - You'll get a live URL instantly. Connect your own domain anytime.

---

## 4. How to Customize

Edit files directly in your code editor or via GitHub's web editor (click any file → pencil icon).

### 4.1 Where to Change Clinic Name

Search for `[Your Clinic Name]` across the project and replace with your clinic name. It appears in:

- `components/navbar.tsx` — logo text in the top navigation
- `components/footer.tsx` — footer brand name and copyright line
- `components/about.tsx` — closing statement: "At [Your Clinic Name], [Your Clinic Tagline]"
- `app/layout.tsx` — page `<title>` tag for SEO

### 4.2 Where to Change Clinic Specialty

Search for `[Your Clinic Specialty]` and replace with your specialty (e.g. "General & Cosmetic Dentistry"):

- `app/layout.tsx` — used in the page title: `[Your Clinic Name] | [Your Clinic Specialty]`
- `components/hero.tsx` — specialty tags shown above the headline

### 4.3 Where to Change Address & Hours

Search for `[Your Clinic Address]` and `[Your Operating Hours]` and replace across:

- `components/navbar.tsx` — top info bar
- `components/footer.tsx` — "Visit Us" section
- `components/booking-form.tsx` — beside the booking form

### 4.4 Where to Change CTA Button Text

- `components/hero.tsx` — find `[Your CTA Button Text]` and replace with your offer  
  (e.g. "Book your visit and get 15% OFF" or "Book a Free Consultation")

### 4.5 Where to Change Services

All services live in `components/services.tsx` inside a `services` array. Each item has:

- `title` — the service category (e.g. "General Dentistry")
- `items` — the list of treatments under that category

You can rename, add, or remove services to match your clinic.

### 4.6 Where to Change Colors

Colors are defined as CSS variables in `app/globals.css` under `:root`:

- `--primary` — main brand color (navy by default)
- `--background` — page background
- `--accent` — accent highlights

Adjust the HSL values to match your brand. Changes apply site-wide automatically via Tailwind.

### 4.7 How to Add Your Logo

> Not comfortable editing code? Reply to your 
> Etsy/Payhip receipt and I'll add your logo for you.

In `components/navbar.tsx`, find the logo section and replace the text placeholder with an `Image` component:

```tsx
<Image
  src="/images/your-logo.png"
  alt="[Your Clinic Name]"
  width={120}
  height={40}
/>
```

Save your logo file in the `public/images/` folder first.

### 4.8 How to Add Your Clinic Photo

In `components/about.tsx`, find the `<Image>` component and replace:

```tsx
src="/images/about-image.jpg"
alt="[Your clinic photo description]"
```

Save your photo in `public/images/` and update the filename to match.

### 4.9 How to Connect Your Booking Form

The booking section lives in `components/booking-form.tsx`. Two options:

1. **Keep the built-in form**  
   Update the copy and labels. Good for a basic demo or marketing site.

2. **Connect Tally.so or Calendly (recommended)**  
   - Create a free form at [tally.so](https://tally.so) or booking page at [calendly.com](https://calendly.com)  
   - Copy your form URL or embed code  
   - Replace the form JSX with the embed, or change the button to link to your booking URL

---

## 5. Customization Checklist

Before going live, make sure you've updated:

- [ ] `[Your Clinic Name]` — all instances
- [ ] `[Your Clinic Specialty]` — hero tags + page title
- [ ] `[Your Clinic Address]` — navbar, footer, booking form
- [ ] `[Your Operating Hours]` — navbar, footer
- [ ] `[Your CTA Button Text]` — hero section
- [ ] `[Your Clinic Tagline]` — about section
- [ ] `[Your Offer Headline]` / `[Your Offer Subtext]` — offers section
- [ ] `[Client Name]` / `[Client Review]` — reviews section
- [ ] Logo image — `public/images/your-logo.png`
- [ ] Clinic photo — `public/images/about-image.jpg`
- [ ] Booking form — connected to Tally or Calendly

---

## 6. Need Help?

If you get stuck or want help customizing the template:

> **Reply to your Etsy/Payhip receipt and I'll help you get set up.**

I'm happy to help with deployment, customizations, or pointing you to the right files.
