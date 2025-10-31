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

### Бърз старт:
1. Изпълнете `./scripts/encrypt-env.sh` за криптиране на Netlify токена с AES256
2. Добавете GitHub secrets (`NETLIFY_AUTH_TOKEN` и `NETLIFY_SITE_ID`)
3. Push към `master` или `main` — готово! 🚀

📖 **Пълни инструкции:** Вижте `NETLIFY_QUICKSTART.md` за бърз старт или `DEPLOYMENT.md` за детайлна документация.

**🇬🇧 English:**

This app is automatically deployed to Netlify on every push to `master` or `main` branch via GitHub Actions.

### Quick Start:
1. Run `./scripts/encrypt-env.sh` to encrypt Netlify token with AES256
2. Add GitHub secrets (`NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID`)
3. Push to `master` or `main` — done! 🚀

📖 **Full Instructions:** See `NETLIFY_QUICKSTART.md` for quick start or `DEPLOYMENT.md` for detailed documentation.

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
