# Novi — Landing Page

A responsive marketing landing page for **Novi**, a project and task management tool for small, fast‑moving teams (startups, agencies, and product/design teams). Built as a frontend UI/UX assessment.

**Live demo:** [novi-landing-page-liard.vercel.app](https://novi-landing-page-liard.vercel.app/)

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 8** — dev server & build tooling
- **Tailwind CSS 4** — utility-first styling, with a custom design system (colors, type scale, spacing, keyframe animations) defined in `tailwind.config.js`
- **ESLint + Prettier** — linting and formatting (`eslint-plugin-react`, `eslint-plugin-react-hooks`, `prettier-plugin-tailwindcss`)
- GitHub Actions CI (`.github/workflows/ci.yml`) — installs deps and runs a production build on push/PR
- **Vercel** — connected to the repo; merging `dev` into `main` triggers CI and auto-deploys to production

No animation or UI libraries are used — all motion (floating cards, background blobs, staggered mobile menu, hover states) is done with Tailwind keyframes/transitions and small React state, kept deliberately dependency-light.

## Getting Started

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# type-check and create a production build in /dist
npm run build

# preview the production build locally
npm run preview

# lint / format
npm run lint
npm run format
```

Requires Node.js 18+ (CI uses Node 22).

## Project Structure

```
src/
  components/
    Navbar/     # logo, desktop nav links, actions, animated mobile menu + toggle
    Hero/       # headline/copy/CTAs + animated dashboard mockup with floating cards
    Features/   # section heading + 4 feature cards (icon, title, description)
    Footer/     # brand + tagline, link columns, email signup, socials, bottom bar
    Avatar/     # small reusable avatar used inside floating cards
  assets/svgs/  # hand-built inline SVG icons (hero, features, socials, logo)
  hooks/        # useLockBodyScroll (locks scroll while the mobile menu is open)
  types/        # shared TypeScript types
```

Each section component follows the same pattern: a `constant.ts` file holding copy, data, and Tailwind class strings (including responsive `sm:`/`md:`/`lg:` variants), a `types.ts` file for its props, and small presentational sub-components.

## What's implemented

- **Hero** — nav bar, large headline ("Run your team without the tab switching."), supporting line, primary + secondary CTA buttons, and an animated dashboard mock-up with floating notification cards and drifting background blobs.
- **Features** — heading, supporting line, and 4 feature cards (Boards, Threads, Timeline, Integrations), each with an icon, title, and description; cards lift and the icon scales on hover.
- **Footer** — brand + tagline, four link groups (Product, Company, Resources, Legal), an email signup form, social icons (X/Twitter, LinkedIn, GitHub, YouTube), and a bottom bar with copyright + Privacy/Terms links.
- **Responsive layout** — the nav collapses into a hamburger/slide-out menu (with a staggered item animation and scroll-lock) below the `md` breakpoint; the feature grid and footer columns reflow from a single column on mobile up to multi-column on desktop.
- **Animation & interaction** — custom `float`, `blob`, and `fade-in-up` keyframes; hover/transition states on cards, links, and buttons; an animated mobile menu.

## Design notes

- Color palette, type scale, and spacing are defined as reusable Tailwind theme tokens (`primary`, `accent`, `text`, `bg`, `border`) rather than one-off utility values, so the palette stays consistent across sections.
- Copy and imagery lean into a "calm workspace" feel — a soft violet/blue gradient, generous whitespace, and a dashboard mock-up rather than stock photography — to match the brief's "trustworthy tool for a small team" tone.

## Deployment

The `main` branch is connected to Vercel. Pushing to `dev` runs CI (build check); merging `dev` → `main` triggers CI again and Vercel auto-deploys the result to production at the live demo link above.

## Known gaps / next steps

- No automated tests.
- Footer email signup is presentational only (no submit handler/backend wired up yet).
