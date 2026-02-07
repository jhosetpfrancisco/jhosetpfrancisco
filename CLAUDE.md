# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for **Jhosetp Francisco**.
100% frontend — no backend. Designed as a landing page with project detail pages.

## Tech Stack

- **Framework:** Angular 21.1.0 (standalone components, no NgModules)
- **Monorepo:** Nx 22.4.5
- **Styling:** CSS custom properties (no Tailwind, no SCSS)
- **Testing:** Vitest (unit via `@angular/build:unit-test`), Playwright (e2e)
- **SSR:** Angular SSR enabled (Express server)
- **Linting:** ESLint (flat config, `eslint.config.mjs`) + Prettier

## Commands

```bash
# Build
npx nx build web                    # Production build (output: dist/apps/web)
npx nx build web -c development    # Dev build (no optimization, sourcemaps)
npx nx build design-system          # Build design-system lib (@nx/js:tsc)

# Lint
npx nx lint web                     # Lint web app
npx nx lint ui                      # Lint UI lib
npx nx run-many -t lint             # Lint all projects

# Test
npx nx test web                     # Unit tests for web app (Vitest via @angular/build)
npx nx test ui                      # Unit tests for UI lib (Vitest via @nx/vitest)
npx nx e2e web-e2e                  # Playwright E2E tests (starts dev server automatically)

# Format
npx prettier --check .              # Check formatting
npx prettier --write .              # Fix formatting

# Useful
npx nx graph                        # Visualize project dependency graph
npx nx show project web             # Show all available targets for web
```

**Do NOT run `nx serve`, `ng serve`, or any dev server command** — the user handles this manually.

## Project Structure

```
apps/web          → Main Angular app (portfolio)
apps/web-e2e      → Playwright E2E tests
libs/design-system → Design tokens (CSS custom properties + TS constants)
libs/ui            → Reusable Angular standalone components
docs/              → ROADMAP_MIGRATION.md
```

## Libraries

### @jhosetpfrancisco/design-system
- CSS tokens in `libs/design-system/src/styles/tokens.css`
- Token categories: colors, typography, spacing, radius, shadows, transitions, breakpoints, reset
- TS exports: `BREAKPOINTS`, `Z_INDEX`, `Breakpoint` type
- **Import CSS in app:** `@import '../../libs/design-system/src/styles/tokens.css';` in `apps/web/src/styles.css`

### @jhosetpfrancisco/ui
- Angular standalone components (OnPush, no NgModules)
- Barrel exports from `libs/ui/src/index.ts`
- Components built: icon, button, card (6 sub-components), badge, separator, container, section
- Icon config: `apps/web/src/app/icon.config.ts` — Lucide tree-shaken, registered via `importProvidersFrom` in `app.config.ts`

## Architecture

### Routing
- All routes defined in `apps/web/src/app/app.routes.ts`
- Home feature: `''` path, loaded via `loadChildren` inside `MainLayoutComponent` shell (nav + router-outlet + footer)
- Projects feature: `'projects'` path, loaded via `loadChildren` — **no layout wrapper** (project detail pages manage their own layout)
- Project detail routes: `'projects/mentebonita'`, `'projects/finanzy'`, `'projects/thaliq'` — each `loadComponent` lazy-loaded

### Layout
- `app/layout/main-layout/` — shell: nav + router-outlet + footer (dark bg)
- `app/layout/navigation/` — fixed header, scroll detection, mobile menu, signals
- `app/layout/footer/` — copyright row

### Feature structure
- `app/features/home/` — `home.routes.ts` + `pages/home-page.component.ts` + `components/` (section components)
- `app/features/projects/` — `projects.routes.ts` + `pages/{project-name}/` (each with sections subfolder)

## Design Tokens — Quick Reference

### Colors (pragmatic, no -light/-dark)
- `--color-bg` #ffffff, `--color-fg` #030213
- `--color-surface` #f3f3f5, `--color-muted` #ececf0
- `--color-subtle` #717182, `--color-accent` #e9ebef
- `--color-border` rgba(0,0,0,0.1)
- `--color-primary` #030213, `--color-primary-fg` #ffffff
- `--color-destructive` #d4183d
- `--color-inverse` #000000, `--color-inverse-fg` #ffffff
- Neutral scale: 200, 400, 500, 600, 700, 900

### Typography
- Font: Inter (Google Fonts), `--font-sans`
- Weights: light(300), normal(400), medium(500), semibold(600), bold(700)
- Scale: xs(12) sm(14) base(16) lg(18) xl(20) 2xl(24) 3xl(30) 4xl(36) 5xl(48) 6xl(60) 7xl(72) 8xl(96)

### Spacing (4px base)
- `--space-{1..32}`: 4px to 128px

### Radius
- sm(6) md(8) lg(10) xl(14) 2xl(16) full(9999)

## Angular Guidelines (Applied)

- **Feature-first** folder structure
- **Standalone components** with `ChangeDetectionStrategy.OnPush`
- **RxJS-first:** async pipe in templates, subscribe only for side effects
- **Pages** = smart components (one per route), **Components** = dumb/presentational
- **No over-engineering:** no repositories, no state services unless needed

## Rules

### Max 500 lines per component file
- **No component file should exceed 500 lines of code.**
- Large pages MUST be split into section components (hero, problem, solution, stack, results, cta, etc.)
- Each section = standalone component in a `sections/` subfolder
- The page component orchestrates and wires sections together
- Sections can receive data via `input()` signals if needed

### Project detail page structure
```
features/projects/pages/
  {project-name}/
    {project-name}-page.component.ts       → orchestrator (<500 lines)
    sections/
      {project-name}-hero.component.ts      → hero section
      {project-name}-problem.component.ts   → problem section
      {project-name}-solution.component.ts  → solution section
      {project-name}-stack.component.ts     → stack section
      {project-name}-results.component.ts   → results/impact section
      {project-name}-cta.component.ts       → CTA final section
```

### Visual pattern for project detail pages
- `:host` background: `var(--color-bg)` (light base)
- Hero: dark (`--color-inverse`) with grid pattern overlay
- Sections alternate: light (`--color-bg`) / surface (`--color-surface`) / dark accents
- Follow MenteBonita as reference for visual consistency

## Conventions

- Component selectors: `app-` prefix (web app), `ui-` prefix (libs/ui)
- File naming: `kebab-case` (Angular standard)
- Pages: `*-page.component.ts`
- Sections: `*-section.component.ts`
- Observable suffix: `$` (e.g., `items$`)
- Path aliases: `@jhosetpfrancisco/design-system`, `@jhosetpfrancisco/ui` (defined in `tsconfig.base.json`)
