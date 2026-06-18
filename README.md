# FutureTech

FutureTech is a responsive multi-page frontend project for a technology and AI media platform. The project focuses on clean architecture, reusable UI components, accessibility, and modern frontend development practices using HTML, SCSS, and vanilla JavaScript.

The repository currently contains the implementation of the home page and a scalable foundation for extending the website with additional pages.

## Stack

- HTML5
- SCSS
- Vanilla JavaScript (ES Modules)
- BEM Methodology
- CSS Grid
- Flexbox
- CSS Custom Properties
- Responsive units (`rem`, `em`, `%`, `vw`)
- `clamp()`

## Features

- Semantic HTML structure
- Responsive and cross-browser layout
- Sticky header with scroll-based shadow animation
- Mobile navigation with burger menu
- Accessible tabs with keyboard navigation
- Scroll reveal animations powered by `IntersectionObserver`
- Magnetic hover interaction for selected desktop elements
- Hero entrance animation
- Reusable UI components (cards, tiles, review blocks, blog blocks, section headers)
- Reduced motion support via `prefers-reduced-motion`
- Modular SCSS architecture with custom functions and mixins
- Component-based JavaScript architecture using ES modules and classes

## Project Structure

```text
future-tech/
├── index.html
├── package.json
├── scripts/
│   ├── BaseComponent.js
│   ├── Header.js
│   ├── MagneticButton.js
│   ├── Reveal.js
│   ├── Tabs.js
│   ├── main.js
│   └── utils/
│       └── defineScrollBarWidthCSSVar.js
├── styles/
│   ├── main.scss
│   ├── main.css
│   ├── _globals.scss
│   ├── _normalize.scss
│   ├── _utils.scss
│   ├── _vars.scss
│   ├── helpers/
│   ├── blocks/
│   └── motion/
├── img/
├── icons/
└── fonts/
```

## JavaScript Architecture

The project is organized into small, focused ES modules instead of relying on a framework.

- **Header.js** — controls the mobile navigation, overlay, body scroll lock, and sticky header behavior.
- **Tabs.js** — provides an accessible tabs component with keyboard navigation.
- **Reveal.js** — animates sections and elements on scroll using `IntersectionObserver`.
- **MagneticButton.js** — adds a magnetic hover effect to selected desktop buttons and links.
- **defineScrollBarWidthCSSVar.js** — calculates the browser scrollbar width and exposes it as a CSS variable for layout calculations.

`main.js` serves as the application's entry point and initializes all interactive modules.

## Accessibility

Accessibility was considered throughout the project:

- Semantic HTML structure
- Proper heading hierarchy
- ARIA attributes for interactive components
- Keyboard-accessible navigation and tabs
- Screen-reader friendly labels
- Reduced motion support using `prefers-reduced-motion`

## Getting Started

### Install dependencies

```bash
npm install
```

### Start SCSS watcher

```bash
npm run sass-watch
```

Compiled CSS is generated into:

```text
styles/main.css
```

## Links

- 🌐 Live Demo: https://sergeyzheleznyak1.github.io/future-tech/