# useState Hook Process Guide

## The Problem We Discovered

```javascript
const increase = () => {
  setCount((count) => count + 1);
  console.log(count); // Shows 0 (old value)
};
```

**Question**: When clicking increment button:
- UI shows: `1` (updated value)
- Console shows: `0` (old value)

**Why does this happen?**

## useState Re-render Flow

### Step-by-Step Process

```javascript
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]); // Runs whenever count changes

  const increase = () => {
    setCount((count) => count + 1);  // ← State update is SCHEDULED here
    // Any code after setCount still runs with OLD state
  };
  // ← Function finishes executing

  // ← RE-RENDER HAPPENS HERE (after function completes)
  // ← useEffect runs here: console.log("Count updated:", count)

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 text-center">
      <Header />
      <Display currentCount={count} /> {/* ← NEW count value used here */}
      <CounterButtons increment={increase} decrement={decrease} />
    </div>
  );
}
```

### Visual Timeline

```
Click Button
     ↓
increase() function starts
     ↓
setCount(count + 1) → Schedules update
     ↓
console.log(count) → Shows OLD value (0)
     ↓
increase() function ends
     ↓
🔄 REACT RE-RENDER STARTS
     ↓
useState(0) → Returns new value (1)
     ↓
useEffect runs → console.log("Count updated:", 1)
     ↓
New JSX returned with count = 1
     ↓
UI updates showing new value
```

## Key Points

1. **Re-render happens**: After the event handler function completely finishes
2. **Not at a specific line**: The entire component function runs again
3. **useEffect timing**: Runs after the re-render is complete
4. **State update**: Is asynchronous - scheduled, not immediate

## The Answer

**Re-render happens after the `increase` function ends**, not at any specific line within the component. The entire App function gets called again with the new state value!

```
Click → increase() → setCount() schedules update → function ends
                                                      ↓
Re-render starts → useState(0) becomes useState(1) → useEffect runs → UI updates
```

## Why This Behavior Exists

React batches state updates for performance. The state update happens after the current function finishes executing, triggering a re-render with the new state value.


# useEffect Hook Basics

## What is useEffect?

`useEffect` is a React hook that lets you perform side effects in functional components. It runs **after** the component renders and can watch for specific changes.

## Basic Syntax

```javascript
useEffect(() => {
  // Side effect code here
}, [dependencies]);
```

## Our Code Example

```javascript
function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setcount2] = useState(10);

  // useEffect-1: Runs when count1 OR count2 changes
  useEffect(()=>{
    console.log("inside useEffect 1");
  }, [count1, count2])

  // useEffect-2: Runs only when count2 changes
  useEffect(()=>{
    console.log("inside useEffect 2");
  }, [count2])

  const increase = () => {
    setCount1((count1) => count1 + 1); // Changes count1
  };
  const decrease = () => {
    setcount2((count2) => count2 - 1); // Changes count2
  };
}
```

## When useEffect Runs

### Initial Render (Component Mounts)
```
Component renders first time
     ↓
useEffect 1 runs → "inside useEffect 1"
     ↓
useEffect 2 runs → "inside useEffect 2"
```

### When `increase()` is Called (count1 changes)
```
setCount1 called → count1: 0 → 1
     ↓
Component re-renders
     ↓
useEffect 1 runs → "inside useEffect 1" (because count1 changed)
     ↓
useEffect 2 does NOT run (count2 didn't change)
```

### When `decrease()` is Called (count2 changes)
```
setcount2 called → count2: 10 → 9
     ↓
Component re-renders  
     ↓
useEffect 1 runs → "inside useEffect 1" (because count2 changed)
     ↓
useEffect 2 runs → "inside useEffect 2" (because count2 changed)
```

## Dependency Array Explained

The second argument `[dependencies]` controls when useEffect runs:

### Multiple Dependencies
```javascript
useEffect(()=>{
  console.log("inside useEffect 1");
}, [count1, count2])  // Runs when count1 OR count2 changes
```

### Single Dependency
```javascript
useEffect(()=>{
  console.log("inside useEffect 2");
}, [count2])  // Runs only when count2 changes
```

### No Dependencies (runs on every render)
```javascript
useEffect(()=>{
  console.log("runs on every render");
})  // No dependency array
```

### Empty Dependencies (runs only once)
```javascript
useEffect(()=>{
  console.log("runs only once after first render");
}, [])  // Empty dependency array
```

## Execution Order

1. **Component renders** (useState returns current values)
2. **DOM updates** (UI shows new values)
3. **useEffect runs** (after DOM is updated)

```
State Change → Re-render → DOM Update → useEffect Runs
```

## Real Example Flow

### Initial Load:
```
count1: 0, count2: 10
     ↓
Console Output:
"inside useEffect 1"
"inside useEffect 2"
```

### Click increase button:
```
count1: 0 → 1, count2: 10 (unchanged)
     ↓
Console Output:
"inside useEffect 1"  (only this one runs)
```

### Click decrease button:
```
count1: 1 (unchanged), count2: 10 → 9
     ↓
Console Output:
"inside useEffect 1"  (runs because count2 is in its dependencies)
"inside useEffect 2"  (runs because count2 changed)
```

## Key Points

1. **useEffect runs AFTER render** - not during
2. **Dependencies control when it runs** - only when those values change
3. **Multiple dependencies = OR condition** - runs if ANY dependency changes
4. **Runs on initial render** - always executes once when component mounts
5. **Compares previous vs current values** - only runs if dependency actually changed

## Common Use Cases

```javascript
// API calls on component mount
useEffect(() => {
  fetchData();
}, []);

// Update document title
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);

// Cleanup timers
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Timer tick');
  }, 1000);
  
  return () => clearInterval(timer); // Cleanup function
}, []);
```

## Summary

- **useEffect = side effects after render**
- **Dependency array controls when it runs**
- **Runs after DOM updates, not before**
- **Perfect for API calls, subscriptions, timers, DOM manipulation**