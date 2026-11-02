# AGENTS.md

Static portfolio site. No framework, no bundler, no tests/CI. Prettier + ESLint + Stylelint configs present; only Prettier is wired to npm scripts.

## Entrypoints
- `index.html` — markup + inline `<style>` preloader + inline `<script>` (theme, navbar, scroll)
- `src/scss/style.scss` — sole SCSS entry → compiles to `src/css/style.css`
- `src/css/style.css` — committed build artifact, linked from HTML (source map disabled)

## Commands
- `npm run sass:build` — one-shot compile compressed CSS
- `npm run sass:watch` — watch mode
- `npm run format` — Prettier write (`src/css/style.css` and `*.md` ignored)
- `npm run format:check` — Prettier check
- No dev server. Open `index.html` directly or use any static server.
- Canonical site: `ashwinder.me`. GitHub Pages (`ashwinders.github.io`) retired.

## SCSS structure
- `src/scss/abstract/` — variables, theme, common
- `src/scss/components/` — navbar, buttons
- `src/scss/layouts/` — hero, experience
- Partial Bootstrap 5.3 import only: functions, variables, variables-dark, maps, mixins, root, reboot, type, containers, grid, buttons, helpers, utilities, utilities/api. Don't import full bootstrap.
- After SCSS change: recompile + commit `src/css/style.css`.

## Gotchas
- `node_modules/` ignored. DevDeps: `bootstrap@^5.3.8`, `sass@^1.107.1`, `prettier@^3.9.10`.
- No `README`, no CI workflows, no `opencode.json`.
- Lint configs exist (`.eslintrc.js`, `.stylelintrc.json` + ignore files) but no npm scripts call them.
- JS lives inline in `index.html`, no separate JS files.
- External CDN: Google Fonts (Fira Mono), FontAwesome 5.15.3.
- Root static assets versioned: `favicon*`, `*.png`, `site.webmanifest`. `src/pdf/Ashwinder-Singh-Arora-Resume.pdf` tracked (not indexable: `robots.txt` disallows `/src/pdf/`).
