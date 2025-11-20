# Crystal Resort Korat Website

A modern, bilingual (Thai + English) responsive website for Crystal Resort Korat, built with Next.js and Tailwind CSS.

## Features

- 🌐 Bilingual support (Thai/English)
- 📱 Fully responsive design
- 🎨 Modern UI with Ascott Sathorn Bangkok style
- 🗺️ Google Maps integration
- 📸 Photo gallery
- ☕ Café section
- 🏨 Room information and booking details

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: React/JavaScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## Deployment on Vercel

This project is configured for deployment on Vercel.

### Steps to Deploy:

1. **Push code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/bovornv/crystalresortwebsite.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import the repository `bovornv/crystalresortwebsite`
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Custom Domain**:
   - In Vercel project settings, go to "Domains"
   - Add `www.the-crystalresidence.com` and `the-crystalresidence.com`
   - Update DNS records as instructed by Vercel

### Environment Variables

No environment variables are required for this project.

## Project Structure

```
crystalwebsite/
├── components/          # React components
├── locales/            # Translation files (en.json, th.json)
├── pages/              # Next.js pages
├── public/             # Static assets
├── styles/              # Global styles
└── lib/                # Utility functions
```

## License

Private project for Crystal Resort Korat
