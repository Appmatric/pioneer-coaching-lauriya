import { createContext, useContext, useEffect, useState } from "react";
 
const ThemeContext = createContext();
 
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
 
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark", "red", "blue", "green", "purple");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
    document.body.className = theme;

  }, [theme]);
 
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };
 
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
 
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(ThemeContext);
}
 