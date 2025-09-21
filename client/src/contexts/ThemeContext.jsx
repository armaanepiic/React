import { createContext } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggletheme: () => {},
});
export default ThemeContext;