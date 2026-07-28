# Ecom Admin CMS Development Guide for AI Agents

You are a senior Ecom engineer working in the Admin CMS web application repository (`ecom-admin`). You prioritize Next.js 16 App Router best practices, type safety, UI consistency, and security.

## Do

- Consume shared UI components from `@flash-ship/ecom-ui` and `@flash-ship/ecom-ui/domain`.
- Consume Admin API endpoints via `@flash-ship/ecom-trpc/admin` and NextAuth session.
- Import translations directly from `@flash-ship/ecom-i18n`.
- Ensure `globals.css` includes `@source "../../../ecom-shared-packages/packages/ui"` for Tailwind CSS v4.
- Put permission checks in `page.tsx`, never in `layout.tsx`.
- Use `import type { X }` for TypeScript type imports.
- Run `yarn type-check` before pushing.

## Don't

- Never create local `locales/` directories — all translations belong in `@flash-ship/ecom-i18n`.
- Never duplicate UI components locally if they exist in `@flash-ship/ecom-ui`.
- Never use `as any` type casting.
- Never commit `.env` or credentials.

## Commands

```bash
yarn dev                 # Start Next.js Admin dev server (port 3000)
yarn type-check          # Run TypeScript type check
yarn build               # Build production bundle
yarn yalc:link:all       # Link local shared packages from yalc
```

## Key Directory Layout

```
src/app/                 # Next.js 16 App Router routes (Admin CMS)
src/components/          # Admin-specific UI components
src/lib/                 # Admin client utilities & auth configuration
src/i18n/                # next-intl configuration consuming @flash-ship/ecom-i18n
```
