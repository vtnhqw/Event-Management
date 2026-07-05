# UNIEvent Management

A modern, premium Event Management prototype built entirely with HTML, CSS, and Vanilla JavaScript. UNIEvent acts as a campus event portal with a fully functional frontend architecture simulating a real web application.

## 🌟 Premium Features

- **Dark Mode Integration**: A flawless, completely customized Light and Dark mode system leveraging CSS Variables with smooth transitions and no Flash of Unstyled Content (FOUC).
- **AI Chat Assistant Widget**:
  - A beautiful floating chatbot in the bottom-right corner of the screen, active for all users (guest visitors, students, committee members, and admins).
  - Features simulated typing indicators, smooth-scrolling logs, "New Chat" session refreshers, and global keyboard shortcuts (e.g., `Escape` key close).
  - Tactile suggestion chips ("How to register?", "What is SCORUN?") with pixel-perfect flex alignments that auto-submit queries.
  - Rate-limit input blocking that disables text inputs and send buttons while responses are generating.
- **Two-Column Event Detail Redesign**:
  - Desktop view splits details into a main content area and a sticky registration sidebar.
  - Collapses gracefully into a flat stack on mobile using CSS `display: contents` and flexible flexbox `order` attributes to preserve visual hierarchy.
  - Features staggered cascading entrance animations that slide details in with variable animation delays.
- **Dynamic UI Color Syncing**:
  - Card category labels (e.g., talk, competition) dynamically match their respective category icon background/text colors.
  - User role badges (STUDENT, COMMITTEE, ADMIN) in the navbar profile are unified with matching containers and soft highlight colors.
  - User profile avatar backgrounds dynamically sync with the user's role (blue gradient for students, amber for committee, red for admins).
- **No-Backend Architecture**: Uses `localStorage` as a mock JSON database. Includes auto-seed data and auto-migration scripts for zero-setup deployments.
- **Editable Seed Data**: Default events live in `data/events.json`, making them easier to edit now and migrate into a real database later.
- **Premium UI/UX**:
  - Custom scrollbars, glassmorphism navbars, and liquid CSS segment controls.
  - Interactive micro-animations (e.g., tactile `.btn:active` compressions and smooth hovers).
  - Modern Shimmer Skeleton Loaders for data fetching states.
  - "Dropup" intelligent menus for bottom-heavy forms to prevent UI clipping.
- **Role-Based Access Control (RBAC)**:
  - **Student**: View events, RSVP, see calendar deep-links, and access the AI assistant.
  - **Committee**: Submit new events, track approval statuses, and view rejection reasons.
  - **Admin**: Review queue with inline approval/rejection logic.

## 🛠 Tech Stack

- **HTML5**: Semantic document structure with native accessibility features (ARIA).
- **CSS3**: Pure vanilla CSS—no Tailwind or external libraries. Features a custom elevation scale, responsive Grid/Flexbox layouts, and high-performance scoped transitions.
- **JavaScript (ES6)**: Vanilla JS for dynamic DOM manipulation, global state management, localization (`en`/`ms`), and prototype logic.

## 🚀 Getting Started

Since this is a prototype, there is no build step or backend to start. 

1. Clone the repository.
2. Serve the folder with any static file server, then open `index.html`.
3. Browse events freely, or sign in with your role:
   - **Student / Committee** — Student ID + password
   - **Admin** — Email + password

### Editing seed events

Edit `data/events.json` to change the default events. Keep each event `id` stable so existing localStorage records can be refreshed from the JSON file.

The app still uses `localStorage` as the runtime mock database for submitted events, approvals, registrations, and RSVP counts. Seed events from `data/events.json` are copied into localStorage on first load and refreshed by matching `id`.

### Demo credentials

| Role | Login | Password |
|------|-------|----------|
| Student | `SW01083101` | `student123` |
| Committee | `SW01083102` | `committee123` |
| Admin | `admin@uniten.edu.my` | `admin123` |

## 💡 Key Design Decisions
- **SCORUN Integration**: Supports the university SCORUN points system directly on event cards, details, and the AI chatbot helper.
- **Collision Prevention**: To prevent visual overlap between the Floating AI widget and popup notifications, toast notifications are offset to `bottom: 38rem` (floating cleanly above the chat card header) with elevated `z-index: 20000;`.
- **Performance**: Removed global universal selector transitions (`* { transition... }`) in favor of explicitly scoped micro-animations to ensure 60fps scrolling even with complex backdrop-filters.


