# Ticket App – React Version

## Frameworks & Libraries Used
- React
- React Router DOM
- React Toastify
- Tailwind CSS

## Setup & Execution
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Switching Between Versions
- React: `react-version/`
- Vue: `vue-version/`
- Twig: `twig-version/` (if present)

## UI Components & State Structure
- **Landing Page:** Hero section with wavy SVG, decorative circles, feature cards, and CTA buttons.
- **Authentication:** Login and Signup forms with validation, inline errors, and toast notifications.
- **Dashboard:** Shows ticket stats (total, open, in progress, closed) with accessible cards and SVG icons.
- **Ticket Management:** Full CRUD (create, read, update, delete) for tickets, with validation and feedback.
- **Protected Routes:** Dashboard and Ticket Management require authentication (localStorage token).
- **Global Layout:** Max-width 1440px, centered, responsive, consistent Navbar and Footer.

## Accessibility & Design
- Semantic HTML, proper aria-labels, alt text, and focus states.
- Color contrast and visible outlines for interactive elements.
- Responsive design for mobile, tablet, and desktop.
- Status colors: open (green), in_progress (amber), closed (gray).

## Example Test User Credentials
- Any email/password combination is accepted (simulated auth).
- Session is stored in `localStorage` under `ticketapp_session`.

## Known Issues
- No real backend/API; all data is stored in localStorage.
- Session expires only on logout or manual localStorage clear.

## Notes
- For accessibility, all forms, buttons, and navigation elements have visible focus states and aria attributes.
- All ticket CRUD actions provide inline and toast feedback.
- The design and layout are consistent with the Vue and Twig versions.
