"use client";
import { useEffect, useState } from "react";
import { VscColorMode } from "react-icons/vsc";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check for stored theme in localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    // <button onClick={toggleTheme}>
    //   {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    // </button>
    <VscColorMode
      onClick={toggleTheme}
      size={25}
      style={{ cursor: "pointer" }}
    />
  );
};

export default ThemeToggle;
