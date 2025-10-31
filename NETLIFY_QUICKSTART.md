# 🚀 Quick Start: Netlify Deployment

## Step 1: Set Up Netlify Token (Encrypted with AES256)

Run the encryption helper script:

```bash
./scripts/encrypt-env.sh
```

Choose option 3 to create a template, then:
1. Edit `.env` with your actual Netlify credentials
2. Run the script again and choose option 1 to encrypt
3. Enter a strong password (save it in your password manager!)
4. Commit the encrypted `.env.enc` file to your repository

## Step 2: Add GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these two secrets:
- `NETLIFY_AUTH_TOKEN` - Your Netlify personal access token
- `NETLIFY_SITE_ID` - Your Netlify site ID

**Get your Netlify token:**
1. Visit https://app.netlify.com/user/applications
2. Click "New access token"
3. Copy the token

**Get your Netlify Site ID:**
- Either create a new site on Netlify manually, or
- Use `netlify init` after installing `netlify-cli`

## Step 3: Deploy!

Push to the `master` or `main` branch:

```bash
git add .
git commit -m "Setup Netlify deployment 🚀"
git push origin master
```

Watch the deployment in your GitHub Actions tab!

## 📚 Full Documentation

See `DEPLOYMENT.md` for complete instructions including:
- Detailed Netlify setup
- Encryption/decryption guide
- Troubleshooting tips
- Manual deployment options

## 🔓 Decrypt .env When Needed

```bash
./scripts/encrypt-env.sh
# Choose option 2
```

---

**Security Note:** The encrypted `.env.enc` file is safe to commit. Never commit the plain `.env` file!
