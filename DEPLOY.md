# Deploy to Vercel

## Quick Deploy (Recommended)

1. Go to https://vercel.com/new
2. Sign in with GitHub (if not already signed in)
3. Import the repo: `gamutcreative/mailrecap-landing`
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"
6. Done! Your site will be live in ~2 minutes

## Connect Custom Domain (mailrecap.co)

After deployment:

1. Go to your project settings in Vercel
2. Click "Domains"
3. Add `mailrecap.co` and `www.mailrecap.co`
4. Vercel will show you DNS records to add in GoDaddy:
   - For `mailrecap.co`: Add A record pointing to Vercel's IP
   - For `www.mailrecap.co`: Add CNAME pointing to `cname.vercel-dns.com`

## GoDaddy DNS Setup

1. Log into GoDaddy
2. Go to Domain Settings for mailrecap.co
3. Manage DNS
4. Add the records Vercel shows you:
   - **A Record**: `@` → `76.76.21.21` (Vercel's IP)
   - **CNAME**: `www` → `cname.vercel-dns.com`

DNS propagation takes 5-30 minutes.

## Environment Variables

Currently none required. Add them in Vercel project settings if needed later.

## Auto-Deploy

Every push to `main` branch auto-deploys to production.
Create other branches for staging/preview deployments.
