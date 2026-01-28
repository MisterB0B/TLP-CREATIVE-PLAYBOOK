# The Light Park - Dark Mode with Neon Aesthetics

A dark mode version of The Light Park website featuring a stunning black background with vibrant purple and teal neon color scheme. This design maintains the original layout structure while transforming the visual aesthetic into a modern, eye-catching neon experience.

## 🎨 Design Features

### Color Palette
- **Background**: Pure black (#000000) and dark gray (#0a0a0a)
- **Neon Purple**: 
  - Bright: #9D4EDD
  - Medium: #7B2CBF
  - Dark: #5A189A
- **Neon Teal**:
  - Bright: #06FFF0
  - Medium: #00D9FF
  - Dark: #00B4D8

### Visual Effects
- ✨ Neon glow effects on cards and buttons
- 🌟 Animated gradient text with shimmer effect
- 💫 Pulsing glow animations on hover
- 🎯 High contrast for excellent readability
- 🔄 Smooth transitions throughout

### Interactive Elements
- Hover effects on all cards with lift and glow
- Animated logo with neon glow
- Responsive mascot images with border effects
- Dynamic background gradients

## 📁 Project Structure

```
the-light-park-dark-mode/
├── index.html                    # Main HTML file
├── README.md                     # This file
├── LICENSE                       # License file
├── assets/
│   ├── css/
│   │   └── style.css            # Dark mode styles with neon effects
│   └── images/
│       ├── logo.jpg             # Main logo
│       └── generated_images/    # Area showcase images
│           ├── generated_image_*.jpg
│           └── ...
└── docs/
    └── (additional documentation if needed)
```

## 🚀 Deployment Instructions

### Option 1: GitHub Pages (Recommended)

1. **Push to GitHub Repository**
   ```bash
   # Initialize git if not already done
   git init
   git add .
   git commit -m "Initial commit: Dark mode with neon aesthetics"
   
   # Add remote repository
   git remote add origin https://github.com/your-username/the-light-park-dark-mode.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"
   - Your site will be available at: `https://your-username.github.io/the-light-park-dark-mode/`

### Option 2: Static Web Hosting

Upload the entire `the-light-park-dark-mode` folder to any static hosting service:
- Netlify (drag and drop)
- Vercel (import from GitHub)
- AWS S3 + CloudFront
- Traditional web hosting

### Option 3: Local Preview

To preview the site locally:

1. **Using Python**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   Then open: `http://localhost:8000`

2. **Using Node.js (http-server)**
   ```bash
   npx http-server -p 8000
   ```

3. **Using PHP**
   ```bash
   php -S localhost:8000
   ```

## 🎯 Key Features

### Responsive Design
- Fully responsive layout
- Optimized for desktop, tablet, and mobile
- Touch-friendly interactive elements

### Accessibility
- High contrast ratios for readability
- Focus states for keyboard navigation
- Semantic HTML structure
- ARIA-friendly color choices

### Performance
- Optimized CSS with animations
- Efficient gradient effects
- Smooth scrolling
- Fast loading times

## 📝 Customization

### Changing Colors
Edit the CSS variables in `assets/css/style.css`:

```css
:root {
    --neon-purple-bright: #9D4EDD;  /* Change purple accent */
    --neon-teal-bright: #06FFF0;     /* Change teal accent */
    --bg-black: #000000;             /* Background color */
}
```

### Adjusting Glow Effects
Modify glow intensity:

```css
/* Increase glow intensity */
.area-card:hover {
    box-shadow: 0 20px 50px rgba(157, 78, 221, 0.8);
}
```

### Animation Speed
Adjust animation timing:

```css
/* Faster shimmer animation */
@keyframes shimmer {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
}

.main-title {
    animation: shimmer 2s linear infinite; /* Changed from 3s */
}
```

## 🌐 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

The design includes mobile-specific styles:
- Adjusted font sizes for smaller screens
- Optimized grid layouts
- Touch-friendly hover effects
- Responsive image scaling

## 🎨 Design Credits

- Original design: The Light Park
- Dark mode conversion: Neon aesthetics with purple and teal color scheme
- Maintains original layout structure while transforming visual appearance

## 📄 License

See LICENSE file for details.

## 🔧 Support

For issues or questions:
- Check the code comments in `assets/css/style.css`
- Review browser console for any errors
- Ensure all image assets are properly linked

## 🚀 Quick Start

1. Clone or download this repository
2. Open `index.html` in a web browser
3. Or deploy to GitHub Pages following the instructions above

Enjoy the stunning dark mode neon experience! 🌟✨