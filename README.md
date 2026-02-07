# jhosetpfrancisco.com

Personal portfolio website for **Jhosetp Francisco** — minimalist, fast, and built with modern Angular.

## Tech Stack

- **Angular 21** — standalone components, signals, SSR
- **Nx 22** — monorepo tooling
- **CSS Custom Properties** — design tokens, no preprocessors
- **Vitest** — unit testing
- **Playwright** — e2e testing

## Project Structure

```
apps/web             → Main Angular app (portfolio)
apps/web-e2e         → Playwright e2e tests
libs/design-system   → Design tokens (CSS custom properties + TS constants)
libs/ui              → Reusable Angular standalone components
```

### Pages

| Route                  | Description              |
|------------------------|--------------------------|
| `/`                    | Home — landing page      |
| `/projects/mentebonita`| MenteBonita case study   |
| `/projects/finanzy`    | Finanzy case study       |
| `/projects/thaliq`     | Thaliq case study        |

### UI Components (`libs/ui`)

`icon` · `button` · `card` · `badge` · `separator` · `container` · `section`

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npx nx serve web

# Production build
npx nx build web
```

## Scripts

```bash
npx nx build web                  # Production build
npx nx lint web                   # Lint
npx nx test web                   # Unit tests
npx nx e2e web-e2e                # E2E tests
npx nx run-many -t lint           # Lint all projects
```

## License

MIT
