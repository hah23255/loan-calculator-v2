# AI Coding Guidelines for Loan Calculator v2

## Architecture Overview
- **Modular ES Modules**: Code organized in `src/components/`, `src/services/`, `src/utils/` with `.js` extensions
- **Event-Driven Flow**: Form changes trigger `calculateLoan()` → `renderResults()` via callbacks
- **Lean Design**: Keep total `src/` lines under 300; prefer utility functions over frameworks

## Core Patterns
- **DOM Creation**: Use `createEl(tag, attrs, children)` helper from `utils/dom.js` instead of `document.createElement()`
- **Styling**: Tailwind CSS via CDN with custom colors: `primary: '#0e3a5b'`, `accent: '#b33951'`, `light: '#5fa8d3'`
- **Icons**: Use `createIcon(name, size)` with predefined SVG icons: `calculator`, `house`, `car`, `creditcard`, `chart`
- **Formatting**: Bulgarian locale (`bg-BG`) for currency/numbers via `formatCurrency()` and `formatNumber()`
- **Animations**: Custom CSS keyframes (`fadeIn`, `bounceIn`) applied via Tailwind-like classes

## Component Structure
- **Form Component** (`components/form.js`): Dynamic fields (custom fee shows/hides), emojis in labels, `readForm()` extracts data
- **Results Component** (`components/results.js`): Card-based layout, lazy chart rendering (200ms delay), conditional info/CTA blocks
- **Calculator Service** (`services/calculator.js`): Pure functions for annuity/decreasing plans, builds payment schedules

## Developer Workflows
- **Development**: `npm run dev` starts local server on port 5173 (auto-fallback if busy)
- **Testing**: `npm test` runs custom test runner; tests are objects with `name` and `run()` function
- **Styling**: `npm run build-css` for Tailwind watch mode (rarely needed with CDN)

## Language & Audience
- **Bulgarian UI**: All user-facing text in Bulgarian with Gen Z emojis (🚀, 💥, 📱)
- **Target Audience**: 18-30 year olds; use casual, engaging language
- **Business Logic**: Financial calculations in BGN currency with proper rounding

## Key Files to Reference
- `src/main.js`: App initialization, hero section, grid layout, `createEl` helper
- `src/utils/dom.js`: Core DOM utilities, icon definitions, formatting functions
- `src/services/calculator.js`: Loan calculation algorithms and schedule building
- `public/index.html`: Tailwind config, custom color scheme, module imports