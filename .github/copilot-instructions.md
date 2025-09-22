# Copilot Instructions for vex-i.github.io

## Project Overview
- This is a React single-page application bootstrapped with Create React App.
- Source code is in `src/`, with main entry points in `src/index.js` and `src/App.js`.
- Components are organized under `src/components/` and pages under `src/pages/`.
- Static assets (images, SVGs) are in `src/assets/` and `public/`.

## Key Patterns & Conventions
- Use functional React components (see `Title.jsx`, `AboutHead.jsx`, etc.).
- CSS is colocated per component (e.g., `App.css`, `index.css`).
- Props are used for component configuration; avoid global state unless necessary.
- Use semantic HTML and descriptive alt text for images.
- Class names in JSX should use `className` (not `classname`).
- All routing and navigation logic (if present) should be handled in `App.js` or a dedicated router file.

## Developer Workflows
- **Start dev server:** `npm start` (runs on http://localhost:3000)
- **Run tests:** `npm test` (Jest, interactive watch mode)
- **Build for production:** `npm run build` (outputs to `build/`)
- **Static assets:** Place in `public/` for root access, or `src/assets/` for imports.

## Integration & External Dependencies
- No custom backend; all data is static or fetched from public APIs (if any).
- No Redux or context API by default; use local state/hooks.
- Follows Create React App conventions for build, test, and eject.

## Examples
- To add a new page: create a component in `src/pages/`, import and route it in `App.js`.
- To add a new image: place in `src/assets/` and import with `import img from '../assets/example.png'`.
- To update the main greeting: edit `src/components/Title.jsx`.

## References
- See `README.md` for full list of npm scripts and Create React App documentation links.
- Follow React and Create React App best practices unless project-specific conventions override them.
