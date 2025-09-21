import clsx from "clsx";
import useTheme from "../hooks/useTheme";
import { Link } from "react-router";

export default function Header() {
  const { theme, toggletheme } = useTheme();
  return (
    <header
      className={clsx(
        "p-4 border-b-2 transition-colors duration-500",
        theme === "light" && "bg-white border-gray-200 text-gray-800",
        theme === "dark" && "bg-gray-800 border-gray-600 text-white"
      )}
    >
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <Link to='/'>
          <h1  className="text-2xl font-bold">My App</h1>
        </Link>
        <div className="flex items-center space-x-4">
          <span>Welcome Guest</span>
          <button
            onClick={toggletheme}
            className={clsx(
              "px-2 py-1 rounded-full transition-colors duration-300 cursor-pointer",
              theme === "light" && "bg-gray-800 text-white hover:bg-gray-700",
              theme === "dark" && "bg-white text-gray-800 hover:bg-gray-100"
            )}
          >
            <i className={theme === "light" ? "fas fa-moon" : "fas fa-sun"}></i>
            {/* {theme === "light" ? " Dark" : " Light"} */}
          </button>
        </div>
      </div>
      <div>
    </div>
    </header>
  );
}
// 🌙 Dark
// ☀️ Light
