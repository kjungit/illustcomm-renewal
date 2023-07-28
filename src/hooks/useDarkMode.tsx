import React, { useEffect, useState } from "react";

export type Theme = "dark" | "light";

export default function useDarkMode(): [
  Theme,
  React.Dispatch<React.SetStateAction<Theme>>
] {
  const [theme, setTheme] = useState<Theme>(
    typeof window !== "undefined"
      ? localStorage.getItem("theme")
        ? (localStorage.getItem("theme") as "light" | "dark")
        : "light"
      : "light"
  );
  const currentTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(currentTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, currentTheme]);

  return [currentTheme, setTheme];
}
