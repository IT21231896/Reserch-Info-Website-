import { useEffect, useState } from "react";
import { NAV_LINKS } from "../constants";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black/90 shadow-md transition-colors">
      <nav className="flex items-center justify-between px-6 sm:px-12 py-5">
        <h1 className="text-3xl font-extrabold text-primary">AI-IoT Plantation</h1>

        <ul className="hidden md:flex gap-8 text-base font-semibold">
          {NAV_LINKS.map(link => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
