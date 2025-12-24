# Production-Ready React + Vite Application

This is a production-ready React application built with Vite, following strict architectural and styling guidelines.

## Architecture Principles

### Folder Structure
```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header/
│   │   ├── Button/
│   │   └── Card/
│   ├── pages/          # Page components
│   │   ├── Home/
│   │   └── About/
│   ├── styles/         # All CSS files
│   │   ├── global/     # Global styles (reset, variables)
│   │   ├── pages/      # Page-specific styles
│   │   └── components/ # Component-specific styles
│   ├── assets/         # Images, fonts, etc.
│   ├── utils/          # Utility functions
│   ├── config/         # Configuration files
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── .env.example        # Environment variables template
├── vite.config.js      # Vite configuration
└── package.json
```

### Styling Guidelines

**Strict Rules:**
1. **External CSS Only** - No inline styles, no CSS-in-JS, no `style={{}}` attributes
2. **Global Reset** - All files start with `* { margin: 0; padding: 0; box-sizing: border-box; }`
3. **Page-Based Global Styles** - Each page has a global CSS file containing ONLY:
   - Font family and font weights
   - Color definitions
   - Background colors
4. **Component Styles** - Separate CSS files for layout, spacing, and component-specific styling
5. **CSS Variables** - All colors and fonts defined in `variables.css` using CSS custom properties

### CSS Organization

- `global/reset.css` - Global reset with `* { margin: 0; padding: 0; box-sizing: border-box; }`
- `global/variables.css` - CSS custom properties for colors and fonts
- `pages/*.css` - Page-specific font and color definitions
- `pages/*-layout.css` - Page layout and spacing
- `components/*.css` - Component-specific styles

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Application runs on `http://localhost:3000`

### Build for Production
```bash
npm run build
```
Production files are generated in the `dist/` folder

### Preview Production Build
```bash
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env` and configure your environment variables:
```bash
cp .env.example .env
```

## Production Checklist

- ✅ Clean folder structure
- ✅ External CSS only (no inline styles)
- ✅ Global CSS reset with proper box-sizing
- ✅ CSS variables for colors and fonts
- ✅ Page-based styling architecture
- ✅ Optimized Vite configuration
- ✅ Code splitting for vendor chunks
- ✅ Minification enabled
- ✅ Environment variables setup
- ✅ .gitignore configured

## Key Features

- **Zero Inline Styles** - Maintains complete separation of concerns
- **Scalable Architecture** - Easy to add new pages and components
- **Performance Optimized** - Vendor chunking and minification
- **Type-Safe** - Ready for TypeScript migration if needed
- **Production Ready** - Configured for deployment

## Adding New Components

1. Create component folder in `src/components/ComponentName/`
2. Create `ComponentName.jsx`
3. Create corresponding CSS file in `src/styles/components/ComponentName.css`
4. Import CSS in the component: `import '../../styles/components/ComponentName.css'`

## Adding New Pages

1. Create page folder in `src/pages/PageName/`
2. Create `PageName.jsx`
3. Create global styles in `src/styles/pages/pagename.css` (fonts & colors only)
4. Create layout styles in `src/styles/pages/pagename-layout.css`
5. Import both CSS files in the page component
6. Add page to router in `App.jsx`

## License

MIT
