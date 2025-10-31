# Deployment Setup Instructions

## 📋 Prerequisites

1. **Netlify Account**: Create a free account at [netlify.com](https://netlify.com)
2. **Netlify Personal Access Token**: 
   - Go to: https://app.netlify.com/user/applications
   - Click "New access token"
   - Give it a descriptive name (e.g., "GitHub Actions Deploy")
   - Copy the token immediately (you won't see it again!)

## 🔐 Storing the Netlify Token Securely

### Option 1: Using AES256 Encrypted .env (Local Development)

If you want to store your Netlify token in an encrypted `.env` file locally:

1. **Install OpenSSL** (usually pre-installed on Linux/Mac):
   ```bash
   openssl version
   ```

2. **Create a `.env` file** with your Netlify credentials:
   ```bash
   echo "NETLIFY_AUTH_TOKEN=your_actual_token_here" > .env
   echo "NETLIFY_SITE_ID=your_site_id_here" >> .env
   ```

3. **Encrypt the `.env` file** with AES256:
   ```bash
   openssl enc -aes-256-cbc -salt -in .env -out .env.enc -pbkdf2
   ```
   - Enter a strong password when prompted
   - **Store this password securely!** (e.g., password manager)

4. **Delete the plain `.env` file**:
   ```bash
   rm .env
   ```

5. **Add `.env.enc` to your repository** (the encrypted file is safe to commit):
   ```bash
   git add .env.enc
   git commit -m "Add encrypted environment variables"
   ```

6. **To decrypt when needed**:
   ```bash
   openssl enc -aes-256-cbc -d -in .env.enc -out .env -pbkdf2
   ```

### Option 2: GitHub Secrets (Required for Deployment)

**You must add these secrets to GitHub for the deployment workflow to work:**

1. Go to your GitHub repository
2. Navigate to: **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add these two secrets:

   - **Name**: `NETLIFY_AUTH_TOKEN`
     - **Value**: Your Netlify personal access token
   
   - **Name**: `NETLIFY_SITE_ID`
     - **Value**: Your Netlify site ID (see below to get it)

## 🌐 Getting Your Netlify Site ID

### Method 1: Create a New Site via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and create a new site
netlify init
```

Follow the prompts. At the end, you'll see your Site ID.

### Method 2: Create Site Manually on Netlify

1. Go to https://app.netlify.com/
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `public`
5. Click "Deploy site"
6. After creation, go to **Site settings** → **Site information**
7. Copy the **Site ID** (looks like: `abc123def-4567-89gh-ijkl-mnop12345678`)

## 🚀 Deploying

### Automatic Deployment (via GitHub Actions)

Once you've added the GitHub secrets:

1. Push to `master` or `main` branch:
   ```bash
   git add .
   git commit -m "Setup Netlify deployment"
   git push origin master
   ```

2. Go to your repository's **Actions** tab to watch the deployment
3. Once complete, your site will be live on Netlify! 🎉

### Manual Deployment (via Netlify CLI)

```bash
# Build the site
npm run build

# Deploy to Netlify
netlify deploy --prod
```

## 📁 Files Created

- `netlify.toml` - Netlify configuration
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow
- `.env.enc` - (Optional) AES256 encrypted environment variables

## 🔒 Security Notes

- ✅ **Never commit** plain `.env` files to Git
- ✅ **Always use** GitHub Secrets for CI/CD
- ✅ **Encrypted `.env.enc`** files are safe to commit (but store the password separately)
- ✅ Add `.env` to your `.gitignore` file

## 📝 .gitignore Update

Make sure your `.gitignore` includes:

```
# Environment variables
.env
.env.local
.env.*.local

# Keep encrypted version (optional)
# .env.enc
```

## 🆘 Troubleshooting

**Issue**: "NETLIFY_AUTH_TOKEN not found"
- **Solution**: Ensure you've added the secret in GitHub repository settings

**Issue**: "Site ID not found"
- **Solution**: Create the site first on Netlify and add the Site ID to GitHub secrets

**Issue**: Build fails
- **Solution**: Check that `npm run build` works locally first

## 🎯 Next Steps

After deployment:
1. Visit your Netlify dashboard to see your live URL
2. (Optional) Set up a custom domain
3. (Optional) Enable automatic SSL certificate
4. Monitor deployments in Netlify dashboard or GitHub Actions

---

Happy deploying! 🚀✨
