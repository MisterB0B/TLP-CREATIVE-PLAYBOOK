# Deployment Guide - The Light Park Dark Mode

This comprehensive guide covers various deployment options for the dark mode version of The Light Park website.

## Table of Contents
1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [GitHub Pages Deployment](#github-pages-deployment)
3. [Netlify Deployment](#netlify-deployment)
4. [Vercel Deployment](#vercel-deployment)
5. [Traditional Web Hosting](#traditional-web-hosting)
6. [Custom Domain Setup](#custom-domain-setup)
7. [SEO Optimization](#seo-optimization)
8. [Performance Optimization](#performance-optimization)
9. [Troubleshooting](#troubleshooting)

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All files are in the correct folder structure
- [ ] Image paths are correct and images load properly
- [ ] CSS is properly linked in HTML
- [ ] Test the website locally (see Local Testing section)
- [ ] Check for broken links
- [ ] Verify responsive design on different screen sizes
- [ ] Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Ensure all animations perform smoothly
- [ ] Check contrast ratios for accessibility
- [ ] Review LICENSE file for any restrictions

## Local Testing

### Python Simple HTTP Server
```bash
# Navigate to project directory
cd the-light-park-dark-mode

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Open: http://localhost:8000

### Node.js http-server
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server -p 8000
```
Open: http://localhost:8000

### PHP Built-in Server
```bash
php -S localhost:8000
```
Open: http://localhost:8000

## GitHub Pages Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name: `the-light-park-dark-mode`
4. Choose Public or Private
5. Click "Create repository"

### Step 2: Push Files to GitHub

```bash
# Initialize git repository
cd the-light-park-dark-mode
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Dark mode with neon aesthetics"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/the-light-park-dark-mode.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"
6. Wait 1-2 minutes for deployment
7. Your site will be available at: `https://YOUR_USERNAME.github.io/the-light-park-dark-mode/`

### Step 4: Custom Domain (Optional)

1. In GitHub Pages settings, click "Custom domain"
2. Enter your domain (e.g., `thelightpark.com`)
3. Update your DNS records:
   ```
   CNAME: yourdomain.com → YOUR_USERNAME.github.io
   ```
4. Enable "Enforce HTTPS"

### GitHub Pages Features
- ✅ Free hosting
- ✅ Automatic SSL/HTTPS
- ✅ Custom domain support
- ✅ Automatic deployments from git
- ✅ Jekyll support (optional)

## Netlify Deployment

### Option 1: Drag and Drop

1. Go to [Netlify](https://netlify.com)
2. Sign up or log in
3. Drag the entire `the-light-park-dark-mode` folder into the "Sites" area
4. Netlify will deploy instantly
5. You'll get a random URL like: `https://random-name-12345.netlify.app`

### Option 2: From GitHub

1. Go to Netlify dashboard
2. Click "Add new site" → "Import from Git"
3. Connect your GitHub account
4. Select the repository
5. Configure build settings:
   - Build command: (leave empty for static sites)
   - Publish directory: (leave empty for root)
6. Click "Deploy site"

### Netlify Features
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Continuous deployment
- ✅ Custom domain support
- ✅ Form handling
- ✅ Serverless functions
- ✅ CDN distribution

### Custom Domain on Netlify

1. Go to site settings → "Domain management"
2. Click "Add custom domain"
3. Enter your domain
4. Update DNS records as instructed by Netlify
5. Enable HTTPS

## Vercel Deployment

### Option 1: CLI Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project directory
cd the-light-park-dark-mode

# Deploy
vercel

# Follow prompts
```

### Option 2: From GitHub

1. Go to [Vercel](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Select your repository
5. Configure:
   - Framework Preset: Other
   - Root Directory: (leave empty)
   - Build Command: (leave empty)
6. Click "Deploy"

### Vercel Features
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Custom domain support
- ✅ Automatic deployments
- ✅ Analytics (paid)
- ✅ Edge functions

## Traditional Web Hosting

### Shared Hosting (cPanel)

1. Purchase hosting plan (e.g., Bluehost, HostGator, GoDaddy)
2. Access cPanel dashboard
3. Open "File Manager"
4. Navigate to `public_html` or `www` folder
5. Upload all files from `the-light-park-dark-mode` folder
6. Ensure `index.html` is in the root
7. Access via: `https://yourdomain.com`

### FTP Upload

Using FileZilla or similar:

1. Get FTP credentials from hosting provider
   - Host: `yourdomain.com`
   - Username: your hosting username
   - Password: your hosting password
   - Port: 21 (usually)

2. Connect to server
3. Navigate to `public_html`
4. Upload all files
5. Verify file permissions (644 for files, 755 for folders)

### AWS S3 + CloudFront

#### Step 1: Create S3 Bucket
```bash
aws s3api create-bucket \
    --bucket the-light-park-dark-mode \
    --region us-east-1
```

#### Step 2: Upload Files
```bash
aws s3 sync . s3://the-light-park-dark-mode \
    --exclude ".git/*" \
    --exclude "node_modules/*"
```

#### Step 3: Enable Static Website Hosting
```bash
aws s3 website s3://the-light-park-dark-mode \
    --index-document index.html \
    --error-document index.html
```

#### Step 4: Create CloudFront Distribution
Use AWS Console or CLI to create CloudFront distribution pointing to S3 bucket.

#### Step 5: Set Bucket Policy
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::the-light-park-dark-mode/*"
        }
    ]
}
```

## Custom Domain Setup

### Buying a Domain

Recommended registrars:
- Namecheap
- Google Domains
- Cloudflare Registrar
- GoDaddy

### DNS Configuration

#### For GitHub Pages
```
Type: CNAME
Name: @ (or www)
Value: YOUR_USERNAME.github.io
TTL: 3600
```

#### For Netlify/Vercel
Follow platform-specific instructions in their dashboards.

### SSL Certificate

Most modern hosts provide free SSL certificates:
- GitHub Pages: Automatic
- Netlify: Automatic (Let's Encrypt)
- Vercel: Automatic
- Cloudflare: Automatic
- Traditional hosting: cPanel → Let's Encrypt

## SEO Optimization

### Meta Tags (Already in HTML)

The HTML file includes:
- Title tag
- Meta description
- Meta keywords

Verify and update as needed:

```html
<meta name="description" content="The Light Park - A Christmas Light Drive-Through Experience featuring DJ Polar Ice and Pixel Penguin">
<meta name="keywords" content="Christmas lights, drive-through, holiday experience, light park, DJ Polar Ice, Pixel Penguin">
```

### Sitemap.xml

Create `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://yourdomain.com/</loc>
        <lastmod>2024-01-28</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
</urlset>
```

### Robots.txt

Create `robots.txt`:

```txt
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

### Submit to Search Engines

- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

## Performance Optimization

### Image Optimization

Already optimized images, but you can further optimize:

```bash
# Using ImageMagick
convert image.jpg -quality 85 -resize 80% optimized.jpg

# Using squoosh (CLI)
npm install -g @squoosh/cli
squoosh-cli --output-dir optimized/ assets/images/*
```

### Enable Gzip Compression

#### For Apache (.htaccess)
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css text/javascript
</IfModule>
```

#### For Nginx
```nginx
gzip on;
gzip_types text/html text/css text/javascript;
```

### Browser Caching

#### Apache (.htaccess)
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType text/html "access plus 1 hour"
</IfModule>
```

### CDN Usage

Most modern platforms (Netlify, Vercel, Cloudflare) provide CDN automatically.

## Troubleshooting

### Images Not Loading

**Problem:** Images appear broken or don't load.

**Solutions:**
1. Check file paths in HTML
2. Verify images are in correct folders
3. Check file permissions (644)
4. Clear browser cache
5. Check browser console for errors

### Styles Not Applied

**Problem:** Website looks unstyled.

**Solutions:**
1. Verify CSS file exists: `assets/css/style.css`
2. Check HTML link tag: `<link rel="stylesheet" href="assets/css/style.css">`
3. Clear browser cache
4. Check browser console for CSS errors
5. Verify file permissions

### Deployment Failed

**Problem:** Deployment errors on hosting platform.

**Solutions:**
1. Check file size limits (some hosts have 10MB limit)
2. Verify all files uploaded successfully
3. Check build logs for specific errors
4. Ensure no special characters in filenames
5. Try deploying to a different platform

### Slow Performance

**Problem:** Website loads slowly.

**Solutions:**
1. Optimize images (see above)
2. Enable gzip compression
3. Use CDN
4. Minify CSS and HTML
5. Check for large file sizes

### Mobile Issues

**Problem:** Website doesn't look right on mobile.

**Solutions:**
1. Check viewport meta tag
2. Test on real devices (not just browser dev tools)
3. Verify media queries in CSS
4. Check touch targets
5. Test on different mobile browsers

## Post-Deployment Checklist

After deployment:

- [ ] Test the live URL
- [ ] Check all pages load correctly
- [ ] Verify images display properly
- [ ] Test responsive design on mobile
- [ ] Check SSL certificate
- [ ] Test in multiple browsers
- [ ] Verify SEO meta tags
- [ ] Submit sitemap to search engines
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Monitor for 404 errors
- [ ] Test forms if any

## Monitoring and Maintenance

### Uptime Monitoring
- UptimeRobot (free)
- Pingdom (free tier)
- StatusCake (free tier)

### Analytics
- Google Analytics (free)
- Plausible (paid, privacy-focused)
- Fathom Analytics (paid, simple)

### Regular Backups
- Keep a local copy of all files
- Use version control (git)
- Automated backups via hosting platform

### Updates
- Update content as needed
- Review and update SEO keywords
- Check for broken links regularly
- Update images if needed

## Security Best Practices

- Use HTTPS (SSL/TLS)
- Keep software updated
- Use strong passwords for hosting accounts
- Regular security audits
- Protect against XSS (already handled in static site)
- Use CSP headers (if applicable)

## Support and Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Netlify Documentation](https://docs.netlify.com)
- [Vercel Documentation](https://vercel.com/docs)
- [MDN Web Docs](https://developer.mozilla.org)
- [Stack Overflow](https://stackoverflow.com)

## Conclusion

This guide covers all major deployment options for The Light Park dark mode website. Choose the deployment method that best fits your needs and technical expertise. All options will work well with this static HTML/CSS website.

For questions or issues, refer to the troubleshooting section or consult platform-specific documentation.