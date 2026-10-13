# MUIZ — Cinematic portfolio

A complete Next.js App Router project based on the supplied black cinematic design: cat hero, five selected-work categories, portrait strip, about section, booking form and oversized wordmark footer. The journal is accessible from the footer so the homepage retains the reference layout.

## Get this onto GitHub

1. Extract `muiz-cinematic-portfolio.zip` on your computer.
2. Open the extracted `muiz-portfolio` folder.
3. In your `muiztom47/model-portfolio` repository, choose **uploading an existing file** (or **Add file → Upload files**).
4. Drag the **contents of the folder** into GitHub. `package.json`, `app`, `components`, `public`, etc. must be at the repository root. Do not upload the ZIP itself: GitHub does not unpack it into source code.
5. Commit the files. If your file manager hides dotfiles, enable “show hidden files” and include `.gitignore` and `.env.example`. Never upload a real `.env.local` file.

## Run locally

Requires Node.js 20.9+; Node.js 24 LTS is suitable. Dependencies and exact versions are captured in `package-lock.json`.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. The public pages work without any API keys.

```bash
npm run typecheck
npm run build
npm start
```

Fonts are installed locally through Fontsource. The build does not download fonts from Google.

## Deploy

Import the GitHub repository into a Next.js-compatible host such as Vercel. Use the Next.js framework preset, the repository root, `npm ci`, and `npm run build`; keep the default output directory. You can also run `npm start` on a Node.js host after building.

This is a **Next.js server application**, not a GitHub Pages static export. The enquiry endpoint needs server support. GitHub stores your code; a hosting provider serves the website.

Add `NEXT_PUBLIC_SITE_URL` to your host environment (your actual https website URL, without a trailing slash) before the production build. It supplies social-card URLs and sitemap URLs. Redeploy after editing environment variables.

## Connect the enquiry form

The form sends email through Resend's HTTP API. No paid CMS, database or email SDK is required by the code. You must supply your own email service account and credentials.

1. Create an API key in Resend and verify a domain you control.
2. Set these environment variables locally and in your hosting dashboard:

```dotenv
RESEND_API_KEY=your_private_api_key
ENQUIRY_FROM=MUIZ Portfolio <portfolio@your-verified-domain.com>
ENQUIRY_TO=your-real-inbox@example.com
NEXT_PUBLIC_SITE_URL=https://your-actual-domain.com
```

3. Deploy, then send a real test enquiry yourself and confirm receipt.

The sender must be on your verified domain. Replies go to the visitor's address. The form only reports success after the provider accepts the request; provider acceptance is not a guarantee of inbox delivery. Missing configuration returns an honest unavailable message. No emails have been sent during development.

The API includes field validation, payload size checks, a honeypot, a same-origin browser check and a request timeout. Enable your hosting provider's rate limiting/bot protection on `/api/enquiry` before a public launch. Configure retention in your email provider to suit your needs. Submitted details are sent to your inbox and are not stored in this application.

## Edit your content

| What you want to change | File |
| --- | --- |
| Name, bio, fee, availability, disclosure | `lib/site.ts` |
| Hero and homepage structure | `app/page.tsx` |
| Work categories, image descriptions and galleries | `lib/portfolio.ts` |
| Colours, typography, spacing and mobile layouts | `app/globals.css` |
| Enquiry fields and budget choices | `components/BookingForm.tsx` |
| Server-side enquiry validation and email | `app/api/enquiry/route.ts` |
| Image files | `public/images/` |

The £5,000 fee and “Open for enquiries” are editable draft copy from the visual concept; confirm both before launch. Availability is a manual status, not a connected calendar.

## Publish blog posts

Posts use plain Markdown files, so you can write them directly in GitHub. No CMS account is required.

1. Copy `content/posts/your-first-story.md` to a new file, for example `content/posts/behind-the-heritage-series.md`.
2. Replace its front matter:

```yaml
---
title: "Behind the heritage series"
date: "2026-10-20"
excerpt: "A short introduction to your story."
draft: false
---
```

3. Write below the second `---`. Add pictures to `public/images/` and reference them as `![Description](/images/filename.png)`.
4. Commit and redeploy. Your article appears at `/journal/behind-the-heritage-series` and in `/journal`.

Use lowercase hyphenated filenames and quoted YYYY-MM-DD dates. `draft: true` hides a post from the index, sitemap and its URL. Drafts are visible in a public GitHub repository, so do not put confidential writing in public source. The included post is a hidden template, not a fabricated published article. The journal shows an intentional empty state until you publish.

Markdown HTML is sanitized. This is a Markdown blog, not an MDX execution environment; embedded JavaScript/React is deliberately not supported.

## Image quality and matching the design

The full-resolution cat portrait, sports portrait and three traditional looks are included. Some beauty, character, chess and detail-strip images were supplied only inside previews. Their visible photo areas are isolated using CSS crops of `public/images/design-reference.png`, without showing the screenshot's text or browser interface. These are **preview-quality assets**, not newly recovered full-resolution photos.

Replace those with your original photos for a sharp production portfolio. For example, change a photo object in `lib/portfolio.ts` from one with `crop` coordinates to:

```ts
{ src: '/images/beauty-original.jpg', alt: 'Describe the portrait' }
```

Keep the `crop` property absent for originals. The design reference source can then be removed once no entries use it. `Photo.tsx` renders regular images through Next Image; preview crops use backgrounds. The homepage layout follows the reference closely, but responsive reflow, font rendering and the original hero's proportions mean it is not a pixel-for-pixel reproduction of a raster image at every viewport.

The layout includes keyboard focus styles, labels, descriptive image alternatives, a skip link, reduced-motion support, mobile reflow, page metadata, favicon, robots and sitemap routes. No fabricated clients, measurements or testimonials are included. The concept-imagery disclosure is preserved from the selected design.

## Project structure

```text
app/                 Homepage, work routes, journal routes and enquiry API
components/          Header, footer, photo renderer and booking form
lib/                 Editable site configuration, portfolio and Markdown loader
content/posts/       Blog posts and a hidden writing template
public/images/       Included image assets and design reference
.env.example         Environment-variable names, no real secrets
package-lock.json    Reproducible dependency versions
```

## Verification

The project was production-built and typechecked. Automated local checks exercise invalid requests, missing email configuration, a simulated provider response, and Markdown draft filtering. Live email delivery was not tested because account credentials were not supplied. A browser-based visual comparison was not available in the creation environment; review on desktop and mobile after deployment.

## Reference documentation

- Next.js installation: https://nextjs.org/docs/app/getting-started/installation
- Next.js deployment: https://nextjs.org/docs/app/getting-started/deploying
- Resend send email: https://resend.com/docs/api-reference/emails/send-email

The supplied images remain subject to your rights and permissions. Third-party packages and fonts retain their own licenses.
