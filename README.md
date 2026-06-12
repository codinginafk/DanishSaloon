# Danish Hanif Hair Lounge — Website

Premium men's grooming website for **Danish Hanif Hair Lounge**, a men's
barber and grooming business with three branches across Dubai.

- **Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide
- **Pages:** Home, Services, Haircuts, Gallery, Locations, About, Contact, Privacy, Terms
- **SEO:** Schema.org `BeautySalon` markup, sitemap, robots, OG/Twitter, canonical URLs
- **Performance:** Static Site Generation, 87 kB shared JS, lazy-loaded images
- **Accessibility:** Skip-to-content, focus rings, reduced-motion support, semantic HTML

---

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

Copy `.env.example` to `.env.local` and fill in values.

---

## Deploy to Vercel

You can deploy in two ways. **Git-based is recommended** for a client project —
every push auto-deploys and you get preview URLs on every branch.

### Option A — Git-based (recommended)

1. Push this folder to a new GitHub/GitLab/Bitbucket repo.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Next.js. Click **Deploy**.
4. Add a custom domain in **Project → Settings → Domains**
   (e.g. `danishhanifhairlounge.com`).

### Option B — Vercel CLI (one-off deploy)

```bash
npm i -g vercel
vercel login
vercel              # preview deploy
vercel --prod       # production deploy
```

---

## Customising content (single source of truth)

Almost everything the client will ever want to change lives in
**`src/lib/siteConfig.ts`**:

| Need to change…              | Edit…                                  |
| ---------------------------- | -------------------------------------- |
| Map links (3 branches)       | `locations[].mapLink`, `embedLink`    |
| Instagram / Facebook / TikTok| `social`                               |
| WhatsApp / phone number      | `whatsappLink`, `phone`                |
| Hero video                   | `heroVideo.src`                        |
| Service prices               | `services[].startingPrice`            |
| Team photos & names          | `team`                                 |
| Gallery photos               | `gallery`                              |
| FAQ                          | `faq`                                  |
| Hours                        | `hours`                                |
| Brand name / tagline         | `name`, `tagline`                      |

---

## Replaceable assets

- **Hero background video** — drop a `.mp4` into `/public/videos/hero.mp4` and
  set `heroVideo.src = "/videos/hero.mp4"` in `siteConfig.ts`. The poster image
  is used automatically while the video loads (and as a fallback).
- **Gallery photos** — swap URLs in `siteConfig.gallery`. Recommended size:
  900×1200, JPG/WebP.
- **Team photos** — swap URLs in `siteConfig.team`. Recommended size:
  600×750, JPG/WebP.

---

## SEO & local targeting

Built to rank for searches like:
`barber dubai`, `best barber dubai`, `haircut dubai`, `barber near me`,
`men's salon dubai`, `fade haircut dubai`, `beard trim dubai`,
`hair color dubai`, `kids haircut dubai`, `karama barber`, `media city barber`,
`barber near media city`, `barber near karama`.

Each service and each branch has its own statically-generated page with
canonical URL, OpenGraph tags, and `BeautySalon` schema. Sitemap auto-generated
at `/sitemap.xml`.

---

## License

Proprietary — for Danish Hanif Hair Lounge.
