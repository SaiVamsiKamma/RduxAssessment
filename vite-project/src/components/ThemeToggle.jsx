import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>
        Toggle to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
