# HeySanta Landing Page

A modern, clean landing page for HeySanta - the smart Christmas companion with AI-powered features.

## 🎄 Project Structure

```
heysanta-landingpage/
├── index.html                 # Main HTML file
├── css/
│   └── styles.css            # All CSS styles
├── js/
│   └── main.js              # JavaScript functionality
├── assets/
│   ├── videos/              # Video files (upload your Christmas background video here)
│   ├── images/              # Image files (product photos, icons, etc.)
│   └── gifs/                # GIF files (animations, demos)
├── README.md                # This file
└── LICENSE                  # License information
```

## 🎨 Design Features

### Color Palette
- **White**: `#e2ddd7` - Background and light elements
- **Red**: `#7f3e32` - Primary action color, titles
- **Cream**: `#998775` - Secondary text and accents
- **Green**: `#353f39` - Text and UI elements
- **Black**: `#2a2832` - Primary text color

### Typography
- **Archivo Black**: Used for main title "Hey Santa"
- **Roboto**: Used for all other text (clean, modern, readable)

### Key Components
- **Hero Section**: Clean, centered layout with title, subtitle, countdown, and CTAs
- **Background Video**: Full-screen video with overlay for readability
- **Countdown Timer**: Real-time countdown to August 12, 2025
- **Email Modal**: Popup for waitlist signup
- **Responsive Design**: Works on all devices

## 🚀 Features

### Interactive Elements
- **Countdown Timer**: Live countdown to launch date
- **Email Signup**: Modal with form validation
- **Button Animations**: Smooth hover and click effects
- **Scroll Indicator**: Animated scroll down indicator

### Technical Features
- **Modular Structure**: Separate CSS and JS files
- **Performance Optimized**: Preloaded resources, efficient animations
- **Mobile Responsive**: Optimized for all screen sizes
- **Accessibility**: Proper semantic HTML and ARIA labels

## 📁 Asset Guidelines

### Videos (`assets/videos/`)
- Upload your Christmas background video as `christmas-background.mp4`
- Recommended: MP4 format, 1920x1080 or higher
- Keep file size under 50MB for optimal loading

### Images (`assets/images/`)
- Product photos
- Icons and graphics
- Favicon (recommended: `favicon.ico`)

### GIFs (`assets/gifs/`)
- Product demonstrations
- Feature animations
- Interactive elements

## 🛠️ Customization

### Colors
Update the CSS variables in `css/styles.css`:
```css
:root {
    --white: #e2ddd7;
    --red: #7f3e32;
    --cream: #998775;
    --green: #353f39;
    --black: #2a2832;
}
```

### Content
- Edit text content in `index.html`
- Update countdown date in `js/main.js` (line 7)
- Replace email API endpoint in `js/main.js`

### Styling
- All styles are in `css/styles.css`
- Responsive breakpoints at 768px and 480px
- Modern CSS Grid and Flexbox layout

## 🔧 Setup Instructions

1. **Upload Video**: Place your background video in `assets/videos/christmas-background.mp4`
2. **Email Integration**: Update the API endpoint in `js/main.js` for Google Apps Script
3. **Customize Content**: Edit titles, descriptions, and countdown date as needed
4. **Test Responsiveness**: Check on different screen sizes
5. **Deploy**: Upload to your web server

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance

- Optimized CSS with minimal animations
- Efficient JavaScript with event delegation
- Preloaded critical resources
- Responsive images and videos

## 📞 Support

For customization or technical support, refer to the code comments or contact the development team.

---

**HeySanta** - *A Gift for your merriest Christmas* 🎅🎄
A landing page for the new product "Hey Santa" launching on kickstarter at 12th August
