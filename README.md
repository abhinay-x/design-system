Design System 
A scalable, accessible, and responsive design system built for a Front-End Developer Internship assignment by Abhinay Chary Raghipani. This project demonstrates expertise in React, TypeScript, Tailwind CSS, and Storybook, delivering a token-based color system, data display components (Tooltip, Badge), and a navigation component (Tabs) with comprehensive documentation.
Project Overview
This design system is crafted to meet enterprise-level requirements, supporting light/dark themes, WCAG 2.1 AA accessibility standards, keyboard navigation, and responsiveness across devices. Key features include:

Token-Based Color System: Primary, secondary, tertiary, neutral, and semantic colors with light/dark mode support.
Components: Tooltip (data display), Tabs (navigation), and Badge (data display) with variants, states, and accessibility features.
Storybook Documentation: Detailed stories covering props, states, use cases, accessibility, and theming.
Deployment: Storybook deployed via Vercel for interactive previews.
Testing: Cross-browser compatibility, responsiveness, and zoom support up to 200%.

Setup
To run the project locally, follow these steps:
git clone https://github.com/abhinay-x/design-system.git
cd design-system
npm install
npm run dev
npm run storybook


Development Server: Runs at http://localhost:5173.
Storybook: Runs at http://localhost:6006.

Prerequisites

Node.js (>=16.x)
npm (>=8.x)

Folder Structure
design-system/
├── src/
│   ├── components/
│   │   ├── DataDisplay/
│   │   │   ├── Tooltip/
│   │   │   │   ├── Tooltip.tsx
│   │   │   │   └── index.ts
│   │   │   └── Badge/
│   │   │       ├── Badge.tsx
│   │   │       └── index.ts
│   │   ├── Navigation/
│   │   │   └── Tabs/
│   │   │       ├── Tabs.tsx
│   │   │       └── index.ts
│   │   └── Theme/
│   │       ├── ThemeProvider.tsx
│   │       └── index.ts
│   ├── styles/
│   │   └── theme.ts
│   ├── App.tsx
│   └── index.css
├── stories/
│   ├── ColorSystem.stories.tsx
│   ├── Tooltip.stories.tsx
│   ├── Tabs.stories.tsx
│   └── Badge.stories.tsx
├── docs/
│   ├── tooltip-hover.gif
│   ├── tabs-switching.gif
│   ├── theme-toggle.gif
│   └── badge-variants.png
├── public/
├── tailwind.config.js
├── README.md
├── package.json
└── vite.config.ts


src/components/: Reusable React components with TypeScript.
src/styles/: Theme tokens and global CSS.
stories/: Storybook stories for component documentation.
docs/: Screenshots and GIFs showcasing interactions.
public/: Static assets (e.g., favicon).

Components
Color System

Description: A token-based system using CSS variables for primary, secondary, tertiary, neutral, and semantic colors (success, error, warning, info).
Features:
Light and dark mode support via ThemeProvider.
WCAG 2.1 AA-compliant contrast ratios (verified with WebAIM Contrast Checker).
Documented in Storybook (ColorSystem.stories.tsx).



Tooltip

Description: A data display component showing contextual information on hover or focus.
Features:
Variants: primary, secondary, error.
Positions: top, bottom, left, right.
States: Default, hover, focus, disabled.
Accessibility: ARIA roles (role="tooltip", aria-describedby), keyboard navigation (Tab key).
Responsiveness: Adjusts positioning on small screens.
Storybook: Includes use cases (e.g., form hints) and anatomy.



Tabs

Description: A navigation component for switching between content panels.
Features:
Variants: underline, pill.
States: Active, hover, focus, disabled.
Accessibility: ARIA roles (tablist, tab, tabpanel), keyboard navigation (arrow keys).
Responsiveness: Stacks horizontally on mobile.
Storybook: Includes use cases (e.g., dashboard navigation) and anatomy.



Badge

Description: A status component for categorization or feedback.
Features:
Variants: primary, success, error.
Sizes: sm, md.
States: Default, disabled.
Accessibility: ARIA roles (role="status", aria-disabled).
Responsiveness: Scales with text size.
Storybook: Includes use cases (e.g., task status) and anatomy.



Deployment

Storybook: Deployed to Vercel at https://design-system-abhi.vercel.app/.
Screenshots/GIFs: Interaction visuals (Tooltip hover, Tabs switching, theme toggle, Badge variants) are available in the docs/ folder:
tooltip-hover.gif
tabs-switching.gif
theme-toggle.gif
badge-variants.png



To deploy Storybook locally:
npm run build-storybook
vercel

Accessibility
The design system adheres to WCAG 2.1 AA standards:

Colors: Contrast ratios meet accessibility requirements (e.g., --primary-500 on --neutral-50 is 5.6:1).
ARIA Roles: Implemented for all components (e.g., tooltip, tablist, status).
Keyboard Navigation:
Tooltip: Tab key for focus.
Tabs: Arrow keys for switching.


Screen Reader Support: Tested with NVDA and VoiceOver.
Zoom Support: Components scale up to 200% zoom using rem/em units.

Testing
The project was rigorously tested to ensure reliability:

Browsers: Chrome, Safari, Edge.
Devices: Mobile (320px), tablet (768px), desktop (1440px).
Responsiveness: Components adapt to screen sizes; Tooltips avoid overflow.
Zoom: Tested at 200% to ensure scalability.
Accessibility: Verified with Storybook’s @storybook/addon-a11y and WebAIM Contrast Checker.
Interactions: Hover, focus, disabled states, and theme toggling work seamlessly.

Troubleshooting
Common issues and solutions:

Tailwind CSS Not Applying:
Ensure tailwind.config.js includes all file paths.
Run npm run dev to rebuild.


Storybook Not Loading:
Verify @storybook/react compatibility.
Reinstall dependencies: npm install.


Accessibility Errors:
Check Storybook’s a11y addon for WCAG violations.
Test with NVDA/VoiceOver for screen reader compatibility.



License
MIT License. See LICENSE for details.
Contact
For questions or feedback, contact Abhinay Chary Raghipani at r.abhinaychary@gmail.com.
