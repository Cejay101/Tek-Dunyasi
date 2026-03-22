# Tek Dunyasi - Project Context

## What is this project?
A professional web agency website for "Tek Dunyasi" (Tech World), built with Next.js 16, React 19, Tailwind CSS 4, and next-intl for internationalization. 

## Tech Stack
- **Framework**: Next.js 16.2.0 (App Router)
- **UI**: React 19.2.3, Tailwind CSS 4
- **i18n**: next-intl with 7 languages (tr, en, de, nl, fr, ru, ar) - Turkish is default
- **Forms**: Web3Forms (key via `NEXT_PUBLIC_WEB3FORMS_KEY` env var)
- **Deployment target**: Vercel

## Project Structure
- `src/app/[locale]/` - Locale-based routing (pages)
- `src/components/` - Reusable UI components (Button, Navbar, Footer, ServiceCard, etc.)
- `src/sections/` - Page sections (Hero, ServicesOverview, Process, Testimonials, etc.)
- `src/data/` - Static data (portfolio.json, testimonials.ts)
- `src/i18n/` - i18n config (routing.ts, request.ts)
- `messages/` - Translation JSON files per locale (tr.json, en.json, etc.)

## Environment Variables
- See `.env.example` for all required variables
- `NEXT_PUBLIC_WEB3FORMS_KEY` - Web3Forms access key

## Key Decisions & Conventions
- All text content uses next-intl translations, never hardcoded strings
- Turkish (tr) is the default/fallback locale
- RTL support included for Arabic (ar)
- Security headers configured in next.config.ts (X-Frame-Options, HSTS, CSP-adjacent headers)
- Contact form has input validation with length limits (name: 200, email: 254, message: 5000)

## Commands
- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run lint` - Run ESLint
