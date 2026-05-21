# Portfolio feature

Self-contained portfolio module for the Next.js app.

## Structure

```
portfolio/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Page sections (Hero, About, …)
│   └── ui/           # Reusable UI (AnimatedSection, SectionHeader, …)
├── constants/        # Section IDs, static copy
├── data/             # Resume content (profile, experience, …)
├── hooks/            # useScrollTo, useNavbarScroll
├── styles/           # Global + CSS module styles
├── utils/            # Helpers (contactLinks, classNames)
├── PortfolioPage.js  # Main page composition
└── index.js          # Public exports
```

## Usage

```js
import { PortfolioPage } from "@/portfolio";
```

## Update content

Edit files under `data/` and `constants/`. Place resume PDF at `public/resume/Ahire-Sameer-Resume.pdf`.
