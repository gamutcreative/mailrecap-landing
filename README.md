# MailRecap Landing Page

Modern, clean landing page for MailRecap - the smart mail assistant that scans, summarizes, and organizes physical mail.

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vercel** - Deployment (recommended)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project in Vercel
3. Vercel will auto-detect Next.js and deploy
4. Connect your custom domain (mailrecap.co) in Vercel settings

## Project Structure

```
mailrecap-landing/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── public/
│   └── logo.png         # MailRecap logo
└── README.md
```

## Features

- Responsive design (mobile-first)
- Hero section with strong CTA
- Problem/solution storytelling
- Feature highlights
- Pricing comparison (Essentials vs MailRecap+)
- Clean, modern UI with Tailwind CSS

## Brand Messaging

All copy follows the MailRecap brand messaging framework:
- **Clarity** - Mail is easier to understand
- **Organization** - Mail is easier to sort and manage
- **Action** - Mail is easier to act on
- **Peace of Mind** - Life feels less stressful

## Customization

Edit `app/page.tsx` to update content, sections, or layout.
Edit `tailwind.config.js` to customize colors and design tokens.
