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