# Home Page Color Guide

## Color Palette for Home Page

### Background Colors

| Variable | Hex Code | Usage | Example |
|----------|----------|-------|---------|
| `--home-bg-primary` | `#F6F7F0` | Light beige background | Main page background, light sections |
| `--home-bg-secondary` | `#21313C` | Dark blue/gray background | Dark sections, headers, footers |
| `--home-bg-white` | `#FFFFFF` | White background | Cards, modals, overlays |
| `--home-bg-transparent` | `transparent` | Transparent | Overlays, glass effects |

### Text Colors

| Variable | Hex Code | Usage | Example |
|----------|----------|-------|---------|
| `--home-text-light` | `#F6F7F0` | Light text | Text on dark backgrounds |
| `--home-text-dark` | `#21313C` | Dark text | Text on light backgrounds |
| `--home-text-white` | `#FFFFFF` | White text | Text on dark/colored backgrounds |
| `--home-text-accent` | `#64B300` | Green accent text | Highlights, CTAs, important text |
| `--home-text-paragraph` | `#939393` | Lighter paragraph text | Card descriptions, body text |
| `--home-text-span` | `#6A7479` | Secondary text | Spans, labels, meta information |

## Color Combinations

### Light Section (on light beige background)
```css
.light-section {
  background-color: var(--home-bg-primary);     /* #F6F7F0 */
  color: var(--home-text-dark);                 /* #21313C */
}

.light-section h1 {
  color: var(--home-text-dark);                 /* #21313C */
}

.light-section .accent {
  color: var(--home-text-accent);               /* #64B300 */
}

.light-section p {
  color: var(--home-text-paragraph);            /* #939393 */
}

.light-section span {
  color: var(--home-text-span);                 /* #6A7479 */
}
```

### Dark Section (on dark background)
```css
.dark-section {
  background-color: var(--home-bg-secondary);   /* #21313C */
  color: var(--home-text-light);                /* #F6F7F0 */
}

.dark-section h1 {
  color: var(--home-text-white);                /* #FFFFFF */
}

.dark-section .accent {
  color: var(--home-text-accent);               /* #64B300 */
}

.dark-section p {
  color: var(--home-text-light);                /* #F6F7F0 */
}
```

### Card with White Background
```css
.card {
  background-color: var(--home-bg-white);       /* #FFFFFF */
  color: var(--home-text-dark);                 /* #21313C */
}

.card h3 {
  color: var(--home-text-dark);                 /* #21313C */
}

.card p {
  color: var(--home-text-paragraph);            /* #939393 */
}

.card span {
  color: var(--home-text-span);                 /* #6A7479 */
}

.card .highlight {
  color: var(--home-text-accent);               /* #64B300 */
}
```

## Usage Examples

### Example 1: Hero Section with Dark Background
```css
/* Hero Section CSS */
.home-hero {
  background-color: var(--home-bg-secondary);   /* Dark blue/gray */
  padding: 100px 20px;
}

.home-hero h1 {
  color: var(--home-text-white);                /* White heading */
  font-size: 48px;
}

.home-hero p {
  color: var(--home-text-light);                /* Light paragraph */
  font-size: 20px;
}

.home-hero .cta-text {
  color: var(--home-text-accent);               /* Green accent */
  font-weight: bold;
}
```

### Example 2: Features Section with Light Background
```css
/* Features Section CSS */
.home-features {
  background-color: var(--home-bg-primary);     /* Light beige */
  padding: 80px 20px;
}

.home-features h2 {
  color: var(--home-text-dark);                 /* Dark heading */
  font-size: 36px;
}

.home-features .card {
  background-color: var(--home-bg-white);       /* White cards */
}

.home-features .card h3 {
  color: var(--home-text-dark);                 /* Dark title */
}

.home-features .card p {
  color: var(--home-text-paragraph);            /* Light gray text */
}

.home-features .card .label {
  color: var(--home-text-span);                 /* Secondary color */
}
```

### Example 3: Card Component
```jsx
// Card.jsx
const Card = ({ title, description, label }) => {
  return (
    <div className="card">
      <span className="card-label">{label}</span>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <span className="card-accent">Learn more</span>
    </div>
  );
};
```

```css
/* Card.css */
.home-page .card {
  background-color: var(--home-bg-white);       /* White */
  border-radius: 12px;
  padding: 24px;
}

.home-page .card-label {
  color: var(--home-text-span);                 /* #6A7479 */
  font-size: 14px;
  text-transform: uppercase;
}

.home-page .card-title {
  color: var(--home-text-dark);                 /* #21313C */
  font-size: 24px;
  margin: 12px 0;
}

.home-page .card-description {
  color: var(--home-text-paragraph);            /* #939393 */
  font-size: 16px;
  line-height: 1.6;
}

.home-page .card-accent {
  color: var(--home-text-accent);               /* #64B300 */
  font-weight: 600;
}
```

## Color Contrast & Accessibility

### Good Contrast Combinations:
✅ Dark text (`#21313C`) on light background (`#F6F7F0`)
✅ White text (`#FFFFFF`) on dark background (`#21313C`)
✅ Green accent (`#64B300`) on white background
✅ Light text (`#F6F7F0`) on dark background (`#21313C`)

### Avoid:
❌ Paragraph gray (`#939393`) on light beige - may have low contrast
❌ Span color (`#6A7479`) on dark background - use light text instead

## Quick Reference

```css
/* Copy-paste starter template */
.home-page {
  background-color: var(--home-bg-primary);     /* Light beige */
  color: var(--home-text-dark);                 /* Dark text */
}

.home-page h1,
.home-page h2 {
  color: var(--home-text-dark);                 /* #21313C */
}

.home-page p {
  color: var(--home-text-paragraph);            /* #939393 */
}

.home-page span {
  color: var(--home-text-span);                 /* #6A7479 */
}

.home-page .accent {
  color: var(--home-text-accent);               /* #64B300 - Green */
}

.home-page .dark-section {
  background-color: var(--home-bg-secondary);   /* #21313C */
  color: var(--home-text-light);                /* #F6F7F0 */
}

.home-page .card {
  background-color: var(--home-bg-white);       /* #FFFFFF */
}
```

## Color Visualization

```
Light Section (#F6F7F0):
├── Headings: #21313C (dark)
├── Paragraphs: #939393 (gray)
├── Spans: #6A7479 (blue-gray)
└── Accents: #64B300 (green)

Dark Section (#21313C):
├── Headings: #FFFFFF (white)
├── Paragraphs: #F6F7F0 (light beige)
├── Spans: #F6F7F0 (light beige)
└── Accents: #64B300 (green)

White Cards (#FFFFFF):
├── Headings: #21313C (dark)
├── Paragraphs: #939393 (gray)
├── Spans: #6A7479 (blue-gray)
└── Accents: #64B300 (green)
```

Your Home page color system is now set up and ready to use! 🎨
