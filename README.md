# THE LIGHT PARK 2026 - Creative Playbook

A comprehensive, interactive web-based creative playbook for THE LIGHT PARK 2026 season, featuring a modern dark theme with purple and teal accent colors.

## 🎨 Project Description

This project is a fully responsive, interactive HTML document that serves as a strategic roadmap for THE LIGHT PARK's 2026 holiday season. It includes detailed project management visualizations, task breakdowns, timelines, and concept visualizations.

### Key Features:
- **Interactive Navigation**: Smooth scrolling between sections
- **Project Management Visualizations**: Gantt charts, linear timelines, and task lists
- **Responsive Design**: Optimized for mobile phones (320px+), tablets (768px+), and desktops (1024px+)
- **Modern UI/UX**: Dark theme with purple and teal accent colors
- **Animations**: Smooth scroll effects and hover interactions
- **Mobile-Friendly**: Touch-optimized navigation and layouts

## 🎯 Color Palette Reference

### Background Colors
- **Primary Background**: `#000000` (Pure black)
- **Secondary Background**: `#0a0a0a` (Dark gray)
- **Card Background**: `#1a1a1a` (Lighter dark gray)
- **Hover Background**: `#222222` (Medium dark gray)

### Purple Accent Colors
- **Primary Purple**: `#8B5CF6`
- **Light Purple**: `#A78BFA`
- **Dark Purple**: `#7C3AED`
- **Purple Gradient**: `linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)`

### Teal Accent Colors
- **Primary Teal**: `#14B8A6`
- **Light Teal**: `#2DD4BF`
- **Dark Teal**: `#0D9488`
- **Teal Gradient**: `linear-gradient(135deg, #14B8A6 0%, #2DD4BF 100%)`

### Text Colors
- **Primary Text**: `#ffffff` (White)
- **Secondary Text**: `#e0e0e0` (Light gray)
- **Muted Text**: `#a0a0a0` (Medium gray)

### Priority Colors
- **High Priority**: `#EF4444` (Red)
- **Medium Priority**: `#F59E0B` (Orange)
- **Low Priority**: `#10B981` (Green)

## 📦 Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or build tools required

### Local Development

1. **Clone or Download the Repository**
   ```bash
   git clone <repository-url>
   cd The_Light_Park_2026_Update
   ```

2. **Open the Project**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the Application**
   - Navigate to `http://localhost:8000` (or your chosen port)

### File Structure
```
The_Light_Park_2026_Update/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Main stylesheet with responsive design
├── js/
│   └── main.js             # JavaScript for interactivity and animations
├── images/                 # Placeholder for images
├── assets/                 # Additional assets and resources
├── README.md               # This file
└── .gitignore              # Git ignore rules
```

## 📱 Responsive Breakpoints

The project is designed with mobile-first responsive design:

- **320px+**: Extra small devices (phones in portrait mode)
- **481px+**: Small devices (landscape phones, large phones)
- **769px+**: Medium devices (tablets, small laptops)
- **1440px+**: Large devices (desktops, large screens)

### Mobile Optimizations:
- Hamburger menu for navigation on screens < 769px
- Stacked layouts for better readability
- Touch-friendly button and link sizes
- Optimized font sizes using `clamp()` function
- Single-column layouts for TOC and concept images

## 🚀 Features & Functionality

### Navigation
- Fixed navbar with smooth scrolling
- Active link highlighting based on scroll position
- Mobile-friendly hamburger menu
- Responsive navigation links

### Visualizations
- **Gantt Chart**: Visual timeline with color-coded phases
- **Linear Timeline**: Key milestones with completion targets
- **Task Lists**: Detailed monthly breakdowns with priority indicators
- **Concept Images**: Grid layout with hover effects

### Interactivity
- Smooth scroll animations
- Hover effects on cards and navigation
- Intersection Observer for scroll-based animations
- Parallax effect on hero section
- Mobile menu toggle functionality

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Customization

### Modifying Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --purple-primary: #8B5CF6;
    --teal-primary: #14B8A6;
    /* ... other color variables */
}
```

### Adding New Content
Edit `index.html` and follow the existing structure for consistency:
- Use `<section>` tags for major content areas
- Follow the class naming conventions
- Maintain responsive design patterns

### Adjusting Responsive Breakpoints
Modify the media queries in `css/styles.css` to change breakpoint behavior:
```css
@media (max-width: 768px) {
    /* Mobile styles */
}
```

## 🔧 Dependencies

None! This project uses:
- Pure HTML5, CSS3, and JavaScript (ES6+)
- Google Fonts (Poppins & Fredoka) - loaded via CDN
- No external frameworks or libraries required

## 📄 License

This project is proprietary and confidential. All rights reserved by THE LIGHT PARK.

## 👥 Contributing

This is an internal project for THE LIGHT PARK. Contributions should follow the established design guidelines and code standards.

## 📞 Support

For questions or issues related to this project, please contact the development team.

## 🎉 Credits

- **Design**: THE LIGHT PARK Creative Team
- **Development**: SuperNinja AI Agent
- **Year**: 2026

---

**Note**: This playbook is designed for expandability. Additional months, tasks, and content can be easily added following the existing structure and styling conventions.