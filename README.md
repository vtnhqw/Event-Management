# UNIEvent Management

A modern, premium Event Management prototype built entirely with HTML, CSS, and Vanilla JavaScript. UNIEvent acts as a campus event portal with a fully functional frontend architecture simulating a real web application.

## 🌟 Premium Features

- **Dark Mode Integration**: A flawless, completely customized Light and Dark mode system leveraging CSS Variables with smooth `pageFadeIn` transitions and no Flash of Unstyled Content (FOUC).
- **No-Backend Architecture**: Uses `localStorage` as a mock JSON database. Includes auto-seed data and auto-migration scripts for zero-setup deployments.
- **Premium UI/UX**:
  - Custom scrollbars, glassmorphism navbars, and liquid CSS segment controls.
  - Interactive micro-animations (e.g., tactile `.btn:active` compressions and smooth hovers).
  - Modern Shimmer Skeleton Loaders for data fetching states.
  - "Dropup" intelligent menus for bottom-heavy forms to prevent UI clipping.
- **Role-Based Access Control (RBAC)**:
  - **Student**: View events, RSVP, and see calendar deep-links.
  - **Committee**: Submit new events, track approval statuses, and view rejection reasons.
  - **Admin**: Review queue with inline approval/rejection logic.

## 🛠 Tech Stack

- **HTML5**: Semantic document structure with accessibility features.
- **CSS3**: Pure vanilla CSS—no Tailwind or external libraries. Features a custom elevation scale, responsive Grid/Flexbox layouts, and high-performance scoped transitions.
- **JavaScript (ES6)**: Vanilla JS for dynamic DOM manipulation, global state management, localization (`en`/`ms`), and prototype logic.

## 🚀 Getting Started

Since this is a prototype, there is no build step or backend to start. 

1. Clone the repository.
2. Open `login.html` directly in your browser.
3. Select your desired role (Student, Committee, or Admin) to test the various dashboards and permissions!

## 💡 Key Design Decisions
- **SCORUN Integration**: Supports the university SCORUN points system directly on event cards and detail pages.
- **Performance**: Removed global universal selector transitions (`* { transition... }`) in favor of explicitly scoped micro-animations to ensure 60fps scrolling even with complex backdrop-filters.
