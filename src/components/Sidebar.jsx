import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function Sidebar() {
  const {theme} = useTheme();
  const menuItems = ["Dashboard", "Settings", "Profile", "Help"];
  const items = menuItems.map((item, index) => (
    <li key={index}>
      <button
        className={clsx(
          "w-full text-left p-2 rounded-md hover:bg-opacity-80 transition-colors bg-gray-200 cursor-pointer",
          theme === "light" &&
            "bg-gray-50 text-gray-800 hover:bg-gray-800 hover:text-gray-50",
          theme === "dark" && "bg-gray-800 text-gray-100 hover:bg-gray-50 hover:text-gray-800"
        )}
      >
        {item}
      </button>
    </li>
  ));

  return (
    <aside
      className={clsx(
        "w-64 p-4 transition-colors duration-500",
        theme === "light" && "bg-gray-50 text-gray-800",
        theme === "dark" && "bg-gray-700 text-gray-50"
      )}
    >
      <nav>
        <h2 className="text-lg font-semibold mb-2">Menu</h2>
        <ul className="space-y-2">{items}</ul>
      </nav>
    </aside>
  );
}
