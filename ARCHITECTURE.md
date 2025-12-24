# Architecture Documentation

## Project Structure

This application follows a strict, production-ready architecture with clear separation of concerns.

### Directory Structure

```
frontend/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Header/
│   │   │   └── Header.jsx
│   │   ├── Button/
│   │   │   └── Button.jsx
│   │   └── Card/
│   │       └── Card.jsx
│   │
│   ├── pages/               # Page-level components
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   └── About/
│   │       └── About.jsx
│   │
│   ├── styles/              # All CSS files (EXTERNAL ONLY)
│   │   ├── global/
│   │   │   ├── reset.css          # * { margin: 0; padding: 0; box-sizing: border-box; }
│   │   │   └── variables.css      # CSS custom properties
│   │   ├── pages/
│   │   │   ├── home.css           # Home page: fonts & colors ONLY
│   │   │   ├── home-layout.css    # Home page: layout & spacing
│   │   │   ├── about.css          # About page: fonts & colors ONLY
│   │   │   └── about-layout.css   # About page: layout & spacing
│   │   └── components/
│   │       ├── Header.css
│   │       ├── Button.css
│   │       └── Card.css
│   │
│   ├── assets/              # Static assets
│   │   ├── fonts/
│   │   └── images/
│   │
│   ├── utils/               # Utility functions
│   ├── config/              # Configuration files
│   ├── App.jsx              # Main application component
│   └── main.jsx             # Application entry point
│
├── public/                  # Public static files
├── dist/                    # Production build output
├── .env.example             # Environment variables template
├── vite.config.js           # Vite build configuration
├── package.json
└── README.md
```

## Styling Architecture

### Core Principles

1. **ZERO Inline Styles**
   - No `style={{}}` attributes
   - No CSS-in-JS libraries
   - All styles in external `.css` files

2. **Global CSS Reset**
   - Every project starts with `reset.css`
   - Contains: `* { margin: 0; padding: 0; box-sizing: border-box; }`

3. **Page-Based Global Styles**
   - Each page has TWO CSS files:
     - `pagename.css` - Contains ONLY fonts and colors
     - `pagename-layout.css` - Contains layout, spacing, positioning

4. **Component Styles**
   - One CSS file per component
   - Imported at the top of the component file
   - Located in `src/styles/components/`

### CSS File Types

#### Global Styles
- **reset.css**: Universal reset
- **variables.css**: CSS custom properties for colors and fonts

#### Page Styles
Format: `pagename.css` and `pagename-layout.css`

**pagename.css** (ONLY fonts and colors):
```css
.page-name {
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  background-color: var(--bg-primary);
  color: var(--color-text-primary);
}
```

**pagename-layout.css** (layout and spacing):
```css
.page-main {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
}
```

#### Component Styles
Format: `ComponentName.css`

```css
.component {
  display: flex;
  padding: 20px;
  border-radius: 8px;
  /* All component-specific styles */
}
```

## Component Structure

### Component File Pattern

```jsx
// src/components/ComponentName/ComponentName.jsx
import '../../styles/components/ComponentName.css';

const ComponentName = ({ prop1, prop2 }) => {
  return (
    <div className="component-name">
      {/* Component JSX */}
    </div>
  );
};

export default ComponentName;
```

### Page File Pattern

```jsx
// src/pages/PageName/PageName.jsx
import Header from '../../components/Header/Header';
import '../../styles/pages/pagename.css';
import '../../styles/pages/pagename-layout.css';

const PageName = () => {
  return (
    <div className="page-name">
      <Header />
      <main className="page-main">
        {/* Page content */}
      </main>
    </div>
  );
};

export default PageName;
```

## CSS Variables

All colors and fonts are defined as CSS custom properties in `variables.css`:

```css
:root {
  /* Fonts */
  --font-primary: 'Inter', sans-serif;
  --font-weight-regular: 400;
  --font-weight-bold: 700;

  /* Colors */
  --color-primary: #2563eb;
  --bg-primary: #ffffff;
}
```

Usage:
```css
.element {
  font-family: var(--font-primary);
  color: var(--color-primary);
  background-color: var(--bg-primary);
}
```

## Production Build

### Build Configuration

The `vite.config.js` is optimized for production:
- Code splitting (vendor chunks)
- Minification with Terser
- Asset optimization
- Proper output structure

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### Build Output

```
dist/
├── index.html
└── assets/
    ├── index-[hash].css    # All CSS bundled
    ├── vendor-[hash].js    # React & React-DOM
    └── index-[hash].js     # Application code
```

## Best Practices

### DO

✅ Use external CSS files only
✅ Follow the folder structure strictly
✅ Use CSS variables for colors and fonts
✅ Keep page global styles minimal (fonts & colors only)
✅ Organize CSS by component/page
✅ Use semantic class names

### DON'T

❌ Use inline styles `style={{}}`
❌ Use CSS-in-JS libraries
❌ Mix layout styles in page global CSS
❌ Create CSS files next to components (use `src/styles/`)
❌ Skip the CSS reset
❌ Hard-code colors or fonts (use CSS variables)

## Adding New Features

### Adding a Component

1. Create component folder: `src/components/NewComponent/`
2. Create component file: `NewComponent.jsx`
3. Create CSS file: `src/styles/components/NewComponent.css`
4. Import CSS in component: `import '../../styles/components/NewComponent.css'`

### Adding a Page

1. Create page folder: `src/pages/NewPage/`
2. Create page file: `NewPage.jsx`
3. Create global CSS: `src/styles/pages/newpage.css` (fonts & colors only)
4. Create layout CSS: `src/styles/pages/newpage-layout.css`
5. Import both CSS files in page component
6. Add route in `App.jsx`

## Performance Considerations

- Vendor chunking reduces main bundle size
- CSS is extracted and minified
- React and ReactDOM in separate chunk for caching
- Asset hashing for cache busting
- Development server runs on port 3000 with HMR

## Deployment

The application is ready for deployment to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any CDN

Simply deploy the contents of the `dist/` folder after running `npm run build`.
