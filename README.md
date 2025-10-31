# SoftUni Loan Calculator v2

Introduction to AI Coding - project 1 - Loan Calculator BG v2

---

## 🇧🇬 Описание | 🇬🇧 Description

**🇧🇬 Български:**

Модерна уеб апликация за изчисляване и сравнение на кредитни планове с Tailwind CSS, фокусирана върху Gen Z аудитория (18-30 години). Използва емоджи, динамични елементи и креативен дизайн за ангажиращо изживяване.

**🇬🇧 English:**

A modern web application for calculating and comparing loan plans with Tailwind CSS, focused on Gen Z audience (18-30 years old). Features emojis, dynamic elements, and creative design for an engaging experience.

---

## 📂 Структура на проекта | Project Structure

**🇧🇬 Български:**
- `public/` – статични ресурси и входната страница с Tailwind CDN
- `src/` – ES модули, разделени по отговорности (`components`, `services`, `utils`, `styles`)
- `scripts/` – локален сървър
- `tests/` – unit тестове

**🇬🇧 English:**
- `public/` – static resources and entry page with Tailwind CDN
- `src/` – ES modules organized by responsibility (`components`, `services`, `utils`, `styles`)
- `scripts/` – local development server
- `tests/` – unit tests

---

## 🚀 Стартиране | Getting Started

**🇧🇬 Български:**

1. **Изисквания**: Node.js 16+ и модерен браузър с поддръжка на ES модули.

2. Стартирайте локалния сървър:
   ```bash
   npm run dev
   ```
   Отворете показания адрес в браузъра.

3. **За локално компилиране на CSS** (Tailwind watch режим):
   ```bash
   npm run build-css
   ```

**🇬🇧 English:**

1. **Prerequisites**: Node.js 16+ and a modern browser with ES modules support.

2. Start the local development server:
   ```bash
   npm run dev
   ```
   Open the displayed address in your browser.

3. **For local CSS builds** (Tailwind watch mode):
   ```bash
   npm run build-css
   ```

---

## 🧪 Тестове | Testing

```bash
npm test
```

---

## 🌐 Deployment

**🇧🇬 Български:**

Това приложение се разгръща автоматично в Netlify при всеки push към `master` или `main` клон чрез GitHub Actions.

### Инструкции за настройка:
1. Създайте Netlify акаунт на https://netlify.com
2. Генерирайте Personal Access Token: Settings → Applications → New access token (запазете токена)
3. В GitHub хранилището си (`YOUR_USERNAME/YOUR_REPO_NAME`), добавете два secrets (Settings → Secrets and variables → Actions):
   - `NETLIFY_AUTH_TOKEN`: вашият токен от стъпка 2
   - `NETLIFY_SITE_ID`: вашият Netlify site id (намерете го в Netlify Site settings → Site information след първото разгръщане)
4. Направете push към `master` или `main` — GitHub Actions автоматично ще разгърне в Netlify! 🚀

### Намиране на вашия Live Site:
След приключване на първото разгръщане, посетете https://app.netlify.com/sites за да видите URL адреса и статуса на разгръщането.

**🇬🇧 English:**

This app is automatically deployed to Netlify on every push to `master` or `main` branch via GitHub Actions.

### Setup Instructions:
1. Create a Netlify account at https://netlify.com
2. Generate a Personal Access Token: Settings → Applications → New access token (save this)
3. In your GitHub repository (`YOUR_USERNAME/YOUR_REPO_NAME`), add two secrets (Settings → Secrets and variables → Actions):
   - `NETLIFY_AUTH_TOKEN`: your token from step 2
   - `NETLIFY_SITE_ID`: your Netlify site id (find it at Netlify Site settings → Site information after first deploy)
4. Push to `master` or `main` — GitHub Actions will auto-deploy to Netlify! 🚀

### Finding Your Live Site:
After the first deploy completes, visit https://app.netlify.com/sites to view your site URL and deployment status.

---

## ✨ Добри практики | Best Practices

**🇧🇬 Български:**
- Поддържайте чист и поддържаем код със съответно разделение на отговорностите
- Добавяйте тестове при промени и нова функционалност
- Фокус върху Gen Z: емоджи, анимации, социални елементи
- Следвайте модулната структура на проекта

**🇬🇧 English:**
- Maintain clean and maintainable code with proper separation of concerns
- Add tests when making changes or adding new functionality
- Focus on Gen Z: emojis, animations, social elements
- Follow the modular project structure

---

## 📝 License

This project is part of SoftUni's Introduction to AI Coding course.
