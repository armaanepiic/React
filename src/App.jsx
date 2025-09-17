import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"
import { useState } from "react";

import './App.css'

function App() {
  const [theme, setTheme] = useState("light");
  const toggletheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Header theme={theme} toggletheme={toggletheme}/>
      <div className="flex flex-1">
        <Sidebar theme={theme}/>
        <MainContent theme={theme}/>
      </div>
    </div>
  )
}

export default App
