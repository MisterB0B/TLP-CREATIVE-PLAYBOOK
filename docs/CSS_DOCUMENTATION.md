# CSS Documentation - Dark Mode with Neon Aesthetics

## Overview
This document provides detailed information about the CSS styling used in The Light Park dark mode website. All styles are located in `assets/css/style.css`.

## Color System

### Neon Color Palette

#### Purple Tones
```css
--neon-purple-bright: #9D4EDD;  /* Bright purple for highlights */
--neon-purple-medium: #7B2CBF;  /* Medium purple for gradients */
--neon-purple-dark: #5A189A;    /* Dark purple for depth */
```

#### Teal Tones
```css
--neon-teal-bright: #06FFF0;    /* Bright teal for highlights */
--neon-teal-medium: #00D9FF;    /* Medium teal for text */
--neon-teal-dark: #00B4D8;      /* Dark teal for gradients */
```

#### Background Colors
```css
--bg-black: #000000;            /* Main background */
--bg-dark: #0a0a0a;             /* Secondary background */
--bg-card: #111111;             /* Card backgrounds */
--bg-card-hover: #1a1a1a;       /* Hover state */
```

#### Text Colors
```css
--text-white: #FFFFFF;          /* Primary text */
--text-light-gray: #E0E0E0;     /* Light emphasis */
--text-medium-gray: #B0B0B0;    /* Secondary text */
--text-dark-gray: #808080;      /* Tertiary text */
```

#### Effects
```css
--accent-glow: rgba(157, 78, 221, 0.5);  /* Purple glow */
--teal-glow: rgba(6, 255, 240, 0.5);     /* Teal glow */
--border-purple: #7B2CBF;               /* Purple borders */
--border-teal: #00D9FF;                 /* Teal borders */
```

## Layout Structure

### Container
```css
.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
}
```

### Title Slide
The main header section with the logo, title, and mascots.

**Features:**
- Gradient background
- Neon glow effects
- Animated background pulse
- Responsive layout

**Key Classes:**
- `.title-slide` - Main container
- `.title-content` - Content wrapper
- `.main-logo` - Logo image
- `.main-title` - Animated title
- `.subtitle` - Tagline
- `.mascot-section` - Mascot images container
- `.mascot-image` - Individual mascot images

### Areas Grid
Responsive grid layout for area cards.

```css
.areas-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 35px;
    margin-bottom: 60px;
}
```

### Area Cards
Individual cards for each area.

**Features:**
- Hover lift effect
- Neon glow on hover
- Gradient overlay
- Smooth transitions

**Key Classes:**
- `.area-card` - Main card container
- `.area-image` - Area showcase image
- `.area-content` - Content wrapper
- `.area-number` - Area number badge
- `.area-name` - Area title
- `.area-description` - Area description

### Footer
Website footer with branding.

**Features:**
- Gradient background
- Neon glow effects
- Animated overlay

**Key Classes:**
- `.footer` - Main footer container

## Animations

### Shimmer Effect
Applied to the main title for a flowing gradient effect.

```css
@keyframes shimmer {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
}

.main-title {
    animation: shimmer 3s linear infinite;
}
```

### Pulse Glow
Background glow effect on the title slide.

```css
@keyframes pulse-glow {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
}

.title-slide::before {
    animation: pulse-glow 4s ease-in-out infinite;
}
```

## Hover Effects

### Card Hover
```css
.area-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px var(--accent-glow);
    border-color: var(--border-teal);
}
```

### Logo Hover
```css
.main-logo:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 30px var(--neon-purple-bright)) 
            drop-shadow(0 0 10px var(--neon-teal-bright));
}
```

### Mascot Hover
```css
.mascot-image:hover {
    transform: translateY(-10px);
    border-color: var(--border-teal);
    box-shadow: 0 0 30px var(--teal-glow);
}
```

## Responsive Design

### Desktop (1024px+)
- Full grid layout
- Large font sizes
- All hover effects active

### Tablet (768px - 1024px)
- Adjusted grid columns
- Medium font sizes
- Optimized spacing

### Mobile (< 768px)
- Single column layout
- Smaller font sizes
- Touch-optimized

### Small Mobile (< 480px)
- Minimal layout
- Compact spacing
- Optimized images

## Accessibility Features

### Focus States
```css
*:focus {
    outline: 2px solid var(--neon-teal-bright);
    outline-offset: 2px;
}
```

### Selection Colors
```css
::selection {
    background: var(--neon-purple-medium);
    color: var(--text-white);
}
```

### Print Styles
High contrast printing with black text on white background.

## Customization Guide

### Changing Colors
Edit CSS variables at the top of the file:

```css
:root {
    --neon-purple-bright: #YOUR_COLOR;
    --neon-teal-bright: #YOUR_COLOR;
    --bg-black: #YOUR_COLOR;
}
```

### Adjusting Glow Intensity
Modify the `rgba()` values in glow effects:

```css
/* Stronger glow */
--accent-glow: rgba(157, 78, 221, 0.8);

/* Weaker glow */
--accent-glow: rgba(157, 78, 221, 0.2);
```

### Changing Animation Speed
Adjust duration in animation properties:

```css
/* Faster */
.main-title {
    animation: shimmer 2s linear infinite;
}

/* Slower */
.main-title {
    animation: shimmer 5s linear infinite;
}
```

### Modifying Card Spacing
Adjust grid gap:

```css
.areas-grid {
    gap: 50px;  /* Increase spacing */
}

.areas-grid {
    gap: 20px;  /* Decrease spacing */
}
```

## Performance Optimization

### CSS Features
- Uses CSS variables for easy theming
- Hardware-accelerated transforms
- Efficient gradient animations
- Smooth transitions with GPU acceleration

### Best Practices
- Minimal use of expensive filters
- Efficient animation timing
- Optimized gradient definitions
- Responsive media queries for mobile

## Browser Compatibility

### Supported Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### CSS Features Used
- CSS Variables (Custom Properties)
- CSS Grid Layout
- Flexbox
- CSS Animations
- CSS Transitions
- CSS Gradients
- Pseudo-elements

### Fallbacks
- Print styles for printing
- Basic layout without animations
- High contrast for accessibility

## Maintenance Tips

### Adding New Colors
1. Add new CSS variable to `:root`
2. Update related properties
3. Test contrast ratios
4. Verify hover states

### Adding New Animations
1. Define `@keyframes` rule
2. Apply to element with `animation` property
3. Test performance
4. Add fallback if needed

### Updating Responsive Breakpoints
1. Test on real devices
2. Adjust media queries
3. Verify font sizes
4. Check touch targets

## Troubleshooting

### Glow Effects Not Visible
- Check browser support for CSS filters
- Verify element z-index
- Ensure transparent backgrounds
- Check contrast with background

### Animations Too Fast/Slow
- Adjust animation duration
- Modify timing function
- Test on different devices
- Consider performance impact

### Mobile Layout Issues
- Check viewport meta tag
- Verify media queries
- Test on real devices
- Adjust breakpoints as needed

## Additional Resources

- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Neon Design Inspiration](https://dribbble.com/tags/neon)

## Version History

- **v1.0** - Initial dark mode conversion with neon aesthetics
  - Black background
  - Purple and teal color scheme
  - Neon glow effects
  - Responsive design
  - Accessibility features