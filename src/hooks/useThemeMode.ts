import { useEffect, useState } from 'react';

export const useThemeMode = () => {
  const [themeMode, setTheme] = useState('LIGHT');

  const setMode = (mode: string) => {
    localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    themeMode === 'LIGHT' ? setMode('DARK') : setMode('LIGHT');
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return { themeMode, themeToggler };
};
