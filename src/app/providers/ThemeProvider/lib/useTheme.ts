import { useContext } from "react";
import { Theme, ThemeContext } from "..";
import { LOCAL_STORAGE_THEME_KEY } from "../ui/ThemeContext";

interface IUseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export const useTheme = (): IUseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    
    return {
        theme,
        toggleTheme,
    }
}