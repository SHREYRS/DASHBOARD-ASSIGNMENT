# Deployment Guide

This guide will help you deploy the dashboard application to Vercel or Netlify.

## 🚀 Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Navigate to the dashboard directory:
```bash
cd dashboard
```

3. Run the deployment command:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **dashboard** (or your preferred name)
   - Directory? **./dashboard**
   - Override settings? **N**

5. Your app will be deployed! Vercel will provide you with a URL.

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)

3. Click "New Project"

4. Import your GitHub repository

5. Configure the project:
   - **Framework Preset**: Create React App
   - **Root Directory**: dashboard
   - **Build Command**: npm run build
   - **Output Directory**: build

6. Click "Deploy"

7. Wait for the deployment to complete

8. Your app is live! 🎉

## 🌐 Deploy to Netlify

### Option 1: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy
```

4. For production deployment:
```bash
netlify deploy --prod
```

### Option 2: Deploy via Netlify Dashboard

1. Build the project locally:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com)

3. Drag and drop the `build` folder to the Netlify dashboard

OR

1. Push your code to GitHub

2. Click "New site from Git"

3. Choose your repository

4. Configure build settings:
   - **Base directory**: dashboard
   - **Build command**: npm run build
   - **Publish directory**: dashboard/build

5. Click "Deploy site"

## 📝 Post-Deployment Checklist

- [ ] Test all pages and routes
- [ ] Verify theme switching works
- [ ] Check responsive design on mobile
- [ ] Test all interactive elements
- [ ] Verify charts render correctly
- [ ] Check browser console for errors
- [ ] Test on different browsers
- [ ] Update README with deployment URL

## 🔧 Environment Variables

If you need to add environment variables:

### Vercel
Add them in the Vercel dashboard under Settings → Environment Variables

### Netlify
Add them in the Netlify dashboard under Site settings → Build & deploy → Environment

## 🐛 Troubleshooting

### Issue: Routes not working (404 on refresh)

**Solution**: The `vercel.json` file is already configured to handle client-side routing. For Netlify, create a `_redirects` file in the `public` folder:

```
/*    /index.html   200
```

### Issue: Build fails

**Solution**: 
1. Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

2. Try building locally first:
```bash
npm run build
```

### Issue: Styles not loading

**Solution**: Check that all CSS imports are correct and files exist in the build output.

## 📊 Performance Optimization

After deployment, consider:

1. **Enable Compression**: Both Vercel and Netlify do this automatically
2. **Add CDN**: Already handled by both platforms
3. **Optimize Images**: Use WebP format and lazy loading
4. **Code Splitting**: Already implemented via React lazy loading
5. **Caching**: Configure cache headers if needed

## 🔒 Security Headers

Add security headers in `vercel.json` or Netlify's `netlify.toml`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## 📈 Analytics

To add analytics:

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Then add to your app:
```javascript
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  );
}
```

### Google Analytics
Add to `public/index.html` or use `react-ga4` package.

---

**Need Help?** Check the official documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

