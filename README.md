<<<<<<< HEAD
# Personal Portfolio

A production-focused developer portfolio built with Next.js App Router, Tailwind CSS, GSAP, and WebGL/Canvas primitives. The interface direction is kinetic sci-fi minimalism with telemetry, chiral-network, and holographic HUD motifs.

## Stack

- Next.js 16 App Router and React 19
- TypeScript with strict mode
- Tailwind CSS 4
- GSAP, ScrollTrigger, and `@gsap/react`
- Geist and Geist Mono via `next/font`
- Vercel deployment target

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Before pushing a change, run:

```bash
npm run lint
npm run build
```

## Architecture

Routes and static composition stay as Server Components by default. Interactive animation and browser-only code live in focused Client Components and use `useGSAP` for scoped setup and cleanup. Shared GSAP plugin registration lives in `src/lib/gsap.ts`.

Design tokens are defined in `src/app/globals.css` and exposed to Tailwind through the CSS-first `@theme` configuration.

## Deployment

The Git remote is configured for GitHub. Once the initial commit is pushed, import the repository in Vercel; it will detect Next.js and use the standard build settings automatically. CLI deployment is also available after installing/authenticating the Vercel CLI:

```bash
npx vercel
npx vercel --prod
```

Environment variables for the contact transport will be documented in `.env.example` when that server-side module is implemented. Secrets must be configured in Vercel and must not use the `NEXT_PUBLIC_` prefix.

## Build sequence

1. Project foundation and design tokens
2. `// BOOT_SEQUENCE` hero
3. `// CARGO_MANIFEST` project showcase
4. `// CHIRAL_NETWORK_NODES` skills visualization
5. `// MISSION_LOG` experience timeline
6. `// BRIDGES_COMMS` contact transmission
7. Accessibility, performance, SEO, and Vercel launch checks
=======
# Personal-Portfolio
>>>>>>> a9ba4a07290dc2f8ef95afe6fb6b4c3e4f84d4be
