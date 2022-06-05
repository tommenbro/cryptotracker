import React, { useContext } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="p-2 pr-3 bg-secondary rounded-xl w-[140px] md:w-auto font-semibold hover:bg-accent hover:text-accent">
      {theme === 'dark' ? (
        <div
          className="flex items-center cursor-pointer focus:animate-pulse ease-in-out duration-200 "
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <HiSun className="text-primary text-2xl mr-2 focus:animate-pulse ease-in-out duration-200" />{' '}
          Light Mode
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <HiMoon className="text-primary text-2xl mr-2 focus:animate-pulse ease-in-out duration-200" />{' '}
          Dark Mode
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
