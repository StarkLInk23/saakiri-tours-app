import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed z-50 flex h-12 w-12 items-center justify-center rounded-full 
        bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
        shadow-lg text-green-700 dark:text-yellow-300 hover:scale-105 transition-all
        bottom-24 right-5
        sm:bottom-5"
      aria-label="Cambiar tema"
    >
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
}