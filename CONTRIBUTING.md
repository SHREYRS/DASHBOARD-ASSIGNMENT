# Contributing Guide

Thank you for your interest in contributing to this project! This guide will help you get started.

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone <your-fork-url>
   cd dashboard
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Start development server**
   ```bash
   npm start
   ```

## 📝 Code Style Guidelines

### JavaScript/React

- Use **functional components** with hooks
- Use **ES6+ syntax** (arrow functions, destructuring, etc.)
- Follow **React best practices**
- Use **meaningful variable names**
- Add **comments** for complex logic

### CSS

- Use **CSS variables** for theming
- Follow **BEM naming** convention where applicable
- Keep **specificity low**
- Use **mobile-first** approach
- Group related properties together

### File Naming

- Components: `PascalCase.jsx` (e.g., `Button.jsx`)
- Styles: `PascalCase.css` (e.g., `Button.css`)
- Utilities: `camelCase.js` (e.g., `formatDate.js`)
- Constants: `UPPER_SNAKE_CASE.js` (e.g., `API_ENDPOINTS.js`)

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/      # Layout components (Sidebar, TopBar, etc.)
│   ├── ui/          # Reusable UI components
│   └── charts/      # Chart components
├── pages/           # Page components
├── context/         # React context providers
├── data/            # Mock data and constants
├── styles/          # Global styles and variables
└── utils/           # Utility functions
```

## 🎨 Adding New Components

### 1. Create Component File

```jsx
// src/components/ui/NewComponent.jsx
import React from 'react';
import './NewComponent.css';

const NewComponent = ({ prop1, prop2 }) => {
  return (
    <div className="new-component">
      {/* Component content */}
    </div>
  );
};

export default NewComponent;
```

### 2. Create Styles

```css
/* src/components/ui/NewComponent.css */
.new-component {
  /* Use CSS variables */
  background-color: var(--bg-primary);
  color: var(--text-primary);
  padding: var(--space-4);
  border-radius: var(--radius-md);
}
```

### 3. Export Component

Add to `src/components/ui/index.js` if creating a barrel export:

```javascript
export { default as NewComponent } from './NewComponent';
```

## 🎭 Adding Animations

Use Framer Motion for complex animations:

```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>
```

Use CSS for simple transitions:

```css
.element {
  transition: all var(--transition-base);
}

.element:hover {
  transform: translateY(-2px);
}
```

## 🎨 Theme Support

Always use CSS variables for colors:

```css
/* ✅ Good */
.element {
  color: var(--text-primary);
  background-color: var(--bg-primary);
}

/* ❌ Bad */
.element {
  color: #1a1d1f;
  background-color: #ffffff;
}
```

## 📊 Adding Charts

1. Create chart component in `src/components/charts/`
2. Use Recharts library
3. Make it theme-aware using `useTheme` hook
4. Make it responsive with `ResponsiveContainer`

Example:

```jsx
import { useTheme } from '../../context/ThemeContext';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const MyChart = ({ data }) => {
  const { isDark } = useTheme();
  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <Bar fill={isDark ? '#60a5fa' : '#3b82f6'} />
      </BarChart>
    </ResponsiveContainer>
  );
};
```

## 🧪 Testing

Before submitting a PR:

1. **Test in both themes** (light and dark)
2. **Test on different screen sizes**
3. **Check browser console** for errors
4. **Test all interactive elements**
5. **Verify animations** are smooth

## 📱 Responsive Design

Use these breakpoints:

```css
/* Mobile first */
.element {
  /* Mobile styles */
}

/* Tablet */
@media (min-width: 768px) {
  .element {
    /* Tablet styles */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .element {
    /* Desktop styles */
  }
}

/* Large Desktop */
@media (min-width: 1200px) {
  .element {
    /* Large desktop styles */
  }
}
```

## 🔧 Common Tasks

### Adding a New Page

1. Create page component in `src/pages/`
2. Add route in `src/App.js`
3. Add navigation link in `src/components/layout/Sidebar.jsx`

### Adding Mock Data

Add to `src/data/mockData.js`:

```javascript
export const newData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];
```

### Adding CSS Variables

Add to `src/styles/variables.css`:

```css
:root {
  --new-variable: value;
}

[data-theme="dark"] {
  --new-variable: dark-value;
}
```

## 🐛 Reporting Issues

When reporting issues, please include:

- **Description** of the issue
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)
- **Browser and OS** information

## 💡 Feature Requests

When requesting features:

- **Describe the feature** clearly
- **Explain the use case**
- **Provide examples** if possible
- **Consider implementation** complexity

## 📋 Pull Request Process

1. **Create a branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow code style guidelines
   - Add comments where necessary
   - Update documentation if needed

3. **Test your changes**
   - Test in both themes
   - Test on different screen sizes
   - Check for console errors

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**
   - Provide clear description
   - Reference any related issues
   - Add screenshots if UI changes

## 📝 Commit Message Convention

Use conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add user profile page
fix: resolve theme switching bug
docs: update README with deployment instructions
style: format code with prettier
refactor: simplify chart component logic
```

## 🎯 Best Practices

1. **Keep components small** and focused
2. **Reuse existing components** when possible
3. **Use semantic HTML** for accessibility
4. **Optimize images** before adding
5. **Avoid inline styles** (use CSS classes)
6. **Test across browsers**
7. **Document complex logic**
8. **Keep dependencies minimal**

## 🤝 Code Review

All PRs will be reviewed for:

- Code quality and style
- Functionality and correctness
- Performance implications
- Accessibility considerations
- Documentation completeness

## 📚 Resources

- [React Documentation](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Recharts Documentation](https://recharts.org)
- [MDN Web Docs](https://developer.mozilla.org)

## ❓ Questions?

If you have questions:

1. Check existing documentation
2. Search closed issues
3. Open a new issue with the `question` label

---

Thank you for contributing! 🎉

