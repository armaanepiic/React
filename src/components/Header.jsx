import { useState } from "react";



export default function Header() {
  const [theme, setTheme] = useState("light");
  const toggletheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <header className="p-4 border-b-2 transition-colors duration-300 bg-white border-gray-200 text-gray-800">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">My App</h1>
        <div className="flex items-center space-x-4">
          <span>Welcome Guest</span>
          <button onClick={toggletheme} className="px-4 py-2 rounded-lg font-medium transition-colors duration-300 cursor-pointer bg-gray-800 text-white hover:bg-gray-700">
            {(theme === 'light') ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>
    </header>
  );
}
// 🌙 Dark
// ☀️ Light
