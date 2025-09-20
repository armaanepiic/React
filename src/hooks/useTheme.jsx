import { useContext } from "react";
import ThemeContext from '../contexts/ThemeContext';

const useTheme = () => {
    const themeContext = useContext(ThemeContext);
    return themeContext;
}

export default useTheme;