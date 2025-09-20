import { useEffect, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { useSearchParams } from "react-router";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [searchParamas, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ ...searchParamas, mode: theme });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

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
