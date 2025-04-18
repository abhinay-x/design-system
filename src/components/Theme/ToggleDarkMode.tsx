import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

interface ToggleDarkModeProps {
  className?: string;
}

export const ToggleDarkMode: React.FC<ToggleDarkModeProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button
      onClick={toggleTheme}
      className={`
        bg-[var(--primary-500)] 
        hover:bg-[var(--primary-600)] 
        text-white 
        px-4 
        py-2 
        rounded-md 
        transition-colors 
        duration-200 
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2 
        focus:ring-[var(--primary-500)]
        ${className}
      `}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};
