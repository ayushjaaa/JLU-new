# CSS Variables Guide - For LLMs and Developers

## Overview

All CSS variables are centralized in **one location**:
```
src/styles/global/variables.css
```

This file contains ALL color and font variables for the entire project, organized by page.

---

## File Location

**File Path**: `src/styles/global/variables.css`

**Imported In**: `src/main.jsx`

```jsx
// src/main.jsx
import './styles/global/reset.css';
import './styles/global/variables.css';  // ← CSS variables loaded here
```

This means **all CSS variables are globally available** throughout the application.

---

## Variable Structure

### Format:
```css
:root {
  --pagename-property-descriptor: value;
}
```

### Naming Convention:
```
--{page}-{category}-{variant}
```

**Examples:**
- `--home-bg-primary` → Home page, background, primary variant
- `--home-text-accent` → Home page, text, accent color
- `--about-bg-secondary` → About page, background, secondary variant

---

## Current Variables (Home Page)

### Location in File:
Lines 14-30 in `src/styles/global/variables.css`

### Background Colors:

```css
/* Background Colors */
--home-bg-primary: #FFFFFF;        /* Main white background */
--home-bg-secondary: #F6F7F0;      /* Light beige background (for sections) */
--home-bg-dark: #21313C;           /* Dark blue/gray background (for dark sections) */
--home-bg-transparent: transparent; /* Transparent background */
```

**Usage:**
```css
.home-page {
  background-color: var(--home-bg-primary);  /* #FFFFFF */
}

.home-hero {
  background-color: var(--home-bg-dark);     /* #21313C */
}

.home-card {
  background-color: var(--home-bg-secondary); /* #F6F7F0 */
}
```

### Text Colors:

```css
/* Text Colors */
--home-text-primary: #F6F7F0;      /* Primary text (light) - Use on dark backgrounds */
--home-text-secondary: #21313C;    /* Secondary text (dark) - Use on light backgrounds */
--home-text-white: #FFFFFF;        /* White text - Use on dark/colored backgrounds */
--home-text-accent: #64B300;       /* Green accent text - Highlights, CTAs */
--home-text-paragraph: #939393;    /* Card paragraph text (lighter gray) */
--home-text-span: #6A7479;         /* Span/secondary text color */
```

**Usage:**
```css
/* On white background */
.home-page {
  background-color: var(--home-bg-primary);    /* #FFFFFF */
  color: var(--home-text-secondary);           /* #21313C - dark text */
}

.home-page p {
  color: var(--home-text-paragraph);           /* #939393 - gray */
}

.home-page span {
  color: var(--home-text-span);                /* #6A7479 */
}

.home-page .accent {
  color: var(--home-text-accent);              /* #64B300 - green */
}

/* On dark background */
.home-hero {
  background-color: var(--home-bg-dark);       /* #21313C */
  color: var(--home-text-primary);             /* #F6F7F0 - light text */
}
```

---

## Font Variables

### Location in File:
Lines 3-12 in `src/styles/global/variables.css`

### Font Families:

```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-secondary: 'Roboto', sans-serif;
```

**Usage:**
```css
.home-page {
  font-family: var(--font-primary);  /* Inter font */
}

.about-page {
  font-family: var(--font-secondary); /* Roboto font */
}
```

### Font Weights:

```css
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

**Usage:**
```css
.home-page h1 {
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);      /* 700 */
}

.home-page p {
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);   /* 400 */
}
```

---

## How to Use CSS Variables

### In CSS Files:

```css
/* Example: Hero Section */
.home-hero {
  /* Background */
  background-color: var(--home-bg-dark);

  /* Text Colors */
  color: var(--home-text-primary);

  /* Fonts */
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
}
```

### In Component Styles:

```css
/* src/styles/sections/Hero.css */
.home-hero {
  background-color: var(--home-bg-dark);    /* #21313C */
  padding: 100px 20px;
}

.home-hero h1 {
  color: var(--home-text-white);            /* #FFFFFF */
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
}

.home-hero p {
  color: var(--home-text-primary);          /* #F6F7F0 */
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
}

.home-hero .cta-text {
  color: var(--home-text-accent);           /* #64B300 - Green */
}
```

---

## Color Combinations Guide

### Combination 1: White Background (Main Page)
```css
.home-page {
  background-color: var(--home-bg-primary);    /* #FFFFFF */
  color: var(--home-text-secondary);           /* #21313C */
}

.home-page h1 {
  color: var(--home-text-secondary);           /* #21313C */
}

.home-page p {
  color: var(--home-text-paragraph);           /* #939393 */
}

.home-page span {
  color: var(--home-text-span);                /* #6A7479 */
}

.home-page .accent {
  color: var(--home-text-accent);              /* #64B300 */
}
```

### Combination 2: Dark Background Section
```css
.home-hero {
  background-color: var(--home-bg-dark);       /* #21313C */
  color: var(--home-text-primary);             /* #F6F7F0 */
}

.home-hero h1 {
  color: var(--home-text-white);               /* #FFFFFF */
}

.home-hero p {
  color: var(--home-text-primary);             /* #F6F7F0 */
}

.home-hero .accent {
  color: var(--home-text-accent);              /* #64B300 */
}
```

### Combination 3: Light Beige Section
```css
.home-features {
  background-color: var(--home-bg-secondary);  /* #F6F7F0 */
  color: var(--home-text-secondary);           /* #21313C */
}

.home-features h2 {
  color: var(--home-text-secondary);           /* #21313C */
}

.home-features p {
  color: var(--home-text-paragraph);           /* #939393 */
}
```

---

## Adding New Page Colors

### Step 1: Add Variables to `variables.css`

```css
/* src/styles/global/variables.css */

:root {
  /* ... existing variables ... */

  /* ============================================
     NEW PAGE SPECIFIC COLORS & BACKGROUNDS
     ============================================ */

  /* Background Colors */
  --newpage-bg-primary: #yourcolor;
  --newpage-bg-secondary: #yourcolor;

  /* Text Colors */
  --newpage-text-primary: #yourcolor;
  --newpage-text-secondary: #yourcolor;
  --newpage-text-accent: #yourcolor;
}
```

### Step 2: Create Page CSS File

**File**: `src/styles/pages/newpage.css`

```css
/* New Page - Fonts and Colors Only */
.newpage-page {
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  background-color: var(--newpage-bg-primary);
  color: var(--newpage-text-primary);
}

.newpage-page h1 {
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  color: var(--newpage-text-primary);
}

.newpage-page p {
  color: var(--newpage-text-secondary);
}
```

### Step 3: Use in Page Component

```jsx
// src/pages/NewPage/NewPage.jsx
import '../../styles/pages/newpage.css';

const NewPage = () => {
  return (
    <div className="newpage-page">
      <h1>New Page</h1>
      <p>Content here</p>
    </div>
  );
};
```

---

## Variable Inheritance Flow

```
1. variables.css loaded in main.jsx
   ↓
2. Variables available globally
   ↓
3. Used in:
   - Page CSS files (src/styles/pages/*.css)
   - Section CSS files (src/styles/sections/*.css)
   - Component CSS files (src/styles/components/*.css)
```

---

## Rules for LLMs

### ✅ DO:

1. **Always use CSS variables** - Never hard-code colors
   ```css
   /* ✅ GOOD */
   color: var(--home-text-accent);

   /* ❌ BAD */
   color: #64B300;
   ```

2. **Use correct page prefix** - Match variable to page
   ```css
   /* ✅ GOOD - Home page */
   .home-page {
     background-color: var(--home-bg-primary);
   }

   /* ❌ BAD - Wrong page prefix */
   .home-page {
     background-color: var(--about-bg-primary);
   }
   ```

3. **Follow naming convention** - `--page-category-variant`
   ```css
   /* ✅ GOOD */
   --home-bg-primary
   --home-text-accent

   /* ❌ BAD */
   --homeBackground
   --text-color-home
   ```

4. **Add new colors to variables.css** - Centralize all colors
   ```css
   /* ✅ GOOD - Add to variables.css */
   :root {
     --home-bg-gradient: linear-gradient(...);
   }

   /* ❌ BAD - Hard-coded in component */
   .component {
     background: linear-gradient(...);
   }
   ```

### ❌ DON'T:

1. **Don't hard-code colors** in component CSS files
2. **Don't create duplicate variables** for same color
3. **Don't use RGB/HSL** - use HEX in variables
4. **Don't skip page prefix** - always include page name

---

## Common Utility Colors

Located at lines 54-61 in `variables.css`

```css
/* Common across all pages */
--color-success: #10b981;   /* Green - success states */
--color-warning: #f59e0b;   /* Orange - warnings */
--color-error: #ef4444;     /* Red - errors */
--color-white: #ffffff;     /* Pure white */
--color-black: #000000;     /* Pure black */
```

**Usage:**
```css
.success-message {
  color: var(--color-success);
}

.error-message {
  color: var(--color-error);
}
```

---

## Quick Reference Table

| Variable | Color | Usage |
|----------|-------|-------|
| `--home-bg-primary` | `#FFFFFF` | Main page background |
| `--home-bg-secondary` | `#F6F7F0` | Section background (light beige) |
| `--home-bg-dark` | `#21313C` | Dark section background |
| `--home-text-primary` | `#F6F7F0` | Light text (on dark bg) |
| `--home-text-secondary` | `#21313C` | Dark text (on light bg) |
| `--home-text-white` | `#FFFFFF` | White text |
| `--home-text-accent` | `#64B300` | Green accent/CTA |
| `--home-text-paragraph` | `#939393` | Paragraph/body text |
| `--home-text-span` | `#6A7479` | Span/label text |

---

## Example: Complete Section

```css
/* src/styles/sections/Hero.css */

/* Hero section with dark background */
.home-hero {
  /* Background */
  background-color: var(--home-bg-dark);        /* #21313C */

  /* Layout */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px;
  text-align: center;
}

/* Hero heading */
.home-hero h1 {
  color: var(--home-text-white);                /* #FFFFFF */
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  font-size: 48px;
  margin-bottom: 20px;
}

/* Hero paragraph */
.home-hero p {
  color: var(--home-text-primary);              /* #F6F7F0 */
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  font-size: 20px;
  margin-bottom: 40px;
}

/* Hero CTA text */
.home-hero .cta {
  color: var(--home-text-accent);               /* #64B300 */
  font-weight: var(--font-weight-semibold);
}
```

---

## Summary for LLMs

**When creating CSS for this project:**

1. ✅ **Always use variables** from `src/styles/global/variables.css`
2. ✅ **Never hard-code colors** - use `var(--variable-name)`
3. ✅ **Match page prefix** - home page uses `--home-*`, about uses `--about-*`
4. ✅ **Add new colors** to `variables.css` first, then use them
5. ✅ **Follow naming** - `--{page}-{category}-{variant}`

**File locations:**
- Variables: `src/styles/global/variables.css`
- Page CSS: `src/styles/pages/{pagename}.css`
- Section CSS: `src/styles/sections/{SectionName}.css`
- Component CSS: `src/styles/components/{ComponentName}.css`

**This ensures:**
- Consistent colors across the site
- Easy theme updates (change once, updates everywhere)
- No color conflicts or duplicates
- Clear, maintainable code
