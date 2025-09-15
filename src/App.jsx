import Display from "./components/Display";
import CounterButtons from "./components/CounterButtons";
import Header from "./components/Header";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // let count = 0;
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]); // Runs whenever count changes

  const increase = () => {
    setCount((count) => count + 1);
    // console.log(count);
  };
  const decrease = () => {
    setCount((count) => count - 1);
    // console.log(count);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 text-center">
      <Header />
      <Display currentCount={count} />
      <CounterButtons increment={increase} decrement={decrease} />
    </div>
  );
}

export default App;
