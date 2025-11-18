import { Moon, Sun } from "lucide-react";
// import { useLocation } from "react-router-dom";
import { useTheme } from "./ThemeContext";

export const ThemeToggle = () => {
  const { theme, changeTheme } = useTheme();
//   const location = useLocation();

//   const authPaths = ["/login", "/reset-password", "/Account/SSO"];

//   if (authPaths.includes(location.pathname)) {
//     return null;
//   }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    changeTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-slate-800 inline-flex items-center justify-center w-10 h-10 border border-gray-300 dark:border-slate-700 hover:bg-gray-300 dark:hover:bg-slate-700 transition-colors"
      title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      {theme === "light" ? (
        <Moon size={20} className="text-gray-700 dark:text-neutral-25" />
      ) : (
        <Sun size={20} className="text-gray-700 dark:text-neutral-25" />
      )}
    </button>
  );
};
