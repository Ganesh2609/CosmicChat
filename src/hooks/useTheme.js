import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

/**
 * Custom hook to manage theme (light/dark)
 * @returns {[string, Function]} - Current theme and theme toggle function
 */
export function useTheme() {
  // Change 'light' to 'dark' here
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  
  useEffect(() => {
    // Apply theme to document
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return [theme, toggleTheme];
}