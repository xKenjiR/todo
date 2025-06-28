import { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(localStorage.theme === "dark");

  useEffect(() => {
    localStorage.theme = darkMode ? "dark" : "light";
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="grid grid-cols-4 p-3 shadow-md mb-3">
      <h1 className="col-span-2 col-start-2 text-center font-bold text-3xl text-gray-700 dark:text-gray-200 transition-colors">
        Todo
      </h1>
      <label className="justify-end w-full inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          defaultChecked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600 transition-colors"></span>
        <span className="ml-1 font-medium text-gray-600 dark:text-gray-200">
          {darkMode ? "Dark" : "Light"}
        </span>
      </label>
    </div>
  );
};

export default Header;
