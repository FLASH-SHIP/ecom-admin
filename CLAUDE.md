# Admin CMS Development Guide for AI Agents & Developers (`ecom-admin`)

You are working on the Admin CMS web application built with Next.js 16 (App Router), Tailwind CSS v4, and `@ecom/*` shared packages.

## Core Directives

- **Shared UI & Domain**: Consume UI components from `@ecom/ui` and `@ecom/ui/domain`. Do not create ad-hoc duplicates of shared components.
- **Type-Safe API**: Consume admin API endpoints via `@ecom/trpc-contract/admin` and NextAuth session.
- **Translations (i18n)**: All translations are loaded from `@ecom/i18n`. Do not create local `locales/` folders in this repo.
- **Tailwind v4 Scanning**: Ensure `globals.css` includes `@source "../../../ecom-shared-packages/packages/ui"`.

---

## Key Commands

```bash
# Start dev server
yarn dev

# Type check
yarn type-check

# Build production bundle
yarn build

# Link local yalc packages
yarn yalc:link:all
```
