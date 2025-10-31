# SoftUni Loan Calculator v2

Introduction to AI Coding - project 1 - Loan Calculator BG v2

## Описание

Модерна уеб апликация за изчисляване и сравнение на кредитни планове с Tailwind CSS, фокусирана върху Gen Z аудитория (18-30 години). Използва емоджи, динамични елементи и креативен дизайн за ангажиращо изживяване.

## Структура на проекта

- `public/` – статични ресурси и входната страница с Tailwind CDN.
- `src/` – ES модули, разделени по отговорности (`components`, `services`, `utils`, `styles`).
- `scripts/` – локален сървър.
- `tests/` – unit тестове.

## Стартиране

1. **Prerequisites**: Node.js 16+ and a modern browser with ES modules support.

2. Стартирайте локалния сървър:

   ```bash
   npm run dev
   ```

   Отворете показания адрес в браузъра.

3. **For local CSS builds** (Tailwind watch mode):
   ```bash
   npm run build-css
   ```

## Тестове

```bash
npm test
```

## Deployment

This app is automatically deployed to Netlify on every push to `master` or `main` branch via GitHub Actions.

### Setup Instructions:
1. Create a Netlify account at https://netlify.com
2. Generate a Personal Access Token: Settings → Applications → New access token (save this)
3. In your GitHub repo (hah23255/loan-calculator-v2), add two secrets (Settings → Secrets and variables → Actions):
   - `NETLIFY_AUTH_TOKEN`: your token from step 2
   - `NETLIFY_SITE_ID`: your Netlify site id (find it at Netlify Site settings → Site information after first deploy)
4. Push to `master` or `main` — GitHub Actions will auto-deploy to Netlify! 🚀

### Finding Your Live Site
After the first deploy completes, visit https://app.netlify.com/sites to view your site URL and deployment status.

## Добри практики

- Поддържайте код под 300 реда.
- Добавяйте тестове при промени.
- Фокус върху Gen Z: емоджи, анимации, социални елементи.
