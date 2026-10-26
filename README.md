# Bitterroot Boudoir

Client-facing website for **bitterrootboudoir.com** — premium boudoir photography in Stevensville, Montana.

Built with [Astro](https://astro.build) as a static site for free [Cloudflare Pages](https://pages.cloudflare.com) hosting.

## Pages

- `/` — Homepage
- `/gallery` — Dense photo gallery (placeholders for now)
- `/about` — About
- `/packages` — Session packages
- `/contact` — Inquiry form (Formspree)

## Local development

```bash
npm install
cp .env.example .env
# Add your Formspree form ID to .env
npm run dev
```

## Formspree

1. Create a free form at [formspree.io](https://formspree.io).
2. Set `PUBLIC_FORMSPREE_ID` in `.env` (local) and in Cloudflare Pages → Settings → Environment variables (production).
3. Point Formspree notifications at your business inbox (e.g. `hello@bitterrootboudoir.com`).

## Business email (free options)

You need an inbox for `hello@bitterrootboudoir.com` (or similar). Good free paths:

| Option | Best for | Notes |
| --- | --- | --- |
| **Cloudflare Email Routing** | Simple + free | Forwards `hello@…` to Gmail/Outlook. No sending “as” the domain from a full webmail UI unless you add a SMTP provider. Pair with Gmail “Send mail as” if you want replies from the domain. |
| **Zoho Mail free** | Real webmail on your domain | Free plan is limited (often 1 domain / few users). Full mailbox + sending. Slightly more setup (MX records). |
| **ImprovMX** | Forwarding only | Similar to Cloudflare Routing; easy aliases. |

**Practical combo many small studios use:** Cloudflare Email Routing → personal Gmail, plus Formspree delivering inquiries to that same address. Upgrade to Zoho (or Google Workspace) later if you want a dedicated mailbox UI.

## Deploy to Cloudflare Pages

1. Push this repo to GitHub (or connect another git host Cloudflare supports).
2. In Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → import the repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add env var `PUBLIC_FORMSPREE_ID`.
5. Attach custom domain `bitterrootboudoir.com` (and `www` if you want) in Pages → Custom domains.

## Replacing image placeholders

Search for `PlaceholderImage` components and swap in real files under `public/images/` (or `src/assets/` with Astro’s `<Image />` when you want optimization). The gallery page is intentionally dense for high-res work.
