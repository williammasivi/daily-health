import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDarkMode(savedMode === 'true');
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    applyTheme(newMode);
  };

  const applyTheme = (darkMode) => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  return (
    <div className="flex items-center">
      <button
        className="text-gray-800 dark:text-white px-3 py-1 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 focus:outline-none"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
