"use client";

import { useTheme } from "next-themes";
import { FiSun } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";

const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        // <FiSun onClick={() => setTheme('light')} />
        <div
          className="text-sm font-semibold flex items-center gap-2 cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <FiSun />
          <span className="text-sm">Light Mode</span>
        </div>
      );
    } else {
      return (
        // <BsMoon onClick={() => setTheme('dark')} />
        <div
          className="text-sm font-semibold flex items-center gap-2 cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <BsMoon />
          <span className="text-sm">Dark Mode</span>
        </div>
      );
    }
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
