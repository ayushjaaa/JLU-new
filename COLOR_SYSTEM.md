
# Color System Documentation

## How Page-Specific Colors Work

Each page has its **own unique color scheme** defined in [variables.css](src/styles/global/variables.css). Components automatically adapt to use the colors of the page they're on.

## Color Variables Structure

### Home Page (Blue Theme)
```css
--home-bg-primary: #ffffff          /* White background */
--home-bg-secondary: #f0f9ff        /* Light blue background */
--home-color-primary: #2563eb       /* Blue primary color */
--home-color-secondary: #3b82f6     /* Lighter blue */
--home-color-text-primary: #1e293b  /* Dark text */
--home-color-text-secondary: #64748b /* Gray text */
```

### About Page (Purple Theme)
```css
--about-bg-primary: #faf5ff         /* Light purple background */
--about-bg-secondary: #f3e8ff       /* Lighter purple background */
--about-color-primary: #7c3aed      /* Purple primary color */
--about-color-secondary: #8b5cf6    /* Lighter purple */
--about-color-text-primary: #1e293b /* Dark text */
--about-color-text-secondary: #64748b /* Gray text */
```

### Contact Page (Green Theme)
```css
--contact-bg-primary: #ecfdf5       /* Light green background */
--contact-bg-secondary: #d1fae5     /* Lighter green background */
--contact-color-primary: #10b981    /* Green primary color */
--contact-color-secondary: #34d399  /* Lighter green */
--contact-color-text-primary: #1e293b /* Dark text */
--contact-color-text-secondary: #64748b /* Gray text */
```

## How Components Use These Colors

Components use **CSS selectors** to check which page they're on, then apply the appropriate colors.

### Example: Button Component

The Button component changes color based on which page it's on:

```css
/* On Home Page - Blue button */
.home-page .btn-primary {
  background-color: var(--home-color-primary);
}

/* On About Page - Purple button */
.about-page .btn-primary {
  background-color: var(--about-color-primary);
}

/* On Contact Page - Green button */
.contact-page .btn-primary {
  background-color: var(--contact-color-primary);
}
```

**Result:**
- Home page: Blue buttons
- About page: Purple buttons
- Contact page: Green buttons

### Example: Header Component

The Header adapts its background and hover colors:

```css
/* Home Page - White background, blue hover */
.home-page .header {
  background-color: var(--home-bg-primary);
}
.home-page .header-nav-link:hover {
  color: var(--home-color-primary);
}

/* About Page - Purple background, purple hover */
.about-page .header {
  background-color: var(--about-bg-primary);
}
.about-page .header-nav-link:hover {
  color: var(--about-color-primary);
}
```

## Page CSS Files (Fonts & Colors Only)

Each page has a CSS file that defines ONLY fonts and colors:

### [home.css](src/styles/pages/home.css)
```css
.home-page {
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  background-color: var(--home-bg-primary);
  color: var(--home-color-text-primary);
}
```

### [about.css](src/styles/pages/about.css)
```css
.about-page {
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-regular);
  background-color: var(--about-bg-primary);
  color: var(--about-color-text-primary);
}
```

## Adding a New Page with Custom Colors

### Step 1: Add Color Variables
In [variables.css](src/styles/global/variables.css):
```css
/* NEW PAGE SPECIFIC COLORS */
--newpage-bg-primary: #fff7ed;
--newpage-bg-secondary: #ffedd5;
--newpage-color-primary: #f97316;
--newpage-color-secondary: #fb923c;
--newpage-color-text-primary: #1e293b;
--newpage-color-text-secondary: #64748b;
```

### Step 2: Create Page CSS
Create `src/styles/pages/newpage.css`:
```css
.newpage-page {
  font-family: var(--font-primary);
  background-color: var(--newpage-bg-primary);
  color: var(--newpage-color-text-primary);
}
```

### Step 3: Update Component CSS
Add page-specific styles to each component:

**Button.css:**
```css
.newpage-page .btn-primary {
  background-color: var(--newpage-color-primary);
}
```

**Header.css:**
```css
.newpage-page .header {
  background-color: var(--newpage-bg-primary);
}
```

## Benefits of This System

✅ **Each page has unique colors** - Home is blue, About is purple, Contact is green
✅ **Components automatically adapt** - Same Button component looks different on each page
✅ **Easy to maintain** - Change one variable, updates entire page
✅ **No duplicate code** - One component, multiple color schemes
✅ **Production ready** - Clean, scalable architecture

## Visual Example

```
Home Page (/):
├── Background: White (#ffffff)
├── Primary Color: Blue (#2563eb)
├── Buttons: Blue
└── Header: White with blue hover

About Page (/about):
├── Background: Light Purple (#faf5ff)
├── Primary Color: Purple (#7c3aed)
├── Buttons: Purple
└── Header: Light purple with purple hover

Contact Page (/contact):
├── Background: Light Green (#ecfdf5)
├── Primary Color: Green (#10b981)
├── Buttons: Green
└── Header: Light green with green hover
```

## Common Utility Colors

Some colors are shared across all pages:

```css
--color-success: #10b981   /* Success messages */
--color-warning: #f59e0b   /* Warning messages */
--color-error: #ef4444     /* Error messages */
--color-white: #ffffff     /* Pure white */
--color-black: #000000     /* Pure black */
```

These are used for alerts, notifications, and other UI elements that should look consistent across all pages.
