# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a landing page website for Saed Technologies built with Vite, TypeScript, and SCSS. The site is a single-page application with sections for hero, vision, mission, about, and contact.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on default Vite port)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to production server (requires SSH access)
npm run push
```

## Linting and Formatting

The project uses ESLint, Stylelint, and Prettier for code quality:

```bash
# ESLint (TypeScript linting)
npx eslint src/**/*.ts

# Stylelint (SCSS linting)
npx stylelint "src/**/*.scss"

# Prettier (code formatting)
npx prettier --write .
```

## Architecture

### Build Configuration

- **Build tool**: Vite with custom configuration in `vite.config.ts`
- **Root directory**: `src/` (HTML entry point is `src/index.html`)
- **Output directory**: `dist/`
- **Bundling**: Single JS file with hashed filenames for assets
- **Minification**: Terser (no source maps in production)

### File Structure

```
src/
├── index.html          # Single-page HTML with inline sections
├── scripts/
│   ├── main.ts         # Entry point that imports all modules
│   ├── header.ts       # Mobile menu toggle logic
│   ├── footer.ts       # Dynamic year in footer
│   └── icons.ts        # Lucide icon initialization
└── styles/
    ├── main.scss       # Main entry point, imports all partials
    ├── _variables.scss # Design tokens (colors, spacing, breakpoints)
    ├── _reset.scss     # CSS reset
    ├── _header.scss    # Header and navigation styles
    ├── _hero.scss      # Hero section styles
    ├── _vision.scss    # Vision section styles
    └── _footer.scss    # Footer styles
```

### Styling System

- **SCSS Architecture**: Modular partials imported into `main.scss`
- **Variables**: Centralized in `_variables.scss` (colors, typography, spacing, breakpoints)
- **Naming Convention**: BEM-style (e.g., `.header__logo`, `.hero__main-msg__black`)
- **Responsive Design**: Mobile-first with breakpoints at 640px, 768px, 1024px, 1280px
- **Icon Library**: Lucide icons (imported selectively in `scripts/icons.ts`)

### JavaScript/TypeScript Architecture

- **Module System**: ES modules with TypeScript
- **Entry Point**: `scripts/main.ts` imports all feature modules
- **Feature Modules**: Separate files for header, footer, and icons
- **DOM Manipulation**: Vanilla JavaScript with optional chaining for null safety
- **No Framework**: Pure TypeScript without frameworks

## Code Style Rules

### TypeScript

- Unused variables with `_` prefix are allowed
- No explicit return types required on functions
- Console usage: only `console.warn` and `console.error` allowed
- Strict mode enabled in `tsconfig.json`

### SCSS

- Class naming: lowercase with hyphens (e.g., `header__mobile-nav`)
- Hex colors: use long format (`#ffffff` not `#fff`)
- No descending specificity warnings
- Follow `stylelint-config-standard-scss` conventions

## Adding New Sections

When adding new sections to the landing page:

1. Add HTML markup to `src/index.html` within the `<main>` element
2. Create a new SCSS partial `src/styles/_sectionname.scss`
3. Import the partial in `src/styles/main.scss` using `@use 'sectionname';`
4. If interactive features are needed, create `src/scripts/sectionname.ts`
5. Import the script module in `src/scripts/main.ts`
6. Use design tokens from `_variables.scss` for consistency

## Adding Icons

To add new Lucide icons:

1. Import the icon in `src/scripts/icons.ts` from the `lucide` package
2. Add the icon to the `createIcons()` configuration object
3. Use `<i data-lucide="icon-name"></i>` in HTML
