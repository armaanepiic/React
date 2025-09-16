export default function Sidebar() {

    
  const menuItems = ["Dashboard", "Settings", "Profile", "Help"];
  const items = menuItems.map((item, index) => (
    <li key={index}>
      <button className="w-full text-left p-2 rounded-md hover:bg-opacity-80 transition-colors hover:bg-gray-200 cursor-pointer bg-gray-50 text-gray-800">
        {item}
      </button>
    </li>
  ));


  return (
    <aside className="w-64 p-4 transition-colors duration-500 bg-gray-50 text-gray-800">
      <nav>
        <h2 className="text-lg font-semibold mb-2">Menu</h2>
        <ul className="space-y-2">{items}</ul>
      </nav>
    </aside>
  );
}
