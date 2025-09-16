import Display from "./components/Display";
import CounterButtons from "./components/CounterButtons";
import Header from "./components/Header";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setcount2] = useState(10);

  // useEffect-1
  useEffect(()=>{
    console.log("inside useEffect 1");
  }, [count1])

  // useEffect-2
  useEffect(()=>{
    console.log("inside useEffect 2");
  }, [count2])

  const increase = () => {
    setCount1((count1) => count1 + 1);
  };
  const decrease = () => {
    setcount2((count2) => count2 - 1);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 text-center">
      <Header />
      <Display count1={count1} count2={count2} />
      <CounterButtons increment={increase} decrement={decrease} />
    </div>
  );
}

export default App;
