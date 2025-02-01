import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.theme || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  return [theme, toggleTheme];
};
export default useDarkMode;