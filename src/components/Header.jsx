import { useEffect, useState } from "react";
import { NAV_LINKS } from "../constants";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  // On load: apply saved mode
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Toggle dark mode
  const toggleTheme = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black/90 shadow-md">
      <nav className="flex items-center justify-between px-6 sm:px-12 py-5">
        <h1 className="text-3xl font-extrabold text-primary">GreenBrain</h1>

        <ul className="hidden md:flex gap-8 text-base font-semibold items-center">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            </li>
          ))}

          {/* Toggle Switch */}
          <li>
            <div className="flex items-center ml-4">
              <span className="text-xs text-gray-500 mr-2">🌞</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={darkMode}
                  onChange={toggleTheme}
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-green-500 transition duration-300"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
              </label>
              <span className="text-xs text-gray-500 ml-2">🌙</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
