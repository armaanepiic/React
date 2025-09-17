import { useState } from "react";
import ThemeContext from "../contexts/ThemeContext";

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
export default ThemeProvider;