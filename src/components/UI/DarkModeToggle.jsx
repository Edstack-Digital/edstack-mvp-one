import { useState, useEffect } from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa"; // Import icons from react-icons

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="rounded p-2 text-xl transition focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <FaRegMoon className="text-white" />
      ) : (
        <FaMoon className="text-blue-500" />
      )}
    </button>
  );
}

export default DarkModeToggle;
