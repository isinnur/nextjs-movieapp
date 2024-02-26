"use client";
import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

import { useState } from "react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const ThemeComp = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {mounted && themeMode === "dark" ? (
        <MdOutlineLightMode
          onClick={() => setTheme("light")}
          className="cursor-pointer"
          size={25}
        />
      ) : (
        <MdOutlineDarkMode
          onClick={() => setTheme("dark")}
          className="cursor-pointer"
          size={25}
        />
      )}
    </div>
  );
};

export default ThemeComp;
