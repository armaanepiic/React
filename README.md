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