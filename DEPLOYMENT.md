# Deployment Guide for Crystal Resort Korat Website

## Step 1: Push Code to GitHub

Run these commands in your terminal from the project directory:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Crystal Resort Korat website"

# Add GitHub remote
git remote add origin https://github.com/bovornv/crystalresortwebsite.git

# Push to GitHub
git branch -M main
git push -u origin main
```

If you encounter authentication issues, you may need to:
- Use a Personal Access Token instead of password
- Or set up SSH keys for GitHub

## Step 2: Deploy on Vercel

1. **Go to Vercel**: Visit [https://vercel.com](https://vercel.com)

2. **Sign In**: Sign in with your GitHub account

3. **Import Project**:
   - Click "New Project"
   - Select the repository `bovornv/crystalresortwebsite`
   - Vercel will auto-detect Next.js

4. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

5. **Environment Variables**: None required for this project

6. **Deploy**: Click "Deploy"

## Step 3: Configure Custom Domain

After deployment:

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Add `www.the-crystalresidence.com`
   - Add `the-crystalresidence.com` (without www)

2. **Update DNS Records**:
   - Go to your domain registrar (where you manage the-crystalresidence.com)
   - Add DNS records as shown in Vercel:
     - **Type**: A or CNAME
     - **Name**: @ or www
     - **Value**: Provided by Vercel
   - Wait for DNS propagation (can take up to 48 hours, usually much faster)

## Step 4: Verify Deployment

- Visit your Vercel deployment URL
- Test both English and Thai language switching
- Verify all pages load correctly
- Check mobile responsiveness

## Troubleshooting

### Build Errors
- Ensure all dependencies are in `package.json`
- Check that `node_modules` is in `.gitignore`
- Verify Next.js version compatibility

### Domain Issues
- DNS propagation can take time
- Verify DNS records are correct
- Check SSL certificate status in Vercel

### Language Switching Issues
- Verify `next.config.js` i18n settings
- Check that locale files are properly formatted JSON

## Notes

- The website uses a custom translation system with query parameters (`?locale=en` or `?locale=th`)
- The Next.js `i18n` config in `next.config.js` is present but the app uses custom routing
- If you encounter routing conflicts, you may need to adjust the i18n configuration

