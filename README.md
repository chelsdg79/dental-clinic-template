## Dental Landing Page Template

A clean, conversion-focused landing page template designed for **dental clinics and health professionals**. This guide will walk you through what’s included, what you need, how to deploy in minutes, and exactly where to customize the template for your clinic.

---

## 1. What's Included

- **Landing page template for dental clinics and health professionals**  
  Modern, trust-building layout with hero section, services, about, social proof (reviews), offers, and a booking section.

- **Built with Next.js and Tailwind CSS**  
  Fast, SEO-friendly, and easy to deploy on Vercel with zero backend setup.

- **Mobile responsive**  
  Looks great on phones, tablets, and desktops out of the box.

- **Easy to customize**  
  Clinic name, address, services, colors, logo, and booking form are all editable in a few clearly labeled files.

---

## 2. What You Need

To use this template, you’ll need a few free accounts:

- **A free GitHub account**  
  To host the code and connect it to Vercel.

- **A free Vercel account**  
  To deploy the site live with one click.

- **A free Tally.so or Calendly account for the booking form**  
  To collect appointment requests with a hosted form or booking calendar.

---

## 3. How to Deploy in 5 Steps

You can have your site live in just a few minutes:

1. **Fork this repository**  
   - Open this repo on GitHub.  
   - Click **“Fork”** (top-right) to copy it into your own GitHub account.

2. **Go to `vercel.com` and log in**  
   - Sign up with GitHub so Vercel can see your forked repo.

3. **Click “Add New Project”**  
   - In your Vercel dashboard, click **“Add New…” → “Project”**.

4. **Import your forked repo**  
   - Choose the forked repository for this template.  
   - Accept the default settings (no special config needed for a basic deploy).

5. **Click Deploy — your site is live**  
   - Vercel will build and deploy your site.  
   - When it finishes, you’ll get a live URL you can share with patients immediately.

---

## 4. How to Customize

Below are the key places to update your clinic details. You can edit these files directly in your code editor or via GitHub’s web editor.

### 4.1 Where to Change Clinic Name

Update the placeholder `[Your Clinic Name]` in these files:

- `components/navbar.tsx`  
  - Used in the logo image `alt` text at the top navigation.

- `components/footer.tsx`  
  - Shown in the footer brand text.  
  - Also used in the copyright line.

- `components/about.tsx`  
  - Used in the closing statement: “At [Your Clinic Name], clarity replaces fear.”

You can find these by searching for `[Your Clinic Name]` in the project.

### 4.2 Where to Change Address

Update the placeholder `[Your Clinic Address]` in:

- `components/navbar.tsx`  
  - The small address text in the top info bar.

- `components/footer.tsx`  
  - The “Visit Us” section showing your clinic address.

- `components/booking-form.tsx`  
  - The address text shown beside the booking form.

Search for `[Your Clinic Address]` and replace it with your real clinic address.

### 4.3 Where to Change Services

All services and bullet points live in:

- `components/services.tsx`

Inside this file you’ll see a `services` array, where each service has:

- `title` — the service category (e.g. “General Dentistry”)  
- `items` — the individual treatments listed under that category

You can:

- Rename existing services to match your offerings.  
- Add or remove items in the `items` arrays.  
- Add or remove entire service objects if you offer more or fewer categories.

### 4.4 Where to Change Colors

The main color palette (background, primary, accent, etc.) is defined using CSS variables here:

- `app/globals.css`

Look for the `:root` section and its `--primary`, `--background`, `--accent`, etc. values. Adjust these HSL values to match your brand colors. The Tailwind theme in:

- `tailwind.config.ts`

maps these CSS variables to Tailwind’s `bg-background`, `text-foreground`, `text-primary`, etc., so your color changes will apply across the entire site.

### 4.5 How to Add Your Logo

The logo in the navbar is controlled here:

- `components/navbar.tsx`

Look for the `Image` component:

- `src="/images/arco-logo.png"` → replace this with your own logo path (for example, `/images/your-logo.png`).  
- Make sure your logo file is saved in the `public/images` folder.

You can also adjust the `width` and `height` values to fit your logo’s proportions.

### 4.6 How to Connect Your Booking Form

The booking section lives in:

- `components/booking-form.tsx`

You have two main options:

1. **Use the built-in form (simple mode)**  
   - Update the text copy, labels, and placeholders to match your clinic.  
   - Change any wording you like within this file.  
   - For a basic marketing/demo site, you can keep it as-is.

2. **Connect to Tally.so or Calendly (recommended for real bookings)**  
   - Create a free form or booking link in **Tally.so** or **Calendly**.  
   - Copy your form or booking URL.
   - In `components/booking-form.tsx`, you can:
     - Turn the **“Book My Visit”** button into a link to your Tally/Calendly URL, or  
     - Replace the JSX form with the embed code that Tally/Calendly provides.

This lets you collect real booking requests without building your own backend.

---

## 5. Need Help?

If you get stuck or want help customizing the template:

> **Reply to your Gumroad receipt and I'll help you get set up.**

I’m happy to assist with deployment, basic customizations, or pointing you to the right files. 

