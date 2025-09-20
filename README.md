# React Context API App

## Overview
This is a React application demonstrating the **Context API** for global state management. The app features a theme switcher and dynamic heading updates without prop drilling.

## Features
- 🌙 **Dark/Light Theme Toggle** - Switch between themes globally
- ✏️ **Dynamic Heading Updates** - Update main heading via input
- 🎨 **Responsive Design** - Clean UI with Tailwind CSS
- 🔄 **No Prop Drilling** - State shared across components using Context API

## Project Structure
```
src/
├── components/
│   ├── Header.jsx          # Top navigation with theme toggle
│   ├── MainContent.jsx     # Main content area with heading update
│   └── Sidebar.jsx         # Navigation sidebar
├── contexts/
│   └── ThemeContext.jsx    # Theme context definition
├── hooks/
│   └── useTheme.jsx        # Custom hook for theme context
├── providers/
│   └── ThemeProvider.jsx   # Theme context provider
├── App.jsx                 # Main app component
└── main.jsx               # App entry point
```

## How Context API Works in This App

### 1. Context Creation
```javascript
// contexts/ThemeContext.jsx
const ThemeContext = createContext({
  theme: "light",
  toggletheme: () => {},
});
```

### 2. Provider Setup
```javascript
// providers/ThemeProvider.jsx
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggletheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggletheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### 3. Custom Hook
```javascript
// hooks/useTheme.jsx
const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  return themeContext;
};
```

### 4. Using Context in Components
```javascript
// Any component
const { theme, toggletheme } = useTheme();
```

## Component Breakdown

### App.jsx
- Root component wrapped with `ThemeProvider`
- Renders Header, Sidebar, and MainContent
- No props passed down - all use Context

### Header.jsx
- Displays app title and theme toggle button
- Uses `useTheme()` hook to access theme state
- Theme toggle button changes globally

### MainContent.jsx
- Main content area with dynamic heading
- Local state for input value management
- Uses Context for theme styling
- Updates heading without affecting other components

### Sidebar.jsx
- Navigation menu with theme-aware styling
- Uses Context for consistent theming
- Menu items styled based on current theme

## State Management Flow

### Theme Management (Global State)
```
User clicks theme toggle
         ↓
toggletheme() called in Header
         ↓
Theme state updates in ThemeProvider
         ↓
All components re-render with new theme
```

### Heading Update (Local State)
```
User types in input
         ↓
inputValue state updates (local to MainContent)
         ↓
User clicks Update button
         ↓
heading state updates (local to MainContent)
         ↓
Only MainContent re-renders
```

## Key Concepts Demonstrated

### 1. Context API Benefits
- **No Prop Drilling**: Theme available in all components without passing props
- **Global State**: Single source of truth for theme
- **Clean Architecture**: Separation of concerns with custom hooks

### 2. State Types
- **Global State**: Theme (shared across all components)
- **Local State**: Input value and heading (component-specific)

### 3. Custom Hooks
- `useTheme()`: Abstracts Context usage
- Cleaner component code
- Reusable across components

## Styling with Context
Every component uses the theme from Context for consistent styling:

```javascript
className={clsx(
  "base-styles",
  theme === "light" && "light-specific-styles",
  theme === "dark" && "dark-specific-styles"
)}
```

## Running the App
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Technologies Used
- **React 18+** - Frontend framework
- **Context API** - State management
- **Tailwind CSS** - Styling
- **clsx** - Conditional class names
- **Vite** - Build tool

## Learning Outcomes

After studying this app, you'll understand:
- ✅ How Context API eliminates prop drilling
- ✅ Creating and using custom hooks
- ✅ Global vs local state management
- ✅ Provider pattern in React
- ✅ Dynamic theming implementation
- ✅ Clean component architecture

## Next Steps
- Add user authentication context
- Implement persistent theme storage
- Add more global states (user, settings)
- Create multiple contexts for different concerns


# useEffect with URL Synchronization

## Overview
This example demonstrates how `useEffect` can be used to synchronize React state with URL parameters using React Router's `useSearchParams` hook.

## Code Example

```javascript
import { useEffect, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { useSearchParams } from "react-router";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ ...searchParams, mode: theme });
  }, [theme]); // Only watches 'theme' changes

  const toggletheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggletheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

## When useEffect Executes

### 1. Initial Render (Component Mount)
```
ThemeProvider mounts
     ↓
theme = "light" (initial state)
     ↓
Component renders
     ↓
useEffect runs (theme dependency triggered)
     ↓
URL updates: localhost:3000/ → localhost:3000/?mode=light
```

### 2. Theme State Changes
```
User clicks theme toggle
     ↓
toggletheme() executes
     ↓
setTheme("dark") called
     ↓
Component re-renders with new theme
     ↓
useEffect runs (theme changed from "light" to "dark")
     ↓
URL updates: ?mode=light → ?mode=dark
```

## Step-by-Step Execution Flow

### Initial App Load:
```
1. ThemeProvider component mounts
2. useState initializes: theme = "light"
3. useSearchParams hook initializes
4. Component finishes first render
5. useEffect executes: setSearchParams({...searchParams, mode: "light"})
6. URL becomes: localhost:3000/?mode=light
```

### Theme Toggle Process:
```
1. User clicks theme button in Header component
2. toggletheme() function executes
3. setTheme() updates state: "light" → "dark"
4. ThemeProvider re-renders with new theme value
5. useEffect detects theme change in dependency array
6. useEffect executes: setSearchParams({...searchParams, mode: "dark"})
7. URL updates: ?mode=light → ?mode=dark
8. All consuming components re-render with new theme
```

## Dependency Array Analysis

```javascript
useEffect(() => {
  setSearchParams({ ...searchParams, mode: theme });
}, [theme]); // ← Only 'theme' in dependencies
```

### What this means:
- ✅ **Runs when**: `theme` value changes
- ✅ **Runs on mount**: Initial `theme` value triggers effect
- ❌ **Doesn't run when**: `searchParams` changes externally
- ❌ **Doesn't run when**: Other state changes

### Why not include `searchParams`?
```javascript
// ❌ Would cause infinite loop
useEffect(() => {
  setSearchParams({ ...searchParams, mode: theme });
}, [theme, searchParams]); // searchParams changes → effect runs → searchParams changes → ...
```

## Real-World Example Timeline

### Scenario: User browsing the app

```
📍 App loads
   URL: localhost:3000/
   Theme: "light"
   
   useEffect runs → URL: localhost:3000/?mode=light

📍 User clicks "🌙 Dark" button
   Theme: "light" → "dark"
   
   useEffect runs → URL: localhost:3000/?mode=dark

📍 User clicks "☀️ Light" button  
   Theme: "dark" → "light"
   
   useEffect runs → URL: localhost:3000/?mode=light

📍 User refreshes page
   URL remains: localhost:3000/?mode=light
   Theme resets to: "light" (unless you read from URL)
```

## Benefits of This Pattern

### 1. **URL State Persistence**
```javascript
// URL reflects current state
localhost:3000/?mode=dark  // User is in dark mode
localhost:3000/?mode=light // User is in light mode
```

### 2. **Shareable State**
Users can share URLs with their preferred theme:
```
Share: localhost:3000/dashboard?mode=dark
Friend opens link → automatically in dark mode
```

### 3. **Bookmark-Friendly**
```
Bookmark: localhost:3000/settings?mode=dark
Later visit → opens in dark mode
```

### 4. **Back/Forward Navigation**
Browser history includes theme changes:
```
History: 
← localhost:3000/?mode=light
← localhost:3000/?mode=dark  
← localhost:3000/?mode=light (current)
```

## Advanced: Reading from URL on Mount

To persist theme across page refreshes:

```javascript
const ThemeProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Initialize from URL if available
  const [theme, setTheme] = useState(() => {
    return searchParams.get('mode') || 'light';
  });

  useEffect(() => {
    setSearchParams({ ...searchParams, mode: theme });
  }, [theme]);

  // Rest of component...
};
```

## Common Use Cases

### 1. **Theme Persistence**
```javascript
// URL: ?mode=dark
useEffect(() => {
  setSearchParams({ ...searchParams, mode: theme });
}, [theme]);
```

### 2. **Filter States**
```javascript
// URL: ?category=electronics&sort=price
useEffect(() => {
  setSearchParams({ 
    ...searchParams, 
    category: selectedCategory,
    sort: sortOrder 
  });
}, [selectedCategory, sortOrder]);
```

### 3. **Page Settings**
```javascript
// URL: ?view=grid&size=large
useEffect(() => {
  setSearchParams({ 
    ...searchParams, 
    view: viewMode,
    size: itemSize 
  });
}, [viewMode, itemSize]);
```

## Key Takeaways

1. **useEffect runs after render** - URL updates happen after state changes
2. **Dependency array controls execution** - only runs when `theme` changes
3. **Synchronizes state with URL** - keeps application state and URL in sync
4. **Enables shareable state** - users can bookmark and share stateful URLs
5. **One-way sync** - state → URL (not URL → state in this example)

## Best Practices

### ✅ Good
```javascript
useEffect(() => {
  setSearchParams({ ...searchParams, mode: theme });
}, [theme]); // Only necessary dependencies
```

### ❌ Avoid
```javascript
useEffect(() => {
  setSearchParams({ ...searchParams, mode: theme });
}, [theme, searchParams]); // Causes infinite loop
```

### ✅ Better (with cleanup)
```javascript
useEffect(() => {
  const newParams = { ...searchParams };
  if (theme === 'light') {
    delete newParams.mode; // Remove default values
  } else {
    newParams.mode = theme;
  }
  setSearchParams(newParams);
}, [theme]);
```

This pattern is powerful for creating stateful, shareable, and persistent user experiences! 🚀