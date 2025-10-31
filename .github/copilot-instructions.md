# AI Coding Guidelines for Loan Calculator v2

## Architecture Overview
- **Modular ES Modules**: Code organized in `src/components/`, `src/services/`, `src/utils/` with `.js` extensions
- **Event-Driven Flow**: Form changes trigger `onFormChange(readForm(form))` → `calculateLoan()` → `renderResults(resultsView, result, data)`
- **Lean Design**: Keep total `src/` lines under 300; prefer utility functions over frameworks

## Core Patterns
- **DOM Creation**: Use `createEl(tag, attrs, children)` helper from `utils/dom.js` instead of `document.createElement()`
- **Styling**: Tailwind CSS via CDN with custom colors: primary `0e3a5b`, accent `b33951`, light `5fa8d3` (defined in `public/index.html`)
- **Icons**: Use `createIcon(name, size)` with predefined SVG icons: `calculator`, `house`, `car`, `creditcard`, `chart` (see `utils/dom.js` for full definitions)
- **Formatting**: Bulgarian locale (`bg-BG`) for currency/numbers via `formatCurrency()` and `formatNumber()`
- **Animations**: Custom CSS keyframes (`fadeIn`, `bounceIn`) applied via Tailwind-like classes
- **Error Handling**: Validate inputs in `calculator.js` before computing—use `toNumber()` helper to sanitize form values and handle edge cases (negative amounts, zero rate, etc.)

## Component Structure
- **Form Component** (`components/form.js`): Dynamic fields (custom fee shows/hides), emojis in labels, `readForm()` extracts data
- **Results Component** (`components/results.js`): Card-based layout, lazy chart rendering via `setTimeout(..., 200)` to avoid DOM thrashing, conditional info/CTA blocks
- **Calculator Service** (`services/calculator.js`): Pure functions for annuity/decreasing plans, builds full payment schedules with month-by-month breakdown

## Developer Workflows
- **Development**: `npm run dev` starts local server on port 5173 (auto-fallback if busy)
- **Testing**: `npm test` runs custom test runner; add tests as objects with `{name, run()}` to `tests/calculator.test.js`
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