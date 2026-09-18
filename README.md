# GrandBox — Custom Style. Made for You.

Fullstack tailoring & fashion web app built with **Next.js 15**, TypeScript, and Tailwind CSS.

## Features

- **Landing page** matching the GrandBox brand
- **App home** with categories, featured styles, and CTAs
- **Product details** with custom options (fabric, style, size)
- **Book a Tailor** flow with multi-step form
- **Shop / Explore** product browsing
- **Orders, Cart, Profile** placeholders
- **API routes**: `/api/products`, `/api/tailors`, `/api/bookings`

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Lucide React icons
- Mock data (ready to swap for Prisma / database)

## Getting Started

```bash
cd grandbox-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Marketing landing
│   ├── home/page.tsx     # App home (after Get Started)
│   ├── product/[id]/    # Product details
│   ├── book/             # Book a tailor
│   ├── shop/             # Shop all
│   ├── explore/
│   ├── orders/
│   ├── cart/
│   ├── profile/
│   └── api/              # REST API routes
├── components/           # UI components
└── lib/                  # Data & utils
```

## Brand Colors

- Primary (gold): `#f5a623`
- Dark: `#1a1a1a`

## Next Steps (Fullstack)

1. Add Prisma + SQLite/Postgres for users, products, orders, measurements
2. NextAuth.js for customer & tailor authentication
3. Tailor dashboard to accept/manage bookings
4. Payment integration (Paystack / Flutterwave for ₦)
5. Image upload for fabric samples & measurement photos

---

**Your style. Our craft.**
