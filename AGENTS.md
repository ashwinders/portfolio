# AGENTS.md

Static portfolio site for `ashwinder.me`. No framework, no bundler, no tests. Prettier + ESLint + Stylelint configs present; only Prettier is wired to npm scripts.

## Entrypoints
- `index.html` — markup, inline SVG icon sprite, inline head theme boot script, inline tail JS (navbar dialog, scroll state, theme toggle, contact form)
- `src/scss/style.scss` — sole SCSS entry → compiles to `src/css/style.css`
- `src/css/style.css` — committed build artifact, linked from HTML (source map disabled)

## Commands
- `npm run sass:build` — one-shot compile compressed CSS
- `npm run sass:watch` — watch mode
- `npm run format` — Prettier write (`src/css/style.css` and `*.md` ignored)
- `npm run format:check` — Prettier check
- No dev server. Open `index.html` directly or use any static server.

## Deployment
- Canonical site: `ashwinder.me` via Cloudflare Pages (GitHub-connected). GitHub Pages (`ashwinders.github.io`) retired.
- Auto-deploys on push to `main`; preview deploy per PR. No CI config or secrets in repo.
- No build step; committed `src/css/style.css` is what ships.

## SCSS structure
- `src/scss/abstract/` — variables, theme, common
- `src/scss/components/` — navbar, buttons
- `src/scss/layouts/` — hero, experience
- Partial Bootstrap 5.3 import only: functions, variables, variables-dark, maps, mixins, root, reboot, type, containers, grid, buttons, helpers, utilities, utilities/api. Don't import full bootstrap.
- After SCSS change: recompile + commit `src/css/style.css`.

## Theme
- Three-way toggle: light / dark / system. Stored in `localStorage.theme`; system mode removes the key.
- Inline head script sets `data-theme` and `theme--dark`/`theme--light` before paint to avoid flash.
- Tail script syncs the toggle label and reacts to `prefers-color-scheme` changes when in system mode.

## Contact form
- Web3Forms (`https://api.web3forms.com/submit`) + hCaptcha.
- Public Web3Forms access key is embedded in `index.html`; domain-locked in the Web3Forms dashboard.
- Client script loaded from `https://web3forms.com/client/script.js`.

## SEO / PWA
- Canonical `https://ashwinder.me/`, JSON-LD Person, Open Graph + Twitter tags.
- `robots.txt` allows all; `sitemap.xml` lists only the homepage.
- `site.webmanifest` handles install icons and theme colors.

## Gotchas
- `node_modules/` ignored. DevDeps: `bootstrap@^5.3.8`, `sass@^1.107.1`, `prettier@^3.9.10`.
- `README.md` exists. No `opencode.json`.
- Lint configs exist (`.eslintrc.js`, `.stylelintrc.json` + ignore files) but ESLint/Stylelint are not installed and no npm scripts call them.
- JS lives inline in `index.html`, no separate JS files.
- External resources: Google Fonts (Bricolage Grotesque, Google Sans Code), Web3Forms client script. Icons are an inline SVG sprite; no FontAwesome CDN.
- Root static assets versioned: `favicon*`, `*.png`, `site.webmanifest`, plus SEO files `robots.txt` and `sitemap.xml`.
- CSS cache-bust: set `?v=` on the `src/css/style.css` link in `index.html` to a fresh unix epoch (`date +%s`) whenever recompiling CSS.
